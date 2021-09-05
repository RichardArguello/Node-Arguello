import express from "express"
import morgan from "morgan"
import pkg from "../package.json"

const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my Products API",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author
    })
})


export default app;