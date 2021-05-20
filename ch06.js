// Data type

// JS는 총 7개의 데이터 타입
// primitive type : number, string, boolean, undefined, null, symbol
// object/reference type : 객체, 함수, 배열 등

// number
// ECMAscript 사양 => 64bit float형식 -> 모든 수를 실수 처리, int type 별도로 존재 X
// 따라서 2진수, 8진수, 16진수 등으로 나타내도, 모두 10진수로 해석

var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary === octal); // true
console.log(octal === hex); // true
console.log(hex); // 65

// int도 모두 실수로 처리
console.log(1 === 1.0); // true
console.log(3 / 2); // 1.5

console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "str"); // NaN

// JS엔진은 대소문자 구분
// console.log(nan); => error

// string type
