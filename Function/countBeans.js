// Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
// Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.

var str  = 'In this string to much B B B B B leters'
var char = 'B'
var counter = 0

countBs = (str, char) => {
  for(let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char)
    counter ++
  }
  return counter 
}
countBs ( str, char)
console.log ('This line contains' + ' '+ counter + ' ' + 'letters' + ' ' + char)



 
