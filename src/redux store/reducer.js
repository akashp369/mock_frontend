const initialState={
    loading:false,
    isError:false,
    isAuth:false,
    isSignup:false,
    token:'',
}

const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case "Signup":
            return {...state, loading:false, isError: false, isAuth:false, isSignup:true}
        default:
            return state
    }
}

export default reducer