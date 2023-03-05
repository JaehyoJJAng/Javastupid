{
    let userData = {
        name: 'Jason',
        age: 25,
        gender: 'Male',
        hobbies: ['game','study','coding'],
        infos: {Site: 'https://www.naver.com',Value: 'fewkfwek231'}
    }
    
    // Object.keys() : 주어진 객체의 key 만을 가져와 배열에 담아주는 메소드
    console.log(Object.keys(userData));

    // Object.values() : 주어진 객체의 값을 가져와 배열에 담아주는 메소드
    console.log(Object.values(userData));
}