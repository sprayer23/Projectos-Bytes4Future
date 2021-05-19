"use strict";

function removeDuplicadosAlt(arr) {
  /* Ou este
      const resultsfo = [];
      for (let i = 0; i < arr.length; i++)    {
          if (!resultado.includes(arr[i]))    {
              resultado.push(arr[i])
          }
      }
  */

  /* Ou este    
      for (const elem of arr) (
          if (!resultado.includes(elem))  {
              resultado.push(elem)
          }
      )
      return resultado
  */
}

var arr = [3, 3, 3, 5, 5, 5, 6, 6, 7];
console.log(removeDuplicadosAlt(arr));
console.log(arr);