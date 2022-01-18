const questions = [
    "Been upset because of something that happened unexpectedly?",
    "Felt that I was unable to control the important things in my life?",
    "Felt nervous and \"stressed\"?",
    "Felt unsure about my ability to handle my personal problems?",
    "Felt that things weren't going my way?",
    "Found that I could not cope with all the things that I had to do?",
    "Been unable to control irritations in my life?",
    "Felt that I was not on top of things?",
    "Been angered because of things that were outside of my control?",
    "Felt difficulties were piling up so high that I could not overcome them?"
]

let totalScore = 0;


//0-10, 11-14, 15-18, 19+
const explanations = [
    "Below average. Congratulations, you seem to be handling life’s stressors well at the moment.",
    "Average. Your life is far from stress-free so now is the time to learn how to reduce your stress to healthier levels.",
    "Medium-High. You may not realize how much stress is already affecting your mood, productivity, and relationships.",
    "High. You’re experiencing high levels of stress. The higher your score, the more damage stress is doing to your mind, body, and behavior.",
]
   
let index = 0;

const progressElem = document.getElementById("progress");
const questionElem = document.getElementById("question");


updateQuestion();

function updateQuestion() {
    questionElem.innerHTML = questions[index++];
}

function submitScore() {
    let scoreElem = document.querySelector('input[name="score"]:checked');
    let score = parseInt(scoreElem.value);
    scoreElem.checked = false;

    progressElem.innerHTML = (index + 1) + "/" + questions.length
    totalScore += score;
    if (index >= questions.length) {
        displayResults();
    } else {
        updateQuestion();
    }
}

function createTable() {
    let table = document.createElement('table');

    let trH = table.insertRow(-1);

    let th1 = document.createElement('th'); // the header object.
    th1.innerHTML = "Score";
    trH.appendChild(th1);

    let th2 = document.createElement('th'); // the header object.
    th2.innerHTML = "Your stress level";
    trH.appendChild(th2);


    let tr = table.insertRow(-1);

    const cell1 = tr.insertCell(-1);
    const cell2 = tr.insertCell(-1);

    cell1.innerHTML = totalScore;
    if (totalScore <= 10) {
        cell2.innerHTML = explanations[0];
    } else if (totalScore <= 14) {
        cell2.innerHTML = explanations[1];
    } else if (totalScore <= 18) {
        cell2.innerHTML = explanations[2];
    } else  {
        cell2.innerHTML = explanations[3];
    }

    // add table to a container.
    return table;
}

function displayResults() {
    document.getElementById("inputDiv").style.display = "none";

    resultDiv = document.getElementById("resultsDiv");
    resultDiv.style.display = "block"

    let table = createTable();
    resultsDiv.appendChild(table);
}

function printPage() {
    window.print();
}






