function Tasks(input, todosWrapper) {
    this.input = document.querySelector(input);
    this.todosWrapper = document.querySelector(todosWrapper);



    this.addItem = (event) => {
        event.preventDefault();
        this.todosWrapper.appendChild(this.createTemplate(this.input.value));
        this.input.value = '';
    }

    this.complete = async function (description, id, item) {
        const currentElement = item.querySelector(`[type="checkbox"]`)
        const button = item.querySelector('button');
        if (currentElement.checked) {
                try {
                    const response = await fetch(`http://localhost:3000/todos/${id}`, {
                        method: "PUT",
                        body: JSON.stringify({
                            "id": id,
                            "text": item.description,
                            "checked": true,
                        })
                    });
                    await response.json()
                } catch (error) {
                    console.log(error)
                }
            item.classList.add('todo-item__desc--underline');
            button.disabled = false;
        } else {
                try {
                    const response = await fetch(`http://localhost:3000/todos/${id}`, {
                        method: "PUT",
                        body: JSON.stringify({
                            "id": id,
                            "text": item.description,
                            "checked": false,
                        })
                    });
                    await response.json()
                } catch (error) {
                    console.log(error)
                }
            item.classList.remove('todo-item__desc--underline');
            button.disabled = true;
        }

    }

    this.delete = async function(id, item) {

        try {
            const response = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            });
            if (response.status === 200) {
                item.remove()
            }
        } catch (error) {
            console.log(error)
        }
    }

    this.createTemplate = (description, checked, id) => { // TODO сказать про изменения
        const item = document.createElement('div');
        item.classList.add('todo-item');
        item.classList.add('js--todo-item');
        item.dataset.id = id;
        item.innerHTML = (
            `<label class="todo-item__label">
                <input type="checkbox" class="js--complete" ${checked ? 'checked="true"' : '' }>
                <p class="todo-item__desc js--desc">${description}</p>
             </label>
             <button class="form__button js--delete" disabled>Удалить</button>`
        );

        item.querySelector('.js--delete').addEventListener('click', () => this.delete(id, item));
        item.querySelector('.js--complete').addEventListener('click', () => this.complete(description, id, item));
        return item;
    }
}
Tasks.prototype.loadFromServer = async function () {
    const response = await fetch("http://localhost:3000/todos", {
        method: "GET"
    });
    const data = await response.json();
    // fetch("http://localhost:3000/todos", {
    //     method: "GET"
    // })
    //     .then(res => res.json())
    //     .then(data => {
            data.forEach(dataItem => {
                this.todosWrapper.appendChild(this.createTemplate(
                    dataItem.text,
                    dataItem.checked,
                    dataItem.id
                ))
            })
        // })
}

Tasks.prototype.addServerItem = async function (event) {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
                "text": this.input.value,
                "checked": false,
            })
    })
    const dataItem = await response.json();
    // fetch("http://localhost:3000/todos", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "id": Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
    //         "text": this.input.value,
    //         "checked": false,
    //     })
    // })
    //     .then(res => res.json())
    //     .then(dataItem => {
            this.todosWrapper.appendChild(this.createTemplate(
                dataItem.text,
                dataItem.checked,
                dataItem.id
            ))
            this.input.value = ''
        // })
}

document.addEventListener('DOMContentLoaded', function () {
    const task = new Tasks(
        '.js--form__input',
        '.js--todos-wrapper'
    );
    task.loadFromServer()
    const bindAddServerItem = task.addServerItem.bind(task)
    const form = document.querySelector('.js--form');
    form.addEventListener('submit', bindAddServerItem);
})