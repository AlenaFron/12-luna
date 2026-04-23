function checkLuhn(cardNumber) {
    // Удаляем все нецифровые символы (дефисы, пробелы)
    let digits = cardNumber.toString().replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    // Идем по строке справа налево
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        // Переключаем флаг для каждой следующей цифры
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// Проверка
const card = "4561-2612-1234-5464";
console.log(checkLuhn(card)); // false