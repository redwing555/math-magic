import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      total: null,
      next: null,
      operation: null,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const obj = this.state;
    const res = calculate(this.state, event.target.value);
    this.setState({ ...obj, ...res });
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;

    return (
      <div className="calculator">
        <div className="screen">
          <input type="text" className="input-number" value={total || (next || '0')} />
          <div className="input-operation">{operation && next ? operation + next : operation}</div>
        </div>
        <table>
          <tr className="tr1">
            <th><input type="button" value="AC" className="glob numbers" aria-label="AC" onClick={this.handleClick} /></th>
            <th><input type="button" value="+/-" className="glob numbers" aria-label="+/-" onClick={this.handleClick} /></th>
            <th><input type="button" value="%" className=" glob numbers" aria-label="%" onClick={this.handleClick} /></th>
            <th><input type="button" value="÷" className="glob operations" aria-label="÷" onClick={this.handleClick} /></th>
          </tr>
          <tr className="tr2">
            <th><input type="button" value="7" className="glob numbers" aria-label="7" onClick={this.handleClick} /></th>
            <th><input type="button" value="8" className="glob numbers" aria-label="8" onClick={this.handleClick} /></th>
            <th><input type="button" value="9" className="glob numbers" aria-label="9" onClick={this.handleClick} /></th>
            <th><input type="button" value="x" className="glob operations" aria-label="x" onClick={this.handleClick} /></th>
          </tr>
          <tr className="tr3">
            <th><input type="button" value="4" className="glob numbers" aria-label="4" onClick={this.handleClick} /></th>
            <th><input type="button" value="6" className="glob numbers" aria-label="6" onClick={this.handleClick} /></th>
            <th><input type="button" value="5" className="glob numbers" aria-label="5" onClick={this.handleClick} /></th>
            <th><input type="button" value="-" className="glob operations" aria-label="-" onClick={this.handleClick} /></th>
          </tr>
          <tr className="tr4">
            <th><input type="button" value="1" className="glob numbers" aria-label="1" onClick={this.handleClick} /></th>
            <th><input type="button" value="2" className="glob numbers" aria-label="2" onClick={this.handleClick} /></th>
            <th><input type="button" value="3" className="glob numbers" aria-label="3" onClick={this.handleClick} /></th>
            <th><input type="button" value="+" className="glob operations" aria-label="+" onClick={this.handleClick} /></th>
          </tr>
          <tr className="tr5">
            <th colSpan="2"><input type="button" value="0" className="glob zero" aria-label="0" onClick={this.handleClick} /></th>
            <th><input type="button" value="." className="glob numbers" aria-label="." onClick={this.handleClick} /></th>
            <th><input type="button" value="=" className="glob operations" aria-label="=" onClick={this.handleClick} /></th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
