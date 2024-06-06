let teamColors = ["team1", "team2"];
let playerCount = 0;

function addPlayer() {
    let playerName = document.getElementById('playerName').value;
    if (playerName === '') return;

    let playerDiv = document.createElement('div');
    playerDiv.classList.add('player');

    let teamColor = teamColors[playerCount % 2];
    playerDiv.classList.add(teamColor);
    playerDiv.setAttribute('draggable', 'true');
    playerDiv.innerText = playerName;

    playerDiv.style.top = `${Math.random() * 500 + 50}px`;
    playerDiv.style.left = `${Math.random() * 700 + 50}px`;

    playerDiv.addEventListener('dragstart', dragStart);
    document.querySelector('.field').appendChild(playerDiv);

    playerCount++;
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

document.querySelector('.field').addEventListener('drop', function(event) {
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
});

document.querySelector('.field').addEventListener('dragover', function(event) {
    event.preventDefault();
});

function setTeamColors() {
    const field = document.querySelector('.field');

    const team1Text = document.createElement('div');
    team1Text.id = 'team1Text';
    team1Text.innerText = 'Siyah';

    const team2Text = document.createElement('div');
    team2Text.id = 'team2Text';
    team2Text.innerText = 'Beyaz';

    team1Text.style.top = '50px';
    team1Text.style.left = '50px';

    team2Text.style.top = '500px';
    team2Text.style.left = '50px';

    field.appendChild(team1Text);
    field.appendChild(team2Text);
}

window.onload = function() {
    document.querySelector('.field').innerHTML += `<div id="team1Goal">Siyah</div>`;
    document.querySelector('.field').innerHTML += `<div id="team2Goal">Beyaz</div>`;
};
