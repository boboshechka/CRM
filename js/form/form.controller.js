import Model from './../model.js';
import FormView from './form.view.js';

const model = new Model();
const viewForm = new FormView(model.requests);

viewForm.elements.form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = viewForm.getForm()

    const request = model.addReq(formData);
    console.log('r', request)

    setTimeout(function () {
        window.location.href = 'table.html';
    }, 50);
})


// setTimeout(function () {
//     if (phoneReq != '' ) {
//         window.location.href = 'table.html';
//     } else {
//         alert('Введите телефон')
//     }

// }, 50);