// Select the HTML elements
const triangle = document.querySelector('.triangle');
const displayElement = document.querySelector('.display');
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
const restartButton = document.querySelector('.restart-button');
const forwardButton = document.querySelector('#forward');
const backwardButton = document.querySelector('#backward');
const leftButton = document.querySelector('#lift');
const rightButton = document.querySelector('#right');

// Initializing the variables
let currentStep = 1;

// Function to move the triangle
function moveTriangle(direction, steps = 1) {
  switch (direction) {
    case 'forward':
      triangle.style.top = `${triangle.offsetTop - (steps * 10)}px`;
      break;
    case 'backward':
      triangle.style.top = `${triangle.offsetTop + (steps * 10)}px`;
      break;
    case 'left':
      triangle.style.left = `${triangle.offsetLeft - (steps * 10)}px`;
      break;
    case 'right':
      triangle.style.left = `${triangle.offsetLeft + (steps * 10)}px`;
      break;
  }

  // Check if the triangle has gone out of the frame
  const frame = document.querySelector('.frame');
  if (
    (triangle.offsetLeft-15) < 0 ||
    triangle.offsetLeft + triangle.offsetWidth > (frame.offsetWidth+17) ||
    (triangle.offsetTop-10) < 0 ||
    triangle.offsetTop + triangle.offsetHeight > (frame.offsetHeight+13)
  ) {
    alert('tringale out of frame!');
    resetTriangle();
  }
}


// Function to reset the triangle
function resetTriangle() {
  triangle.style.left = '50%';
  triangle.style.top = '50%';
  triangle.style.transform = 'translate(-50%, -50%)';
  currentStep = 1;
  displayElement.textContent = currentStep;
}

incrementButton.addEventListener('click', () => {
    if (currentStep < 3) {
      currentStep++;
      displayElement.textContent = currentStep;
    }
  });
  
  decrementButton.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      displayElement.textContent = currentStep;
    }
  });

// Button events
forwardButton.addEventListener('click', () => {
 if (currentStep==1)   {
  moveTriangle('forward', currentStep);}
  else if(currentStep==2){
    moveTriangle('forward', currentStep);
    moveTriangle('forward', currentStep);
  }else if(currentStep==3){
    moveTriangle('forward', currentStep);
    moveTriangle('forward', currentStep);
    moveTriangle('forward', currentStep);}
});

backwardButton.addEventListener('click', () => {
    if (currentStep==1)   {
    moveTriangle('backward', currentStep);}
    else if(currentStep==2){
        moveTriangle('backward', currentStep);
        moveTriangle('backward', currentStep);
    }else if(currentStep==3){
        moveTriangle('backward', currentStep);
        moveTriangle('backward', currentStep);
        moveTriangle('backward', currentStep);}
  
});

leftButton.addEventListener('click', () => {
    if (currentStep==1)   {
    moveTriangle('left', currentStep);}
    else if(currentStep==2){
        moveTriangle('left', currentStep);
        moveTriangle('left', currentStep);
    }else if(currentStep==3){
        moveTriangle('left', currentStep);
        moveTriangle('left', currentStep);
        moveTriangle('left', currentStep);}
});

rightButton.addEventListener('click', () => {
    if (currentStep==1)   {
    moveTriangle('right', currentStep);}
    else if(currentStep==2){
        moveTriangle('right', currentStep);
        moveTriangle('right', currentStep);
    }else if(currentStep==3){
        moveTriangle('right', currentStep);
        moveTriangle('right', currentStep);
        moveTriangle('right', currentStep);}
});


restartButton.addEventListener('click', () => {
  resetTriangle();
});




const restartBtn = document.getElementById('restart-button');
restartBtn.addEventListener('click', () => {
  // زيادة قيمة id بواحد
  id++;
  // تعيين القيم الابتدائية للمتغيرات
  firstDirection = '';
  noDirection = 0;
  lastDirection = '';
  noCounter = 0;
  
  // إرسال البيانات الجديدة إلى الخادم
  const formData = new FormData();
  formData.append('id', id);
  formData.append('first_direction', firstDirection);
  formData.append('no_Tdirection', noDirection);
  formData.append('last_direction', lastDirection);
  formData.append('no_TCounte', noCounter);

  fetch('index.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data); // عرض رسالة التحقق من ملف PHP
  })
  .catch(error => {
    console.error('Error:', error);
  });
});




/*
//AJAX/fetch usage.
//  بعد الحصول على البيانات من الصفحة الويب(غير اكيد يعتبر خاطئ) غير اكيد
const firstDirectionBtn = document.getElementById('forward');
const liftBtn = document.getElementById('lift');
const rightBtn = document.getElementById('right');
const backwardBtn = document.getElementById('backward');
const restartBtn = document.getElementById('restart-button');

let id = 0;
let firstDirection = '';
let noDirection = 0;
let lastDirection = '';
let noCounter = 0;

firstDirectionBtn.addEventListener('click', () => {
  if(firstDirection = 'forward'){
    noDirection++;
    lastDirection = 'forward';
  } else if(firstDirection = 'lift'){
    noDirection++;
    lastDirection = 'lift';
  } else if(firstDirection = 'right'){
    noDirection++;
    lastDirection = 'right';
  } else if(firstDirection = 'backward'){
    noDirection++;
    lastDirection = 'backward';
  }
});

const formData = new FormData();
formData.append('first_direction', firstDirection);
formData.append('no_Tdirection', noDirection);
formData.append('last_direction', lastDirection);
formData.append('no_TCounte', noCounter);

fetch('index.php', {
  method: 'POST',
  body: formData
})
.then(response => response.text())
.then(data => {
  console.log(data); // عرض رسالة التحقق من ملف PHP
})
.catch(error => {
  console.error('Error:', error);
});*/
/*
$.ajax({
  url: "@routes.PostOfficeController.createRoute()",//php
  method: "POST",
  data: "first_direction="+valueOfSelect
}).success(function(response){
   $("#trackForm").show();
  var select = document.getElementById('selectOffice'); //get the select element
  var respJson = JSON.parse(response); //get the response (in text) and transform to JSON object
  respJson.forEach(function(item, itemIndex){ //for in the JSON object
     var opt = document.createElement('option') //create a new option element
     opt.value = item.value; //set the value of otion (NOTE: item.value, where "value" is the parameter os the yout value in the JSON
     opt.innerHTML = item.text;
     select.appendChild(opt); //appende the option in to the select
   })            

}).error(function(response){
  alert(response + valueOfSelect);
})*/