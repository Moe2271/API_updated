"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const sharp_1 = __importDefault(require("../utils/sharp"));
const validating_Input_1 = __importDefault(require("../middlewares/validating_Input"));
const fs_1 = __importDefault(require("fs"));
const routes = express_1.default.Router();
if (!fs_1.default.existsSync('./Thumnail')) {
    fs_1.default.mkdirSync('./Thumnail');
}
routes.get('/:height/:width/:image', (req, res) => {
    //for the first part of the validation
    if (!validating_Input_1.default.val(req, res)[0]) {
        express_1.response.send('wrong input');
    }
    else {
        //secound part of the validation
        if (!validating_Input_1.default.val(req, res)[1]) {
            res.sendFile(`Thumnail/${req.params.image}`, { root: './' });
        }
        else {
            (0, sharp_1.default)(req, res);
        }
    }
});
exports.default = routes;
