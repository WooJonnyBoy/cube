const cube = document.querySelector(".cube");
const cont = document.querySelector(".container");
const start = document.querySelector(".start");
const side = document.querySelectorAll('.side')
const chCol = document.querySelector('.checkColor')
const dotColor = document.querySelector('.dotColor')
const dot = document.querySelectorAll('.dot')
let posX = 0;
let posY = 0;

const add = (e) => {
  cube.style.transition = "0s";
  cont.addEventListener("mousemove", move);
  cont.addEventListener("pointermove", move);
};


const move = (e) => {
  let { movementX: x, movementY: y } = e;
  posX -= y;
  posY += x;
  cube.style.transform = `rotateY(${posY}deg) rotateX(${posX}deg)`;
};

const remove = () => {
  cont.removeEventListener("mousemove", move);
  cont.removeEventListener("pointermove", move);
  cube.style.transition = "2s";
  // rotate()
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rotate = () => {
  let x = random(4, 60) * 90;
  let y = random(4, 60) * 90;
  cube.style.transition = "2s";
  cube.style.transform = `rotateY(${x}deg) rotateX(-${y}deg)`;
  posX = -y;
  posY = x;
};

start.addEventListener("click", () => {
  rotate();
});

chCol.addEventListener('change', (e) => {
  console.log(e.target.value)
  Object.entries(side).map(item => {
    item[1].style.backgroundColor = e.target.value
  })
})

dotColor.addEventListener('change', (e) => {
  console.log(e.target.value)
  Object.entries(dot).map(item => {
    item[1].style.backgroundColor = e.target.value
  })
})

document.addEventListener("mousedown", add);
document.addEventListener("mouseup", remove);
document.addEventListener("pointerdown", add);
document.addEventListener("pinterup", remove);

document.addEventListener("dblclick", (e) => {
  e.preventDefault()
})

