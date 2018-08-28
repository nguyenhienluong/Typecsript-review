import * as $ from 'jquery';
export class DatVeServices{
    constructor(){

    }
    public LayDanhSachGhe():any{
        return $.ajax({
            url:'../assets/data/DanhSachGhe.json',
            type:'GET'
        });
    }
}