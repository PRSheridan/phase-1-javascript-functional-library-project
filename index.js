function normalizeCollection(collection) {
    let newCollection;
    if (!Array.isArray(collection)) {
        newCollection = Object.values(collection);
    }else{newCollection = collection};
    return newCollection;
}

function myEach (collection, alert) {
    let newCollection = normalizeCollection(collection);
    for (let val in newCollection) {
        alert(newCollection[val])
    }
    return collection;
}

function myMap (collection, callback) {
    let newCollection = [];
    for (let val in collection) {
        newCollection.push(callback(collection[val]))
    }
    return newCollection;
}

function myReduce (collection, callback, acc) {
    let newCollection = normalizeCollection(collection);
    for (let val in newCollection) {
        if (acc === undefined) { acc = newCollection[val] }
        else{ acc = callback(acc, newCollection[val], newCollection) };
    } return acc;
}

function myFind (collection, predicate) {
    let newCollection = normalizeCollection(collection);
    for (let val in newCollection) {
        if (predicate(newCollection[val])) {return newCollection[val]}
    }
}

function myFilter (collection, predicate) {
    let newCollection = normalizeCollection(collection);
    let values = [];
    for (let val in newCollection) {
        if (predicate(newCollection[val])) {values.push(newCollection[val])}
    }
    return values;
}

function mySize (collection) {
    let newCollection = normalizeCollection(collection);
    let acc = 0;
    for (let val in newCollection) {acc++}
    return acc;
}

function myFirst (array, value) {
    if (value === undefined ){return array[0]}
    else{return array.splice(0, value)};
}

function myLast (array, value) {
    if (value === undefined) {return array[array.length-1]}
    else{return array.splice(array.length-value, array.length-1)}
}

function myKeys (obj) { return Object.keys(obj) };


function myValues (obj) { return Object.values(obj) };