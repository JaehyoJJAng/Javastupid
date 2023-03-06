const setNone = function (tag) {
    tag.style.display = 'none';
}

const setFlex = function (tag) {
    tag.style.display = 'flex';
}

const dateFormMaker = function () {
    // input year
    const inputYear = document.querySelector('#target-year-input').value

    // input month
    const inputMonth = document.querySelector('#target-month-input').value

    // input day
    const inputDay = document.querySelector('#target-day-input').value

    // Date Format
    return `${inputYear}-${inputMonth}-${inputDay}`
}

// Date 함수 응용
const countMaker = function () {    
    // DateFormat 받아오기
    const dateFormat = dateFormMaker();

    // 현재 날짜 추출
    const nowDate = new Date();

    // 특정 날짜 추출
    const targetDate = new Date(dateFormat);

    // D-day 계산
    const remaining = (targetDate - nowDate) / 1000;

    if (remaining <= 0) {
        // 타이머가 끝난 경우
        setNone(tag=container);
        newContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
        setFlex(tag=newContainer);
        return; // 함수 종료
        
    } else if (isNaN(remaining)) {
        // 입력 값 결과가 NaN 인 경우
        setNone(tag=container);
        newContainer.innerHTML = `<h3>유효하지 않은 시간대</h3>`;
        setFlex(tag=newContainer);
        return // 함수 종료
    }

    // newContainer 의 display를 none 으로 변경
    setNone(tag=newContainer);

    // remainingObj 오브젝트 생성
    const remainingObj = {        
        remainingDate: Math.floor((remaining / 3600) / 24), // 남은 날짜 계산        
        remainingHours: Math.floor((remaining / 3600) % 24), // 남은 시간 계산        
        remainingMin: Math.floor((remaining / 60) % 60), // 남은 분 계산        
        remainingSec: Math.floor(remaining % 60), // 남은 초 계산
    };
    
    // documentObj 오브젝트 생성
    const documentObj = {
        days : document.getElementById('days'),
        hour:  document.getElementById('hour'),
        min: document.getElementById('min'),
        sec: document.getElementById('sec'),
    }

    // 오브젝트 Key 추출
    const timeKeys = Object.keys(remainingObj);
    const docKeys  = Object.keys(documentObj);
    
    // for .. of 사용
    for (let idx in timeKeys) {
        documentObj[docKeys[idx]].textContent = remainingObj[timeKeys[idx]];
    }

    // container 의 display : none 해제
    setFlex(tag=container);
};

// D-Day Loop
const starter = function () {
    container.style.display = 'flex';
    newContainer.style.display = 'none';
    
    // setInterval() 함수 응용하기 (익명함수 , Interval)
    intervalIdArr.push(setInterval(() => {countMaker(),1000}));

    console.log(intervalIdArr);

    // for (let i = 0; i < 100; i ++) {
    //     setTimeout(countMaker(),1000 * i);
    // }
}

// interval 초기화 함수
const setClearInterval = function() {
    setNone(tag=container);
    setFlex(tag=newContainer);
    newContainer.innerHTML = '<h3>D-Day 를 입력해 주세요</h3>';
    for (let i = 0; i < intervalIdArr.length; i++) {
        clearInterval(intervalIdArr[i]);
    }
}

// intervalIdArr 초기값
const intervalIdArr = [];

// 데이터 쿼리셋 가져오기 (전역 설정)
const container = document.querySelector('.d-day-container');
const newContainer = document.querySelector('.d-day-message');

// textContent 변경
setNone(tag=container);
newContainer.innerHTML = '<h3>D-Day 를 입력해 주세요</h3>';