const drawBall = () => {
  const shuffle = [];

  const candidate = Array(45)
    .fill()
    .map((value, index) => index + 1);

  while (candidate.length > 0) {
    const randomIndex = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(randomIndex, 1);
    shuffle.push(spliceArray[0]);
  }

  const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
  const bonus = shuffle[6];

  return {
    winBalls,
    bonus,
  };
};

const rank = (balls) => {
  let win = 0;
  let winBonus = 0;
  balls.forEach((ball) => {
    if (initialWinBalls.includes(ball)) {
      win += 1;
    }
    if (initialBouns === ball) {
      winBonus += 1;
    }
  });

  if (win === 6) result["1st"]++;
  else if (win === 5 && winBonus === 1) result["2nd"]++;
  else if (win === 5) result["3rd"]++;
  else if (win === 4) result["4th"]++;
  else if (win === 3) result["5th"]++;
  else return result["fail"]++;
};

const initialWinBalls = drawBall()["winBalls"];
const initialBouns = drawBall()["bonus"];
const result = {
  "1st": 0,
  "2nd": 0,
  "3rd": 0,
  "4th": 0,
  "5th": 0,
  fail: 0,
};

console.log(initialWinBalls, initialBouns);

for (let i = 0; i < 1_000_000; i++) {
  const selected = drawBall()["winBalls"];
  rank(selected);
}

for (let rank in result) {
  console.log(`${rank}: ${result[rank]}`);
}
