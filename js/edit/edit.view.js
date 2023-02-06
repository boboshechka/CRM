export default class EditView {

    elements = {
        form: document.getElementById('form'),
        number: document.getElementById('number'),
        id: document.getElementById('id'),
        date: document.getElementById('date'),
        name: document.getElementById('name'),
        product: document.getElementById('product'),
        email: document.getElementById('email'),
        status: document.getElementById('status'),
        phone: document.getElementById('phone')
    }
    renderReq(request) {
        this.elements.number.innerText = request.id;
        this.elements.id.value = request.id;
        this.elements.date.innerText = request.date;
        this.elements.name.value = request.name;
        this.elements.product.value = request.product;
        this.elements.email.value = request.email;
        this.elements.phone.value = request.phone;
        this.elements.status.value = request.status;

    }
    getFormInput() {
        //можно сделать return {и описать здесь объект id: elements.id.value} по типу такго,но сделаем по-другому
        return new FormData(this.elements.form);
    }
} 

// `${request.dateYear} ${request.dateTime}`