import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getOrderBy } from '../../constants/products'

const prisma = new PrismaClient()

async function getProducts({
  skip,
  take,
  category,
  orderBy,
  contains,
}: {
  skip: number
  take: number
  category: number
  orderBy: string
  contains: string
}) {
  const containsCondition =
    contains && contains !== ''
      ? {
          name: { contains: contains },
        }
      : undefined
  const where =
    category && category !== -1
      ? {
          category_id: category,
          ...containsCondition,
        }
      : containsCondition
      ? containsCondition
      : undefined

  const orderByCondition = getOrderBy(orderBy)

  try {
    const response = await prisma.products.findMany({
      skip: skip,
      take: take,
      ...orderByCondition,
      where: where,
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
  const { skip, take, category, orderBy, contains } = req.query
  if (skip == null || take == null) {
    res.status(400).json({ message: 'no skip or take' })
    return
  }

  try {
    const products = await getProducts({
      skip: Number(skip),
      take: Number(take),
      category: Number(category),
      orderBy: String(orderBy),
      contains: contains ? String(contains) : '',
    })

    res.status(200).json({ items: products, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }
}
