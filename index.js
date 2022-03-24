/*Сложение*/
function sumdeclaration(x, y){
    return x + y;
}
const sumexpression = function (x, y){
    return x + y;
}
const sumarrow = ( x, y) => {
    return  x + y;
}
console.log(sumdeclaration (4,6));


/*Вычитание*/
function subdeclaration (c, d){
    return c - d;
}
const subexpression = function (c, d){
    return c - d;
}
const subarrow= (c, d) => {
    return c-d;
}
console.log( subexpression (10, 5));


/*Умножение*/
function multideclaration (a, b) {
    return a * b;
}
const multiexpression = function (a, b){
    return a * b;
}
const multiarrow = (a , b) => {
    return a * b;
}
console.log(multiarrow (2, 2));


/*Деление*/
function divdeclaration(f, g){
    return f / g;
}
const divfexpression= function (f, g){
    return f / g;
}
const divarrow = (f, g) => {
    return f / g;
}
console.log(divdeclaration(36, 6));


/*Взятие остатка от деления*/
function remainsdeclaration(q, w){
    return q % w;
}
const remainsexpression = function (q, w){
    return q % w;
}
const remainsarrow = (q, w) => {
    return q % w;
}
console.log(remainsexpression(1284, 5)); 


/*Больше*/
function moredeclaration (num1, num2){
    return num1 > num2;
}
const moreexpression = function (num1, num2){
    return num1 > num2;
}
const morearrow = (num1, num2) =>{
    return num1 > num2;
}
console.log(morearrow(9, 7));


/*Меньше*/
function lessdeclaration(x, y){
    return x < y;
}
const lessexpression = function (x, y){
    return x < y;
}
const lessarrow = (x, y) => {
    return x < y;
}
console.log(lessdeclaration( 98, 64));

/*Больше или равно*/
function moreequalldeclaration(a,b){
    return a >= b;
}
const moreequallyexpression = function (a, b){
    return a >= b;
}
const moreequallyarrow = (a, b) => {
    return a >= b; 
}
console.log(moreequallyexpression( 4, 8));

/*Меньше или равно*/
function lessequallydeclaration(r, t){
    return r <= t;
}
const lessequallyexpression = function (r, t){
    return r <= t;
}
const lessequallyarrow = (r, t) => {
    return r <= t;
}
console.log(lessequallyarrow(42, 889));

/*Строгое равество/
function strictdeclaration (c, d){
    return c === d;
}
const strictexpression = function (c, d){
    return c === d;
}
const strictarrow = (c, d) => {
      return c === d;
}
console.log(strictdeclaration('4', 4));


/*Строгое неравенство */
function notstrictdeclaration(a, b){
    return a !== b;
}
const notstrictexpression = function (a, b){
    return a !== b;
}
const notstricarrow = (a, b) => {
    return a !== b;
}
console.log(notstrictexpression(6, '6'));
