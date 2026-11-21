const birdsNumber = [0, 2, 5, 3, 7, 8, 4]; // []

function today(birds) {
    return birds.length > 0 ? birds[birds.length - 1] : 0;
}

function incToday(birds) {
    return today(birds) + 1;
}

function isDayWithoutBirds(birds) {
    return birds.filter((birdCount) => birdCount === 0).length > 0;
}

function getBusyDays(birds) {
    return birds.filter((birdCount) => birdCount >= 5).length;
}

function nDaysCount(birds, n) {
    return birds.reduce((totalNumberOfBirds, birdsAtThisDay, currentDayIndex) =>
        (currentDayIndex <= n - 1)
            ? totalNumberOfBirds + birdsAtThisDay
            : totalNumberOfBirds);
}

function averageCount(birds) {
    const daysWithBirds = birds.filter((birdCount) => birdCount > 0);
    const sum = daysWithBirds.reduce((totalNumberOfBirds, birdsAtThisDay) => totalNumberOfBirds + birdsAtThisDay);
    return daysWithBirds.length > 0 ? sum / daysWithBirds.length : 0;

    /*

    Lazy calculations

    birds.filter((birdCount) => birdCount > 0)
        .reduce((totalNumberOfBirds, birdsAtThisDay) => totalNumberOfBirds + birdsAtThisDay)
    */
}

console.log("today = " + today(birdsNumber));
console.log("incToday = " + incToday(birdsNumber));
// TODO try to remove brackets near isDayWithoutBirds
console.log("isDayWithoutBirds = " + (isDayWithoutBirds(birdsNumber) ? "yes" : "no"));
console.log("getBusyDays = " + getBusyDays(birdsNumber));
console.log("nDaysCount = " + nDaysCount(birdsNumber, 4));
console.log("averageCount = " + averageCount(birdsNumber));






