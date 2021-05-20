// primitve type vs object

// primitive type = immutable(값 자체를 변경 불가, 변수는 값을 '교체' 가능) / object = mutable
// 변수에 primitive를 할당하면 메모리에 실제 값이 저장 => 다른 변수에 재할당 시 실제 값을 복사하여 전달(pass by value)
// 변수에 object를 할당하면 reference value가 저장 => 다른 변수에 재할당 시 참조 값을 복사하여 전달(pass by reference)

// const는 재할당이 불가능한 변수이지, 값의 변경 가능성을 내포하지는 않는다.
// 즉 const는 변수가 가리키는 메모리 주소를 변경할 수 없음을 의미한다.
const o = {};
const k = 1;

o.a = 1;
console.log(o); // {a: 1}

// k = 2; => Error

let str = "string";

str[0] = "S";
// string은 primitive이므로 변경이 불가능하다

console.log(str); // string

// object
// object의 자료 구조는 hidden class와 inline cache를 활용하여 변경가능함에도 불구하고 class와 비슷한 성능으로 구현

// copy
const ob = { x: { y: 1 } };

// shallow
const c1 = { ...ob };
console.log(c1 === ob); // false
console.log(c1.x === ob.x); // true

// lodash 활용 deepcopy
const _ = require("lodash");

const c2 = _.cloneDeep(ob);
console.log(c2 === ob); // false
console.log(c2.x === ob.x); // false

let person = { name: "Lee" };

let copy = person;

console.log(copy === person); // T

copy.name = "Kim";
person.address = "Seoul";

console.log(copy === person); // T
console.log(copy);
console.log(person);

let person1 = { name: "Lee" };
let person2 = { name: "Lee" };

console.log(person1 === person2); // F
console.log(person1.name === person2.name); // T
