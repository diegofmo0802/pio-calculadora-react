import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberClick = (number) => {
        setDisplayValue(displayValue === '0' ? String(number) : displayValue + number);
    };

    const handleOperatorClick = (op) => {
        setPreviousValue(parseFloat(displayValue));
        setOperator(op);
        setDisplayValue('0');
    };

    const handleEqualsClick = () => {
        const currentValue = parseFloat(displayValue);
        let result;
        switch (operator) {
            case '+':
                result = previousValue + currentValue;
                break;
            case '-':
                result = previousValue - currentValue;
                break;
            case '*':
                result = previousValue * currentValue;
                break;
            case '/':
                result = previousValue / currentValue;
                break;
            default:
                result = currentValue;
        }
        setDisplayValue(String(result));
        setPreviousValue(null);
        setOperator(null);
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setPreviousValue(null);
        setOperator(null);
    };


    return (
        <div className="calculator">
            <div className="calculator-display">{displayValue}</div>
            <div className="calculator-buttons">
                <button onClick={() => handleNumberClick(7)}>7</button>
                <button onClick={() => handleNumberClick(8)}>8</button>
                <button onClick={() => handleNumberClick(9)}>9</button>
                <button onClick={() => handleOperatorClick('/')}>/</button>
                <button onClick={() => handleNumberClick(4)}>4</button>
                <button onClick={() => handleNumberClick(5)}>5</button>
                <button onClick={() => handleNumberClick(6)}>6</button>
                <button onClick={() => handleOperatorClick('*')}>*</button>
                <button onClick={() => handleNumberClick(1)}>1</button>
                <button onClick={() => handleNumberClick(2)}>2</button>
                <button onClick={() => handleNumberClick(3)}>3</button>
                <button onClick={() => handleOperatorClick('-')}>-</button>
                <button onClick={() => handleNumberClick(0)}>0</button>
                <button onClick={() => handleNumberClick('.')}>.</button>
                <button onClick={handleEqualsClick}>=</button>
                <button onClick={() => handleOperatorClick('+')}>+</button>
                <button onClick={handleClearClick}>C</button>
            </div>
        </div>
    );
};

export default Calculator;