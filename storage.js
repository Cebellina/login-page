// Skapa/spara användare 
const user = {
    name: "test",
    password: "1234"
};

localStorage.setItem("user", JSON.stringify(user));


// Hämta användare i localStorage 
const storedUser = JSON.parse(localStorage.getItem("user"));

console.log("Användarnamn:", storedUser.name);
console.log("Lösenord:", storedUser.password);


// Uppdatera lösenord i localStorage 
function updatePassword(newPassword) {
const user = JSON.parse(localStorage.getItem("user"));

if (!user) return;
user.password = newPassword;
localStorage.setItem("user", JSON.stringify(user));
}


// Testa uppdatering 
updatePassword("5678");

const updatedUser = JSON.parse(localStorage.getItem("user"));
console.log("Uppdaterat lösenord:", updatedUser.password);