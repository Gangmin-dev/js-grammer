// 생성자 함수에 의한 객체 생성

// Object 생성자 함수
const person = new Object();

person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};

console.log(person);
person.sayHello();

// 이 밑의 것들은 모두 "객체"임을 알자
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String("Lee");
console.log(typeof strObj);
console.log(strObj);

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function("x", "return x * x");
console.log(typeof func);
console.log(func);

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date);
console.log(date);

// 객체 리터럴에 의한 객체 생성 방식 문제점
// 단 하나의 객체만 생성 -> 여러개 생성시 매번 같은 프로퍼티 기술 -> 비효율
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter());

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter());

// constructor 사용 장점
// 프로퍼티 구조가 동일한 객체 여러개를 간편히 생성 가능

// 생성자 함수
// this는 함수 호출 환경마다 다르게 작동함
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자와 함께 호출해야 생성자로 작용 아니면 일반 함수 취급
// 암묵적으로 인스턴스를 생성하고 초기화한 후 반환함(return 없어도 됨 => 반드시 생략하는 것이 좋음)
const circle3 = new Circle(5);
const circle4 = new Circle(10);

// 일반 함수에서 this는 전역 객체를 가리킴 => radius가 전역 변수로
const circle5 = Circle(15);
console.log(circle5);
console.log(radius);

console.log(circle3.getDiameter());
console.log(circle4.getDiameter());

// 함수는 객체다.
function foo() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo.prop = 10;

// 함수는 객체이므로 메서드를 소유할 수 있다.
foo.method = function () {
  console.log(this.prop);
};

foo.method(); // 10

// 함수 객체는 [[Call]], [[Construct]] 내부 메소드를 가짐
// 함수 객체는 모두 callable이지만 construct는 맞을 수도 있고 아닐 수도 있다.
// JS엔진에서 함수 정의를 평가해 함수 객체를 생성 시 정의 방식에 따라 constructor 구분
// constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수)
// non-constructor : 메서드(ES6는 축약 표현만 메서드로 인정), 화살표 함수
// 일반 함수 정의: 함수 선언문, 함수 표현식
function poo() {}
const bar = function () {};
// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수다. 이는 메서드로 인정하지 않는다.
const baz = {
  x: function () {},
};

// 일반 함수로 정의된 함수만이 constructor이다.
new poo(); // -> foo {}
new bar(); // -> bar {}
new baz.x(); // -> x {}

// 화살표 함수 정의
const arrow = () => {};

// new arrow(); TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만을 메서드로 인정한다.
const obj = {
  x() {},
};

// new obj.x(); TypeError: obj.x is not a constructor

// 생성자 함수는 일반적으로 파스칼케이스를 써서 맨 처음을 대문자로하여 다른 함수와 구분 가능하도록

// new.target => 생성자로 사용되는 경우 함수 자신을 가리키고, 일반 함수로 사용된 경우 undefined
function Circle2(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
  if (!new.target) {
    // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
    return new Circle2(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle6 = Circle2(5);
console.log(circle6.getDiameter());

// String, Number, Boolean 생성자를 new없이 사용하면 원시값을 반환
const str = String(123);
console.log(str, typeof str);

const num = Number("123");
console.log(num, typeof num);

const bool = Boolean("true");
console.log(bool, typeof bool);
