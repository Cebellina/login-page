// Skapar användare
const user = {
name: "test",
password: "1234"
};

localStorage.setItem("user", JSON.stringify(user));


// Inloggning
function login() {
const inputName = document.getElementById("username").value;
const inputPassword = document.getElementById("password").value;
const storedUser = JSON.parse(localStorage.getItem("user"));

if (inputName === storedUser.name && inputPassword === storedUser.password) {
document.getElementById("message").textContent = "Inloggning lyckades!";
} 
    
else {
document.getElementById("message").textContent = "Fel användarnamn eller lösenord.";
}
}