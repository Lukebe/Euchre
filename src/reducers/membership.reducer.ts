import { membershipTypes } from "../actions/membership.actions";

const initialState = {
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
            default: break;
        }
        console.log('membership state: ' + state.membershipType);
    return state;
}