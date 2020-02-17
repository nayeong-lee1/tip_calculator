let button = document.getElementById("button");

function calcTip () {
	let onePay = ((totalBill.value + (totalBill.value * serviceRate.value)) / people.value);
	return onePay;
}

function payResult () {
		let onePay = ((totalBill.value + (totalBill.value * serviceRate.value)) / people.value);
	document.getElementById("result").innerHTML = `Everyone should pay $${onePay}`
}

function tipResult () {
	var tip = totalBill.value * serviceRate.value;
	document.getElementById("tipResult").innerHTML = `Tip was $${tip}.`
}

function showResult() {
	payResult();
	tipResult(); 
}

button.addEventListener("click", showResult);