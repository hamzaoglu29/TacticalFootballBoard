function generateInputs() {
    const playerCount = document.getElementById('playerCount').value;
    const teamsDiv = document.getElementById('teams');
    teamsDiv.innerHTML = '';

    const team1Div = document.createElement('div');
    team1Div.classList.add('team');
    team1Div.innerHTML = `<h2>Takım 1</h2>`;
    for (let i = 1; i <= playerCount; i++) {
        team1Div.innerHTML += `<input type="text" placeholder="Oyuncu ${i}" id="team1-player${i}">`;
    }
    teamsDiv.appendChild(team1Div);

    const team2Div = document.createElement('div');
    team2Div.classList.add('team');
    team2Div.innerHTML = `<h2>Takım 2</h2>`;
    for (let i = 1; i <= playerCount; i++) {
        team2Div.innerHTML += `<input type="text" placeholder="Oyuncu ${i}" id="team2-player${i}">`;
    }
    teamsDiv.appendChild(team2Div);
}

function assignTeams() {
    const playerCount = document.getElementById('playerCount').value;
    const team1 = [];
    const team2 = [];

    for (let i = 1; i <= playerCount; i++) {
        team1.push(document.getElementById(`team1-player${i}`).value);
        team2.push(document.getElementById(`team2-player${i}`).value);
    }

    const teams = [team1, team2];
    const colors = ['black', 'white'];
    const shuffledColors = colors.sort(() => 0.5 - Math.random());

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    teams.forEach((team, index) => {
        const teamColor = shuffledColors[index];
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team', teamColor);
        const teamTitle = document.createElement('h3');
        teamTitle.textContent = `Takım ${index + 1} - ${teamColor === 'black' ? 'Siyah' : 'Beyaz'} Forma`;
        teamDiv.appendChild(teamTitle);

        team.forEach(player => {
            const playerP = document.createElement('p');
            playerP.textContent = player;
            teamDiv.appendChild(playerP);
        });

        resultDiv.appendChild(teamDiv);
    });
}
