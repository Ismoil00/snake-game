// | DOM Connections:
const parentDiv = document.getElementById("parentDiv");
const allChildDivs = document.getElementsByClassName("childDiv");
let pos = 389;

// console.log(Snake)

initApp();

// |> Initializing the App
function initApp() {
  for (let a = 0; a < 400; a++) {
    if (a === 389) {
      const snake = document.createElement("div");
      snake.classList.add("snake", "childDiv");
      parentDiv.append(snake);
      continue;
    }
    const child = document.createElement("div");
    child.classList.add("childDiv");
    parentDiv.append(child);
  }
}

const parentDivsArray = Array.from(allChildDivs);
parentDivsArray.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(index);
  });
});


