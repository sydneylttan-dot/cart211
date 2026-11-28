function go(type, nextPage) {
    const key = type + "Count";
    const current = Number(sessionStorage.getItem(key)) || 0;
    sessionStorage.setItem(key, current + 1);
    window.location.href = nextPage;
}

function restart(startPage) {
    sessionStorage.clear();
    window.location.href = startPage;
}

//add a function that returns the player to the previous page when exiting an ad