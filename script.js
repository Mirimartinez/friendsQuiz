const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '¿Cuántas temporadas tuvo la serie? ',
    answers: [
      { text: '10', correct: true },
      { text: '12', correct: false }
    ]
  },
  {
    question: '¿Cuál es el trabajo de Richard?',
    answers: [
      { text: 'Oftalmólogo', correct: true },
      { text: 'Médico', correct: false },
      { text: 'Radiólogo', correct: false },
      { text: 'Cocinero', correct: false }
    ]
  },
  {
    question: '¿Qué mascota tenía Ross?',
    answers: [
      { text: 'Un perro llamado Keith', correct: false },
      { text: 'Un conejo llamado Lancelot', correct: false },
      { text: 'Un mono llamado Marcel', correct: true },
      { text: 'Un lagarto llamado Alistair', correct: false }
    ]
  },
  {
    question: '¿Cuál es el nombre del restaurante temático de los años 1950 donde Mónica trabajaba como camarera?',
    answers: [
      { text: 'Marilyn y Audrey', correct: false },
      { text: 'Galaxia crepuscular', correct: false },
      { text: 'Diner Moondance', correct: true },
      { text: 'De Marvin', correct: false }
    ]
  },
  {
    question: '¿Cómo se llama el pingüino de Joey?',
    answers: [
      { text: 'Copo de nieve', correct: false },
      { text: 'Anadear', correct: false },
      { text: 'Corcho', correct: false },
      { text: 'Huggsy', correct: true }
    ]
  },
  {
    question: '¿Cómo se llama el primer marido de Janice?',
    answers: [
      { text: 'Gary Litman', correct: true },
      { text: 'Sid Goralnik', correct: false },
      { text: 'Rob Bailystock', correct: false },
      { text: 'Nick Layster', correct: false }
    ]
  },
  {
    question: '¿Qué cosa nunca comparte Joey?',
    answers: [
      { text: 'Sus libros', correct: false },
      { text: 'Sus DVD', correct: false },
      { text: 'Su información', correct: false },
      { text: 'Su comida', correct: true }
    ]
  },
  {
    question: '¿Cuál es el segundo nombre de Chandler?',
    answers: [
      { text: 'Muriel', correct: true },
      { text: 'Jason', correct: false },
      { text: 'Kim', correct: false },
      { text: 'Zachary', correct: false }
    ]
  },
  {
    question: '¿Qué personaje de Friends interpreta al Dr. Drake Ramoray en el programa Days Of Our Lives?',
    answers: [
      { text: 'Ross Geller', correct: false },
      { text: 'Pete Becker', correct: false },
      { text: 'Eddie Menuek', correct: false },
      { text: 'Joey Tribbiani', correct: true }
    ]
  },
  {
    question: '¿De qué trabaja Ross?',
    answers: [
      { text: 'Paleontólogo', correct: true },
      { text: 'Artist', correct: false },
      { text: 'Fotógrafa', correct: false },
      { text: 'Vendedor de seguros', correct: false }
    ]
  },
  {
    question: '¿A quién se dirigía siempre la revista de televisión de Chandler?',
    answers: [
      { text: 'Chanandler Bong', correct: true },
      { text: 'Chanandler Bang', correct: false },
      { text: 'Chandler Bing', correct: false },
      { text: 'Chandler Beng', correct: false }
    ]
  },
  {
    question: '¿Qué es más probable que diga Janice?',
    answers: [
      { text: '¡Tráeme un café!', correct: false },
      { text: '¡Háblale a la mano!', correct: false },
      { text: '¡De ninguna manera!', correct: false },
      { text: '¡Oh Dios mío!', correct: true }
    ]
  },
  {
    question: '¿Cómo se llama la persona gruñona que trabaja en la cafetería?',
    answers: [
      { text: 'Herman', correct: false },
      { text: 'Gunther', correct: true },
      { text: 'Frasier', correct: false },
      { text: 'Eddie', correct: false }
    ]
  },
  {
    question: '¿Quién interpreta el tema de Friends?',
    answers: [
      { text: 'Aerosmith', correct: false },
      { text: 'The Rembrandts', correct: true },
      { text: 'Queen', correct: false },
      { text: 'Foo fighters', correct: false }
    ]
  },
  {
    question: '¿Qué tipo de uniforme usa Joey para la boda de Monica y Chandler?',
    answers: [
      { text: 'Cocinero', correct: false },
      { text: 'Un jugador de beisbol', correct: false },
      { text: 'Soldado', correct: true },
      { text: 'Bombero', correct: false }
    ]
  },
  {
    question: 'Mónica sale brevemente con el multimillonario Pete Becker. ¿En qué país la lleva a su primera cita?',
    answers: [
      { text: 'Francia', correct: false },
      { text: 'Inglaterra', correct: false },
      { text: 'Italia', correct: true },
      { text: 'Grecia', correct: false }
    ]
  }
]

