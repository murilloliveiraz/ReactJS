import P from 'prop-types';
import { CounterContext } from './context'
import { useReducer } from 'react';
import { data } from './data'
import { reducer } from './reducer'

export const CounterProvider = ({children}) => {
    const [counterState, counterDispatch] = useReducer(reducer, data);

    return <CounterContext.Provider value={{ counterState, counterDispatch}}>{children}</CounterContext.Provider>
}

CounterProvider.proptypes = {
    children: P.node.isRequired,
}