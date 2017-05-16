// - Ноль чётный.
// - Единица нечётная.
// - У любого числа N чётность такая же, как у N - 2.
// Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.

isEven = (number) => {
  if (number==0)
 return true
 else if ( number == 1)
 return false
 if ( number > 0)
 return isEven (number - 2)
 if ( number < 0 )
 return isEven ( number + 2 )
}
console.log (isEven (75))
console.log (isEven (-3))