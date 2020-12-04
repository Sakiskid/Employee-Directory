const heros = [
    { role: "Tank", name: "D.Va" },
    { role: "Tank", name: "Orisa" },
    { role: "Tank", name: "Reinhardt" },
    { role: "Tank", name: "Roadhog" },
    { role: "Tank", name: "Sigma" },
    { role: "Tank", name: "Winston" },
    { role: "Tank", name: "Wrecking Ball" },
    { role: "Tank", name: "Zarya" },
    { role: "Damage", name: "Ashe" },
    { role: "Damage", name: "Bastion" },
    { role: "Damage", name: "Doomfist" },
    { role: "Damage", name: "Echo" },
    { role: "Damage", name: "Genji" },
    { role: "Damage", name: "Hanzo" },
    { role: "Damage", name: "Junkrat" },
    { role: "Damage", name: "McCree" },
    { role: "Damage", name: "Mei" },
    { role: "Damage", name: "Pharah" },
    { role: "Damage", name: "Reaper" },
    { role: "Damage", name: "Soldier: 76" },
    { role: "Damage", name: "Sombra" },
    { role: "Damage", name: "Symmetra" },
    { role: "Damage", name: "Torbjörn" },
    { role: "Damage", name: "Tracer" },
    { role: "Damage", name: "Widowmaker" },
    { role: "Support", name: "Ana" },
    { role: "Support", name: "Baptiste" },
    { role: "Support", name: "Brigitte" },
    { role: "Support", name: "Lúcio" },
    { role: "Support", name: "Mercy" },
    { role: "Support", name: "Moira" },
    { role: "Support", name: "Zenyatta" },
]

function getRandomRank () {
    return Math.floor(Math.random() * 5000);
}

function getRandomHero () {
    let selectedHeroIndex = Math.floor(Math.random() * heros.length);
    return heros[selectedHeroIndex];
}

function getRandomOWPlayerData () {
    let hero = getRandomHero();
    let rank = getRandomRank();

    return {
        role: hero.role,
        hero: hero.name,
        rank: rank,
    };
}

export default getRandomOWPlayerData;