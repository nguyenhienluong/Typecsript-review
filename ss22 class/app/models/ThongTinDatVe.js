"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DanhSachGhe_1 = require("../models/DanhSachGhe");
var ThongTinDatVe = /** @class */ (function () {
    function ThongTinDatVe() {
        this.DanhSachGhe = new DanhSachGhe_1.DanhSachGhe();
    }
    ThongTinDatVe.prototype.DatVe = function (ghe) {
        // them 1 doi tuong vao doi tuong danh sach ghe
        if (ghe.TrangThai) {
            this.DanhSachGhe.ThemGhe(ghe);
        }
        else {
            this.DanhSachGhe.XoaGhe(ghe.XoaGhe);
        }
    };
    ThongTinDatVe.prototype.TinhTien = function () {
        var TongTien = 0;
        for (var _i = 0, _a = this.DanhSachGhe.DSG; _i < _a.length; _i++) {
            var ghe = _a[_i];
            TongTien += ghe.Gia;
        }
        return TongTien;
    };
    return ThongTinDatVe;
}());
exports.ThongTinDatVe = ThongTinDatVe;
