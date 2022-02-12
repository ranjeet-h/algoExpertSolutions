# We're asked to imagine there is an algorithms tournament taking place in which multiple teams compete against each other. In each competition there will be two teams that compete and there will be one winner and one loser out of all of these competitions; there are no ties. Each team will compete against all other teams exactly once. Every time a team wins a competition, it gets 3 points; when it loses, it gets 0 points. It's guaranteed that the tournament always has at least two teams and there will be only one tournament winner.

# We are given two inputs, the competitions array and the results array, and we need to write a function that returns the winner of the tournament, or more specifically, the name of the team that has the most number of points. The competitions array is an array of pairs, representing all of the competitions in the tournament. Inside of these pairs, we have two strings. The first string is the name of the home team, the second string is the name of the away team. The results array represents the winner of each of these competitions. Inside the results array, a 1 means that the home team won and a 0 means the away team won. The results array is the same length as the competitions array, and the indices in the results array correspond with the indices in the competitions array.

# sol 1 O(n) Time | O(k) Space


homeTeamWon = 1  # if result is 1 that means home team is won


# we have two arrays, competitions and results
def tournament_winner(competitions, results):
    currentBestTeam = ""  # we will keep track of the current best team
    # we will keep track of the scores of each team
    scores = {currentBestTeam: 0}

    # we will iterate through the competitions array
    for idx, competitions in enumerate(competitions):
        # we will get the result of the current competition
        result = results[idx]
        # we will get the home and away team of the current competition
        homeTeam, awayTeam = competitions

        # if result is equal to 1 that means home team won, if not away team won
        winningTeam = homeTeam if result == homeTeamWon else awayTeam
        # we will update the scores of the winning team
        updateScores(winningTeam, 3, scores)

        # if the score of the winning team is greater than the current best team
        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam  # we will update the current best team
    return currentBestTeam  # we will return the current best team


def updateScores(team, points, scores):  # we have team, points and scores
    if team not in scores:  # if the team is not in the scores
        scores[team] = 0  # we will add it to scores and set it to 0
    scores[team] += points  # we will add the points to the score of the team


print(tournament_winner([["A", "B"], ["B", "C"], ["C", "A"]], [1, 0, 0]))
