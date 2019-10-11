import { IHomeState } from ".";
import { homeTypes } from "../actions/home.actions";

const initialState: IHomeState = {

};

export const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case homeTypes.HOME_UPDATE:
            return {
                ...state
            }
        default: break;
    }
    return state;
}