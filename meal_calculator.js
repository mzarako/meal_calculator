function Diner(name, firstDish, secondDish) {
	this.name = name;
	this.firstDish = firstDish;
	this.secondDish = secondDish;
}

Diner.prototype.getDishTotal = function() {
	var dinerDishesTotal = this.firstDish[1] + this.secondDish[1];
	return dinerDishesTotal;
}

Diner.prototype.getTax = function() {
	var tax = 0.09;
	var dinerDishesTotal = this.getDishTotal();
	var dinerTax = tax * dinerDishesTotal;
	return dinerTax;
}

Diner.prototype.getTip = function() {
	var tip = 0.2;
	var dinerDishesTotal = this.getDishTotal();
	var dinerTax = this.getTax();
	var dinerTip = (dinerDishesTotal + dinerTax) * tip;
	return dinerTip;
}

function Bill(diners) {
	this.diners = diners;
}

Bill.prototype.getTotalWithTax = function() {
	var total = 0;
	for (var i = 0; i < 3; i++) {
		total += this.diners[i].getDishTotal() + this.diners[i].getTax();
	}
	total = total.toFixed(2);
	console.log("The total with tax is $" + total);
	return total;
}

Bill.prototype.getTips = function() {
	var tips = 0; 
	for (var i = 0; i < 3; i++) {
		tips += this.diners[i].getTip();
	}
	tips = tips.toFixed(2);
	console.log("The combined tip is $" + tips);
	return tips;
}

Bill.prototype.printBreakdown = function() {
	for (var i = 0; i < 3; i++) {
		var name = this.diners[i].name;
		var total = this.diners[i].getDishTotal();
		var tax = this.diners[i].getTax();
		var tip = this.diners[i].getTip();
		console.log("Name: " + name + ", Total: $" + total.toFixed(2) + ", Tax: $" + tax.toFixed(2) + ", Tip: $" + tip.toFixed(2));
	} 
}


function goToDinner() {
	var monikaFirstDish = ["Papaya Salad", 7.95];
	var monikaSecondDish = ["Green Curry", 11.95];
	var monika = new Diner("Monika", monikaFirstDish, monikaSecondDish);

	var jasonFirstDish = ["Tom Kah", 3.95];
	var jasonSecondDish = ["Pumpkin Curry", 12.95];
	var jason = new Diner("Jason", jasonFirstDish, jasonSecondDish);

	var rockyFirstDish = ["Salted Tuna", 1.95];
	var rockySecondDish = ["Raw Ground Rabbit", 3.95];
	var rocky = new Diner("Rocky", rockyFirstDish, rockySecondDish);

	var ourBill = new Bill([monika, jason, rocky]);

	ourBill.getTotalWithTax();
	ourBill.getTips();
	ourBill.printBreakdown();
}

goToDinner();

