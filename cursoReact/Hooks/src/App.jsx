import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

//actions
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
}


//data.js
export const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};


//Reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

//AppCOntext
export const Context = createContext();
export  const AppContext = ({children}) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({type: actions.CHANGE_TITLE,payload})
  }

  return (
    <Context.Provider value={{state, changeTitle}}>
      {children}
    </Context.Provider>
  )
}

AppContext.propTypes = {
  children: P.node,
}

//index
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return(
    <>
    <input type="text" ref={inputRef}/>
    <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
    </>
  )
}

//App
function App() {
  return (
    <AppContext>
    <div>
      <H1 />
    </div>
    </AppContext>
  );
}

export default App;
