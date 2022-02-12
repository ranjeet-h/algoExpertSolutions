let homeTeamWon = 1;

const tournament_winner = (competitions, results) => {
  let currentBestTeam = '';
  let scores = { current: 0 };

  for (let i = 0; i < competitions.length; i++) {
    let currentCompetition = competitions[i];

    let currentCompetitionResults = results[i];

    let homeTeam = currentCompetition[0];
    let awayTeam = currentCompetition[1];
    let winningTeam;

    if (currentCompetitionResults === homeTeamWon) {
      winningTeam = homeTeam;
    } else {
      winningTeam = awayTeam;
    }
    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores.current) {
      currentBestTeam = winningTeam;
    }

    return currentBestTeam;
  }
};

const updateScores = (team, points, scores) => {
  if (!(team in scores)) {
    scores[team] = 0;
  }
  scores[team] += points;
};

console.log(
  tournament_winner(
    [
      ['c', 'b'],
      ['b', 'c'],
      ['a', 'c'],
    ],
    [1, 0, 1]
  )
);
