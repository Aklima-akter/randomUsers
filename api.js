const loadComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => displayComment(data))
}
loadComments();
const displayComment = (comments) => {
    // console.log(comments[0].name);
    const loadComments = document.getElementById('load-comment');
    comments.forEach(comment => {
        // console.log(comment);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card m-5 " style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Body:${comment.body.slice(0,20)}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Name:${comment.name}</h6>
                <p class="card-text">Body:${comment.body.slice(0,50)}</p>
                <button onclick="showDetails(${comment.id})">Details</button>
            </div>
        </div>
            `;
        loadComments.appendChild(div);

    })

}
const showDetails = (id) => {
    // console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
}

const displayDetails = (data) => {
    const showDetails = document.getElementById('show-details');
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card m-5 " style="width: 18rem;">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Name:${data.name}</h6>
                <p class="card-text">Body:${data.body}</p>
                <button onclick="showDetails(${data.id})">Details</button>
            </div>
        </div>
`;
    showDetails.innerHTML = ''
    showDetails.appendChild(div);
}