// 타입 변환 & 단축 평가

// 단축 평가는 ||나 &&에서 early return되는 느낌의 평가를 의미

let a = "Cat" && "Dog";
console.log(a); // Dog

let b = "Cat" || "Dog";
console.log(b); // Cat

// true || anything => true
// false || anything => anything
// true && anything => anything
// flase && anything => false

// optional chaining ?.
// ES11 도입. 좌항의 피연산자가 null or undefined면 undefined 반환, 아니면 우항의 프로퍼티 참조

let elem = null;
// let value = elem?.value; => TypeError
let value = elem?.value;
console.log(value);

let str = "";
let val = str && str.length;
console.log(val); // ""

val = str?.length;
console.log(val); //0

// &&와 다르게 ?. 는 falsy한 값이어도 null/undefined만 아니면 후행 가능

// null coalescing  => ??
// 좌항 ?? 우항 => 좌항이 null/undefined이면 우항, null아니면 좌항
let foo = null ?? "default str";
console.log(foo);
