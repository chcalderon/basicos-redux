const redux = require('redux');

const createStore = redux.createStore;

//State Inicial
const stateInicial = {
    usuarios: []
}

//Reducer
//State y action
const reducerPrincipal = (state = stateInicial, action) => {
    if(action.type==='ADD_USER'){
        return {
            ...state,
            usuarios: action.nombre
        }
    }
    if (action.type==='VIEW_USER'){
        return { ...state }
    }

    return state;
}

// Create store y store (contiene el state de la aplicacion)
// 3 Parametros: reducer, statePrincipal, applyMiddleWare
const store = createStore(reducerPrincipal);
console.log(store.getState() );


// Suscribe o suscription
// escucha los cambios se ejecuta cuando corre el dispatch con algun cambio en el action
store.subscribe(() => {
    console.log('algo cambio...', store.getState());
});



//Dispatch es la unica forma de cambiar el state
//Dispatch, metodo del store
store.dispatch({type: 'ADD_USER', nombre: 'Juan'});
console.log(store.getState() );
store.dispatch({type: 'VIEW_USER'});

console.log(store.getState() );