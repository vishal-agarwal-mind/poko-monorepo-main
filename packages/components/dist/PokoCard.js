"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PokoCard = function (_a) {
    var pokeMon = _a.pokeMon;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null,
            "Name: ",
            pokeMon.name.toUpperCase())));
};
exports.default = PokoCard;
