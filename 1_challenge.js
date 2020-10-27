/* **************************************************************
Make a function createNewElement(tagName, text) that takes in 2 
parameters and returns a new element with the correct text
************************************************************** */
function createNewElement(tagName, text) {
    const element = document.createElement(tagName)
    element.textContent = text

    return element
}

console.log(createNewElement('p', 'I am a software engineer'));
console.log(createNewElement('h1', 'General Assembly'));
console.log(createNewElement('p', 'SEI 1019'));

/* ************************************************************ */


/* **************************************************************
Make a function giveMeKeys(array) that takes in an array of objects
and returns a new array with all of the keys from each object
************************************************************** */
const instuctors = [
    { rome: 'Rome', pete: 'Pete' },
    { mike: 'Mike', dex: 'Dexter' },
    { ga: 'General Assembly', cohort: 'SEI1019' }
]

const giveMeKeys = (array) => {
    return array.reduce((arr, obj) => {
        arr.push(...Object.keys(obj))
        return arr
    }, [])
}

console.log(giveMeKeys(instuctors));

/* ************************************************************ */
