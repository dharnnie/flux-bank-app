import React, { Component } from 'react';
import '././App.css';
import BankBalanceStore from './bank-src/stores/BankBalanceStore';
import BankActions from './bank-src/actions/BankActions';

class App extends Component {
  constructor(){
    super(...arguments);
    BankActions.createAccount();
    this.state = {
      balance: BankBalanceStore.getState()
    }
  }

  componentDidMount(){
    this.storeSubscription = BankBalanceStore.addListener(
      data => this.handleStoreChange(data)
    );
  }

  componentWillUnmount(){
    this.storeSubscription.remove();
  }
  handleStoreChange(){
    this.setState({balance: BankBalanceStore.getState()});
  }

  deposit(){
    BankActions.depositIntoAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  withdraw(){
    BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
    this.refs.ammount.value = '';
  }

  clicker(){

  }
  render() {
    return (
      <div className="App">
        <header>GangTrust Bank</header>
        <h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
        <div className = "atm">
          <input type="text" placeholder="Enter Amount" ref="ammount"/><br/>
          <button onClick={this.withdraw.bind(this)}>Withdraw</button>
          <button onClick={this.deposit.bind(this)}>Deposit</button>
        </div><br/>
        <div>
          <h1>This is the 2nd time you are clicking me</h1>
          <div>
            <button onClick={this.clicker.bind(this)}>Clicker</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
