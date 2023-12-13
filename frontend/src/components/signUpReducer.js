export const INITIAL_STATE = {
    email: "",
    tempPasswd: "",
    conPasswd: ""
};

export function signUpReducer(state, action){
    switch (action.type){
        case "emailChange":
            return {
                ...state,
                email: action.payload
            };
        case "tempPasswdChange":
            return {
                ...state,
                tempPasswd: action.payload
            }
        case "conPasswdChange":
            return {
                ...state,
                conPasswd: action.payload
            }
        default:
            return state;
    }

}