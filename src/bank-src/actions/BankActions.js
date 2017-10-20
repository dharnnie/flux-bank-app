import AppDispatcher from '../dispatchers/AppDispatcher';
import BankConstants from '../constants/constants';

let BankActions = {
  createAccount(){
    AppDispatcher.dispatch({
      type: BankConstants.CREATED_ACCOUNT,
      ammount: 0
    });
  },

  depositIntoAccount(ammount){
    AppDispatcher.dispatch({
      type: BankConstants.DEPOSITED_INTO_ACCOUNT,
      ammount: ammount
    });
  },

  withdrawFromAccount(ammount){
    AppDispatcher.dispatch({
      type: BankConstants.WITHDREW_FROM_ACCOUNT,
      ammount: ammount
    });
  }
}

export default BankActions;
