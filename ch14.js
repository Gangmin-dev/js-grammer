// 전역 변수의 문제점
// 전역 변수의 생명 주기
// var 키워드로 선언한 전역 변수는 전역 객체의 property가 됨 => 생명 주기가 전역 객체와 동일
// 전역 객체 : 코드 실행 이전 단계에 JS 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수 객체
// 브라우저에서는 window, Nodejs에서는 global 객체를 의미 => ES11에서 globalThis로 통일

// 문제점
// implicit coupling, 긴 생명 주기(메모리 오래 소비, 상태변경 오류 확률 높음), 스코프 체인 상에서 종점에 존재(검색 느림), 네임스페이스 오염(JS는 파일이 분리되어도 하나의 전역 스코프 공유 -> 다른 파일에 같은 변수명 나오면 예기치 못한 에러)

// 전역 변수 사용 억제법
// 전역 변수가 반드시 필요한게 아니면 지역 변수 사용
// 1. 즉시 실행 함수 사용 -> 함수 안은 지역 변수
// 2. 네임스페이스 역할 담당 객체 생성 -> 객체 자체가 전역 변수라 딱히..
// 3. 모듈 패턴

var Counter = (function () {
  // private 변수
  var num = 0;

  // 외부로 공개할 데이터나 메서드를 property로 추가한 object return하기
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();

console.log(Counter.num);

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());

// ES6 모듈 사용 -> 파일 자체의 독자적 모듈 스코프 제공 -> 더이상 전역변수 X, 전역 객체 프로퍼티 X
