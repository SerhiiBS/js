const data = [undefined,2,3,4,5,'sd'];
const data2 = [undefined,2,3];
function example ([a = 'Error', b, c, ...rest]) {
   if ([a, b, c, ...rest].length < 5) {
       console.log('Error')
   } else {
       console.log('Аргументів більше 5-ти =)')
   }
   console.log(`${a}-${b}-${c}`, rest)



}

example(data);
