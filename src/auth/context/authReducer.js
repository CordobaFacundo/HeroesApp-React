import { types } from "../types/types";

export const authReducer = ( state = {}, actions ) => {

    switch ( actions.type ) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: actions.payload
            };

        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
}