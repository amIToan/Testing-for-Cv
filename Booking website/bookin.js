// Creat drop-button
let dropBtn = document.querySelector('#drop-btn');
let dropBar = document.querySelector('.drop-bar');
dropBtn.addEventListener('click', function() {
  if (dropBar.style.display == 'none') {
    dropBar.style.display  = 'block';
  } else {
    dropBar.style.display = 'none';
  };
});
// decrement and increment button
let valueOfText = document.getElementById('value').innerHTML;
document.getElementById('replace-1').innerHTML = valueOfText + " adult";
let disaBle = document.querySelector('#decrebtn');
let inCrement = document.querySelector('#increbtn');  // chi chon d 1id duy nhat dau tien.
inCrement.addEventListener('click', () => {
  event.preventDefault();
  disaBle.disabled = false;
  valueOfText++;
  document.getElementById('value').innerHTML = valueOfText;
  document.getElementById('replace-1').innerHTML = valueOfText + " adults";
});
disaBle.addEventListener('click', () => {
  event.preventDefault();
  valueOfText--;
  document.getElementById('value').innerHTML = valueOfText;
  document.getElementById('replace-1').innerHTML = valueOfText + " adults";
  if(valueOfText <= 1) {
    disaBle.disabled = true;
    document.getElementById('replace-1').innerHTML = valueOfText + " adult";
  };
});

