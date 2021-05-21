// function

const { add } = require("lodash");

// 함수 리터럴의 중의적 해석

// 원래 함수 선언문에서는 값을 반환 X => 표현식 X
function add1(x, y) {
  return x + y;
}

// 함수 선언문의 함수 리터럴에서는 함수 이름이 필수
// function (x, y){
//   return x+y;
// }

// 그러나 변수에 할당하는 경우에는 JS엔진이 문맥을 파악해 값을 반환하는 표현식으로 해석
let add2 = function add3(x, y) {
  return x + y;
};

// 원래 기본적인 함수 표현식
let add4 = function (x, y) {
  return x + y;
};

function foo() {
  console.log("foo");
}
foo();

// 그룹 연산자() 내에서 함수 리터럴은 함수 선언문으로 해석되지 않고 리터럴 표현식으로 해석된다.
// 연산자 내에서는 표현식이 아닌 문이 오면 안되므로 타입 변환처럼 JS엔진이 표현식으로 변환시킴
(function bar() {
  console.log("bar");
}); // [Function: bar]이라고 표현됨

// bar(); => ReferenceError: bar is not defined

// 함수 선언문과 함수 리터럴 표현식은 함수 객체 생성은 동일하지만 호출에 차이 => foo는 호출 가능, bar은 불가능

// 함수 리터럴에서 function name은 function body에서만 참조할 수 있는 식별자 => bar 호출 불가
// 근데 foo는 왜? => JS엔진이 암묵적으로 생성하는 식별자가 foo임 (함수 선언문)

// 함수는 함수 이름으로 호출하지 않고, function object를 가리키는 식별자로 호출하는 것

let add5 = function bar(x, y) {
  return x + y;
};

console.log(add5(2, 5));
// console.log(bar(2, 5)); ReferenceError: bar is not defined

// function hoisting

console.log(f1);
console.log(f2); // undefined

f1();
// f2(); TypeError: f2 is not a function

// function hoisting => 함수 선언문은 런타임 이전에 먼저 실행
// 식별자 생성과 식별자에 함수 할당까지 진행
// 함수를 호출하기 전에 선언해야 한다는 규칙을 어기므로 좋은 방식이 아니라고 생각하면 좋다.
function f1() {
  console.log("f1");
}

// variable hoising => 변수의 선언만 hoisting되어 함수 할당 전에는 f2가 undefined로 있음
var f2 = function () {
  console.log("f2");
};

// function call

// parameter & arguments
function add6(x, y) {
  console.log(x, y);
  return x + y;
}

// argument를 넣지 않아도 undefined로 선언되어 초기화는 됨.
console.log(add6(2)); // 2 undefined \n NaN
add6(2, 5);

function add7(x, y) {
  console.log(arguments);
  console.log(arguments[2]);
  return x + y;
}
console.log(add7(2, 5, 7)); // 7

// 이상적인 함수는 한 가지 일만 해야 하고, 가급적 작게 만들어야 함. => 유지 보수 측면상 매우 좋음.
// 매개 변수가 최대 3개 이상을 넘지 않는게 좋고, 그 이상이 필요하면 object를 인수로 전달해서 사용하는 것도 괜찮은 방법
// 객체로 전달하면 좋은 점은 인수 순서 상관 없이 property의 key로 접근하면 됨.
// 그러나 함수 외부에서 함수 내부로 전달한 객체를 함수 내부에서 변경하면 실제 객체의 값도 변경되는 side effect가 발생하기 때문에 조심해야 함

// call by ref & 외부 상태 변경
function changeVal(primitve, obj) {
  primitve += 100;
  obj.name = "Kim";
}

let num = 100;
let person = { name: "Lee" };

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num); // primitive는 값을 복사해서 넘겨줌 => 원본 변경 불가
console.log(person); // object는 ref를 복사하여 전달하기 때문에 object내의 값들 변경이 가능

// 즉시 실행 함수
let res = (function () {
  var a = 3;
  var b = 4;
  return a * b;
})();

console.log(res);

res = (function (a, b) {
  return a * b;
})(5, 2);

console.log(res);

// 고차함수에 콜백함수 넣을 때, 다른 외부에서 쓰이지 않으면 평균적으로 함수 리터럴로 바로 집어 넣는편
// 그러나 이렇게 하면 함수가 불릴때마다 함수 리터럴이 평가되어 새롭게 함수 객체가 생성된다.
// 즉, 많이 불리는 경우에는 함수를 외부에서 정의한 후 함수 참조를 전달하는게 효율적

function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(n);
  }
}

repeat(5, function (n) {
  console.log(n);
});

function logAll(n) {
  console.log(n);
}

repeat(5, logAll);

// pure function & impure function
// pure function : 외부 상태에 의존하지도 않고, 외부 상태를 변경하지도 않는, side effect가 없는 함수 <-> impure
