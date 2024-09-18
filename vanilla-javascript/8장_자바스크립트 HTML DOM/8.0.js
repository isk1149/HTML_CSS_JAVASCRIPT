//자바스크립트는 HTML 문서의 모든 요소에 접근하여 변경할 수 있다.
//사용자가 웹 페이지에 접근하면 웹 페이지가 로드되면서 브라우저는 웹 페이지에 대한 DOM(Document Object Model)을 생성한다
//DOM은 W3C(World Wide Web Consotium)의 표준이며, 문서에 접근하기 위한 표준을 정의한다.
//HTML DOM은 HTML을 위한 표준 객체 모델 및 프로그래밍 인터페이스이다

//HTML DOM 모델은 객체 트리로 구성된다
/**
 * Document--Root Element<html>--Element<head>--Element<title>--Text"My title"
 *                          |
 *                          ㄴ--Element<body>--Element<h1>--Text"My header"
 *                                        |
 *                                        ㄴ--Element<a>--Text"My link"
 *                                                    |
 *                                                    ㄴ--Attribute"href"
 */

//자바스크립트는 HTML DOM 객체 모델을 통해 다음과 같은 기능을 수행할 수 있다
/**
 * 1. 페이지의 모든 HTML 요소를 변경할 수 있다.
 * 2. 페이지의 모든 HTML 속성을 변경할 수 있다.
 * 3. 페이지의 모든 CSS 스타일을 변경할 수 있다.
 * 4. 페이지의 HTML 요소 및 속성을 제거할 수 있다.
 * 5. 새로운 HTML 요소 및 속성을 추가할 수 있다.
 * 6. 페이지에 존재하는 모든 HTML 이벤트에 반응할 수 있다.
 * 7. 새로운 HTML 이벤트를 추가할 수 있다.
 */
