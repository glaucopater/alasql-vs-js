//define distinct

export function distinct(objectArray) {
  const result = objectArray.reduce(function(accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return result;
}

// define groupby based on reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

export function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

// define sum

export function sumBy(objectArray, property) {
  let initialValue = 0;
  return objectArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.property,
    initialValue
  );
}
