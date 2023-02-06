export default class Model {
    constructor() {
        this.requests = [];
        this.loadFromLocalStorage();
        // console.log(this.requests)
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('requests');
        //Если не нулл то записывает в массив
        if (data) {
            this.requests = JSON.parse(data);
        }
    }

    saveToLocalStorage() {
        //Массив преобразуется в строку и сохранится 
        localStorage.setItem('requests', JSON.stringify(this.requests));
    }

    addReq(formData) {
        let id = 1
        if (this.requests.length > 0) {
            //Находим id , индекс последнего плюс 1
            id = this.requests[this.requests.length - 1]['id'] + 1;
        }

        const newRequest = {
            id: id,
            ...formData,
            date: new Date().toLocaleString(),
            status: 'new'
        }
        this.requests.push(newRequest);
        this.saveToLocalStorage();
        return newRequest;
    }

    //Находим нужную заявку и возвращаем ее id
    getReqById(id) {
        const request = this.requests.find(item => {
            //Не строгое сравнение,потому что urlparams возвращает строку,а не число
            return item.id == id;
        })

        return request;
    }


    updateReq(formData) {
        // Находим искомую заявку
        const request = this.getReqById(formData.get('id'));
        request.name = formData.get('name');
        request.email = formData.get('email');
        request.phone = formData.get('phone');
        request.status = formData.get('status');
        this.saveToLocalStorage();
    }

    countNewReq() {
        const newRequests = this.requests.filter(el => el.status === 'new')

        return newRequests.length
    }

    //Сохраняем фильтры при перезагрузке приложения
    loadFilter() {
        let filter = {
            products: 'all',
            status: 'all'
        }

        if (localStorage.getItem('filter')) {
            filter = JSON.parse(localStorage.getItem('filter'))
        }
        return filter
    }

    filter = this.loadFilter()

    changeFilter(prop, value) {
        this.filter[prop] = value;
        localStorage.setItem('filter', JSON.stringify(this.filter));
        return this.filter;
    }
    filterReq(filter) {
        let filteredReqs;

        //Фильтрация по продукту
        if (filter.products !== 'all') {
            filteredReqs = this.requests.filter(request => {
                return request.product === filter.products;
            })
        } else {
            filteredReqs = [...this.requests];
        }

        //Фильтрация по статусу
        if (filter.status !== 'all') {
            filteredReqs = filteredReqs.filter(request => {
                return request.status === filter.status
            })
        }

        return filteredReqs;
    }

    getFilter(){
        return {...this.filter}
    }
}


// можно записать так для нашего объекта в функцию getReqById()
// request.dateYear = new Date(request.date).toLocaleDateString();
// request.dateTime = new Date(request.date).toLocaleTimeString();