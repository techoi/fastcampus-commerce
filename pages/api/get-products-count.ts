import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProductsCount() {
  try {
    const response = await prisma.products.count()
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
  try {
    const products = await getProductsCount()
    res.status(200).json({ items: products, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }
}
