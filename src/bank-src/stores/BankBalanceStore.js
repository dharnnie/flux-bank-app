import {EventEmitter} from 'fbemitter';
import AppDispatcher from '../dispatchers/AppDispatcher';
import BankConstants from '../constants/constants';


const CHANGE_EVENT = 'change';

let emitter = new EventEmitter();
let balance = 0;

let BankBalanceStore = {

  getState(){
    return balance;
  },

  addListener: (callback) => {
    return emitter.addListener(CHANGE_EVENT, callback);
  }
};

BankBalanceStore.dispatchToken = AppDispatcher.register((action)=>{
  switch (action.type){
    case BankConstants.CREATED_ACCOUNT:
      balance = 0;
      emitter.emit(CHANGE_EVENT);
      break;
    case BankConstants.WITHDREW_FROM_ACCOUNT:
      balance = balance - action.ammount;
      emitter.emit(CHANGE_EVENT);
      break;
    case BankConstants.DEPOSITED_INTO_ACCOUNT:
      balance = balance + action.ammount;
      emitter.emit(CHANGE_EVENT);
      break;
  }
});

export default BankBalanceStore;
