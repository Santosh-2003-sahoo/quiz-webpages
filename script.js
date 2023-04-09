const quizDB = [
    {
        question: "Q1: what is the fullform of HTML?",
        a: "Hello To My Land",
        b: "Hypertext Markup Land",
        c: "hey Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: what is the fullform of CSS?",
        a: "Cascading Style Sheet",
        b: "Clear Style Sheet",
        c: "Cascading Sheet Style",
        d: "none of the above",
        ans: "ans1"
    },
    {
        question: "Q3: what is the fullform of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },

];

const question = document.querySelector('.question');
const options1 = document.querySelector('#option1');
const options2 = document.querySelector('#option2');
const options3 = document.querySelector('#option3');
const options4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.ans');

const showscore= document.querySelector('#showscore');

let questionCount = 0;
let score=0;
const loadQuestion =() => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    options1.innerText = questionList.a;
    options2.innerText = questionList.b;
    options3.innerText = questionList.c;
    options4.innerText = questionList.d;

}
loadQuestion();

const getChecked = () => {
    let answer;

    answers.forEach((curAnsElem) =>  {
        if(curAnsElem.checked){
            answer = curAnsElem.id; 
        } 
    });
    return answer;
};

const deselectall = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked =false);
};

submit.addEventListener('click', () => {
    const checkedAnswer = getChecked();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectall();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML = `
            <h3> Your Score ${score}/${quizDB.length} ✌️😁 </h3>
            <button class="btn" onclick="location.reload()" > Play Again </button>
        `;
        showscore.classList.remove('scorearea');
    }
});



