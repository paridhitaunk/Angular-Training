var item = /** @class */ (function () {
    function item(itemid, itemname, itemprice, category) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return item;
}());
var display = function () {
    var item1 = new item(101, "bottle", 2345, "A");
    console.log(item1.itemid);
    console.log(item1.itemname);
    console.log(item1.itemprice);
    console.log(item1.category);
};
console.log(display());
