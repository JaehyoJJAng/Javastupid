/**
 * 배열 : 여러개의 데이터를 순서와 함께 저장하는 창고
 * 배열의 데이터 하나하나 (요소 : Element)
 * 배열의 각 요소는 인덱스라는 값을 가짐 (위치 값 : 0부터 시작)
 */

{
    let Ranking = Array('Jason','Alice','Chris','Jane');
    Ranking.push('Tom');

    // Jason 요소 출력
    console.log(Ranking[0]);

    // 마지막 요소인 Tom 출력
    console.log(Ranking[Ranking.length - 1]);

    // Jane 요소 출력
    console.log(Ranking[Ranking.length - 2]);
}
