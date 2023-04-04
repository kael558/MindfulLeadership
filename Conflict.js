const questions = [
	"Instead of getting into an argument, I put off certain discussions.",
	"When someone doesn't deliver on a promise, I judge them more quickly than I should.",
	"Sometimes I bring up difficult subjects in a way that makes people defensive.",
	"Let's be honest: there are people I deal with who simply cannot be motivated or influenced.",
	"When someone is struggling, I tend to offer advice, even though they may just want to have someone listen to their ideas.",
	"When discussing problems, I sometimes get sidetracked and miss the actual problem.",
	"There are some people I simply cannot work with.",
	"Sometimes it's not them being difficult, it's me.",
	"I prefer to just jump in and have the conversation, rather than spending a lot of time planning for it.",
	"I know that I have to have conversations about a difficult situation or a conflict, but I am not motivated to do so and do not like to have them.",
];

let totalScore = 0;

//0, 1-3, 4-6, 7-10
const explanations = [
	`You are a mindfully self-aware person who can put things in perspective and
    develop positive relationships.`,
	`You are mindful, aware and managing well and likely successful in dealing with
    difficult people and situations. Trust you will learn a few more mindfulness tools to
    use on a day to day basis, as self-awareness and learning is a journey of a lifetime.`,
	`You have some improvement work to do in confronting difficult situations.
    Becoming more mindful and aware of the fact that there is room for improvement
    may motivate you to take some positive action.`,
	`There are probably some root causes for the high score that we can address
    through the foundation of mindfulness tools. You have to put a mirror on yourself
    to take responsibility to make some internal changes in the way you interact with
    people in difficult situations. Self-awareness and change can be a slow process that
    needs patience, persistence and practice.`,
];

let index = 0;

const progressElem = document.getElementById("progress");
const questionElem = document.getElementById("question");

updateQuestion();

function updateQuestion() {
	questionElem.innerHTML = questions[index++];
}

function onYes() {
	totalScore += 1;
	progressElem.innerHTML = index + 1 + "/" + questions.length;
	if (index >= questions.length) {
		displayResults();
	} else {
		updateQuestion();
	}
}

function onNo() {
	progressElem.innerHTML = index + 1 + "/" + questions.length;

	if (index >= questions.length) {
		displayResults();
	} else {
		updateQuestion();
	}
}

document.getElementById("yes-btn").onclick = onYes;
document.getElementById("no-btn").onclick = onNo;

function createTable() {
	let table = document.createElement("table");

	let trH = table.insertRow(-1);

	let th1 = document.createElement("th"); // the header object.
	th1.innerHTML = "Score";
	trH.appendChild(th1);

	let th2 = document.createElement("th"); // the header object.
	th2.innerHTML = "Your stress level";
	trH.appendChild(th2);

	let tr = table.insertRow(-1);

	const cell1 = tr.insertCell(-1);
	const cell2 = tr.insertCell(-1);

	cell1.innerHTML = totalScore; //0, 1-3, 4-6, 7-10
	if (totalScore == 0) {
		cell2.innerHTML = explanations[0];
	} else if (totalScore <= 3) {
		cell2.innerHTML = explanations[1];
	} else if (totalScore <= 6) {
		cell2.innerHTML = explanations[2];
	} else {
		cell2.innerHTML = explanations[3];
	}

	// add table to a container.
	return table;
}

function displayResults() {
	document.getElementById("inputDiv").style.display = "none";

	resultDiv = document.getElementById("resultsDiv");
	resultDiv.style.display = "block";

	let table = createTable();
	resultsDiv.appendChild(table);
}

function printPage() {
	window.print();
}
