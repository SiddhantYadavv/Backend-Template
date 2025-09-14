import { Router } from "express"
import { self } from "../controller/apiController.js"

const router = Router()

router.route("/self").get(self)

export default router
