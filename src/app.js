import express from "express"
import morgan from "morgan"
import pkg from "../package.json"

const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my Products API",

    })
})


export default app;