import { DanhSachGhe } from './DanhSachGhe';
import { Ghe } from './Ghe';

export class ThongTinDatVe {
    public ThongTinNguoiDung: string;
    public DanhSachGhe: DanhSachGhe;
    constructor() {
        this.DanhSachGhe = new DanhSachGhe();
    }
    public DatVe(ghe: Ghe) {
        //Thêm hoặc hủy đối tượng ghế trong DanhSachGhe
        if (ghe.TrangThai) {
            this.DanhSachGhe.ThemGhe(ghe);
        } else {
            this.DanhSachGhe.XoaGhe(ghe.SoGhe);
        }
    }
    public TinhTien(): number {
        let tongTien:number = 0;
        for (let ghe of this.DanhSachGhe.DSG) {
            tongTien += Number(ghe.Gia);
        }
        return tongTien;
    }
}