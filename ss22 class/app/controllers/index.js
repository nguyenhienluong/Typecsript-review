"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap");
var $ = require("jquery");
var DanhSachGhe_1 = require("../models/DanhSachGhe");
var DatVeServices_1 = require("../services/DatVeServices");
require("../asset/css/style.css");
var ThongTinDatVe_1 = require("../models/ThongTinDatVe");
//Khoi tao doi tuong chua du lieu data tra ve
// Du lieu data: Mang ghe
var dsGhe = new DanhSachGhe_1.DanhSachGhe();
var svDatVe = new DatVeServices_1.DatVeServices();
// goi phuong thuc lay du lieu tu file DanhSachGhe.json
svDatVe.LayDanhSachGhe().done(function (ketqua) {
    // Lay mang ghe tu file json gan vao mang ghe cua doi tuong dsGhe
    dsGhe.DSG = ketqua.data;
    LoadDanhSachGhe(dsGhe.DSG);
}).fail(function (error) {
    console.log(error);
});
function LoadDanhSachGhe(DSG) {
    var noiDung = "";
    var i = 1;
    for (var _i = 0, DSG_1 = DSG; _i < DSG_1.length; _i++) {
        var ghe = DSG_1[_i];
        if (ghe.TrangThai === true) {
            noiDung += "\n            <button class=\"btn ghe gheDaDat btnDatHuy distable\">" + ghe.SoGhe + "</button>\n\n        ";
        }
        else {
            noiDung += "\n        <button class=\"btn ghe btnDatHuy\">soghe =\"" + ghe.SoGhe + "\" gia =" + ghe.Gia + ">" + ghe.SoGhe + "</button>\n        ";
        }
        if (i % 4 == 0) {
            noiDung += "</br>";
        }
        i++;
        $("DanhSachGhe").html(noiDung);
    }
}
;
var thongTinDatve = new ThongTinDatVe_1.ThongTinDatVe();
$("body").delegate(".btnDatHuy", "click", function () {
    var btnGhe = $(this);
    var soGhe = btnGhe.attr("soGhe");
    var gia = btnGhe.attr("gia");
    ghe.SoGhe = soGhe;
    ghe.Gia = gia;
    // kiem tra ghe co dang duoc dat hay khong
    // neu dang dat => btn hien tai ton tai class gheDuocDat khi ng dung clich thi remove
    // Nguoc lai => btn hien tai chua co class gheDuocDat khi nguoi dung click thi add
    if (btnGhe.hasClass("gheDuocDat")) //Kiem tra dang dc dat hay ko
     {
        btnGhe.removeClass("gheDuocDat");
    }
    else {
        btnGhe.addClass("gheDuocDat");
    }
    // goi phuong thuc dat ve
    ThongTinDatVe_1.ThongTinDatVe.ThongTinNguoiDung = "I";
    ThongTinDatVe_1.ThongTinDatVe.DatVe(ghe);
    console.log(ThongTinDatVe_1.ThongTinDatVe);
});
