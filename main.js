let amountHour = +prompt("Введіть кількість годин:"),
    amountSec = amountHour * 3600;

if (amountSec > 0) {
    alert(`Ви ввели кількість годин: ${amountHour}, в секундах це: ${amountSec}`);
} else if (amountSec == 0) {
    alert(`У Вас зовсім немає часу :) Ви ввели кількість годин: ${amountHour}, в секундах це теж нуль :)`);
} else {
    alert("Ви ввели не корректну кількість годин");
}