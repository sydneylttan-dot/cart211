function go(type, nextPage) {
    // type is "ad" or "quiz"
    const key = type + "Count";
    const current = Number(sessionStorage.getItem(key)) || 0;
    sessionStorage.setItem(key, current + 1);
    window.location.href = nextPage;
}