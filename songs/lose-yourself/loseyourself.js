// variables with quantities to 'capture it'
let shot = 1;
let opportunity = 1;
let moment = 1;

// empty array to push values to
let everythingYouEverWanted = [];

let his = {
	palms: "sweaty",
	knees: "weak",
	arms: "heavy"
}

function vomitOnSweater(food) {
	if (food === 'momsSpaghetti') {
		return true;
	}
}

vomitOnSweater('momsSpaghetti');

for (var i in his) {
	console.log(i + " = " + his[i]);
}

function loseyourself() {
	if (shot === 1 || opportunity === 1) {
		console.log('you better lose yourself');
	}
}

loseyourself();