// const TWO_PI = Math.PI * 2;
// const HALF_PI = Math.PI * 0.5;

// // canvas settings
// var viewWidth = 512,
//     viewHeight = 512,
//     drawingCanvas = document.getElementById("drawing_canvas"),
//     ctx,
//     timeStep = (1/60);

// Point = function(x, y) {
//     this.x = x || 0;
//     this.y = y || 0;
// };

// Particle = function(p0, p1, p2, p3) {
//     this.p0 = p0;
//     this.p1 = p1;
//     this.p2 = p2;
//     this.p3 = p3;

//     this.time = 0;
//     this.duration = 3 + Math.random() * 2;
//     this.color =  '#' + Math.floor((Math.random() * 0xffffff)).toString(16);

//     this.w = 8;
//     this.h = 6;

//     this.complete = false;
// };

// Particle.prototype = {
//     update:function() {
//         this.time = Math.min(this.duration, this.time + timeStep);

//         var f = Ease.outCubic(this.time, 0, 1, this.duration);
//         var p = cubeBezier(this.p0, this.p1, this.p2, this.p3, f);

//         var dx = p.x - this.x;
//         var dy = p.y - this.y;

//         this.r =  Math.atan2(dy, dx) + HALF_PI;
//         this.sy = Math.sin(Math.PI * f * 10);
//         this.x = p.x;
//         this.y = p.y;

//         this.complete = this.time === this.duration;
//     },
//     draw:function() {
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.r);
//         ctx.scale(1, this.sy);

//         ctx.fillStyle = this.color;
//         ctx.fillRect(-this.w * 0.5, -this.h * 0.5, this.w, this.h);

//         ctx.restore();
//     }
// };

// Loader = function(x, y) {
//     this.x = x;
//     this.y = y;

//     this.r = 24;
//     this._progress = 0;

//     this.complete = false;
// };

// Loader.prototype = {
//     reset:function() {
//         this._progress = 0;
//         this.complete = false;
//     },
//     set progress(p) {
//         this._progress = p < 0 ? 0 : (p > 1 ? 1 : p);

//         this.complete = this._progress === 1;
//     },
//     get progress() {
//         return this._progress;
//     },
//     draw:function() {
//         ctx.fillStyle = 'transparent';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, -HALF_PI, TWO_PI * this._progress - HALF_PI);
//         ctx.lineTo(this.x, this.y);
//         ctx.closePath();
//         ctx.fill();
//     }
// };

// // pun intended
// Exploader = function(x, y) {
//     this.x = x;
//     this.y = y;

//     this.startRadius = 24;

//     this.time = 0;
//     this.duration = 0.4;
//     this.progress = 0;

//     this.complete = false;
// };

// Exploader.prototype = {
//     reset:function() {
//         this.time = 0;
//         this.progress = 0;
//         this.complete = false;
//     },
//     update:function() {
//         this.time = Math.min(this.duration, this.time + timeStep);
//         this.progress = Ease.inBack(this.time, 0, 1, this.duration);

