import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <input type="text" className="input-number" />
        <table>
          <tr className="tr1">
            <th><input type="button" value="AC" className="glob numbers" aria-label="AC" /></th>
            <th><input type="button" value="+/-" className="glob numbers" aria-label="+/-" /></th>
            <th><input type="button" value="%" className=" glob numbers" aria-label="%" /></th>
            <th><input type="button" value="/" className="glob operations" aria-label="/" /></th>
          </tr>
          <tr className="tr2">
            <th><input type="button" value="7" className="glob numbers" aria-label="7" /></th>
            <th><input type="button" value="8" className="glob numbers" aria-label="8" /></th>
            <th><input type="button" value="9" className="glob numbers" aria-label="9" /></th>
            <th><input type="button" value="x" className="glob operations" aria-label="x" /></th>
          </tr>
          <tr className="tr3">
            <th><input type="button" value="4" className="glob numbers" aria-label="4" /></th>
            <th><input type="button" value="3" className="glob numbers" aria-label="3" /></th>
            <th><input type="button" value="5" className="glob numbers" aria-label="5" /></th>
            <th><input type="button" value="-" className="glob operations" aria-label="-" /></th>
          </tr>
          <tr className="tr4">
            <th><input type="button" value="1" className="glob numbers" aria-label="1" /></th>
            <th><input type="button" value="2" className="glob numbers" aria-label="2" /></th>
            <th><input type="button" value="3" className="glob numbers" aria-label="3" /></th>
            <th><input type="button" value="+" className="glob operations" aria-label="+" /></th>
          </tr>
          <tr className="tr5">
            <th colSpan="2"><input type="button" value="0" className="glob zero" aria-label="0" /></th>
            <th><input type="button" value="." className="glob numbers" aria-label="." /></th>
            <th><input type="button" value="=" className="glob operations" aria-label="=" /></th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
