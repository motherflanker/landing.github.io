const DATA = [
    {
        question: 'Question 1',
        answers: [
            {
                id: '1',
                value: 'Answer 1',
                correct: true,
            },
            {
                id: '2',
                value: 'Answer 2',
                correct: false,
            },
            {
                id: '3',
                value: 'Answer 3',
                correct: false,
            },
        ]
    },
    {
        question: 'Question 2',
        answers: [
            {
                id: '4',
                value: 'Answer 4',
                correct: false,
            },
            {
                id: '5',
                value: 'Answer 5',
                correct: true,
            },
            {
                id: '6',
                value: 'Answer 6',
                correct: false,
            },
        ]
    }
];

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const next = document.getElementById('next');
const restart = document.getElementById('restart');

let localres = {};

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.current = index;

    const renderAnswers = () => DATA[index].answers
            .map((answer) => `
                <li>
                    <label>
                        <input type="radio" class="answer-input" name=${index} value=${answer.id}>
                        ${answer.value}
                    </label>
                </li>
            `)
            .join('');
    
    
    questions.innerHTML = `
        <div class="item">
            <div class="question-item">${DATA[index].question}</div>
            <ul class="answer-item">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
    let content = '';

    const GetClassname = (answer, qIndex) => {
        let classname = '';
        if(!answer.correct && answer.id == localres[qIndex]){
            classname = 'answer--invalid';
        }
        else if(answer.correct){
            classname = 'answer-valid';
        }
        return classname;
    };

    const getAnswers = (qIndex) => DATA[qIndex].answers
        .map((answer) => `<li class=${GetClassname(answer, qIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
        <div class="results-item">
            <div class="results-item">${question.question}</div>
            <ul class="results-item">${getAnswers(index)}</ul>
        </div>
        `;
    });
    results.innerHTML = content;
};

const renderIndicator = (current) => {
    indicator.innerHTML = `${current}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if(event.target.classList.contains('answer-input')){
        console.log('input');
        localres[event.target.name] = event.target.value;
        next.disabled = false;
        console.log(localres);
    }
});

quiz.addEventListener('click', (event) => {
    if(event.target.classList.contains('next')){
        const nextQI = Number(questions.dataset.current) + 1;
        console.log('Next');
        
        if(DATA.length == nextQI){
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            next.classList.add('next--hidden');
            restart.classList.add('restart--visible');
            renderResults();
        }
        else{
            renderQuestions(nextQI);
        }

        next.disabled = true;
    }
    if(event.target.classList.contains('restart')){
        results.innerHTML = '';
        localres = {};

        console.log('Go again');

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        next.classList.remove('next--hidden');
        restart.classList.remove('restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);


//==========================================================//

function show_popap(id_popap) {
    var id = "#" + id_popap;
    $(id).addClass('active');
  }
  
  $(".close_popap").click( function(){
    $(".overlay").removeClass("active");
  });


//==========================//


  function show_popap(id_popap) {
    var id = "#" + id_popap;
    $(id).addClass('active');
  }
  
  $(".overlay2").click( function(){
    $(".overlay2").removeClass("active");
  });


//==========================================================//

//=========================низя=============================//
$(function () {
    $('.min').click(function () {
        if ($('nav ul').css('display') == 'none') {
            $('nav ul').slideDown();
        }
        else {
            $('nav ul').slideUp();
        }
    });
});
//=========================низя=============================//



//==========================================================//

document.addEventListener('DOMContentLoaded', name_save);
function name_save(){
    if(localStorage.getItem('user_name')){
        document.querySelector('input#name').value = localStorage.getItem('user_name');
    }
    document.querySelector('input#name').addEventListener('input', function(){
        var name = document.querySelector('input#name').value;
        localStorage.setItem('user_name', name);
    });
}


let firstName = prompt('What is your name?');
alert("Come to the fire then, " + firstName);

//==========================================================//

function zeros(value){
    if (value < 10){
        value='0'+value;
    }
    return value;
}

function date_time(){
    var current_datetime = new Date();
    var day = zeros(current_datetime.getDate());
    var month = zeros(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zeros(current_datetime.getHours());
    var minutes = zeros(current_datetime.getMinutes());
    var seconds = zeros(current_datetime.getSeconds());
                 
    return day+"."+month+"."+year+" "+ '/' +" "+hours+":"+minutes+":"+seconds;
}
            
document.getElementById('datetime').innerHTML = date_time();
setInterval(function () {
    document.getElementById('datetime').innerHTML = date_time();
}, 1000);

//==========================================================//


$(function(){
    $(".button3").click(function(){
        let str1 = prompt("Enter str1");
        let str2 = prompt("Enter str2");
        if(str1 == str2){
            alert("True");
        }
        else alert("False");
    })
});

$(function(){
    $(".button4").click(function(){
        let A = prompt("Enter base");
        let H = prompt("Enter height");
        let s = area(A,H);
        function area(A, H){
            return `Area = ${0.5 * A * H}`;
        }
        alert(s);
    })
});


