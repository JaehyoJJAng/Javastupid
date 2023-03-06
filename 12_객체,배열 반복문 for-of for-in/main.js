{
    // for .. in : 배열의 인덱스 값이 선언한 변수에 들어감
    let setObj = {
        a:'a',
        b:'b',
        c:'c',
        d:'d',
        e:'e',
        f:'f',
    }

    const setArr = Object.keys(setObj);

    for (let key in setArr) {
        console.log(key);
        let item = setArr[key];
    }
}

{
    // for .. of : 배열의 요소 하나하나가 선언한 변수에 들어감
    let setObj = {
        a:'a',
        b:'b',
        c:'c',
        d:'d',
        e:'e',
        f:'f',
    }

    const setArr = Object.keys(setObj);
    console.log(setArr);

    for (let tag of setArr) {
        console.log(tag);
    }
}