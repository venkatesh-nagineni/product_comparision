"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("../config/products"));
exports.test = (req, res) => {
    try {
        const consumption = req.body.consumption;
        // calling getProducts method with consuption provided by user (returns products array with calculation)
        const products = products_1.default(consumption);
        res.status(200).json({ success: true, allProducts: products });
    }
    catch (error) {
        res.status(400).json({ success: false, message: "Something went wrong" });
    }
};
//# sourceMappingURL=routes.js.map