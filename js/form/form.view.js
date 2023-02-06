export default class FormView {
    constructor(requests){

    }

    elements = {
        form: document.getElementById('form'),
        inputs: document.querySelectorAll('.form-control'),
        nameId: document.getElementById('name'),
        phoneId: document.getElementById('phone'),
        emailId: document.getElementById('email'),
        productId: document.getElementById('product')
    }

    getForm(){
        return {
            name: this.elements.nameId.value,
            phone: this.elements.phoneId.value,
            email: this.elements.emailId.value,
            product: this.elements.productId.value
        }
    }
}