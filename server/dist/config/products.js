"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getProducts = (consumption) => {
    const calcProductA = (5 * 12 + consumption * 22) / 100;
    let calcProductB;
    if (consumption <= 4000) {
        calcProductB = 800;
    }
    else {
        const extraCost = (consumption - 4000) * 30 / 100;
        calcProductB = 800 + extraCost;
    }
    const products = [
        {
            annualCost: Math.trunc(calcProductA),
            name: "basic electricity tariff",
            product: "Product A"
        },
        {
            annualCost: Math.trunc(calcProductB),
            name: "Packaged tariff",
            product: "Product B"
        }
    ];
    const sortList = products.sort((a, b) => {
        return a.annualCost - b.annualCost;
    });
    return sortList;
};
exports.default = getProducts;
//# sourceMappingURL=products.js.map