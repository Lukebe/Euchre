import { IMembershipState } from ".";
import { membershipTypes } from "../actions/membership.actions";

const initialState: IMembershipState = {
    membershipType: "free",
    endDate: 0
};

export const membershipReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case membershipTypes.MEMBERSHIP_UPDATE:
            return {
                ...state,
                membershipType: action.payload.membershipType,
                endDate: action.payload.endDate
            }
        console.log('Does this work?');
        default: break;
    }
    return state;
}