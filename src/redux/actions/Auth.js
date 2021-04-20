import types from "../types"

const register=(credentials)=>{
    return{
        type: types.REGISTER,
        payload: credentials
    }
}

const login =(credentials)=>{
    return {
        type: types.LOGIN,
        payload:credentials
    }
}