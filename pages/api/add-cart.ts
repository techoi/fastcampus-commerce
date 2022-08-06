import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart, PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function addCart(userId: string, item: Omit<Cart, 'id' | 'userId'>) {
  try {
    const response = await prisma.cart.create({
      data: {
        userId,
        ...item,
      },
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
  const session = await unstable_getServerSession(req, res, authOptions)
  const { item } = JSON.parse(req.body)
  if (session == null) {
    res.status(200).json({ items: [], message: 'no Session' })
    return
  }
  try {
    const wishlist = await addCart(String(session.id), item)
    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }
}
