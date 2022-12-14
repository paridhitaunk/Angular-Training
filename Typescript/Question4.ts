class item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(itemid:number,itemname:string,itemprice:number,category:string)
    {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category;
    }
}
var display = ()=>{
    var item1 = new item(101,"bottle",2345,"A");
    console.log(item1.itemid);
    console.log(item1.itemname);
    console.log(item1.itemprice);
    console.log(item1.category);
}
console.log(display());