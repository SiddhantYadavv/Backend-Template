import type { NextFunction, Request } from "express"
import errorObject from "./errorObject.js"

 
export default (
  nextFunc: NextFunction,
  err: Error | unknown,
  req: Request,
  errorStatusCode: number = 500
): void => {
  const errorObj = errorObject(err, req, errorStatusCode)
  return nextFunc(errorObj)
}
