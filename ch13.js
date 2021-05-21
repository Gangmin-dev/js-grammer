// scope

let x = "global";

function foo() {
  let x = "local";
  console.log(x);
}

foo();
console.log(x);

// code의 context를 고려하여 identifier을 고른다.
// lexical environment : 코드가 어디서 실행되며, 주변에 어떤 코드가 있는지 => 이를 구현한 것이 실행 컨텍스트(excution context)

// var키워드를 사용하면 같은 스코프 내에서 중복 선언이 허용됨, let, const는 불가능 => var 최대한 줄이기

// scope chain
// scope는 함수의 중첩에 의해 계층 구조를 갖는다
// 변수를 참조할 때 JS엔진은 scope chain을 통해 참조하는 코드의 스코프에서 시작해 상위 스코프 방향으로 이동하며 선언된 변수를 검색하여 가져온다.
// 즉, 하위에 이미 변수가 존재하면 하위 변수를, 없으면 상위 스코프의 변수를 가져오게 된다.

// var키워드로 선언된 변수는 "function level scope"를 갖는다. => if, for, while 등의 block level scope를 갖지 않는다.

if (1) {
  var y = 10;
}
console.log(y);

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

// let, const는 block level scope를 지원

// lexical scop(static scope)
// JS는 "함수를 어디서 정의했는지"에 따라 함수의 상위 스코프 결정
// 함수가 호출된 위치는 상위 스코프의 결정에 어떠한 영향도 주지 않음
// 밑의 예제에서 bar()의 상위 스코프는 전역 스코프다
var k = 1;

function poo() {
  var k = 10;
  bar();
}

function bar() {
  console.log(k);
}

poo();
bar();
