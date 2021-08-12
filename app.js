const team = {
    _players: [
      {firstName: 'Kai', lastName: 'Havertz', age: 23},
      {firstName: 'Timo', lastName: 'Werner', age: 25},
      {firstName: 'Mason', lastName: 'Mount', age: 23}
    ],
    _games: [
      {opponent: 'Arsenal', teamPoints: 42,  opponentPoints: 27},
      {opponent: 'Liverpool', teamPoints: 35,
      opponentPoints: 24},
      {opponent: 'Everton', teamPoints: 29,
      opponentPoints: 19}
    ],
  
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
  
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
  
    addGame(opponentName, teamPoints, opponentPoints){
      let game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Knicks', 97, 81);
  team.addGame('Bulls', 109, 99);
  team.addGame('Kings', 89, 112);
  console.log(team.games);
    