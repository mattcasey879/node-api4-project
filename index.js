require("dotenv").config()
const server = require("./server")
const port = process.env.PORT

server.listen(port || 5000, () => {
    console.log(`server running on //localhost:${port || 5000}`)
})