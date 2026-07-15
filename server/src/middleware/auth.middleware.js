import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const requireAuth = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    throw ApiError.unauthorized('Missing bearer token')
  }
  const token = header.slice('Bearer '.length)
  try {
    const payload = jwt.verify(token, env.jwtSecret)
    req.user = payload
    next()
  } catch {
    throw ApiError.unauthorized('Invalid or expired token')
  }
})

export const requireRole =
  (...roles) =>
  (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw ApiError.forbidden('Insufficient role')
    }
    next()
  }
