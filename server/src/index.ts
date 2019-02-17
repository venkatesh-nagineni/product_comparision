import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = 3006;

// list of products defined and calculated based on consumption in products.ts file
import getProducts from "../config/products";

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `serverrr started at http://localhost:${ port }` );
});

// products api
app.post("/getProducts", (req, res) => {
    try {
        const consumption = req.body.consumption;
        // calling getProducts method with consuption provided by user (returns products array with calculation)
        const products = getProducts(consumption);
        res.status(200).json({success: true, product: products});
    } catch (error) {
        res.status(400).json({success: false, message: "Something went wrong"});
    }
});
