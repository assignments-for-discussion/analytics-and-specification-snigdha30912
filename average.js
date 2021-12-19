function average(numbers) {
  const filteredArray = numbers.filter(function (value) {
    return !Number.isNaN(value);
})
  return filteredArray.reduce((p, c)=> p + c, 0) / (filteredArray.length);
 }

module.exports = {average};
