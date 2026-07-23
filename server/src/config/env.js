import 'dotenv/config'

const required = ['DATABASE_URL', 'JWT_SECRET']
for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`)
  }
}

// A short/weak secret makes every session forgeable offline — role/residentId/staffId
// are trusted straight off the signed JWT payload, so this is the app's actual root of trust.
const MIN_JWT_SECRET_LENGTH = 32
if (process.env.JWT_SECRET.length < MIN_JWT_SECRET_LENGTH) {
  throw new Error(`JWT_SECRET must be at least ${MIN_JWT_SECRET_LENGTH} characters (got ${process.env.JWT_SECRET.length}).`)
}

const isProd = process.env.NODE_ENV === 'production'

// Without this key, forgotPassword/change-email links only ever get console-logged —
// in production that's silent, permanent lockout for anyone who forgets their password.
if (isProd && !process.env.RESEND_API_KEY) {
  console.warn(
    '[env] RESEND_API_KEY is not set in production — password-reset and email-change links will only be logged to the server console, never delivered.',
  )
}

// Fail closed: no wildcard default. Unset CORS_ORIGIN => [] (only same-origin allowed,
// which never triggers CORS anyway). Cross-origin access requires an explicit allowlist.
const corsOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean)

export const env = {
  isProd,
  port: Number(process.env.PORT) || 4000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  corsOrigins,
  // Base URL of the frontend, used to build password-reset links.
  appUrl: process.env.APP_URL || corsOrigins[0] || 'http://localhost:3000',
  // Email delivery (Resend). Without a key, mail is logged to the console only.
  resendApiKey: process.env.RESEND_API_KEY || '',
  // Must be a Resend-verified domain in production. The shared sandbox sender
  // (onboarding@resend.dev) only delivers to your own Resend account email.
  mailFrom: process.env.MAIL_FROM || 'StayFlow <onboarding@resend.dev>',
}
