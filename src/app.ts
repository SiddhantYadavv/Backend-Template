import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response
} from "express"
import path from "path"
import { fileURLToPath } from "url"
import router from "./router/apiRouter.js"
import globalErrorHandler from "./middleware/globalErrorHandler.js"
import responseMessage from "./constants/responseMessage.js"
import httpError from "./util/httpError.js"
// import helmet from "helmet"
import cors from "cors"

const app: Application = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// app.use(helmet())
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
    origin: ["https://client.com"],
    credentials: true
  })
)
app.use(express.json())
app.use(express.static(path.join(__dirname, "../", "public")))

app.use("/api/v1", router)

//404 handler
app.use((req: Request, _: Response, next: NextFunction) => {
  try {
    throw new Error(responseMessage.NOT_FOUND("Route"))
  } catch (error) {
    httpError(next, error, req, 404)
  }
})

//global error handler middleware
app.use(globalErrorHandler)

export default app
