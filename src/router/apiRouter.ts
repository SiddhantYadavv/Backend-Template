import { Router } from "express"
import { health, self } from "../controller/apiController.js"
import rateLimiterMd from "../middleware/rateLimiterMd.js"

const router = Router()

router.route("/self").get(rateLimiterMd, self)
router.route("/health").get(health)

export default router
