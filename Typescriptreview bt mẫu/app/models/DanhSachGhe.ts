import { Ghe } from "./Ghe";

export class DanhSachGhe{
    public DSG:Array<Ghe> = [];
    constructor(){

    }
    public ThemGhe(ghe:Ghe):void
    {
        this.DSG.push(ghe);
    }
    public XoaGhe(soGhe:number):void{
        for(let index in this.DSG){
            //Nếu số ghế truyền vào == với số ghế trong mảng thì xóa ghế
            if(soGhe === this.DSG[index].SoGhe)
            {
                this.DSG.splice(Number(index),1);
            }
        }
    }
}