// ===== INIT =====
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

// ===== VIEW HELPERS =====
function showLogin() {
    loginView.classList.remove("hidden");
    registerView.classList.add("hidden");
    welcomeView.classList.add("hidden");
}

function showRegister() {
    loginView.classList.add("hidden");
    registerView.classList.remove("hidden");
}

function showWelcome(user) {
    loginView.classList.add("hidden");
    registerView.classList.add("hidden");
    welcomeView.classList.remove("hidden");

    welcomeText.textContent = "Du är inloggad som: " + user.name;
}

// ===== REGISTER =====
function register() {

    const name = registerName.value.trim();
    const password = registerPassword.value.trim();

    if (!name || !password) {
        message.textContent = "Fyll i alla fält";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users"));

    const exists = users.find(u => u.name === name);

    if (exists) {
        message.textContent = "Användaren finns redan";
        return;
    }

    users.push({ name, password });
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Registrering lyckades!";
    showLogin();
}

// ===== LOGIN =====
function login() {

    const name = loginName.value.trim();
    const password = loginPassword.value.trim();

    const users = JSON.parse(localStorage.getItem("users"));

    const user = users.find(
        u => u.name === name && u.password === password
    );

    if (!user) {
        message.textContent = "Fel användarnamn eller lösenord";
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    showWelcome(user);
}

// ===== LOGOUT =====
function logout() {
    localStorage.clear();
    showLogin();
}

// ===== AUTO LOGIN =====
function checkLogin() {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
        showWelcome(user);
    }
}

checkLogin();
