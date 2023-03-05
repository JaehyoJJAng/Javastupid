/** 
 * 재할당 : 이미 데이터가 할당되어 있는 변수에 다시 할당 
 * 재선언 : 이미 선언되어 있는 변수명으로 다시 선언 
 * */ 

{ // 재할당 (let)
    let box = '';
    box = 1;
    console.log(box);
}

{ // 재할당 (let)
    let box;
    box = 'hello';
    console.log(box);
}

{
    // let 키워드 : 재할당 O , 재선언 X
    let box;
    // let box;
}

{
    // 상수 (const) : 재할당 X , 재선언 X , 선언과 할당이 동시에 이루어짐
    const NAME  = 'Jaehyo Lee';
    console.log(NAME); 
}

/**
 * 자바스크립트에서 지양해야 하는 변수 선언 키워드 : var
 * var : 재할당 O , 재선언 O
 */
{
    var uniqueWord = 'unique';
    console.log(uniqueWord);
    var uniqueWord = 'ununiqueWord';
    console.log(uniqueWord);        
}