
const promise = (timeOut) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(), timeOut);
    })
}
const number = Number(prompt("Введіть номер посту від 0 до 100", "0"))
const url = `https://jsonplaceholder.typicode.com/posts/`;


function goPost() {
    return promise(1000)
        .then(() => fetch(`${url}${number}`))
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
            throw new Error('Something went wrong :(')
        })
}
function goComments() {
    return promise(2000)
        .then(() => fetch(`${url}${number}/comments`))
        .then((response) => response.json())
}

goPost()
    .then((data) => {
        document.querySelector(".js--post").insertAdjacentHTML('beforeend', `
        <div>
        <div class="post--id">Post# ${data.id} ${data.title}</div>
        <div class="post--body">${data.body}</div>`);
        goComments()
            .then(comments => {
                comments.forEach(comment => {
                    document.querySelector(".js--comments").insertAdjacentHTML(
                        "beforeend",
                        `
                        <div class="css-comment-info"><div>Comment# ${comment.id}</div>
                        <div class="css-email">email: ${comment.email}</div></div>
                        <div class="css-comment-body"> ${comment.body}</div>`);});
            });
    })
    .catch((error) => {
        document.querySelector("body").innerHTML = `<div class="error">${error}</div>`
    })


