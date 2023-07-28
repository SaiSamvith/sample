const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hii I am Samvith .. I am with Sai iran")
})

app.listen(3000, () => {
    console.log("server is started at http://localhost:3000/")
})