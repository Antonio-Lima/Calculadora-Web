import React, { useState } from 'react';
import { FiChevronsLeft } from "react-icons/fi";

import { Header, Calc } from './styles';
import logo from '../../assets/calculadora.png';

const Home: React.FC = () => {
    const [calc, setCalc] = useState('');
    const [equation, setEquation] = useState('');
    const [operator, setOperator] = useState('');

    const numberClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event?.currentTarget;
        var value = button.id;

        if (value === 'zero') {
            value = '0';
        } else if (value === 'dot') {
            value = '.';
        }

        if (operator) {
            setEquation(equation + value);
        }
        else { 
            setCalc(calc + value);
        }
    }

    const operatorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event?.currentTarget;

        setOperator(button.id);
    }

    function clearAll(): void {
        setCalc('');
        setOperator('');
        setEquation('');
    }

    const deleteLast = () => {
        if (operator && !equation) {
            clearAll();
        } else if (equation) {
            setEquation(equation.substring(0, equation.length - 1));
        } else {
            setCalc(calc.substring(0, calc.length - 1));
        }
    }

    function result(): void {
        var result = 0;
        var x = 0;
        var y = 0;

        x = +calc;
        y = +equation;

        switch (operator) {
            case 'plus':
                result = x + y;
            break;
            case 'minus':
                result = x - y;
            break;
            case 'div':
                result = x / y;
            break;
            case 'mult':
                result = x * y;
            break;
            case 'sq':
                result = Math.pow(x, y);
            break;
            case 'perc':
                result = (x * y) / 100;
            break;
        }

        setCalc(result.toString());

        setOperator('');
        setEquation('');
    }


    return (
        <>
            <Header>
                <img src={logo} alt="" />
                <h1>Calculadora Web</h1>
            </Header>
            <Calc>
                <ul>
                    <li>
                        <input type="text" value={(operator !== "" ? equation: calc )} readOnly/>
                    </li>
                    <li>
                        <button id="sq" onClick={operatorClick}>x²</button>
                        <button id="perc" onClick={operatorClick}>%</button>
                        <button id="div" onClick={operatorClick}>/</button>
                        <button id="erase" onClick={deleteLast}><FiChevronsLeft /></button>
                    </li>
                    <li>
                        <button id="7" onClick={numberClick}>7</button>
                        <button id="8" onClick={numberClick}>8</button>
                        <button id="9" onClick={numberClick}>9</button>
                        <button id="mult" onClick={operatorClick}>*</button>
                    </li>
                    <li>
                        <button id="4" onClick={numberClick}>4</button>
                        <button id="5" onClick={numberClick}>5</button>
                        <button id="6" onClick={numberClick}>6</button>
                        <button id="minus" onClick={operatorClick}> - </button>
                    </li>
                    <li>
                        <button id="1" onClick={numberClick}>1</button>
                        <button id="2" onClick={numberClick}>2</button>
                        <button id="3" onClick={numberClick}>3</button>
                        <button id="plus" onClick={operatorClick}>+</button>
                    </li>
                    <li>
                        <button id="zero" onClick={numberClick}>0</button>
                        <button id="dot" onClick={numberClick}>.</button>
                        <button id="enter" onClick={result}> = </button>
                    </li>
                </ul>
            </Calc>
        </>
    )
}

export default Home;