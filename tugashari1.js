console.log("=== LATIHAN PENJAGA ZOOTOPIA ===\n");

let judy = "Judy Hopps";
let nick = "Nick Wilde";

let judyHri = 3;
let nickHri = 2;

console.log("Jarak lari per hari:");
console.log(judy + ": " + judyHri + " km");
console.log(nick + ": " + nickHri + " km\n");

let totalJudy = 0;
let totalNick = 0;

let day = 1;

while (day <= 5) {
    totalJudy += judyHri;
    totalNick += nickHri;

    console.log("Hari " + day + ":");
    console.log("- " + judy + " lari " + judyHri + " km");
    console.log("- " + nick + " lari " + nickHri + " km\n");

    day++;
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(judy + ": " + totalJudy + " km");
console.log(nick + ": " + totalNick + " km");
