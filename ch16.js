// internal slot & internal method

// 원칙적으로 내부 로직이므로 직접 접근하거나 호출할 수 있는 방법 제공 X
// 일부만 간접적으로 접근 가능하도록 수단 제공

const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]]  -> Uncaught SyntaxError: Unexpected token '['
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
console.log(o.__proto__); // -> Object.prototype

// property attribute

// Descriptor로 프로퍼티 어트리뷰트 정보 취득 가능
const person = {
  name: "Lee",
};

person.age = 20;

// 1개의 프로퍼티
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// 전체 프로퍼티
console.log(Object.getOwnPropertyDescriptors(person));

// Data property -> key : value
// accessor property -> access function(getter, setter)로 구성

// Data property는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 가짐
// accessor property는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 가짐

const person1 = {
  // 데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당: "ch31 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(person1.firstName + " " + person1.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person1.fullName = "Heegun Lee";
console.log(person1);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person1.fullName);

// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person1, "firstName");
console.log(descriptor);

// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person1, "fullName");
console.log(descriptor);

// 일반 객체의 __proto__는 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));

// 함수 객체의 prototype은 데이터 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));

// property 정의
const person2 = {};

Object.defineProperty(person2, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person2, "lastName", {
  value: "Lee",
});

descriptor = Object.getOwnPropertyDescriptor(person2, "firstName");
console.log("firstName", descriptor);

// 초기값 설정 안하면, 기본값은 undefined or false이다.
descriptor = Object.getOwnPropertyDescriptor(person2, "lastName");
console.log("lastName", descriptor);

console.log(Object.keys(person2));

// Writable과 Configurable이 false면 그와 관련된 행동은 무시됨(에러 발생 안함)
person2.lastName = "Kim";
delete person2.lastName;

descriptor = Object.getOwnPropertyDescriptor(person2, "lastName");
console.log("lastName", descriptor);

// 한번에 정의도 가능
Object.defineProperties(person2, {
  age: {
    value: 20,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

descriptor = Object.getOwnPropertyDescriptor(person2, "fullName");
console.log("fullName", descriptor);

person2.fullName = "Heegun Lee";
console.log(person2);

// 객체 변경 방지
// 객체 확장 금지 : Object.preventExtensions(obj)
