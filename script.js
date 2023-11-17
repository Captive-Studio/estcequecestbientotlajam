import giphy from 'giphy.js';

const gifParty = giphy.random('party');
const gifDisappointed = giphy.random('disappointed');
const gifTime = giphy.random("it's now");

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
      return {
        text: "C'est complètement l'heure de la Jam",
        gif: gifTime,
      };
    }

    // Vérifie si c'est le premier jeudi du mois après 14h30
    if (isFirstThursdayOfMonth(now) && (hour > 14 || (hour === 14 && minute >= 30))) {
      return {
        text: "Mais oui, on est le premier jeudi du mois, c'est Jeudi Après Midi",
        gif: gifParty,
      };
    }

  return {
    text: "Il n'est pas l'heure de la Jam",
    gif: gifDisappointed,
  };
}

document.getElementById("answer").innerText = checkJamTime();

// Optionnel : rafraîchir la réponse chaque minute
setInterval(() => {
    document.getElementById("answer").innerText = checkJamTime();
}, 60000);
