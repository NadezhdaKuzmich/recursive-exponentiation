function pow(num, degree) {
    if (degree == 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(2, 10));

// another way to write the condition :
// function pow(num, degree) {
//     return (degree == 1) 
//     ? num 
//     : num * pow(num, degree - 1);
// }

// console.log(pow(2, 10));