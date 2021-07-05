const gameList = document.getElementById('gameList');
const searchBar = document.getElementById('searchBar');
const categoryBar = document.getElementById('categoryBar');
let fullGameList = [];



searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filtedGames = fullGameList.filter((games) => {
        return(
            games.gameName.toLowerCase().includes(searchString)
        );
    });
    displayGames(filtedGames);
});

categoryBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filtedGames = fullGameList.filter((category) => {
        return(
            category.categories.includes(searchString)
        );
    });
    displayGames(filtedGames);
});


const loadGames= async () => {
    try{
        const res = await fetch('https://www.mocky.io/v2/5da99f9f31000036004e0a4e');
        fullGameList= await res.json();
        displayGames(fullGameList);
        //console.log(fullGameList);
        
    }
    catch(err){
        console.error(err);
    }
};
const displayGames = (games) => {
    const htmlString = games
    .map((game)=>{
        return`
        <a class = "gameLinks" href="${game.gamePreviewUrl}" target="_blank">
        
        <li class ="game" data-item="${game.categories}">
            <h2 class="gameTitle"> ${game.gameName}</h2>
            <p class = "category">${game.categories}</p>
            <img classs= "gameThumbnail" src="http://${game.gameThumbnail}"/>
        </li>
        
        `;
    })

    .join('');
    gameList.innerHTML = htmlString;
};

loadGames();

