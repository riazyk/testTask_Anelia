// 1) Есть массив цифр по возрастанию [-10,-9,-8,-5,-3,-2,0,1,2,3,4,5,8,9,11,13,15,18,22,25,28,29,30],
// необходимо написать функцию, которая принимает массив и возвращает результат, который выводит все цифры через запятую.
// Однако если цифры идут подряд, то вывести их диапазоном через тире, например 21,22,23,24 => 21-24.

function trransformArray(arr) {
  let arr2 = [];
  let from = 0;
  let to = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      to = i;
    } else {
      if (from === to) {
        arr2.push(arr[from]);
      } else {
        arr2.push(arr[from] + '-' + arr[to]);
      }
      from = i;
      to = from;
    }
  }

  if (from === to) {
    arr2.push(arr[from]);
  } else {
    arr2.push(arr[from] + '-' + arr[to]);
  }
  return (arr2.join(', '));
}

let arr = [ -10,-9,-8,-5,-3,-2,0,1,2,3,4,5,8,9,11,13,15,18,22,25,28,29,30];

console.log(trransformArray(arr));


// 2) Есть многомерный объект он динамичен в формировании при каждом запросе, 
// необходимо написать функцию которая преобразует его в плоский формат.
// Учесть именование ключей если объект дочерний чтобы  
// в итоге результирующее имя ключа содержало ключи всех объектов родителей в порядке вложенности

const multidimensionalObject = {
  "User": 1,
  "Data": {
    "FirstName": "Anonimoys",
    "LastName": "AnonimoysLastName",
    "MiddleName": "AnonimoysMiddleName",
    "Role": [
      1, 2, 4, {
        "isOwner": true
      }, {
        "hidden": null
      }
    ]
  },
  "Profile": [{
    "Check": true,
    "CheckRole": [
      1, 2, 34
    ]
  }, {
    "Settings": {
      "Rider": [
        1, 2, 3, 4
      ],
      "Inside": {
        "In": true,
        "Out": null
      }
    }
  }]
};


function flatObject(array, string) {
  var finArr = [];
  for (var i in array) {

    if (typeof array[i] !== 'object') {
      finArr.push({
        name: string + i,
        val: array[i]
      });
    } else {
      finArr = finArr.concat(flatObject(array[i], string + i));
    }
  }
  return finArr;
}

function launch(x) {
  var resArr = x;
  var finObj = {};
  for (var i in resArr) {
    finObj[resArr[i].name] = resArr[i].val;
  }
  return finObj;
}

console.log(launch(flatObject(multidimensionalObject, '')));