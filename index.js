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
// بعد الحصول على البيانات من الصفحة الويب
const formData = new FormData();
formData.append('first_direction', firstDirection);
formData.append('no_direction', noDirection);
formData.append('last_direction', lastDirection);
formData.append('no_counter', noCounter);

fetch('save_user_data.php', {
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