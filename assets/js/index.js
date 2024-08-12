//1

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverseString('Даний рядок тексту'));

//2
const getPartInteger = (num) => {
  return Math.trunc(num);
};

console.log(getPartInteger(65.586));

//3

const userName = prompt("Введіть своє ім'я:");

alert(userName.toUpperCase());

//4
const formatDate = (dateStr) => {
  const [year, day, month] = dateStr.split("-");
  return (`${day}.${month}.${year}`);
};

console.log(formatDate("2021-22-09"));

//5

const isEqual = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase();
};

console.log(isEqual('pApA', 'papa'));
console.log(isEqual('qwerty', 'QWErty'));
console.log(isEqual('aaa', 'EEE'));

//6

const throwError = () => {
  throw new Error('Это ошибка!');
};

try {
  throwError();
} catch (error) {
  console.error('Произошла ошибка: ', error.message);
}
