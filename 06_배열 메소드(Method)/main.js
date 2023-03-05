{
    let ranking = ['Jason','Alice','Chris'];

    // Jane 요소 추가하기
    // push() : 배열의 맨 마지막에 해당 요소 추가
    ranking.push('Jane');

    // pop() : 배열의 맨 마지막 요소 삭제
    ranking.pop()
    
    // ranking 배열의 length 프로퍼티 접근 (대괄호 표기법)
    console.log(ranking['length']);

    // ranking 배열의 length 프로퍼티 접근 (점 표기법)
    console.log(ranking.length);

    // array.includes() : 특정 배열에 주어진 데이터가 존재하는지 참/거짓 반환
    let check = ranking.includes('Chris');

    // array.indexOf() : 특정 배열에서 주어진 데이터의 Index 값을 찾아 반환
    let chrisIndex = ranking.indexOf('Chris');
    
    // indexOf() , includes() 메소드를 응용
    // 배열에 'Chris' 가 있으면 Chris 요소의 인덱스 값 찾아 해당 요소 호출
    if (ranking.includes('Chris')) {
        console.log(ranking[ranking.indexOf('Chris')]);
    }
}