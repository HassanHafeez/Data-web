let bread1 =prompt("Enter your Fav. bread: ");
let veggie1 =prompt("Enter your Fav. veggie: ");
let sauce1 =prompt("Enter your Fav. sauce: ");

function makeSandwich(bread,veggie,sauce) 
{
    let Sandwich= bread+ " bread "+ veggie +" "+sauce+" Sandwich is ready!";
    return Sandwich;
}
let vegsandwich= makeSandwich(bread1,veggie1,sauce1);
console.log(vegsandwich);

let btn = document.querySelector('button');
btn.addEventListener('click',displaymsg);

function displaymsg(){
    //let Name=prompt("Enter the Name: ");
    btn.textContent = 'Sandwich is ready';

}
