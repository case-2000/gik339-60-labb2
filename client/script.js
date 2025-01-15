const url = "http://localhost:3000/users";

fetch(url)
  .then((data) => data.json())
  .then((users) => {
    console.log(users);
    let html = `<h1>Users</h1><ul class="list-group userListContainer"> `;
    users.forEach((user) => {
      const backgroundColor = user.color || "#f55555";
      html += `
      <li class="listItem " style="background-color: ${backgroundColor};"> 
        <p>Id: ${user.id}</p>
        <p>Firstname: ${user.firstName}</p>
        <p>Lastname: ${user.lastName}</p>
        <p>Username: ${user.username}</p>
      </li>`;
    });
    html += `</ul>`;
    const userListContainer = document.getElementById("userListContainer");
    userListContainer.innerHTML = html;
  });
