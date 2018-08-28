import { Ghe } from "./Ghe";

export class DanhSachGhe {
    public DSG:Array<Ghe> = [];
    constructor() {
        
    }
    public ThemGhe(ghe:Ghe): void
    {
        this.DSG.push(ghe);
    }
    public XoaGhe(maGhe:number):void {
        for (let index in this.DSG)

            if(maGhe === this.DSG[index].SoGhe)
            {
                this.DSG.splice(Number(index),1);
            }
    }
}