export default class TableView {
    constructor(requests) {
        requests.forEach(req => {
            this.renderReq(req);
        })
    }

    elements = {
        tbody: document.getElementById('tbody'),
        th: document.querySelectorAll('th'),
        tr: document.querySelectorAll('tr'),
        select: document.getElementById('productSelect'),
        topStatusBar: document.getElementById('topStatusBar'),
        leftStatusLinks: document.querySelectorAll('[data-role="left-status"]'),
        leftPanelNav: document.querySelector('.left-panel__navigation'),
        badgeNew: document.getElementById('badge-new')
    }

    products = {
        'course-html': 'Курс по верстке',
        'course-vue': 'Курс по Vue JS',
        'course-js': 'Курс по JS',
        'course-wordpress': 'Курс по Wordpress',
        'course-php': 'Курс по php'
    }

    statuses = {
        'new': 'Новая',
        'inwork': 'В работе',
        'complete': 'Завершенная',
    }

    renderReq(reqObject) {

        //Перезаписываем в продукт
        reqObject.productName = this.products[reqObject.product];
        //Перезаписываем статус
        reqObject.statusName = this.statuses[reqObject.status];

        const badges = {
            new: 'badge-danger',
            inwork: 'badge-warning',
            complete: 'badge-success'
        }
        const taskHTML = `
            <tr>
                <th scope="row">${reqObject.id}</th>
                <td>${reqObject.date}</td>
                <td>${reqObject.productName}</td>
                <td>${reqObject.name}</td>
                <td>${reqObject.email}</td>
                <td>${reqObject.phone}</td>
                <td>
                    <div class="badge badge-pill ${badges[reqObject.status]}">${reqObject.statusName}</div>
                </td>
                <td>
                    <a href="edit.html?id=${reqObject.id}">Редактировать</a>
                </td>
            </tr>`;

        this.elements.tbody.insertAdjacentHTML('beforeend', taskHTML)
    }

    updateStatusLinks(value) {
        //Меняем top status bar
        this.elements.topStatusBar.querySelectorAll('a').forEach(link => link.classList.remove('active'));
        this.elements.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add('active');

        //Меняем left side bar
        this.elements.leftStatusLinks.forEach(link => link.classList.remove('active'));
        this.elements.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add('active');

    }

    renderBadgeNew(num) {
        this.elements.badgeNew.innerText = num

        num === 0
            ? this.elements.badgeNew.classList.add('none')
            : this.elements.badgeNew.classList.remove('none')
    }

    updateFilter(filter) {
        //Фильтр по продукту
        this.elements.select.value = filter.products


        //Фильтр по Top status bar
        this.elements.topStatusBar.querySelectorAll('a').forEach(link => link.classList.remove('active'));
        this.elements.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');

        //Фильтр по left side bar
        this.elements.leftStatusLinks.forEach(link => link.classList.remove('active'));
        this.elements.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add('active');
    }



}



