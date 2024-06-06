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

    document.querySelector('.field').appendChild(playerDiv);

    playerCount++;
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

document.querySelector('.field').ondrop = function(event) {
    let id = event.dataTransfer.getData('text');
    let draggableElement = document.getElementById(id);
    let dropzone = event.target;

    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
};

document.querySelector('.field').ondragover = function(event) {
    event.preventDefault();
};

window.onload = function() {
    document.querySelector('.field').innerHTML += `<div id="team1Goal">Siyah</div>`;
    document.querySelector('.field').innerHTML += `<div id="team2Goal">Beyaz</div>`;
};
