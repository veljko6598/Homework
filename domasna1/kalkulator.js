let number1 = 10, number2 = 5, result = 0;
let sign = "-";

// if (sign === "+"){
//     result = number1 + number2;
//     console.log(result);
// }
// if (sign === "-"){
//     result = number1 - number2;
//     console.log(result);
// }
// if (sign === "*"){
//     result = number1 * number2;
//     console.log(result);
// }
// if (sign === "/"){
//     result = number1 / number2;
//     console.log(result);
// }
// if (sign === "%"){
//     result = number1 % number2;
//     console.log(result);
// }
// if (sign !== "+" && sign !== "-" && sign !== "*" && sign !== "/" && sign !== "%") {
//     console.log("unexpected sign");
// }

switch (sign){
    case "+" :{
    result = number1 + number2;
    console.log(result);
    break
}
    case "-" :{
    result = number1 - number2;
    console.log(result);
    break
}
case "*" :{
    result = number1 * number2;
    console.log(result);
    break
}
case "/" :{
    result = number1 / number2;
    console.log(result);
    break
}
case "%" :{
    result = number1 % number2;
    console.log(result);
    break
}
default: {
    console.log("unexpected sign");

}
}