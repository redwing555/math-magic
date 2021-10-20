import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,

  });

  const handleClick = (event) => {
    setState({ ...state, ...calculate(state, event.target.value) });
  };

  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" className="input-number" value={state.total || (state.next || '0')} />
        <div className="input-operation">{state.operation && state.next ? state.operation + state.next : state.operation}</div>
      </div>
      <table>
        <tr className="tr1">
          <th><input type="button" value="AC" className="glob numbers" aria-label="AC" onClick={handleClick} /></th>
          <th><input type="button" value="+/-" className="glob numbers" aria-label="+/-" onClick={handleClick} /></th>
          <th><input type="button" value="%" className=" glob numbers" aria-label="%" onClick={handleClick} /></th>
          <th><input type="button" value="÷" className="glob operations" aria-label="÷" onClick={handleClick} /></th>
        </tr>
        <tr className="tr2">
          <th><input type="button" value="7" className="glob numbers" aria-label="7" onClick={handleClick} /></th>
          <th><input type="button" value="8" className="glob numbers" aria-label="8" onClick={handleClick} /></th>
          <th><input type="button" value="9" className="glob numbers" aria-label="9" onClick={handleClick} /></th>
          <th><input type="button" value="x" className="glob operations" aria-label="x" onClick={handleClick} /></th>
        </tr>
        <tr className="tr3">
          <th><input type="button" value="4" className="glob numbers" aria-label="4" onClick={handleClick} /></th>
          <th><input type="button" value="6" className="glob numbers" aria-label="6" onClick={handleClick} /></th>
          <th><input type="button" value="5" className="glob numbers" aria-label="5" onClick={handleClick} /></th>
          <th><input type="button" value="-" className="glob operations" aria-label="-" onClick={handleClick} /></th>
        </tr>
        <tr className="tr4">
          <th><input type="button" value="1" className="glob numbers" aria-label="1" onClick={handleClick} /></th>
          <th><input type="button" value="2" className="glob numbers" aria-label="2" onClick={handleClick} /></th>
          <th><input type="button" value="3" className="glob numbers" aria-label="3" onClick={handleClick} /></th>
          <th><input type="button" value="+" className="glob operations" aria-label="+" onClick={handleClick} /></th>
        </tr>
        <tr className="tr5">
          <th colSpan="2"><input type="button" value="0" className="glob zero" aria-label="0" onClick={handleClick} /></th>
          <th><input type="button" value="." className="glob numbers" aria-label="." onClick={handleClick} /></th>
          <th><input type="button" value="=" className="glob operations" aria-label="=" onClick={handleClick} /></th>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
