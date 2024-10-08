"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la req.body a json
var PORT = 3000;
app.get('/ping', function (_req, res) {
    console.log('someone pinged here!');
    res.send('pong');
});
app.listen(PORT, function () {
    console.log('server running on port ' + PORT);
});
