import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string(),
  ENVIRONMENT: z.enum(['development', 'production', 'staging']),
  BASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
