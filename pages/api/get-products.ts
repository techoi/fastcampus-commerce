import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProducts(skip: number, take: number, category: number) {
  const where =
    category && category !== -1
      ? {
          where: {
            category_id: category,
          },
        }
      : undefined
  try {
    const response = await prisma.products.findMany({
      skip: skip,
      take: take,
      ...where,
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { skip, take, category } = req.query
  if (skip == null || take == null) {
    res.status(400).json({ message: 'no skip or take' })
    return
  }

  try {
    const products = await getProducts(
      Number(skip),
      Number(take),
      Number(category)
    )
    res.status(200).json({ items: products, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }
}
