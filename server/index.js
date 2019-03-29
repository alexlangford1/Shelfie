const express = require("express")
require("dotenv").config()
const massive = require("massive")
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env
const pc = require("./controller")
app.use(express.json())

massive(CONNECTION_STRING)
  .then((db) => {
    app.set("db", db)
  })
  .catch((err) => console.log(err))

app.get("/api/product", pc.get)
app.post("/api/product", pc.create)
app.put("/api/product/:id", pc.update)
app.delete("/api/product/:id", pc.delete)

app.listen(SERVER_PORT, () => console.log(`killin it on ${SERVER_PORT}`))
