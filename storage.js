localStorage.setItem("userName", "test");
localStorage.setItem("userPassword", "1234");

const userName = localStorage.getItem("userName");

console.log(userName);

// localStorage.removeItem("userName");
localStorage.clear();

console.log(localStorage.getItem("userName"));
console.log(localStorage.getItem("userPassword"));


// JSON.stringify() - konverterar ett JavaScript-objekt till en JSON-sträng

const user = {
name: "test",
password: "1234"
};

const userString = JSON.stringify(user);

localStorage.setItem("user", JSON.stringify(user));

// JSON.parse() - konverterar en JSON-sträng tillbaka till ett JavaScript-objekt  