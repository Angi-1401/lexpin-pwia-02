const getComputerChoice = () =>
  OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

const play = (userChoice) => {
  let computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    return { userChoice, computerChoice, result: "draw" };
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return { userChoice, computerChoice, result: "win" };
  } else {
    return { userChoice, computerChoice, result: "lose" };
  }
};

const updateHistory = (lastRound) => {
  if (rounds.length >= 5) rounds.pop();

  rounds.unshift(lastRound);

  history.innerHTML = "";
  for (let round of rounds) {
    history.innerHTML += `
      <li>Result of this round: ${round.result}</li>
    `;
  }
};

const OPTIONS = ["rock", "paper", "scissors"];
let rounds = [];

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const result = document.getElementById("result");
const history = document.getElementById("history");

rockButton.addEventListener("click", () => {
  let round = play("rock");
  result.innerHTML = `
    <p>Result: ${round.result}</p>
  `;
  updateHistory(round);
});

paperButton.addEventListener("click", () => {
  let round = play("paper");
  result.innerHTML = `
    <p>Result: ${round.result}</p>
  `;
  updateHistory(round);
});

scissorsButton.addEventListener("click", () => {
  let round = play("scissors");
  result.innerHTML = `
    <p>Result: ${round.result}</p>
  `;
  updateHistory(round);
});
