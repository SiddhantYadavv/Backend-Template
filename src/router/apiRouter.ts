import { Router } from "express"
import { health, self } from "../controller/apiController.js"

const router = Router()

router.route("/self").get(self)
router.route("/health").get(health)

export default router
