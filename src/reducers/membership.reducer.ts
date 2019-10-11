import { IMembershipState } from ".";
import { membershipTypes } from "../actions/membership.actions";

const initialState: IMembershipState = {
    type: "normal",
    amount: 0
};

export const membershipReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case membershipTypes.MEMBERSHIP_UPDATE:
            return {
                ...state,
                type: action.payload.type,
                amount: action.payload.amount
            }
        default: break;
    }
    return state;
}