import createDataContext from '../context/createDataContex'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post n.${state.length + 1}` }]
        default:
            return state
    }

}

const addBlogPost = (dispatch) => {
    return () => {
     dispatch({ type: "add_blogpost" });
           
       }
    
   };


export const { Context, Provider } = createDataContext(
    blogReducer, {addBlogPost}, []
)