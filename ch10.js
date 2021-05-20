// object

let person = {
  "last-name": "Lee",
  1: 10,
};

// console.log(person.'last-name'); => SyntaxError
// console.log(person.last-name); => 브라우저 : NaN / Nodejs : ReferenceError : name is not defined

// 브라우저에서는 name이라는 전역 변수(window의 property)가 존재하고, 기본값은 빈 문자열
// js엔진은 person.last를 찾은 후 name과 -연산을 하는데, Nodejs에서는 name이 없으니 레퍼에러
// 브라우저에서는 undefined와 문자열을 빼니 NaN

console.log(person["last-name"]);
// console.log(person[last-name]); => SyntaxError

// console.log(person.1); => SyntaxError
// console.log(person.'1'); => SyntaxError
console.log(person[1]);
console.log(person["1"]);

person.age = 20;
console.log(person);

delete person.age;
delete person.address;

console.log(person);

let x = 1,
  y = 2;

let obj = { x, y };
console.log(obj);
