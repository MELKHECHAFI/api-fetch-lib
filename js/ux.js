//infinite scroll logic

let displayDiv = document.getElementById('mainContent');
//seperate the array into 4 cards per viewHeight
function cardsPerPage (numCards = 5){
    for(let i = 0; i <numCards; i++){
        let individualCard=   `<div class="card">
                <div class="avatar">
                    <img src="" alt=""    height="80%" width="90%">
                </div>
                <div class="content">
                    <h2 class="Repository_Name">${i}</h2>
                    <p class="Description">${i}</p>
                    <h4 class="stars">${i}</h4>
                    <h4 class="Issues">${i}</h4>
                    <p class="interval">3years ago by ME</p>
                </div>
            </div>`;
            let displayCard = document.createElement('div');
            displayCard.innerHTML = individualCard;
        displayDiv.appendChild(displayCard);
    }
};
cardsPerPage();
//Infinite scroll event
 window.addEventListener('scroll',() =>{
     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        cardsPerPage();
    }
})