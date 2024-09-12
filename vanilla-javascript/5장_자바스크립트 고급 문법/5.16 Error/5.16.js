//자바스크립트에서 오류는 try...catch문을 통해 관리할 수 있다
try {
  nonExistentFunction();
} catch (error) {
  console.log("catch 블록 진입");
  console.error(error);
} finally {
  console.log(
    "try 코드 블록이 정상적으로 수행되든, 오류를 발생시키든 상관없이 무조건 실행하는 코드 작성"
  );
}

//try 블록에서 예외가 발생하면 catch 블록이 무조건 실행된다.
//때로는 의도적으로 예외를 발생시켜 catch 블록을 실행해야 할 때가 종종 발생한다.
//이때 사용할 수 있는 것이 throw 문이다.
try {
  throw "myException";
} catch (e) {
  console.log("catch 블록 진입");
  console.log(e);
}

//Error 객체는 런타임 오류가 발생했을 때 생긴다.
//자바스크립트에는 일반적인 Error 생성자 외에도 여러 개의 오류 생성자가 있다.
//catch 블록을 통해 오류가 발생했을 때 오류 메시지에 따른 내용을 이해하고 있으면 오류에 대한 빠른 조치가 가능하다
/**
 * 오류                           내용
 * EvalError                      전역 함수 eval()에서 발생하는 오류 인스턴스를 생성한다.
 * RangeError                     숫자 변수나 배열처럼 유효한 범위를 벗어났을 때 오류 인스턴스를 생성한다.
 * ReferenceError                 정의되지 않은 함수, 변수 등 잘못된 참조를 했을 때 오류 인스턴스를 생성한다.
 * SyntaxError                    eval() 코드를 분석하는 중 잘못된 구문이 있으면 오류 인스턴스를 생성한다.
 * TypeError                      변수나 매개변수가 유효한 자료형이 아닐 때 오류 인스턴스를 생성한다.
 * URIError                       encodeURI()나 decodeURI() 함수에 적절하지 않은 인수를 제공했을 때 오류 인스턴스를 생성한다.
 * AggregateError                 하나의 동작이 여러 개의 오류를 발생시키는 경우, 여러 오류를 하나의 오류로 감싸는 인스턴스를 생성한다.
 * InternalError                  자바스크립트 엔진 내부에서 오류가 발생했을 때 오류 인스턴스를 생성한다.
 */

//eval() 함수는 자바스크립트에서 문자열로 전달된 코드를 실행하는 함수이다.
//이 함수는 동적으로 생성된 코드를 실행할 수 있게 해주지만, 보안 및 성능 문제 때문에 사용을 권장하지 않는다.
//ex) eval("console.log('Hello, World!')");

/**
 * 인스턴스 속성                      내용                              표준여부
 * Error.prototype.message            오류 메시지                       표준
 * Error.prototype.name               오류 이름                         표준
 * Error.prototype.description        오류 설명                         비표준 마이크로소프트 속성
 * Error.prototype.number             오류 번호                         비표준 마이크로소프트 속성
 * Error.prototype.filename           오류를 발생시킨 파일 경로           비표준 모질라 속성
 * Error.prototype.lineNumber         오류를 발생시킨 파일의 줄 번호      비표준 모질라 속성
 * Error.prototype.columnNumber       오류를 발생시킨 파일의 칸 번호      비표준 모질라 속성
 * Error.prototype.stack              스택 추적용                       비표준 모질라 속성
 */
