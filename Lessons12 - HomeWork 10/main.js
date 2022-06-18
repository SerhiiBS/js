function UserTable(params) {
    this.init = function () {
        params.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser({
                id: Math.floor(Math.random() * 100),
                name: params.form['name'].value,
                phone: params.form['phone'].value,
                age: params.form['age'].value,
            });
        });
    }

    this.addUser = function (user) {
        const users = JSON.parse(localStorage.getItem('users'));
        const currentUsers = users || [];
        currentUsers.push(user);
        this.userTemplate(user)
        localStorage.setItem('users', JSON.stringify(currentUsers));
        params.form.reset();
    }
    
    this.loadUser = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => {
                this.userTemplate(user);
            })
        }
    }
    
    
    // this.editUser = function () {
    //
    // }

    
    this.userTemplate = function (user) {
        params.content.insertAdjacentHTML('beforeend', (
            `<tr data-id="${user.id}">
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.age}</td>
                <td>
                    <button class="btn btn-primary js--view">View</button>
                    <button class="btn btn-primary js--edit">Edit</button>
                    <button class="btn btn-primary js--delete">Delete</button>
                </td>
            </tr>`
        ))
        const currentElement = document.querySelector(`[data-id="${user.id}"]`);
        const deleteButton = currentElement.querySelector('.js--delete');


        const deleteUser = function () {
            currentElement.remove();
        }

        deleteButton.addEventListener('click', deleteUser);

    }

    this.loadUser();
}

const userTable = new UserTable({
    content: document.querySelector('.js--content'),
    add: document.querySelector('.js--add'),
    form: document.querySelector('.js--form'),
    user: document.querySelector('.js--user')
});

userTable.init();