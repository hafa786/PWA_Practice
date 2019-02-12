const attendiecs = document.querySelector("#attendies")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data =>{
    let html = '';
    data.forEach(user => {
        html += `<div class="card">
        <h2>${user.name}</h2>
        <div>${user.email}</div>
        </div>`;
    });
    attendiecs.innerHTML = html;
});