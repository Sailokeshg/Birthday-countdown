const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const birthDateString = new Date(new Date().getFullYear(), 10, 15);
const formattedDate = `${birthDateString.getDate()} ${birthDateString.toLocaleString(
  "default",
  { month: "short" }
)} ${birthDateString.getFullYear()}`;

function startCountDown() {
  const currentDate = new Date();
  const birthDate = new Date(formattedDate);

  const totalSecondsBetweenDates = (birthDate - currentDate) / 1000;
  const daysBetweenDates = Math.floor(totalSecondsBetweenDates / 3600 / 24);
  const hoursBetweendates = Math.floor(totalSecondsBetweenDates / 3600) % 24;
  const minutesBetweendates = Math.floor(totalSecondsBetweenDates / 60) % 60;
  const secondsBetweendates = Math.floor(totalSecondsBetweenDates) % 60;

  daysElement.innerHTML = daysBetweenDates;
  hoursElement.innerHTML = formatIfSingleDigit(hoursBetweendates);
  minutesElement.innerHTML = formatIfSingleDigit(minutesBetweendates);
  secondsElement.innerHTML = formatIfSingleDigit(secondsBetweendates);
  console.log(formattedDate);
}

function formatIfSingleDigit(time) {
  return time < 10 ? `0${time}` : time;
}
startCountDown();
setInterval(startCountDown, 500);
