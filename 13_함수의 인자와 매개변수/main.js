{
    // 함수 안에서 선언된 변수는 함수 바깥에서 참조가 불가능하다
    const setTest = function() {
        text = 'test'
    }
    // console.log(text);
}

{
    // 매개변수
    const paramDefine = function(param) {
        console.log(param);
    }
    paramDefine(param="Fuck You");
}

{
    // 전달인자 (Argument)
    const paramDefine = function(param) {
        console.log(param);
    }
    paramDefine(param="전달인자");
}

{
    const sum = function(a,b) {
        return (a + b) * 100;
    }
    let checkSum = sum(a=100,b=200);
}