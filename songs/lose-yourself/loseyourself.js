// Title: Lose Yourself
// Artist: Eminem
// Credits: Jeffrey Irwin Bass / Marshall B Mathers / Luis Edgardo Resto


// Look, if you had one shot, or one opportunity
// To seize everything you ever wanted, in one moment

let shot = 1;
let opportunity = 1;
let moment = 1;

let everythingYouEverWanted = [];
const captureIt = () => {
	console.log('capture it')
	const wants = ['Chicken', 'beer']
	return everythingYouEverWanted.push(wants)
}

const letItSlip = () => console.log('error')

if (moment == 1) {
	if (shot == 1 || opportunity == 1) {
		captureIt()
	} else {
		letItSlip()
	}
}

// His palms are sweaty, knees weak, arms are heavy
let his = {
	palms: "sweaty",
	knees: "weak",
	arms: "heavy"
}

for (var i in his) {
	console.log(i + " = " + his[i]);
}

// There's vomit on his sweater already: Mom's spaghetti
function vomitOnSweater(food) {
	if (food === 'momsSpaghetti') {
		return true;
	}
}

vomitOnSweater('momsSpaghetti');


// He's nervous, but on the surface he looks calm and ready to drop bombs
his.mood = (['calm', 'ready', ['nervous']])


// but he keeps on forgetting What he wrote down

function forget(whatHeWroteDown) {
	const arrayOfLetters = whatHeWroteDown.split('')
	// forgets a random letter on each pass of loop
	for (i=0; i <= whatHeWroteDown.length; i++){
		let randIndex = Math.floor(Math.random() * (arrayOfLetters.length - i))
		arrayOfLetters.splice(randIndex, 1).join('')
		console.log(arrayOfLetters.join(''))
	}
}

forget('dude wheres my car')


// the whole crowd goes so loud


function loseyourself() {
	if (shot === 1 || opportunity === 1) {
		console.log('you better lose yourself');
	}
}

loseyourself();