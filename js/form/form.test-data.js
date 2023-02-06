let generateTestData = (function(){
    let ExampleItem = function(name, tel , email, product) {
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.product = product;
    }
    
    
    let testData = [
        new ExampleItem('Damir', '892935923959', 'asdas@mail.ru', 'course-html'),
        new ExampleItem('Anton', '834343434343', 'jhgjj@mail.ru', 'course-vue'),
        new ExampleItem('Alex', '86741241241', 'ffgcj@yandex.ru', 'course-js'),
        new ExampleItem('Dmitriy', '87686235235235', 'gfdhdfgh@mail.ru', 'course-js'),
        new ExampleItem('Ivan', '745745745787', 'zxcasrfa@mail.ru', 'course-vue'),
        new ExampleItem('Aleksey', '643624124', 'jfjfwet@yandex.ru', 'course-wordpress'),
        new ExampleItem('Yurii', '7457457976945', 'iopoqwe@mail.ru', 'course-vue'),
        new ExampleItem('Petr', '23124515135', 'asdfzt@mail.ru', 'course-wordpress')
    ]
    
    
    function getRandomInt(max){
        // Если без return нам вернет undefined!!
        return Math.floor(Math.random() * max);
    }
    
    
    // console.log(getRandomInt(testData.length))
     
    
    // Вставляем тестовый элемент в UI
    function insertInUi(){
        let random = getRandomInt(testData.length);
        let randomItem = testData[random];
    
        document.querySelector('#name').value = randomItem.name;
        document.querySelector('#phone').value = randomItem.tel;
        document.querySelector('#email').value = randomItem.email;
        document.querySelector('#product').value = randomItem.product;
    }
    

    return {
        init: insertInUi,
    }
})();


generateTestData.init();