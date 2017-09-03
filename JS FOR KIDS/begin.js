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



  const randomBodyParts = ['глаз', 'нос', 'череп']
  const randomAdjectives = ['вонючая', 'унылая', 'дурацкая']
  const randomPartsOfAnimals = ['шерсть', 'зуб', 'коготь', 'хвост']
  const randomAnimals = ['кота', 'бкгемота', 'касатки', 'ежа', 'Ламы', 'собаки']
  const randomPartsOfAnimal = [randomPartsOfAnimals[Math.floor(Math.random() * randomPartsOfAnimals.length)]]
  const randomAnimal = [randomAnimals[Math.floor(Math.random() * randomAnimals.length)]]
  const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)]
  const randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]
  const randomInsult = ['У тебя', randomBodyPart, 'еще более', randomAdjective, 'чем', randomPartsOfAnimal, 'у', randomAnimal + '!!!'].join(' ')


   const numbers = [3, 2, 1]
   console.log(numbers.join(' больше, чем '))



   var myCrazyObject = { name: 'Нелепый объект', 'some array': [7, 9, { purpose: 'путаница', number: 123 }, 3.3], 'random animal': 'Банановая акула' }
   console.log(myCrazyObject['some array'][2].number)