const drawCats = howManyTimes => {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + '=^.^=')
  }
}
drawCats(10)

let balloons = 100
balloons /= 4
console.log(balloons)

 const myString = 'эЙ, кАК деЛа?'
 myString[0].toUpperCase() + myString.slice(1).toLowerCase()