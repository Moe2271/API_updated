"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
function resize(req, res) {
    const height1 = parseInt(req.params.height);
    const width1 = parseInt(req.params.width);
    const img = req.params.image;
    (0, sharp_1.default)(`./images/${img}`)
        .resize({ width: width1 })
        .resize({ height: height1 })
        .toFile(`./Thumnail/${img}`)
        .then((data) => {
        res.sendFile(`Thumnail/${img}`, { root: './' });
    })
        .catch((err) => {
        console.log(err);
    });
}
exports.default = resize;
