let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 23;
if (registeredEarly === true && age > 18) {
raceNumber += 1000;
};
if (registeredEarly === true && age > 18) {
  console.log(`Your race number is: ${raceNumber} and you will start at 9:30AM.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race number is: ${raceNumber} and you will start at 11:00AM.`);
} else if (age < 18) {
  console.log(`Your race number is: ${raceNumber} and you will start at 12:30PM.`)
} else {
  console.log(`Please see the registration desk!`)
}
