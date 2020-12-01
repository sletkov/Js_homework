let date = prompt("Введите год")
let isLeap = ((date % 4 ==0) && (date % 100 !=0))? alert("Год високосный!") : alert("Год невисокосный!");
