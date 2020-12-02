import { useCallback, useReducer } from 'react'

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true; 
            //go through all the input to find out if the form is valid 
            for (const inputId in state.inputs) {
                if(inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            }
        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            }
        default: 
            return state; 
    }
}

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity //overall form validity 
    });

    //function get's recreated if any of the props changes because of re-rendering 
    //thats why we use useCallback so no new function is created when the componet re-render 
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ 
            type: 'INPUT_CHANGE', 
            value: value, 
            isValid: isValid, 
            inputId: id 
        })
    }, []);

    //set the initial data from the backend 
    const setFormData = useCallback((inputData, formValidity)  => {
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        })
    }, [])

    return [formState, inputHandler, setFormData];
}