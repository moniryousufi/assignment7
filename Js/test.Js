// part one, Login and Access control

let username= prompt('Enter your username (admin or user)');
let password= prompt ('Enter your password');
if ((username==="admin" ||username==="user") && password=== "1234"){
    var role= username;
    var securityLevel= username==="admine" ? "hight": "low"
}
else {
    alert('your user name or password is wrong.')
    throw  "Access Denied"
}

//part 2, coffee shop order calculator
let name= prompt ("What's your name?")
let age= parseInt(prompt(" How old are you?"))
let coffee= prompt("choose your coffee: Espresso, Latte, Cappuccino") //.toLowerCase();
let pricePerCup= 0;
switch(coffee) {
    case "Espresso":
        pricePerCup= 2.5
        break;
    case "Latte":
        pricePerCup= 3.5
        break;
    case "Cappuccino":
        pricePerCup= 4.0
        break;
    default:
        alert("Invalid coffee type selected.")
        throw "Invalid coffee type"
}

let quantity= parseInt(prompt("How many cups do you want?"));
let Originaltotal= pricePerCup*quantity;
let discount= 0;
if (age< 18 || age>60 ){
    discount= total*0.1
}
let Finaltotal= Originaltotal-discount




//part 3, bill splitter with tip

let splitCount= parseInt(prompt("How many people are splitter the bill? (1, 2 or 3)"))
let tipPercent= parseInt(prompt( "What tip percentage? (0, 5, 10 or 15)"))

let tipAmount= Finaltotal*(tipPercent/100);
let totalWithTip= Finaltotal+tipAmount;
let prePerson= totalWithTip/ splitCount;

alert (
    `Hello ${name}!
    you ordered ${quantity} ${coffee}.
    Original  total: $${Originaltotal.toFixed(2)}
    Discount: $${discount.toFixed(2)}
    Tip: $${tipAmount.toFixed(2)}
    Total with Tip: $${totalWithTip.toFixed(2)}
    split between ${splitCount} people: $${prePerson.toFixed(2)} 
    each person pays: $${prePerson.toFixed(2)} 
    User Role: ${role}
    Security Level: ${securityLevel}`
)


