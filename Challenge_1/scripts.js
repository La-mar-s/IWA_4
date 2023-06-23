const date = 2050;
const status = "student";
let count = 0;

if (date === 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');
	const newDate = 'April';
	console.log(newDate, 'Family Day');
	console.log(newDate, 'Freedom Day');
	count += 4;

	if (status === "student") {
	  console.log('June', 'Youth Day');
		count += 1;
	}

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	const finalDate = 'December';
	console.log(finalDate, 'Day of Reconciliation');
	count += 3;

	if (status === "parent") {
	  console.log(finalDate, 'Christmas Day');
		count += 1;
	}

	console.log(finalDate, 'Day of Goodwill');
	count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', date);
console.log('The total holidays is:', count);
