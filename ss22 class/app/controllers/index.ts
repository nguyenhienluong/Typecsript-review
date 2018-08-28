
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as $ from 'jquery';
import {Ghe} from '../models/Ghe';
import {DanhSachGhe} from '../models/DanhSachGhe';
import {DatVeServices} from '../services/DatVeServices';
import '../asset/css/style.css';
import { ThongTinDatVe } from '../models/ThongTinDatVe';

//Khoi tao doi tuong chua du lieu data tra ve
// Du lieu data: Mang ghe
let dsGhe:DanhSachGhe = new DanhSachGhe();
let svDatVe:DatVeServices = new DatVeServices();
// goi phuong thuc lay du lieu tu file DanhSachGhe.json
svDatVe.LayDanhSachGhe().done(function (ketqua) {
    // Lay mang ghe tu file json gan vao mang ghe cua doi tuong dsGhe
    dsGhe.DSG = ketqua.data;
    LoadDanhSachGhe(dsGhe.DSG);
}).fail(function(error) {
    console.log(error);
})

function LoadDanhSachGhe(DSG) 
{
    let noiDung = "";
    let i: number = 1;
    for (let ghe of DSG) 
    {
        if(ghe.TrangThai === true) 
        {
        noiDung +=`
            <button class="btn ghe gheDaDat btnDatHuy distable">${ghe.SoGhe}</button>

        `;
         } else
          {
        noiDung +=`
        <button class="btn ghe btnDatHuy">soghe ="${ghe.SoGhe}" gia =${ghe.Gia}>${ghe.SoGhe}</button>
        `;
         }
        if (i % 4 == 0)
         {
             noiDung +="</br>";
         }
         i++;
        $("DanhSachGhe").html(noiDung);
    }
};

let thongTinDatve:ThongTinDatVe = new ThongTinDatVe();


$("body").delegate(".btnDatHuy","click",function() {
    var btnGhe = $(this);
    let soGhe = btnGhe.attr("soGhe");
    let gia = btnGhe.attr("gia");
    ghe.SoGhe = soGhe;
    ghe.Gia = gia;
    // kiem tra ghe co dang duoc dat hay khong
    // neu dang dat => btn hien tai ton tai class gheDuocDat khi ng dung clich thi remove
    // Nguoc lai => btn hien tai chua co class gheDuocDat khi nguoi dung click thi add


    if(btnGhe.hasClass("gheDuocDat")) //Kiem tra dang dc dat hay ko
    {
        btnGhe.removeClass("gheDuocDat");
    } else
    {
        btnGhe.addClass("gheDuocDat");
    }
    // goi phuong thuc dat ve
    ThongTinDatVe.ThongTinNguoiDung = "I";
    ThongTinDatVe.DatVe(ghe);
    console.log(ThongTinDatVe);
})
function LoadThongTinDatVe()
