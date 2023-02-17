/* Lestra 2023 */

const INCREMENT = document.getElementById('incr');
const DECREMENT = document.getElementById('decr');
const RESET = document.getElementById('reset');
const NUM = document.getElementById('number');

const incrNum = () => {
  NUM.innerHTML = Number(NUM.innerHTML) + 1;
};
INCREMENT.addEventListener('click', incrNum);

const decrNum = () => {
  NUM.innerHTML = Number(NUM.innerHTML) - 1;
};
DECREMENT.addEventListener('click', decrNum);

const resetCounter = () => {
  NUM.innerHTML = 0;
};
RESET.addEventListener('click', resetCounter);
