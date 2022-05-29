const jsButton4 = document.querySelector(".js__button4");
const elem = document.querySelector("#js__elem");
const createTable = function () {
  const parent = elem;
  const colums = 10;
  const rows = 10;
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < colums; j++) {
      let td = document.createElement("td");
      let numText = document.createTextNode(i + j * 10);
      td.appendChild(numText);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
};
jsButton4.addEventListener("click", createTable);