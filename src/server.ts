 
import app from "./app.js"
import config from "./config/config.js"
import logger from "./util/logger.js"

const server = app.listen(config.PORT)
;(() => {
  try {
    logger.info("app started", {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL,
        ENVIRONMENT: config.ENV
      }
    })
  } catch (error) {
    logger.log("Error connecting to database", {
      meta: error
    })
    server.close((error) => {
      if (error) {
        logger.error("application Error", { meta: error })
      }
      process.exit(1)
    })
  }
})()

export { server }
