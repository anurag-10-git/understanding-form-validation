import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

const  inputStateRuducer = (state, action) => { //action is the code you dispatched somewhere in the code
 if(action.type === 'INPUT'){
   return {value: action.value, isTouched: state.isTouched };
 }
if(action.type === 'BLUR'){
   return {isTouched: true, value: state.value} 
 }
 if(action.type === 'RESET'){
    return {isTouched: false, value: ''}
}
    return initialInputState ;

}

const useInput = (validateValue) => {

   const [inputState, dispatch] = useReducer(inputStateRuducer ,initialInputState)
  
    

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({type: 'INPUT', value: event.target.value})
  };

  const inputBlurHandler = (event) => {
    dispatch({type: 'BLUR'})
  };

  const reset = () => {
   dispatch({type: 'RESET'})
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
