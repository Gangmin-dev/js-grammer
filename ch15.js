// let, const, block level scope
// let -> 변수 증복 선언 금지, 블록 레벨 스코프, 호이스팅이 분리됨 => 선언과 초기화가 분리되어 진행
// 선언은 런타임 이전에, 그러나 초기화 이전에 변수 접근 => 참조 에러
// 초기화는 변수 선언을 시킨 statement가 실행될 때
// 밑의 예시에서 선언 호이스팅은 있다는 것을 확인 가능

let foo = 1;

{
  // console.log(foo); ReferenceError: Cannot access 'foo' before initialization
  let foo = 2;
}

// 모든 선언(var, let, const, function, function*, class 등)은 모두 호이스팅 됨
// 그러나 ES6에 도입된 let, const, class는 호이스팅 발생 안 하는 것처럼 동작
// let, const로 선언한 전역 변수는 전역 객체의 프로퍼티가 아님

// const -> 무조건 선언과 동시에 초기화 해야 함, 재할당 금지
// 일반적으로 전체 대문자 + 스네이크 케이스로 상수 표현
// 재할당이 금지이므로 원시값은 상수로, 객체면 참조값만 변경 불가능하고, 객체에 접근해 객체의 프로퍼티 변경은 가능
