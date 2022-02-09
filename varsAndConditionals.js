/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/
let eowynAttack = 50;
let witchKingAttack = 45;

if (eowynAttack > witchKingAttack) {
    console.log("Eowyn is stronger.");
} else if (witchKingAttack > eowynAttack) {
    console.log("Witch King is stronger.");
}
else {
    console.log("They are the same strength.");
};

let eowynHealth = 100;
let eowynDefense = 0;

if (eowynHealth + eowynDefense <= witchKingAttack) {
    console.log("Eown does not survive the attack.");
}
else {
    eowynHealth -= witchKingAttack - eowynDefense;
    console.log(`She is down to ${eowynHealth}`);
};

let coinLandsHeads = false;

if (coinLandsHeads === true) {
    console.log("Witch King gets to run away.");
} else {
    console.log("Witch king got stabbed in the face.");
};
eowynHealth = 100;

// for (let i = 0; i<5; i++) {
//     if (eowynHealth > 0) {
//         eowynHealth -= witchKingAttack;
//         console.log(`Eowyn has ${eowynHealth} left.`);
//     }
//     else {
//         console.log("Eowyn did not survive the previous attack.");
//     }

// }

while (eowynHealth > 0) {
    eowynHealth -= witchKingAttack;
    if (eowynHealth <= 0) {
        console.log(`Eowyn has been slain.`)
    }
    else {
        console.log(`Eowyn has ${eowynHealth} health left.`)
    }
}