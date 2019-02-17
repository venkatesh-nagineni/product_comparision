"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
const port = 3006;
// list of products defined and calculated based on consumption in products.ts file
const products_1 = __importDefault(require("../config/products"));
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`serverrr started at http://localhost:${port}`);
});
// products api
app.post("/getProducts", (req, res) => {
    try {
        const consumption = req.body.consumption;
        // calling getProducts method with consuption provided by user (returns products array with calculation)
        const products = products_1.default(consumption);
        res.status(200).json({ success: true, product: products });
    }
    catch (error) {
        res.status(400).json({ success: false, message: "Something went wrong" });
    }
});
//# sourceMappingURL=index.js.map