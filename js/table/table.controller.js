import Model from './../model.js';
import TableView from './table.view.js';

const model = new Model();
let tableView = new TableView(model.filterReq(model.filter));

function init() {
    // tableView.renderReq()
    events();
    const newRequestsCount = model.countNewReq();
    tableView.renderBadgeNew(newRequestsCount);
    
    const filter = model.getFilter();
    tableView.updateFilter(filter);
}

function events() {
    tableView.elements.select.addEventListener('change', filterProducts);
    tableView.elements.topStatusBar.addEventListener('click', filterByStatus);
    tableView.elements.leftStatusLinks.forEach(link => {
        link.addEventListener('click', filterByStatus)
    })
}

function filterProducts() {
    tableView.elements.tbody.innerHTML = '';
    //уже поменянный фильтр  | this.value это значение селекта который мы выбрали |
    const filter = model.changeFilter('products', this.value);
    const filteredReq = model.filterReq(filter);
    tableView = new TableView(filteredReq)
    console.log(filter)
    // tableView.renderReq(filteredReq)
}

function filterByStatus(e) {
    tableView.elements.tbody.innerHTML = '';
    const filter = model.changeFilter('status', e.target.dataset.value)
    const filteredReq = model.filterReq(filter);
    tableView = new TableView(filteredReq)
    tableView.updateStatusLinks(e.target.dataset.value)
}

init()
