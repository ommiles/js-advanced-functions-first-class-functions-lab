// should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2).map (updatedDrivers => {
        return updatedDrivers
    })
}

// should return an array of the last two drivers
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(Math.max(drivers.length-2, 1)).map (updatedDrivers => {
        return updatedDrivers
    })
}

// allows us to invoke either function from the array
// has the `returnLastTwoDrivers` function to as its last element
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// should multiply a given value using the created multiplier
const createFareMultiplier = (multiplier) => {
    return fare => multiplier * fare
}

// doubles fares
const fareDoubler = (fare) => {
    fare *= 2
    return fare
}

// triples fares
const fareTripler = (fare) => {
    fare *= 3
    return fare
}

// returns the last two drivers when passed returnLastTwoDrivers() as the second argument
const selectDifferentDrivers = (array, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(array)
}

