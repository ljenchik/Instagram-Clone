const loginButton = document.querySelector("#login-button");

if (loginButton) {
    loginButton.addEventListener("click", function () {
        window.location.href = "feed.html";
    });
}

const multiverseLogoButton = document.querySelector("#multiverse-logo");

if (multiverseLogoButton) {
    multiverseLogoButton.addEventListener("click", function () {
        window.location.href = "account.html";
    });
}
