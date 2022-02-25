import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 4000

const products = [
  {
    "name": "Xbox one",
    "description": "console for gameplay imersive"
  },
  {
    "name": "Playstation 5",
    "description": "Discover a new generation of amazing PlayStation games"
  }
]

app.get("/products", (request, response) => {
  response.json(products || [])
})

app.listen(port, () => console.log(`Server is running on PORT ${port}`))