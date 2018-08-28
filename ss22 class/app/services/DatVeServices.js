"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var DatVeServices = /** @class */ (function () {
    function DatVeServices() {
    }
    DatVeServices.prototype.LayDanhSachGhe = function () {
        return $.ajax({
            url: '../assets/data/DanhSachGhe.json',
            type: 'GET'
        });
    };
    return DatVeServices;
}());
exports.DatVeServices = DatVeServices;
