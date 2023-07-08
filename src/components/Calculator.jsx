import { useContext, useReducer, useState } from "react";
import { calculatorReducer } from "../reducers/calculatorReducer";
import themeContext from "../context/themeContext";

export const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const { theme } = useContext(themeContext)
    const [calculator, dispatch] = useReducer(calculatorReducer, 10)
    
    const handleChangeNum1 = (e) => {
        setNum1(Number(e.target.value))
        console.log(num1);
    }

    const handleSum = (value) => {
        dispatch({ type: 'SUM_BY_VALUE', payload: value})
    }

    const handleSubstract = (value) => {
        dispatch({ type: 'SUBSTRACT_BY_VALUE', payload: value})
    }

    const handleMultiply = (value) => {
        dispatch({ type: 'MULTIPLY_BY_VALUE', payload: value})
    }

    const handleDivide = (value) => {
        dispatch({ type: 'DIVIDE_BY_VALUE', payload: value})
    }

    return (
        <div>
            <div>
                <label>Ingrese el valor para operar con el número 10</label>
                <input type="text" value={num1} onChange={handleChangeNum1}/>
            </div>
            <button onClick={() => handleSum(num1)}>Sumar</button>
            <button onClick={() => handleSubstract(num1)}>Restar</button>
            <button onClick={() => handleMultiply(num1)}>Multiplicar</button>
            <button onClick={() => handleDivide(num1)}>Dividir</button>
            <p>Resultado: {calculator}</p>
            {theme === 'light' ? <img src="https://cdn.memegenerator.es/descargar/4248033" width={300}/> : null}
        </div>
    )
}