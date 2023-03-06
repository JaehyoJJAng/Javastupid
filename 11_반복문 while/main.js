{       
    // while #1
    // 조건식 변수
    let loopCount = 1;

    // while loop
    while (loopCount <= 10) {
        console.log(loopCount);

        // loopCount 차감
        loopCount += 1
    }
}

{
    // while #2
    let loopCount = 1;
    let loopStatus = true;

    while (loopStatus) {
        // loopCount 출력
        console.log(loopCount);
        
        // loopCount 증감
        loopCount ++;
        
        // 분기문
        if (loopCount > 10) {
            console.log('while 종료');
            loopStatus = false;
        }
    }
}

{
    // while #3 : break 문 사용하기
    let loopCount = 1;
    let loopStatus = true;

    while (loopStatus) {
        // loopCount 출력
        console.log(loopCount);
        
        // loopCount 증감
        loopCount ++;
        
        // 분기문
        if (loopCount > 10) {
            console.log('while 종료');
            break
        }
    }
}