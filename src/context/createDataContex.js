import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    
    const Context = React.createContext() 

    const Provider = ({ children }) => {
        
        const [state, dispatch] = useReducer(reducer, initialState)
        const boundActions = {}
        for (let key in actions) {
             boundActions[key] = actions[key](dispatch);

                                   /* salvo  nell'oggetto boundAction il ritorno della 
            chiamata alla funzione passata come argomento(actions)
            con il dispatch relativo,
            passo poi boundAction come argomento
            al contesto per essere accessibile a tutti
            
            boundAction {
            addPost = risultato della chiamata alla funzione
            nell'oggetto actions (es.actions.addPost(dispatch))
            
            in questo caso sarebbe: 
            
            addBlogPost = (title, content, callback) => {
            dispatch({ type: "add_blogpost", payload: { title, content } });
            
            )
            
            }
            
            */
                                 }
        console.log('bound',boundActions)
       ;
        return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>
    }

    return {Context, Provider}
 
}
