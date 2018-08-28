"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DanhSachGhe = /** @class */ (function () {
    function DanhSachGhe() {
        this.DSG = [];
    }
    DanhSachGhe.prototype.ThemGhe = function (ghe) {
        this.DSG.push(ghe);
    };
    DanhSachGhe.prototype.XoaGhe = function (maGhe) {
        for (var index in this.DSG)
            if (maGhe === this.DSG[index].SoGhe) {
                this.DSG.splice(Number(index), 1);
            }
    };
    return DanhSachGhe;
}());
exports.DanhSachGhe = DanhSachGhe;
