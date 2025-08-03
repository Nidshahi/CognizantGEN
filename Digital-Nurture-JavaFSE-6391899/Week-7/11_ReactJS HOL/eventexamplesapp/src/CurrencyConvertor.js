import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: '',
      conversionRate: 0.011, // 1 INR ≈ 0.011 EUR
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = () => {
    const euros = (this.state.rupees * this.state.conversionRate).toFixed(2);
    this.setState({ euros });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'green', fontWeight: 'bold' }}>
          Currency Convertor!!!
        </h2>

        <label>Amount: </label>
        <input
          type="number"
          placeholder="Amount"
          value={this.state.rupees}
          onChange={this.handleChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <br /><br />

        <label>Currency: </label>
        <input
          type="text"
          placeholder="Currency"
          value={`€${this.state.euros}`}
          disabled
          style={{ padding: '5px' }}
        />
        <br /><br />

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default CurrencyConvertor;
