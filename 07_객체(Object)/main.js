// 객체(Object) : 여러 개의 프로퍼티를 갖는 데이터 타입

{   // Key: Value
    // Value -> Str,Float,Int,Boolean,Array,Object ..
    let userData = {
        name: 'Jason',
        age: 25,
        gender: 'Male',
        hobbies: ['game','study','coding'],
        infos: {Site: 'https://www.naver.com',Value: 'fewkfwek231'}
    }

    // 프로퍼티 추가하기
    userData.new = 'New Data';

    // 프로퍼티 접근 [대괄호 표기법]
    console.log(userData['name']);

    // 프로퍼티 접근 [점 표기법]
    console.log(userData.new);
}