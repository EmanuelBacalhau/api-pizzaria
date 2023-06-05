import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface PayloadJWT {
  sub: string
}

export function isAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization as string

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token]: string[] = authToken.split(' ')

  const JWT_SECRET: string = process.env.JWT_SECRET as string

  try {
    const { sub } = verify(token, JWT_SECRET) as PayloadJWT

    req.userId = sub

    return next()
  } catch (err) {
    return res.status(401).end()
  }
}
