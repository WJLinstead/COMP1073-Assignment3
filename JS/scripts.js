function showId(){
    var Id = document.getElementById("nameAndNumber");
    Id.textContent = "Will Linstead - 200529417";
    

    let fName = document.getElementById('fname');
    let lName = document.getElementById('lname');
    let address = document.getElementById('address');
    let small = document.getElementById('small');
    let medium = document.getElementById('medium');
    let large = document.getElementById('large');
    let pepperoni = document.getElementById('pepperoni');
    let peppers = document.getElementById('peppers');
    let sausage = document.getElementById('sausage');
    let pineapple = document.getElementById('pineapple');
    let chicken = document.getElementById('chicken');
    let ham = document.getElementById('ham');
    let tomatoes = document.getElementById('tomatoes');



    const pizza = new PizzaOrder(fName, lName, address, small, medium, large, pepperoni, peppers, sausage, pineapple, chicken, ham, tomatoes);
}
class PizzaOrder {
    constructor (fName, lName, address, small, medium, large, pepperoni, peppers, sausage, pineapple, chicken, ham, tomatoes)   
{
    var pizzaDesc = document.getElementById("pizzaDescription");
    var toppingAmounts = 0;
    var choiceTop = 0;
    const choices = [];
    pizzaDesc.textContent = " ";
    choices[0] = fName.value;
    pizzaDesc.textContent += choices[0]+" ";
    choices[1] = lName.value;
    pizzaDesc.textContent += choices[1];
    choices[2] = address.value;
    pizzaDesc.textContent += ", ordered to the address of "+choices[2];
    if (small.checked){
        choices[3] = "small";
        pizzaDesc.textContent += " for a "+choices[3]+" size pizza with the toppings of: "
    }
    if (medium.checked){
        choices[3] = "medium";
        pizzaDesc.textContent += " for a "+choices[3]+" size pizza with the toppings of: "
    }
    if (large.checked){
        choices[3] = "large";
        pizzaDesc.textContent += " for a "+choices[3]+" size pizza with the toppings of: "
    }

    if (pepperoni.checked){
        choices[4] = "pepperoni, ";
        toppingAmounts++;
        pizzaDesc.textContent += choices[4]
    }
    if (peppers.checked){
        choiceTop = toppingAmounts+4;
        choices[choiceTop] = "peppers, ";
        toppingAmounts++;
        pizzaDesc.textContent += choices[choiceTop]
    }
    if (sausage.checked){
        choiceTop = toppingAmounts+4;
        choices[choiceTop] = "sausage, ";
        toppingAmounts++;
        pizzaDesc.textContent += choices[choiceTop]
    }
    if (pineapple.checked){
        choiceTop = toppingAmounts+4;
        choices[choiceTop] = "pineapple, ";
        toppingAmounts++;
        pizzaDesc.textContent += choices[choiceTop]
    }
    if (chicken.checked){
        choiceTop = toppingAmounts+4;
        choices[choiceTop] = "chicken, ";
        toppingAmounts++;
        pizzaDesc.textContent += choices[choiceTop]
    }
    if (ham.checked){
        choiceTop = toppingAmounts+4;
        choices[choiceTop] = "ham, ";
        toppingAmounts++;
        pizzaDesc.textContent += choices[choiceTop]
    }
    if (tomatoes.checked){
        choiceTop = toppingAmounts+4;
        choices[choiceTop] = "tomatoes";
        toppingAmounts++;
        pizzaDesc.textContent += "and " + choices[choiceTop]
    }
}
}
