// How to create a Class
// ("Item Name: "+itemName+"\nPrice: "+price+"$\nDiscount: "+discount+"%\nProduct Code:"+productCode)
class Product{

    constructor(itemName,price,discount,productCode)
    {   
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
}
let Laptop= new Product('Hp',20000,2,'hp1080')
console.log(Laptop)

//Class Expersion
const Product1 = class Product{
    constructor(itemName,price,discount,productCode)
    {   
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
}
let chair = new Product1('Chair',200,20,'Ch010')
console.log(chair)

//Getter and Setter
const Product2 = class Product{
    constructor(itemName,price,discount,productCode)
    {   
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(value){
         this.discount=value;
    }
    Discountvalue(){
        return this.discount*this.price/100
    }
}
let chair1 = new Product2('Chair',499,15,'Ch010')
//console.log(chair1) 
console.log("Discount "+chair1.getDiscountValue) 
//chair1.setDiscountValue=10; //setting Values
//console.log("Discount "+chair1.getDiscountValue)
console.log("Discounted Value: "+chair1.Discountvalue())

