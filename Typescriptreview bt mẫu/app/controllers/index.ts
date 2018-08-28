import * as $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Ghe } from '../models/Ghe';
import { DanhSachGhe } from '../models/DanhSachGhe';
import { DatVeServices } from '../services/DatVeServices';
import '../assets/css/style.css';
import { ThongTinDatVe } from '../models/ThongTinDatVe';
//Khởi tạo đối tượng chứa dữ liệu data trả về
//Dữ liệu data: Mảng ghế
let dsGhe: DanhSachGhe = new DanhSachGhe();
let svDatVe: DatVeServices = new DatVeServices();
//Gọi phương thức lấy dữ liệu từ file DanhSachGhe.json
svDatVe.LayDanhSachGhe().done(function (ketqua) {
    //Lấy mảng ghế từ file json gán vào mảng ghế của đối tượng dsGhe
    dsGhe.DSG = ketqua.data;
    //gọi hàm load danh sách ghế lên giao diện
    LoadDanhSachGhe(dsGhe.DSG);
}).fail(function (error) {
    console.log(error);
})

function LoadDanhSachGhe(DSG) {

    let noiDung: string = "";
    let i: number = 1;
    for (let ghe of DSG) {
        if (ghe.TrangThai === true) {
            noiDung += `
                <button type="button" class="btn ghe gheDaDat btnDatHuy"  disabled >${ghe.SoGhe}</button>
            `;
        } else {
            noiDung += `
                <button type="button" class="btn ghe btnDatHuy" soghe="${ghe.SoGhe}" gia="${ghe.Gia}" >${ghe.SoGhe}</button>
            `;
        }
        if (i % 4 == 0) {
            noiDung += "<br />";
        }
        i++;
    }

    $("#DanhSachGhe").html(noiDung);
};

let thongTinDatVe:ThongTinDatVe = new ThongTinDatVe();
$("body").delegate(".btnDatHuy","click",function(){
    var btnGhe = $(this);
    //Lấy ra số ghế và giá của button được đặt
    let soGhe = btnGhe.attr("soghe");
    let gia = btnGhe.attr("gia");
    let ghe:Ghe = new Ghe();
    ghe.SoGhe = soGhe;
    ghe.Gia = gia;
    //Kiểm tra xem ghế đó có đang được đặt hay không
    //Nếu đang đặt => btn Hiện tại tồn tại class gheDuocDat khi người dùng click thì remove
    //Ngược lại => btn Hiện tại chưa có class gheDuocDat khi người dùng click thì add class đó vào
   if(btnGhe.hasClass("gheDuocDat")) 
   {
       //Hủy
       ghe.TrangThai = false;
       btnGhe.removeClass("gheDuocDat");      
   }else
   {
       //Đặt
       ghe.TrangThai = true;
       btnGhe.addClass("gheDuocDat");
   }
   //gọi phương thức đặt vé
   thongTinDatVe.ThongTinNguoiDung = "khải";
   thongTinDatVe.DatVe(ghe);
   console.log(thongTinDatVe);
   LoadThongTinDatVe();
});

function LoadThongTinDatVe()
{
    let soGhe = thongTinDatVe.DanhSachGhe.DSG.length;
    let noiDung = "";
    for(let ghe of thongTinDatVe.DanhSachGhe.DSG) //Danh sách ghế mà người dùng đã đặt
    {
        noiDung += `
            <span>
                Ghế: số ${ghe.SoGhe} - ${ghe.Gia} $
                <a class="btnHuyVe" href="#" style="color:red;">[Hủy]</a>
            </span> <br />
        `;
    }
    noiDung += `
        <hr />
        Tổng tiền: ${thongTinDatVe.TinhTien().toLocaleString()}
    `;
    $("#TieuDeDSGDaDat").html(soGhe);
    $("#ThongTinDatVe").html(noiDung);
}