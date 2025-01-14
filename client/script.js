const url = "http://localhost:3000/users";

fetch(url)
  .then((data) => data.json())
  .then((users) => {
    let html = `<ul class="list-group userListContainer">`;
    users.forEach((user) => {
      console.log(users);
      const backgroundColor = user.color || "#f55555";
      html += `
      <li class="mt-5 listItem " style="background-color: ${backgroundColor};"> 
        <p>id: ${user.id}</p>
        <p>firstname: ${user.firstName}</p>
        <p>lastname: ${user.lastName}</p>
        <p>username: ${user.username}</p>
      </li>`;
    });
    html += `</ul>`;
    const userListContainer = document.getElementById("userListContainer");
    userListContainer.innerHTML = html;
  });