//         this.complete = this.time === this.duration;
//     },
//     draw:function() {
//         ctx.fillStyle = 'transparent';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.startRadius * (1 - this.progress), 0, TWO_PI);
//         ctx.fill();
//     }
// };

// var particles = [],
//     loader,
//     exploader,
//     phase = 0;

// function initDrawingCanvas() {
//     drawingCanvas.width = viewWidth;
//     drawingCanvas.height = viewHeight;
//     ctx = drawingCanvas.getContext('2d');

//     createLoader();
//     createExploader();
//     createParticles();
// }

// function createLoader() {
//     loader = new Loader(viewWidth * 0.5, viewHeight * 0.5);
// }

// function createExploader() {
//     exploader = new Exploader(viewWidth * 0.5, viewHeight * 0.5);
// }

// function createParticles() {
//     for (var i = 0; i < 128; i++) {
//         var p0 = new Point(viewWidth * 0.5, viewHeight * 0.5);
//         var p1 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
//         var p2 = new Point(Math.random() * viewWidth, Math.random() * viewHeight);
//         var p3 = new Point(Math.random() * viewWidth, viewHeight + 64);

//         particles.push(new Particle(p0, p1, p2, p3));
//     }
// }

// function update() {

//     switch (phase) {
//         case 0:
//             loader.progress += (1/45);
//             break;
//         case 1:
//             exploader.update();
//             break;
//         case 2:
//             particles.forEach(function(p) {
//                 p.update();
//             });
//             break;
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, viewWidth, viewHeight);

//     switch (phase) {
//         case 0:
//             loader.draw();
//             break;
//         case 1:
//             exploader.draw();
//             break;
//         case 2:
//             particles.forEach(function(p) {
//                 p.draw();
//             });
//         break;
//     }
// }

// window.onload = function() {
//     initDrawingCanvas();
//     requestAnimationFrame(loop);
// };

// function loop() {
//     update();
//     draw();

//     if (phase === 0 && loader.complete) {
//         phase = 1;
//     }
//     else if (phase === 1 && exploader.complete) {
//         phase = 2;
//     }
//     else if (phase === 2 && checkParticlesComplete()) {
//         // reset
//         phase = 0;
//         loader.reset();
//         exploader.reset();
//         particles.length = 0;
//         createParticles();
//     }

//     requestAnimationFrame(loop);
// }

// function checkParticlesComplete() {
//     for (var i = 0; i < particles.length; i++) {
//         if (particles[i].complete === false) return false;
//     }
//     return true;
// }

// // math and stuff

// /**
//  * easing equations from http://gizma.com/easing/
//  * t = current time
//  * b = start value
//  * c = delta value
//  * d = duration
//  */
// var Ease = {
//     inCubic:function (t, b, c, d) {
//         t /= d;
//         return c*t*t*t + b;
//     },
//     outCubic:function(t, b, c, d) {
//         t /= d;
//         t--;
//         return c*(t*t*t + 1) + b;
//     },
//     inOutCubic:function(t, b, c, d) {
//         t /= d/2;
//         if (t < 1) return c/2*t*t*t + b;
//         t -= 2;
//         return c/2*(t*t*t + 2) + b;
//     },
//     inBack: function (t, b, c, d, s) {
//         s = s || 1.70158;
//         return c*(t/=d)*t*((s+1)*t - s) + b;
//     }
// };

// function cubeBezier(p0, c0, c1, p1, t) {
//     var p = new Point();
//     var nt = (1 - t);

//     p.x = nt * nt * nt * p0.x + 3 * nt * nt * t * c0.x + 3 * nt * t * t * c1.x + t * t * t * p1.x;
//     p.y = nt * nt * nt * p0.y + 3 * nt * nt * t * c0.y + 3 * nt * t * t * c1.y + t * t * t * p1.y;

//     return p;
// }