// define the Student class
class Student {
	constructor(myFirstName, myLastName) {
		// define the properties the student will have
		this.firstName = myFirstName;
		this.lastName = myLastName;
		this.assignmentScores = [];
		this.averageScore = 0;
		this.topScore = 0;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`
	}

	addScore(score) {
		// add the new score to the array
		this.assignmentScores.push(score);

		// call the function to update the average and topScore
		this.updateAverageAndTopScore();
	}

	removeScore(scoreToRemove) {
		// find the index of the score to remove
		let indexToRemove = this.assignmentScores.indexOf(scoreToRemove);
		// call the splice method passing in the index
		this.assignmentScores.splice(indexToRemove, 1);

		// call the function to update the average and topScore
		this.updateAverageAndTopScore();
	}

	updateAverageAndTopScore() {
		// declare variables to hold the running sum and highest score
		let sum = 0;
		let highestScore = this.assignmentScores[0];

		for (let i = 0; i < this.assignmentScores.length; i++) {
			// in the for loop we will add the sum and check the highest value
			sum = sum + this.assignmentScores[i];
			if (this.assignmentScores[i] > highestScore) {
				highestScore = this.assignmentScores[i];
			}
		}

		// update the average score and topScore after the loop finishes.
		this.averageScore = sum / this.assignmentScores.length;
		this.topScore = highestScore;
	}
}

let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let scoreInput = document.getElementById('score-input');
let scoreButton = document.getElementById('score-button');

let fullNameElement = document.getElementById('full-name');
let averageElement = document.getElementById('student-average');
let maxScoreElement = document.getElementById('student-max');
let scoresList = document.getElementById('scores-list');

let myStudent = new Student('', '')

firstNameInput.addEventListener('keyup', function() {
	myStudent.firstName = firstNameInput.value;
	fullNameElement.innerText = myStudent.getFullName();
});

lastNameInput.addEventListener('keyup', function() {
	myStudent.lastName = lastNameInput.value;
	fullNameElement.innerText = myStudent.getFullName();
});

scoreButton.addEventListener('click', function() {
    //grabbing the number input of the score input box
    let scoreToAdd = Number(scoreInput.value);
    //using the addScore method of myStudent to add it to the array property of that students assignment scores
	myStudent.addScore(scoreToAdd);

    
	averageElement.innerText = myStudent.averageScore;
	maxScoreElement.innerText = myStudent.topScore;

	let mySpan = document.createElement('span');
	mySpan.innerText = scoreToAdd;

	let myButton = document.createElement('button');
	myButton.innerText = 'Remove';

	let myLi = document.createElement('li');
	myLi.appendChild(mySpan);
	myLi.appendChild(myButton);
	myLi.id = scoreToAdd;

	scoresList.appendChild(myLi);

	scoreInput.value = '';
});

scoresList.addEventListener('click', function(event) {
	let buttonClicked = event.target;
	let parentListItem = buttonClicked.parentElement;
	let valueToRemove = parentListItem.id;

	myStudent.removeScore(Number(valueToRemove));

	averageElement.innerText = myStudent.averageScore;
	maxScoreElement.innerText = myStudent.topScore;

	parentListItem.remove();

})


