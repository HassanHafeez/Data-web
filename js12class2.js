//full Expersion of a class
const Product2 = class Product{
    constructor(itemName,price,discount,productCode)
    {   
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
    Discountvalue(){
        return this.discount*this.price/100
    }
    display(){
     //console.log('Item Name: '+this.itemName)   
     console.log("Item Name: "+this.itemName+"\nPrice: "+this.price+"$\nDiscount: "+this.discount+"%\nProduct Code:"+this.productCode+"\nAfter Discount "+ this.discount+"% The Final Price of "+this.itemName +" is: "+
     ((this.Discountvalue()*this.price)/100))
     
     //console.log("Discounted Value: "+ this.Discountvalue())
    }
}

let chair1 = new Product2('Chair',499,15,'Ch010')
//console.log(chair1)
console.log(chair1.display())


// //console.log(chair1) 
//console.log("Discount "+chair1.Discountvalue()) 
// //chair1.setDiscountValue=10; //setting Values
// //console.log("Discount "+chair1.getDiscountValue)
// console.log("Discounted Value: "+chair1.Discountvalue())
