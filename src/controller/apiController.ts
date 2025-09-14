import type { NextFunction, Request, Response } from "express"
import httpResponse from "../util/httpResponse.js"
import responseMessage from "../constants/responseMessage.js"
import httpError from "../util/httpError.js"

const self = (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error("This is an error")
    httpResponse(req, res, 200, responseMessage.SUCCESS)
  } catch (error) {
    httpError(next, error, req, 500)
  }
}

export { self }
