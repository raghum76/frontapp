document.getElementById("btnRecharge").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      let opciones = "";
      json.forEach((user) => {
        opciones += `
        <option value='${user.id}'>${user.name}</option>
      `;
      });
      document.getElementById("lstUsers").innerHTML = opciones;
    });
});

document.getElementById("lstUsers").addEventListener("change", () => {
  let opcion = document.getElementById("lstUsers").value;
  //console.log(opcion);
  fetch("https://jsonplaceholder.typicode.com/users/" + opcion)
    .then((response) => response.json())
    .then((json) => {
      let userInfo = `
        <h3>user name:${json.username}</h3>
        <p>email: ${json.email}</p>
        <p>    Ciudad -> ${json.address.city}</p>
        <p>Trabaja en ${json.company.name}</p>
      `;
      document.getElementById("userInfo").innerHTML = userInfo;
    });
});

document.getElementById("btnPosts").addEventListener("click", () => {
  let opcion = document.getElementById("lstUsers").value;
  fetch("https://jsonplaceholder.typicode.com/posts?userId=" + opcion)
    .then((response) => response.json())
    .then((json) => {
      let posts = "";
      json.forEach((post) => {
        posts += `
        <div>
          <h2>${post.title}<button>+<button></h2>
          <p>${post.body}</p>
        </div>
      `;
      });
      document.getElementById("posts").innerHTML = posts;
    });
});
