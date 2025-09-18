import mongoose from "mongoose"
import { RateLimiterMongo } from "rate-limiter-flexible"

export let rateLimiterMongo: null | RateLimiterMongo = null

const DURATION = 60
const POINTS = 10

export const initRateLimiter = (mongooseConnection: mongoose.Connection) => {
  rateLimiterMongo = new RateLimiterMongo({
    storeClient: mongooseConnection,
    points: POINTS,
    duration: DURATION
  })
}