// Create childrenButton
const childrenButton = document.getElementById('decrebtn-0');
let increBt2 =  document.getElementById('increbtn1');
let valueOfText2 = document.getElementById('value1').innerHTML;
let displayOfPara = document.getElementById('para');
increBt2.addEventListener('click', () => {
  event.preventDefault();
  childrenButton.disabled = false;
  displayOfPara.style.display = 'block';
  valueOfText2++;
  document.getElementById('value1').innerHTML = valueOfText2;
  document.getElementById('replace-2').innerHTML = valueOfText2 + " children";
  if (valueOfText2 >= 10 ) {
    increBt2.disabled = true;
  };
  if ( valueOfText2 <= 1) {
    document.getElementById('replace-2').innerHTML = valueOfText2 + " child";
  };
  addNew();
});
childrenButton.addEventListener('click', () => {
  event.preventDefault();
  valueOfText2--;
  selectItems.removeChild(selectItems.lastElementChild);
  document.getElementById('value1').innerHTML = valueOfText2;
  if (valueOfText2 == 0) {
    childrenButton.disabled = true;
    displayOfPara.style.display ='none';
    document.getElementById('replace-2').innerHTML = `Null`;
  }
});
// Duplicate elements
let optionValue = "";
const selectItems = document.querySelector('#box-ages');
function addNew() {
  const newSelect = document.createElement('select');
  for(let i = 1; i <= 17; i++) {
    optionValue += `<option>${i} year olds</option>`;
  };
  newSelect.innerHTML = optionValue;
  const newDiv = document.createElement('div');
  newDiv.classList.add('box-cover');
  newDiv.appendChild(newSelect);
  selectItems.appendChild(newDiv);
};
// Cerate third Button
const increBtn3 = document.querySelector('#increbtn-2');
const decreBtn3 = document.querySelector('#decrebtn-2');
let valueOfText3 = document.getElementById('value2').innerHTML;
document.getElementById('replace-3').innerHTML = valueOfText3 + " room";
increBtn3.addEventListener('click', () => {
  event.preventDefault();
  decreBtn3.disabled = false;
  valueOfText3++;
  document.getElementById('value2').innerHTML = valueOfText3;
  document.getElementById('replace-3').innerHTML = valueOfText3 + "  rooms";
});
decreBtn3.addEventListener('click', () => {
  event.preventDefault();
  valueOfText3--;
  document.getElementById('value2').innerHTML = valueOfText3;
  if(valueOfText3 <= 1) {
    decreBtn3.disabled = true;
    document.getElementById('replace-3').innerHTML = valueOfText3 + "  rooms";
  };
});
// Slide Button
const track = document.querySelector('#animation1');
const elementOfTrack = Array.from(track.children);
// Access to click left
const nextButton = document.querySelector('#forwards');
// Access to click right
const preButton = document.querySelector('#backwards');
// Create elements of dots
const listDots1 = document.querySelector('.dots');
const childrenOfDots1 = Array.from(listDots1.children);
const currentDot1 = listDots1.querySelector('.current-slide');
// slide width
// const slideWidth = elementOfTrack[2].getBoundingClientRect().width;
const slideWidth = elementOfTrack[2].clientWidth; //2 cai nay tuong tu nhau
let counter = 1;
track.style.transform = `translateX(${-slideWidth * counter}px )`;
// track.style.transform = 'translateX(' +(-slideWidth * counter)+ 'px )';2 cai nay bang nhau
// nếu muốn cho nó slide next to one another
// elementOfTrack.forEach((slide, index ) => {
// slide.style.left = slideWidth*index +'px'
// })
nextButton.addEventListener('click', () => {
  if (counter == elementOfTrack.length - 1) {
    return;
  };
  counter++;
  track.style.transition = 'transform 0.3s ease-in-out';
  track.style.transform = `translateX(${-slideWidth * counter}px )`;
  const currentDot1 = listDots1.querySelector('.current-slide');
  const nextDot = currentDot1.nextElementSibling;
  currentDot1.classList.remove('current-slide');
  nextDot.classList.add('current-slide');
});
preButton.addEventListener('click', () => {
  if (counter <= 0) return;
  track.style.transition = 'transform 0.3s ease-in-out';
  counter--;
  track.style.transform = 'translateX(' + (-slideWidth * counter) + 'px )';
  const currentDot1 = listDots1.querySelector('.current-slide');
  const previousDot = currentDot1.previousElementSibling;
  currentDot1.classList.remove('current-slide');
  previousDot.classList.add('current-slide');
});
track.addEventListener('transitionend', () => {
  if (elementOfTrack[counter].id === 'last-one') {
    track.style.transition = 'transform 0.1s ease-in-out';
    counter = elementOfTrack.length - 2;
    track.style.transform = `translateX(${-slideWidth * counter}px)`;
    childrenOfDots1[2].classList.add('current-slide');
  } else if (elementOfTrack[counter].id === 'first-one') {
    track.style.transition = 'transform 0.1s ease-in-out';
    counter = elementOfTrack.length - counter;
    track.style.transform = `translateX(${-slideWidth * counter}px)`;
    childrenOfDots1[0].classList.add('current-slide');
  };
});
// click Dots
listDots1.addEventListener('click', e => {
  track.style.transition = 'transform 0.3s ease-in-out';
  const targetBtn = e.target.closest('.nodedots');
  if (!targetBtn) return;
  const targetInDex = childrenOfDots1.findIndex(dot => dot === targetBtn);
  switch (targetInDex) {
    case 0:
    track.style.transform = `translateX(${-slideWidth * 1}px )`;
    break;
    case 1:
    track.style.transform = `translateX(${-slideWidth * 2}px )`;
    break;
    case 2:
    track.style.transform = `translateX(${-slideWidth * 3}px )`;
    break;
    currentDot1.classList.remove('current-slide');
    targetBtn.classList.add('current-slide');
  };
  const currentDot = listDots1.querySelector('.current-slide');
  console.log(currentDot);
  currentDot.classList.remove('current-slide');
  targetBtn.classList.add('current-slide');
});
// creation number 2
const slideBar = document.querySelector('.create-row');
const childrenOfBar = Array.from(slideBar.children);
const preBtn2 =  document.querySelector('#backwards-2');
const nextBtn2 = document.querySelector('#forwards-2');
const slideSize = childrenOfBar[0].getBoundingClientRect().width;
childrenOfBar.forEach((items, index) => {
  items.style.left = slideSize * index + 'px';
});
// cos thể tạo nút lùi lại theo cách duoi nhưng đây lại đéo thích
// const amountToMoveSlide = (slideBar, currentSlide, targetSlide) => {
//   slideBar.style.transform = 'translateX(- ' + targetSlide.style.left + ')';
//   currentSlide.classList.remove('current-slide');
//   targetSlide.classList.add('current-slide');
// }; dit me function nay deo hoat dong anh em a. deo hiei vi sao???
function moveToSlide(slideBar, currentSlide, targetSlide) {
  slideBar.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};
function updateDots(currentDot, targetDot) {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};
function hideandshow(targetInDex, preBtn2, nextBtn2, childrenOfBar) {
  if(targetInDex <= 0) {
    preBtn2.classList.add('hidden');
    nextBtn2.classList.remove('hidden');
  }else if (targetInDex === childrenOfBar.length-1) {
    preBtn2.classList.remove('hidden');
    nextBtn2.classList.add('hidden');
  }else {
    preBtn2.classList.remove('hidden');
    nextBtn2.classList.remove('hidden');
  }
};
nextBtn2.addEventListener('click', e => {
  // move the slider
  const currentSlide = slideBar.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  // const amountToMove = nextSlide.style.left;
  // // // move to the next slide
  // slideBar.style.transform = 'translateX(-' + amountToMove + ')';
  // currentSlide.classList.remove('current-slide');
  // nextSlide.classList.add('current-slide');
  moveToSlide(slideBar, currentSlide, nextSlide);
  const currentDot = subDots.querySelector('.current-slide');
  const nextDots = currentDot.nextElementSibling;
  updateDots(currentDot, nextDots);
  const indexOfGal = childrenOfBar.findIndex(element => element === nextSlide);
  hideandshow(indexOfGal, preBtn2, nextBtn2, childrenOfBar);
});

