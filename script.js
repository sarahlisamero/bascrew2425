// script.js

document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    // Loop through the users array and create HTML for each user
    users.forEach(user => {
        // Create a card for each user
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        // Insert user data into the card
        userCard.innerHTML = `
            <img src="${user.image}" alt="${user.name}">
            <h2>${user.name}</h2>
            <p>${user.role}</p>
            <a href="${user.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        `;

        // Append the user card to the user list
        userList.appendChild(userCard);
    });
});
