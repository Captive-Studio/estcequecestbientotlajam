function isFirstThursdayOfMonth(date) {
    return date.getDay() === 4 && (1 <= date.getDate() && date.getDate() <= 7);
}

function checkJamTime() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Vérifie si c'est après 17h30 en semaine
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && (hour > 17 || (hour === 17 && minute >= 30))) {
        return "C'est complètement l'heure de la Jam";
    }

    // Vérifie si c'est le premier jeudi du mois après 14h30
    if (isFirstThursdayOfMonth(now) && (hour > 14 || (hour === 14 && minute >= 30))) {
        return "Mais oui, on est le premier jeudi du mois, c'est Jeudi Après Midi";
    }

    return "Il n'est pas l'heure de la Jam";
}

document.getElementById("answer").innerText = checkJamTime();

// Optionnel : rafraîchir la réponse chaque minute
setInterval(() => {
    document.getElementById("answer").innerText = checkJamTime();
}, 60000);
