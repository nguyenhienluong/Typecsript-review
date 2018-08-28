import {DanhSachGhe} from '../models/DanhSachGhe';
import {Ghe} from '../models/Ghe';

export class ThongTinDatVe {
    public ThongTinNguoiDung: String;
    public DanhSachGhe: DanhSachGhe;
    constructor() {
        this.DanhSachGhe = new DanhSachGhe();
    }
    public DatVe(ghe:Ghe)
    {
        // them 1 doi tuong vao doi tuong danh sach ghe
        if(ghe.TrangThai)
    {
        this.DanhSachGhe.ThemGhe(ghe);
    } else {
        this.DanhSachGhe.XoaGhe(ghe.SoGhe);

    }
    }
    public TinhTien() {
        let TongTien = 0;
        for( let ghe of this.DanhSachGhe.DSG)
        {
            TongTien +=ghe.Gia;
        }
        return TongTien;
    }
}