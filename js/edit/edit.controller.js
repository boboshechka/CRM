import Model from './../model.js';
import EditView from './edit.view.js';

const model = new Model();
const editView = new EditView();

function init() {
    const id = getReqId();
    const request = model.getReqById(id);
    
    // console.log('reqrqerqer', request)
    editView.renderReq(request)
};

function getReqId() {
    // Находим параметр id
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    return id;
};

editView.elements.form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = editView.getFormInput();

    model.updateReq(formData);
    setTimeout(function () {
        window.location.href = 'table.html';
    }, 50);
})


init();