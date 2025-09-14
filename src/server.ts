/* eslint-disable no-console */
// console.log("working now", process.env)
import app from "./app.js"
import config from "./config/config.js"

const server = app.listen(config.PORT)
;(() => {
  try {
    console.info("app started", {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL,
        ENVIRONMENT: config.ENV
      }
    })
  } catch (error) {
    console.log("Error connecting to database", {
      meta: error
    })
    server.close((error) => {
      if (error) {
        console.error("application Error", { meta: error })
      }
      process.exit(1)
    })
  }
})()

export { server }