preBtn2.addEventListener('click', e => {
  const currentSlide = slideBar.querySelector('.current-slide');
  const previousSlide = currentSlide.previousElementSibling;
  // const amountToMove = previousSlide.style.left;
  // slideBar.style.transform = 'translateX(-' + amountToMove + ')';
  // currentSlide.classList.remove('current-slide');
  // previousSlide.classList.add('current-slide');
  moveToSlide(slideBar, currentSlide, previousSlide);
  const currentDot = subDots.querySelector('.current-slide');
  const preDots = currentDot.previousElementSibling;
  updateDots(currentDot, preDots);
  const indexOfGal = childrenOfBar.findIndex(element => element === previousSlide);
  hideandshow(indexOfGal, preBtn2, nextBtn2, childrenOfBar);
});
const subDots = document.querySelector('.sub-dots');
const carouselDots = Array.from(subDots.children);
subDots.addEventListener('click', e => {
  // what i click on ?
  const targetDot = e.target.closest('.nodedots');
  if (!targetDot) return;
  const currentSlide = slideBar.querySelector('.current-slide');
  const targetInDex = carouselDots.findIndex(dot => dot === targetDot);
  const targetSlide = childrenOfBar[targetInDex];
  moveToSlide(slideBar, currentSlide, targetSlide);
  const currentDot = subDots.querySelector('.current-slide');
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
  hideandshow(targetInDex, preBtn2, nextBtn2, childrenOfBar);
});
// Hide ans show the content of bar above footer
const ulBox = document.querySelector('#box-ul');
const liChildren = Array.from(ulBox.children);
const boxGrid = document.getElementById('grid-array');
const childNode1 = boxGrid.querySelector('.row-des');
const childNode2 = childNode1.nextElementSibling;
const childNode3 = childNode2.nextElementSibling;
const childrenOfGrid = Array.from(boxGrid.children);
ulBox.addEventListener('click', e => {
  const targetList = e.target.closest('li');
  if (!targetList) return;
  // removestyle(preLi ,targetList, nextLi);
  const targetIndex = liChildren.findIndex(items => items === targetList);
  if (targetIndex == 0){
    childNode1.classList.remove('visible');
    childNode2.classList.add('visible');
    childNode3.classList.add('visible');
    targetList.style.backgroundColor = ' #0071c2';
    const secondLi = targetList.nextElementSibling;
    const thirdLi = secondLi.nextElementSibling;
    secondLi.style.backgroundColor = null;
    thirdLi.style.backgroundColor = null;
  }else if (targetIndex == 1) {
    childNode1.classList.add('visible');
    childNode2.classList.remove('visible');
    childNode3.classList.add('visible');
    targetList.style.backgroundColor = ' #0071c2';
    const previousLi = targetList.previousElementSibling;
    const thirdLi = targetList.nextElementSibling;
    previousLi.style.backgroundColor = null;
    thirdLi.style.backgroundColor = null;
  }else {
    childNode1.classList.add('visible');
    childNode2.classList.add('visible');
    childNode3.classList.remove('visible');
    targetList.style.backgroundColor = ' #0071c2';
    const secondLi = targetList.previousElementSibling;
    const previousLi = secondLi.previousElementSibling;
    previousLi.style.backgroundColor = null;
    secondLi.style.backgroundColor = null;
  };
})
//  pick numbers to slide

const imageSliders = document.querySelector('.footer-grid');
const imagePicker = document.querySelectorAll('.footer-grid');
const imageWidth = imagePicker[0].clientWidth;
const orderList = document.querySelector('.order-list');
const listIndex = Array.from(orderList.children);
orderList.addEventListener('click', e => {
  const targetList = e.target.closest('.order-list div');
  if(!targetList) return;
  const indexOfTarget = listIndex.findIndex(item => item === targetList);
  imageSliders.style.transform = `translateX(${-slideWidth * indexOfTarget}px )`;
})
