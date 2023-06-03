// задание 2
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


function valueNameCheck(obj, string) {
    return (string in obj)

};
const people = {
    Имя: 'Николай',
    Фамилия: 'Никифоров',
    Возраст: 30
}

console.log(valueNameCheck(people, "Имя"));
console.log(valueNameCheck(people, "Город"));