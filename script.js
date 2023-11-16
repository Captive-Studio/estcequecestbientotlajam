function checkJamTime() {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  // La semaine en JavaScript va de 0 (dimanche) à 6 (samedi)
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && (hour > 17 || (hour === 17 && minute >= 30))) {
      return "C'est complètement l'heure de la Jam";
  } else {
      return "Il n'est pas l'heure de la Jam";
  }
}

document.getElementById("answer").innerText = checkJamTime();

// Optionnel : rafraîchir la réponse chaque minute
setInterval(() => {
    document.getElementById("answer").innerText = checkJamTime();
}, 60000);
