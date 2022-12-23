// ============================================

// const containerList = document.querySelector('.list');
// containerList.addEventListener('click', clickOnTarget);

// function clickOnTarget(event) {

//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }


//     const currenActiveBtn = document.querySelector('.active-button');

//     if (currenActiveBtn) {
//         currenActiveBtn.classList.remove('active-button')
//     }


//     event.target.classList.add('active-button');
// }


// const ing = 'реча';
// const meet = 'вст';
// const allName = meet + ing;
// const secondNameOfRestoraunt = 'Рыбка';



// const log = (time, place) => {
//     console.log(`${allName} через ${time}ms в ${place}е Золотая ${secondNameOfRestoraunt}`);
// }





// SETTIMEOUT==============================================================

// // идентификатор нашего setTimeout
// let timeoutId = null;
// // из дом дерева получаем ссылку на елемент "кнопка"
// const refs = {
//     notifications: document.querySelector('.js-class')
// };

// // добавляем событие клик на кнупку, которое вызывает ф-ю onNotificationClick
// refs.notifications.addEventListener('click', removeClass);

// showNotofocationClick();
// // Ф-я, добавляет класс is-visible' на нашу кнопку - и она постоянно видима
// function showNotofocationClick() {

//     // отложення ф-я через setTimeout, которая вызовкт ф-ю removeClass,
//     // которая уже закроет наше окно
//     timeoutId = setTimeout(() => {
//         console.log('Автоматически закрываем алерт!!!!')
//         removeClass();
//     }, 3000);
//     refs.notifications.classList.add('is-visible');
// };

// // Ф-я removeClass снимает класс с елемента(кнопки)
// function removeClass() {
//     refs.notifications.classList.remove('is-visible');
//     // при клике в кнопку (чтобы она закрылась), мне уже не нужно, чтобы она,
//     // закрывалась сама чере setTimeout.
//     // я просто очищаю наш идентификатор timeoutId - чтобы не вызывать отложенную
//     // функцию
//     clearTimeout(timeoutId);
// }


// РАБОТА с ИНТЕРВАЛОМ +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const DELAY = 1000;
// const ATTEMPTS = 3;
// let counter = 0;

// const intervalId = setInterval(() => {


//  console.log('Subscribe!');
//     counter += 1;

// if (counter === ATTEMPTS) {
//     console.log('stop interval');
//     clearInterval(intervalId);
//     }

// }, DELAY);

// ПРОМИСЫ ==============================================================
// ======================================================================
// const promise = new Promise((resolve, reject) => {
//     const Fellill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (Fellill) {
//     resolve('Successfully')}
//     reject ('Unsuccessfully') })
// }, 1000)

// promise.then( onSuccess, Error);


// function onSuccess(r) {
//     console.log(r);
// }

// function Error(e) {
//     console.log(e);
// }



// КАК РАНЬШНЕ ОБХОДИЛИСЬ БЕЗ ПРОМИСОВ=-=-=-=-=-=-=-=-=-=-=-=-==--=-==--=-==-=-=-=-=-=-=-=-
// const makeOrder = (dish, onSuccsess, onError) => {
//     const passed = Math.random() > 0.5;

//     // timer
//     setTimeout(() => {
//         if (passed) {
//             onSuccsess(`вот ваш заказ - ${ dish } `)
//         } else {
//             onError('сорян, еды нет');
//         }
//     }, 500);
// };

// makeOrder('устрицы', successOrder, errorOrder);

// function successOrder(result) {
//     console.log(result);
// }

// function errorOrder(error) {
//     console.log(error);
// }


// ТО ЖЕ САМОЕ, ТОЛЬКО ЧЕРЕЗ ПРОМИСЫ========================================================================================
// const makeOrder = dish => {

//     const promise = new Promise((resolve, reject) => {
//             const passed = Math.random() > 0.5;
//          // timer
//       setTimeout(() => {
//         if (passed) {
//             resolve(`вот ваш заказ - ${ dish } `)
//         } else {
//             reject('сорян, еды нет');
//         }
//     }, 500);
//     })
//     return promise;
// };

// makeOrder('устрицы').then(successOrder).catch(errorOrder);

// function successOrder(result) {
//     console.log(result);
// }

// function errorOrder(error) {
//     console.log(error);
// }


// Задача на пошук усіх пропущених чисел в масиві====================================================================
// const source = [9, 3, 4, 10, 5, 6, 8];
// // відсортували числа в масиві за зростанням
// source.sort((a, b) => a - b);

// // source[source.length - 1] - так можна знайти значення останнього елемента в масиві

// let result = [];
// // якщо довжина масиву співпадає зі значенням останнього елемнту масива, значить
// // в масиві не має пропущених чисел
// if (source.length === source[source.length - 1]) {
//   // і ми просто розпилюємо в нови масив result наш масив source
//   result.push(...source);
// } else {
//   let resultLength = source[source.length - 1]; // длина будет равнятся самому большому значению

//   // тоды перебираємо наш масив
//   for (let i = 1; i < resultLength; i++) {
//     // якщо число, що перебираємо строго дорівнюватиме -1 (для indexOf це значить, що такого число не має в масиві)
//     // то саме таке число ми і передаємо до нашого нового масиву
//     if (source.indexOf(i) === -1) {
//       result.push(i);
//     }
//   }
// }
// console.log(result);


// Задача на проверку елемента (простой ли он объект)=================================================================
// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.


// наш об'єкт
// const elementParam = {a:7};

