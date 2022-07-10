const findId = Number(prompt('Введіть номер посту від 0 до 100', '0'))
//
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "GET",
})
.then( (response) => {
    // console.log(response.text())
    return response.json()
})
    .then( (data) => {
        data.forEach(item => {
            if(item.id === findId) {
                document.querySelector('.js--data').innerHTML = `<div class="text name"><div>Post# ${item.id}</div>
                <div>Post title: ${item.title}</div></div>
                <div class="text">${item.body}</div> `;
            }
        })
    })
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${findId}`, {
    method: "GET",
})
    .then( (response) => {
        // console.log(response.text())
        return response.text()
    })
    .then( (data) => {
        document.querySelector('.js--comments').innerHTML = `${data}`
        })
        // data.find( item => {
        //     if (item.postId === findId ){
        //         console.log(item)
        //
        //             document.querySelector('.js--comments').innerHTML = `
        //             <div>Comments on the ${item.postId} post</div>
        //            <div class="text"><div>Comment# ${item.id} email: ${item.email}</div>
        //             <div>Comment: ${item.body}</div></div>
        //         </div>`;



