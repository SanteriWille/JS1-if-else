// oppgave 1

/*
let x = prompt("er tallet postivt eller negativt?");

if (x >= 0) {
    alert ("Tallet er positivt")
} else {
    alert ("Tallet er negativt")
}
*/

// oppgave 2
/*
let y = prompt("Er tallet oddetall eller partall?")

if (y % 2 === 0) {
    alert("Tallet er partall");
} else {
    alert("Tallet er oddetall");
}
*/

// oppgave 3
/*
let x = prompt("Skriv inn eksamens reusultatet ditt her");

if (x >= 50) {
    alert("Du har bestått eksamen")
} else {
    alert("Du har ikke bestått eksamen")
}
*/

// oppgave 4
/*
let karakter = prompt("Skriv inn eksamens reusultatet ditt her");
let poengsum = parseInt(karakter)

if (!isNaN(poengsum) && poengsum >= 0 && poengsum <= 100) {
    if (poengsum >= 50) {
        alert("Du har bestått eksamen!")
    } 
    else {
        alert("Du har dessverre ikke bestått eksamen")
    } 
}    else {
        alert("Skriv inn et gyldig tall mellom 0 og 100")
    }
*/

// oppgave 5
/*
let ukedag = prompt ("Hvilken dag er det?");

if (ukedag == 1) {
    alert("Det er Mandag");
} else if (ukedag == 2) {
    alert("Det er Tirsdag")
} else if (ukedag == 3) {
    alert("Det er Onsdag")
} else if (ukedag == 4) {
    alert("Det er Torsdag")
} else if (ukedag == 5) {
    alert("Det er Fredag")
} else if (ukedag == 6) {
    alert("Det er Lørdag")
} else if (ukedag == 7) {
    alert("Det er Søndag")
} else {
    alert("Ugyldig ukedag")
}
*/

// oppgave 6
/*
let switchValue = prompt("Skriv inn dag")

switch (parseInt(switchValue)) {
    
    case 1:
        alert("Mandag");
        break;
    case 2:
        alert("Tirsdag");
        break;
    case 3:
        alert("Onsdag");
        break;
    case 4:
        alert("Torsdag");
        break;
    case 5:
        alert("Fredag");
        break;
    case 6:
        alert("Lørdag");
        break;
    case 7:
        alert("Søndag");
        break;    
    default:
        alert("Ugyldig nummer");
}
*/

// oppgave 7
/*
let a = prompt("Skriv inn det første tallet");
let b = prompt("Skriv inn det andre tallet");

a = parseFloat(a);
b = parseFloat(b);

let regne = prompt("Velg måte å regne på: +, -, *, /");

switch (regne) {
    case '+':
        alert(`${a} + ${b} = ${a + b}`);
        break;
    case '-':
        alert(`${a} - ${b} = ${a - b}`);
        break;
    case '*':
        alert(`${a} * ${b} = ${a * b}`);
        break;
    case '/':
        alert(`${a} / ${b} = ${a / b}`);
        break;
    default:
        alert("Ugyldig tegn")
        break;
}
*/

// oppgave 8
/*
let a = prompt("Skriv inn det første tallet");
let b = prompt("Skriv inn det andre tallet");

a = parseFloat(a);
b = parseFloat(b);

if (a > b) {
    alert(`${a} er større enn ${b}`)
} else if (a < b) {
    alert(`${a} er mindre enn ${b}`)
} else {
    alert(`${a} er likt ${b}`)
}
*/

// oppgave 9
/*
let karakter1 = prompt("Skriv inn den første karakteren");
let karakter2 = prompt("Skriv inn den andre karakteren");

karakter1 = parseFloat(karakter1);
karakter2 = parseFloat(karakter2);

sum = karakter1 + karakter2;
average = sum / 2;

if(average >= 50) {
    alert(`Gratulerer du har bestått med poengsum ${average}`);
} else {
    alert(`Du har desverre ikke bestått med poengsum ${average}`);
} 
*/

// oppgave 10,11,12 og 13 må bare endre divisoren
/*
let dividend = prompt("Skriv inn det første tallet");

dividend = parseInt(dividend);

if(dividend % 3 === 0) {
    alert(`${dividend} kan deles i 3`)
} else {
    alert(`${dividend} kan ikke deles i 3`)
}

if (dividend % 5 === 0) {
    alert(`${dividend} kan deles i 5`)
} else {
    alert(`${dividend} kan ikke deles i 5`)
}
*/

// oppgave 14
/*
let num1 = prompt("Skriv inn det første nummeret");
let num2 = prompt("Skriv inn det andre nummeret");
let num3 = prompt("Skriv inn det tredje nummeret");

if (num1 < num2 && num1 < num3) {
  alert(`${num1} er minst av ${num2} og ${num3}`);
} else if (num2 < num1 && num2 < num3) {
  alert(`${num2} er minst av ${num1} og ${num3}`);
} else {
  alert(`${num3} er minst av ${num1} og ${num2}`);
}
*/

// oppgave 15
/*
let bokstav = prompt("Skriv inn en boskstav");
bokstav = bokstav.toLowerCase();

if ("aeiouyæøå".includes(bokstav)) {
    alert(`${bokstav} er en vokal`);
} else if ("bcdfghjklmnpqrstvxz".includes(bokstav)) {
    alert(`${bokstav} er en konsonant`);
} else {
    alert("Dette tegnet er ikke gyldig")
}
*/

// oppgave 16
/*
let farge = prompt("Skriv en av fargene: rød, blå eller grønn");

switch (farge.toLowerCase()) {
    case 'rød':
        document.write(`<p style= "color: red;">Denne teksten er rød</p>`);
        break;
    case 'blå':
        document.write(`<p style= "color: blue;">Denne teksten er blå</p>`);
        break;
    case 'grønn':
        document.write(`<p style= "color: green;">Denne teksten er grønn</p>`);
        break;
    default:
        alert("Ugyldig tegn");
        break;
}
*/