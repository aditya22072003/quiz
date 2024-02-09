var questions = [
    { "que": "What is the capital of india?", "ans": [{ "a": "Hyderabad", "correct": false }, { "a": "Mumbai", "correct": false }, { "a": "Goa", "correct": false }, { "a": "Delhi", "correct": true }] },
    { "que": "Where  is Taj Mahal located?", "ans": [{ "a": "Allahabad", "correct": false }, { "a": "Bareilly", "correct": false }, { "a": "Agra", "correct": true }, { "a": "Delhi", "correct": false }] },
    { "que": "New born baby is called?", "ans": [{ "a": "Infant", "correct": true }, { "a": "Toddler", "correct": false }, { "a": "Teenager", "correct": false }, { "a": "Adult", "correct": false }] },
    { "que": "What is the synonym of charity?", "ans": [{ "a": "Kindness", "correct": false }, { "a": "Mercy", "correct": false }, { "a": "Benifaction", "correct": true }, { "a": "Grace", "correct": false }] },
   
    { "que": "What is the orange part of egg called?", "ans": [{ "a": "shell", "correct": false }, { "a": "seed", "correct": false }, { "a": "yolk", "correct": true }, { "a": "white Shell", "correct": false }] },
    
    { "que": "What is the closet planet to earth?", "ans": [{ "a": "Jupiter", "correct": false }, { "a": "Mercury", "correct": true }, { "a": "Venus", "correct": false}, { "a": "Mars", "correct": false }] },

    { "que": "how many days are there in a leap year?", "ans": [{ "a": "378", "correct": false }, { "a": "300", "correct": false }, { "a": "366", "correct": true }, { "a": "365", "correct": false }] },
    { "que": "Which animal lays the largest egg ?", "ans": [{ "a": "Ostrich", "correct": true }, { "a": "Peacock", "correct": false }, { "a": "Snake", "correct": false}, { "a": "Penguine", "correct": false }] },
    { "que": "What is the shape with 5 sides called ?", "ans": [{ "a": "Hexagon", "correct": false }, { "a": "Pentagon", "correct": true}, { "a": "Octagon", "correct":false }, { "a": "Trapezium", "correct": false }] },
    { "que": "What is the baby of kangaroo called ?", "ans": [{ "a": "Joey", "correct": true }, { "a": "Calf", "correct": false }, { "a": "Kitten", "correct": false }, { "a": "Puppy", "correct": false }] }
]

var currentQuestion = 0;
var score = 0;

var correct=new Audio("correct.mp3");
var wrong=new Audio("wrong.mp3");
var over=new Audio("over.wav");
var box=document.querySelector("#box");
var ques = document.querySelector("#ques");
var ans1 = document.querySelector("#ans1");
var ans2 = document.querySelector("#ans2");
var ans3 = document.querySelector("#ans3");
var ans4 = document.querySelector("#ans4");
var btn = document.querySelector("#btn");


//FOR NEXT QUESTION

function nextQuestion() {

    ques.innerHTML = `${currentQuestion + 1}. ${questions[currentQuestion].que}`;
    ans1.innerHTML = `a. <input type="radio" name="ans" value="${questions[currentQuestion].ans[0].a}"> ${questions[currentQuestion].ans[0].a}`;
    ans2.innerHTML = `b. <input type="radio" name="ans" value="${questions[currentQuestion].ans[1].a}"> ${questions[currentQuestion].ans[1].a}`;
    ans3.innerHTML = `c. <input type="radio" name="ans" value="${questions[currentQuestion].ans[2].a}">${questions[currentQuestion].ans[2].a}`;
    ans4.innerHTML = `d. <input type="radio" name="ans" value="${questions[currentQuestion].ans[3].a}">${questions[currentQuestion].ans[3].a}`;

    // console.log(questions[0].que);
    // console.log(questions);
    //currenQuestion;
   
    checkAnswer();
    //currenQuestion++;

}


nextQuestion();


function Question() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        nextQuestion();
       
    }
    else {
        //alert(score);
        ques.remove();
        ans1.remove();
        ans2.remove();
        ans3.remove();
        btn.remove();

        over.play();
       
        box.innerHTML=`<img src="pic.gif"><h3>Your score is : ${score}</h3>`

    }
}


//Function for checking answer:

function checkAnswer() {

    //const ansSelected = document.querySelector("input[name='ans']:checked").value;
    const selectedAns = document.querySelector('input[name="ans"]:checked').value;
   // console.log(selectedAns);
    if (currentQuestion < questions.length) {
        for (let i = 0; i < questions[currentQuestion].ans.length; i++) {

            if (questions[currentQuestion].ans[i].correct && questions[currentQuestion].ans[i].a == selectedAns) {
                score++;
                correct.play();
                //console.log("correct");
            }
            else{
                //console.log("wrong");
                //wrong.play();
            }
        }
        Question();

    }

   
  
    
}