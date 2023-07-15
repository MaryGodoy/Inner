function creatGame(player1, hour, player2) {
    return `
    <li>
    <img src="Assets/Times/icon-${player1}.png" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="Assets/Times/icon-${player2}.png" alt="Bandeira do ${player2}">
    `
}
let delay = -0.4;
function createCard(date,day,games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay:${delay}s">
    <h2> ${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = 
createCard("15/07", "sábado", creatGame("corinthians", "21hrs", "palmeiras"))+
createCard("15/07", "sábado", creatGame("SP", "21hrs", "vasco"))+
createCard("15/07", "sábado", creatGame("atletico", "21hrs", "bahia"))+
createCard("15/07", "sábado", creatGame("bota", "21hrs", "cruzeiro"))+
createCard("15/07", "sábado", creatGame("flamengo", "21hrs", "gremio"))+
createCard("15/07", "sábado", creatGame("inter", "21hrs", "santos"))

