

function sum() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    let converted1 = parseInt(number1);
    let converted2 = parseInt(number2);

    let summation = converted1 + converted2;
    let subtraction = converted1 - converted2;
    let multiplication = converted1 * converted2;
    let division = converted1 / converted2;

    document.getElementById('summation').innerHTML = "The result is=" + summation;
    document.getElementById('subtraction').innerHTML = "The result is=" + subtraction;
    document.getElementById('mul').innerHTML = "The multiplication is=" + multiplication;
    document.getElementById('div').innerHTML = "The division is=" + division;

}

sum();


//age

function age() {
    let old1 = document.getElementById('old1').value;
    let converted3 = parseInt(old1);
    if (converted3 > 17) 
        { document.getElementById('eligible').innerHTML = "The Person is eligible for voting!"  
        document.getElementById('uneligible').innerHTML = ""}

    else
    { document.getElementById('uneligible').innerHTML = "The Person isn't eligible for voting!"  
    document.getElementById('eligible').innerHTML = ""}
}

age();
