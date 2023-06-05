import { NextFunction, Request, Response } from 'express'

export function errorHandling(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    })
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  })
}
