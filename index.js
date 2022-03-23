/*Сложение*/
function sumfunction(x, y){
    const result = x + y;
    console.log(result);
}
sumfunction (4,6);

/*Вычитание*/
const subfunction = function (c, d){
    const result = c - d;
    console.log(result);
}
subfunction(10, 5);


/*Умножение*/
const multifunction = (a , b) => {
    const result = a * b;
    console.log(result);
}
multifunction(2, 2);


/*Деление*/
const divfunction = (f, g) => {
    const result = f / g;
    console.log(result);
}
divfunction(36, 6);

/*Взятие остатка от деления*/
function remainsfunction(q, w){
    const result = q % w;
    console.log(result);
}
remainsfunction(1284, 5);

/*Больше*/
const more = function (num1, num2){
    const result = num1 > num2;
    console.log(result);
}
more(9, 7);

/*Меньше*/
const less = (x, y) => {
    const result = x < y;
    console.log(result);
}
less( 98, 64);

/*Больше или равно*/
function moreequally(a,b){
    const result = a >= b;
    console.log(result);
}
moreequally( 4, 8);


/*Меньше или равно*/
const lessequally = (r, t) => {
    const result = r <= t;
    console.log(result);
}
lessequally(42, 889);

/*Строгое стравнение*/
const strict = function (c, d){
    const result = c === d;
    console.log(result)
}
strict('4', 4);


/*Не строгое стравнение*/
const notstrict = function (a, b){
    const result = a !== b;
    console.log(result);
}
notstrict(6, '6');
