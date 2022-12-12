import dogsData from "./data.js";
import Dog from "./Dog.js";

let currentDog = new Dog(dogsData.shift());

document.getElementById("accept-button").addEventListener("click", () => {
  currentDog.setMatchStatus(true);
  getNewDog();
  renderBadge("badge-like");
});

document.getElementById("reject-button").addEventListener("click", () => {
  currentDog.setMatchStatus(true);
  getNewDog();
  renderBadge("badge-nope");
});

function getNewDog() {
  if (dogsData.length > 0) {
    currentDog = new Dog(dogsData.shift());
    setTimeout(render, 1000);
  } else {
    currentDog = {};
    setTimeout(() => {
      document.getElementById("feature-suggestion").innerHTML = `
        <h1>NO MORE HOT DOGS LEFT :(</h1>
      `;
    }, 1000);
  }
}

function renderBadge(img) {
  document.getElementById("badge").innerHTML = `<img src="/images/${img}.png">`;
}

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

render();
