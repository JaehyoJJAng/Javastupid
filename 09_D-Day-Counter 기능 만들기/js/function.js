// 함수 정의
const consoleTool = function () {
    console.log('consoleTool Function');
}

// 함수 호출
consoleTool()


// 함수의 선언 방식 #1
function sum(a,b) {
    return a + b;
}
sum(a=5,b=5);

// 함수의 선언 방식 #2
sum(a=5,b=5); 
const sum = function(a,b) {
    return a + b;
}

// 함수의 선언 방식 #3 : 화살표 함수
const sum = (a,b) => {
    return a + b;
}
sum(a=5,b=5);