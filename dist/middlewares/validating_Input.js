"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const gm_1 = __importDefault(require("gm"));
function val(req, res) {
    const height = parseInt(req.params.height);
    const width = parseInt(req.params.width);
    const img = req.params.image;
    var check2 = true;
    var check = true;
    var arrchecked = [];
    //---------------------------------------------------------------------
    if (width <= 0) {
        console.log("width isn't right");
        check = false;
    }
    if (height <= 0) {
        console.log("height isn't right");
        check = false;
    }
    if (!fs_1.default.existsSync(`./images/${img}`)) {
        res.send('Directory not found.');
        check = false;
    }
    //-------------------------------------------------------------------
    if (fs_1.default.existsSync(`./Thumnail/${img}`)) {
        // obtain the size of an image
        const size = (0, gm_1.default)(`./Thumnail/${img}`).size(function (err, size) {
            if (!err) {
                if (size.width == width && size.height == height) {
                    console.log('the image already exists in Thumnail');
                    check2 = true;
                }
                check2 = false;
            }
        });
    }
    arrchecked.push(check);
    arrchecked.push(check2);
    return arrchecked;
}
exports.default = {
    val,
};
