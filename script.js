let teamColors = ["team1", "team2"];
let playerCount = 0;

function addPlayer() {
    let playerName = document.getElementById('playerName').value;
    if (playerName === '') return;

    let playerDiv = document.createElement('div');
    playerDiv.classList.add('player');

    let teamColor = teamColors[playerCount % 2];
    playerDiv.classList.add(teamColor);

    playerDiv.innerText = playerName;
    playerDiv.setAttribute('draggable', true);
    playerDiv.ondragstart = dragStart;

    playerDiv.style.top = `${Math.random() * 500 + 50}px`;
    playerDiv.style.left = `${Math.random() * 700 + 50}px`;

    document.querySelector('.field').appendChild(playerDiv);

    playerCount++;
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

document.querySelector('.field').ondrop = function(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    if (dropzone.classList.contains('field')) {
        const rect = dropzone.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        draggableElement.style.left = `${offsetX - draggableElement.offsetWidth / 2}px`;
        draggableElement.style.top = `${offsetY - draggableElement.offsetHeight / 2}px`;
    }
};

document.querySelector('.field').ondragover = function(event) {
    event.preventDefault();
};

function setTeamColors() {
    const team1Text = document.createElement('div');
    team1Text.id = 'team1Text';
    team1Text.innerText = 'Siyah';

    const team2Text = document.createElement('div');
    team2Text.id = 'team2Text';
    team2Text.innerText = 'Beyaz';

    const team1Pos = getRandomPosition();
    const team2Pos = getRandomPosition();

    team1Text.style.top = `${team1Pos.y}px`;
    team1Text.style.left = `${team1Pos.x}px`;

    team2Text.style.top = `${team2Pos.y}px`;
    team2Text.style.left = `${team2Pos.x}px`;

    document.querySelector('.field').appendChild(team1Text);
    document.querySelector('.field').appendChild(team2Text);
}

function getRandomPosition() {
    return {
        x: Math.random() * 700 + 50,
        y: Math.random() * 500 + 50
    };
}

window.onload = function() {
    document.querySelector('.field').innerHTML += `<div id="team1Goal">Siyah</div>`;
    document.querySelector('.field').innerHTML += `<div id="team2Goal">Beyaz</div>`;
};
