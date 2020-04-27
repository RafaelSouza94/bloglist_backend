const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require("./utils/config")
const blogsRouter = require("./controllers/blogs")
const logger = require("./utils/logger")

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {   // eslint-disable-line no-unused-vars
        logger.info("Connected to MongoDB")
    })
    .catch((error) => {
        logger.error("Error connecting to MongoDB: ", error.message)
    })

app.use(cors())
app.use(express.json())
app.use("/api/blogs", blogsRouter)

module.exports = app