const teams = [
    { name: "Team A", upvotes: 300, downvotes: 50 },
    { name: "Team B", upvotes: 17870, downvotes: 1200 },
    { name: "Team C", upvotes: 847, downvotes: 320 },
    { name: "Team D", upvotes: 200, downvotes: 30 }
];

function updateCounts() {
    teams.forEach((team, index) => {
        $(`#upvote-${index}`).text(team.upvotes);
        $(`#downvote-${index}`).text(team.downvotes);
    });
}

function simulateVotes() {
    teams.forEach(team => {
        if (Math.random() > 0.5) {
            team.upvotes += Math.floor(Math.random() * 10);
        }
        if (Math.random() > 0.7) {
            team.downvotes += Math.floor(Math.random() * 5);
        }
    });
    updateCounts();
}

$(document).ready(function() {
    const topLeaders = $('#top-leaders');
    const container = $('#teams-container');

    // Display top 3 leaders
    teams.slice(0, 3).forEach((team, index) => {
        topLeaders.append(`
            <div class="leader">
                <div class="leaderName">${team.name}</div>
                <div>Upvotes: <span id="top-upvote-${index}">${team.upvotes}</span></div>
                <div>Downvotes: <span id="top-downvote-${index}">${team.downvotes}</span></div>
            </div>
        `);
    });

    // Display all teams
    teams.forEach((team, index) => {
        container.append(`
            <div class="player">
                <span>${index + 1}</span>
                <span>${team.name}</span>
                <span id="upvote-${index}">${team.upvotes}</span>
                <span id="downvote-${index}">${team.downvotes}</span>
            </div>
        `);
    });

    setInterval(simulateVotes, 500);
});