// Розв'язок****
// const isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;
// function isPlainObject(element) {
//     typeof element === 'object' && !Array.isArray(element) && element !== null;
// }

// console.log(isPlainObject(elementParam));

// Пояснення*****
// перевірка
// 1- typeof element === 'object' = перевіряємо, чи загалом в нашій змінній elementParam знаходиться
// об'єкт (простий чи складний - без різниці)
// можемо перевірити так:
// console.log(typeof elementParam)
// 2 - !Array.isArray(element) - перевіряємо, чи являється наш об'єкт масивом
// можемо перевірити так:
// console.log(Array.isArray(elementParam))
// 3- просто перевіряємо, чи в змінній elementParam у нас не null
// console.log(elementParam !== null);



// Опис задачі: Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`============================
// Необхідний результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

// // наш об'єкт
// const object = {
//     a: 12,
//     b: 13,
//     c:14,
// }

// // const commonArray = Object.entries(object);
// // console.log(commonArray);


// Напишите функцию, которая поверхностно сравнивает два объекта.========================================================================
// VAR 1========================================================
// const firstObj = {
//     a: 1,
//     b: 2,
//     c:3,
// }

// const secondObj = {
//     a: 1,
//     b: 2,
//     c:3,
// }

//  const isEqual = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//      const secondObjKeys = Object.keys(secondObj);

// // перевірка: якщо кількість ключів в одному масиві не співпадає з кількістю ключів в іншому,
//     //  то логічно, що початкові об'єтку не можуть бути рівними
//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return 'These are NOT the same objects';
//   }
//     //  і ще одна перевірка: відфільтровуємо всі ключі в firstObjKeys за таким принципом:
//     //  якщо ключ "а" з firstObj строго дорівнює ключу "а" з secondObj, ..., і так всі ключі -
//     // значить ми маємо два ідентичних об'єкта, а значить повернемо true
// //   else if (firstObjKeys.filter((key) => firstObj[key] === secondObj[key])) {
// //       return 'These are the same objects';
// //    }

// // Або ж методом інверсії: ми так само відфільтровуємо наш перший масив з ключами за таким принципом:
// // ми хочему повернути лише ті ключі, які мають різне значення в  firstObj та secondObj, тобто якщо
// // в firstObj "а" = 1, а в secondObj "а" = 2 - значить повертаємо даний ключ до масиву.
// // Але ставка робиться на те, що у нас ідентичні об'єкти firstObj та secondObj, і тоді до масиву нічого не поверниться,
// // і метод filter поверне пустий масив, довжина якого буде 0, а нуль в інверсії  !firstObjKeys - перетвориться на true.
// // Якщо  filter поверне не пустий масив (тобто якісь значення в ключах обох об'єктів будуть різними), то відповідно масив матиме певну довжину,
// // яка при інверсії !firstObjKeys перетвориться на false, а значить об'єкти не є ідентичними
//   return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
// };
// console.log(isEqual(firstObj, secondObj));


// VAR 2========================================================
// const isEqual2 = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   const secondObjKeys = Object.keys(secondObj);
// // // перевірка: якщо кількість ключів в одному масиві не співпадає з кількістю ключів в іншому,
// //     //  то логічно, що початкові об'єтку не можуть бути рівними
//   if (firstObjKeys.length !== secondObjKeys.length) {
//     return false;
//   }

//     // далі використовуємо цикл for...in для об'єкту, яки перебирає всі його ключі -
//     // const prop - ключі в об'єкті firstObj
//     // на свякий випадок перевіряємо, чи являються всі ключі даного об'єкта його власними ключами - hasOwnProperty,
//     // та перевіряємо значення цих ключів на рівність: якщо хоч один один не відповіднає - отримаємо false
//   for (const prop in firstObj) {
//     if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
//       return false;
//     }
//   }

//   return true;
// };
// console.log(isEqual2(firstObj, secondObj));



/**
  * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.=============================================
  * Пустые значения: '', null, NaN, undefined, [], {}
*/

const data = { a: { b: undefined } };

const data2 = { a: { b: 1 } };



const isEmptyDeep = (element) => {
  // перевірка, чи взагалі щось є в змінній
  if (element === null) {
    return true;
  }
  // перевірка, чи являється наш об'єкт складним об'єктом - тобто массивом, і відповідно, якщо довжина цього масиву === 0,
  // отримуємо true (значить наш об'єкт(масив) пустий)
  if (Array.isArray(element)) {
    if (element.length === 0) {
      return true;
    }

    let result;
    for (let i = 0; i < element.length; i += 1) {
      if (typeof element[i] === 'boolean' || (typeof element[i] === 'number' && !Number.isNaN(element[i]))
        || (typeof element[i] === 'string' && element[i] !== '')) {
        result = false;
        break;
      }
      if (Array.isArray(element[i]) || (typeof element[i] === 'object' && element[i] !== null)) {
        result = isEmptyDeep(element[i]);
        break;
      }

      result = true;
    }

    return result;
  }


  if (typeof element === 'object') {
    const objectKeys = Object.keys(element);
    if (objectKeys.length === 0) {
      return true;
    }

    let result;
    for (let i = 0; i < objectKeys.length; i += 1) {
      const value = element[objectKeys[i]];

      if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
        || (typeof value === 'string' && value !== '')) {
        result = false;
        break;
      }
      if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
        result = isEmptyDeep(value);
        break;
      }

      result = true;
    }

    return result;
  }
};

console.log(isEmptyDeep(data));
console.log(isEmptyDeep(data2));