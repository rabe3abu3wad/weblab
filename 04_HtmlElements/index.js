document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operationSelect = document.getElementById('operation');
    const btnCalc = document.getElementById('btnCalc');
    const lblResult = document.getElementById('lblResult');
    const outputArea = document.getElementById('output');

    // פונקציה מעודכנת להדפסת לוגים (סעיף 2)
    function print(text, append = true) {
        if (append) {
            // הוספת הטקסט לשורה האחרונה (התנהגות ברירת מחדל)
            outputArea.value += '\n' + text;
            // גלילה אוטומטית למטה
            outputArea.scrollTop = outputArea.scrollHeight;
        } else {
            // החלפת הטקסט הקיים בטקסט החדש
            outputArea.value = text;
        }
    }

    // פונקציה לביצוע אימות קלט (סעיף 5)
    function validateInput(inputElement) {
        const value = inputElement.value;
        const isValid = !isNaN(parseFloat(value)) && isFinite(value) && value.trim() !== '';

        if (isValid) {
            inputElement.classList.remove('is-invalid');
            inputElement.classList.add('is-valid');
        } else {
            inputElement.classList.remove('is-valid');
            inputElement.classList.add('is-invalid');
        }
        return isValid;
    }

    // לוגיקת המחשבון
    btnCalc.addEventListener('click', () => {
        // 1. אימות קלט לשני השדות
        const isNum1Valid = validateInput(num1Input);
        const isNum2Valid = validateInput(num2Input);

        if (!isNum1Valid || !isNum2Valid) {
            lblResult.textContent = 'שגיאת קלט';
            print('שגיאה: יש להזין ערכים מספריים תקינים.', true);
            return;
        }

        // 2. קבלת הערכים
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;
        let result;
        let operationSymbol;

        // 3. ביצוע הפעולה
        switch (operation) {
            case 'add':
                result = num1 + num2;
                operationSymbol = '+';
                break;
            case 'subtract':
                result = num1 - num2;
                operationSymbol = '-';
                break;
            case 'multiply':
                result = num1 * num2;
                operationSymbol = '*';
                break;
            case 'divide':
                if (num2 === 0) {
                    lblResult.textContent = 'א"א לחלק ב-0';
                    print('שגיאה: ניסיון לחלק באפס.', true);
                    return;
                }
                result = num1 / num2;
                operationSymbol = '/';
                break;
            default:
                lblResult.textContent = 'שגיאת פעולה';
                return;
        }

        // 4. הצגת התוצאה
        lblResult.textContent = result.toFixed(2); // הצגת 2 ספרות אחרי הנקודה

        // 5. רישום לוג ב-TextArea (סעיף 2)
        const logEntry = `${num1} ${operationSymbol} ${num2} = ${result.toFixed(2)}`;
        print(logEntry, true);

    });

    // הטמעה של demoNative() כנדרש בקוד ה-HTML המקורי, כפונקציה ריקה.
    window.demoNative = function () {
        print('כפתור "Native Types" נלחץ', true);
    };

    // דוגמה לשימוש ב-print עם append=false
    document.getElementById('btn2').addEventListener('click', () => {
        print(`כפתור "Register Click From Code" נלחץ. `, false);
        print('זהו טקסט שכתבנו, והפעם לא הוספנו אותו אלא החלפנו את כל הקודם.', false);
    });

    // הוספת מאזיני אירועים לשינוי כדי לבצע אימות בזמן אמת
    num1Input.addEventListener('input', () => validateInput(num1Input));
    num2Input.addEventListener('input', () => validateInput(num2Input));
});