const snakeGrid = (rows, cols) => {
  const grid = [];
  let rowIncrement = 1;
  for (let i = 0; i < rows; i++) {
    let row = [];
    let previous = 0;
    let colIncrement = 2;

    for (let j = 0; j < cols; j++) {
      if (j === 0) {
        row.push(i + 1);
      } else if (j % 2 === 0) {
        row.push(previous + rowIncrement);
      } else {
        row.push(rows * colIncrement - i);
        colIncrement += 2;
        previous = row[j];
      }
    }
    rowIncrement += 2;
    grid.push(row);
  }
  return grid;
};

const main = (rows, cols) => {
  const outputGrid = snakeGrid(rows, cols);

  for (let i = 0; i < rows; i++) {
    let stringBuilder = "";
    for (let j = 0; j < rows; j++) {
      stringBuilder += ` ${outputGrid[i][j]} `;
    }
    console.log(`${stringBuilder}\n`);
  }
};

main(4, 5);
