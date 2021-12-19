function average(numbers) {
  // filtered array is created which ignores the NaN values and stores the rest of the values
  const filteredArray = numbers.filter(function (value) {
    return !Number.isNaN(value);
})
  return filteredArray.reduce((p, c)=> p + c, 0) / (filteredArray.length);
 }

module.exports = {average};
