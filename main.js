function createGame(player,hour,player2){
    return `
    <li>
        <img src="./assets/icon-${player}.svg" alt="${player}">
        <strong> ${hour} </strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}">
    </li>
    `;

}
let delay = -0.3;
function createCard(date,day,games){
    delay = delay + 0.3;
    return `
     <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
    `;

}


document.querySelector("#cards").innerHTML = 
           createCard(
             "24/11",
             "quinta",
             createGame("brazil", "16:00", "serbia")
           )+
           createCard(
             "28/11",
             "segunda",
             createGame("colombia", "10:00", "japan")
           )+
           createCard(
             "02/12",
             "sexta",
             createGame("brazil", "15:00", "japan") +
               createGame("switzerland", "19:00", "brazil")
           )
        
;