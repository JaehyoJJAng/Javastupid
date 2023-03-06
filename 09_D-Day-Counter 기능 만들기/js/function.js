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
        container.style.display = 'none';
        newContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
        newContainer.style.display = 'flex';
        return; // 함수 종료
        
    } else if (isNaN(remaining)) {
        // 입력 값 결과가 NaN 인 경우
        container.style.display = 'none';
        newContainer.innerHTML = `<h3>유효하지 않은 시간대</h3>`;
        newContainer.style.display = 'flex';
        return // 함수 종료
    }

    // newContainer 의 display를 none 으로 변경
    setNone(tag=newContainer);

    // 남은 날짜 계산
    const remainingDate = Math.floor((remaining / 3600) / 24);

    // 남은 시간 계산
    const remainingHours = Math.floor((remaining / 3600) % 24);

    // 남은 분 계산
    const remainingMin = Math.floor((remaining / 60) % 60);

    // 남은 초 계산
    const remainingSec = Math.floor(remaining % 60);
    
    // 날짜 넣을 태그 가져오기 : <span id='days'>0</span>
    const days = document.getElementById('days');
    const hour = document.getElementById('hour');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    // 해당 태그들에 값 넣기
    days.textContent = remainingDate;
    hour.textContent = remainingHours;
    min.textContent = remainingMin;
    sec.textContent = remainingSec;

    // container 의 display : none 해제
    setFlex(tag=container);
}

// 데이터 쿼리셋 가져오기 (전역 설정)
const container = document.querySelector('.d-day-container');
const newContainer = document.querySelector('.d-day-message');

// textContent 변경
setNone(tag=container);
newContainer.innerHTML = '<h3>D-Day 를 입력해 주세요</h3>';
