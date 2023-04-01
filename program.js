// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

let minCislo = 1
let maxCislo = 100

window.addEventListener("load", function(){

let pocetPokusu = 0	
let vygenerovaneCislo = nahodneCislo(minCislo, maxCislo);
console.log(vygenerovaneCislo)

let vstupnePolicko = document.querySelector('#number-input');
let odesilaciTlacitko = document.querySelector('#submit-button');
let komunikacniOkenko = document.querySelector('#message')
let leveCislo = document.querySelector("#left-number")
let praveCislo = document.querySelector("#right-number")
// Nastavit místo otazníku uhádnuté číslo - let Hvezda = document.querySelector("#star")
let restartovaciTlacitko = document.querySelector("#play-again-button")

restartovaciTlacitko.addEventListener("click", function(){
	document.location.reload()
})

vstupnePolicko.focus()

function vyhodnotHru () {
	pocetPokusu++
	let hadaneCislo = Number(vstupnePolicko.value);
	
	if (hadaneCislo === vygenerovaneCislo) {
		komunikacniOkenko.innerHTML = "Gratulky, myslel jsem na číslo " + hadaneCislo + "! Uhodl(a) si na " + pocetPokusu + ". pokus."
		// lze i: komunikacniOkenko.innerHTML = "Gratulky, myslel jsem na číslo ${hadaneCislo}!" 
		odesilaciTlacitko.classList.add("hiddenElement")
		restartovaciTlacitko.classList.remove("hiddenElement")
	}
	else if (hadaneCislo > vygenerovaneCislo){
		komunikacniOkenko.innerHTML = "Tvoje hádané číslo " + hadaneCislo + " je větší! Zkus menší číslo."
		praveCislo.innerHTML = hadaneCislo
		// ošetřit aby nemohl hádat 5 a pak 1 -> aby se vždy uložilo to bližší číslo
	}
	else if (hadaneCislo < vygenerovaneCislo) {
		komunikacniOkenko.innerHTML = "Tvoje hádané číslo " + hadaneCislo + " je menší! Zkus větší číslo."
		leveCislo.innerHTML = hadaneCislo
	}

// nastavit, že nemůže výš než 100 a méně než 1

	vstupnePolicko.value = ""
	vstupnePolicko.focus()
}

vstupnePolicko.addEventListener("keypress", function (event){
	if (event.key === "Enter"){
		vyhodnotHru()
	}
})

odesilaciTlacitko.addEventListener("click", function() {
	vyhodnotHru()
});

});