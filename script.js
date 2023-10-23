// lab_6.2
// Гринчук Тарас
// Лабораторна робота № 6.2
// Опрацювання одновимірних масивів ітераційним способом
// Варіант №4

// Ітераційний спосіб
function generateArray(size, min, max) {
   const array = [];
   for (let i = 0; i < size; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   return array;
}
function findMin(array) {
   let min = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
         min = array[i];
         indexOfMin = i;
      }
   }
   return {value: min, index: indexOfMin};
}
function findMax(array) {
   let max = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
         max = array[i];
         indexOfMax = i;
      }
   }
   return {value: max, index: indexOfMax};
}
function calcArithmetic(a, b) {
   return (a + b) / 2;
}

const array = generateArray(20, 1, 100);
console.log("Сформований масив: " + array);
const minInfo = findMin(array);
console.log(`Мінімальне значення масиву: ${minInfo.value}, його індекс в масиві: ${minInfo.index}`);
const maxInfo = findMax(array);
console.log(`Максимальне значення масиву: ${maxInfo.value}, його індекс в масиві: ${maxInfo.index}`);
const result = calcArithmetic(minInfo.index, maxInfo.index);
console.log(`Середнє арифметичне індексів мінімального та максимального значень: ${result}`);
