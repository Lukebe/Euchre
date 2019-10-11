import { combineReducers } from "redux";
import { membershipReducer } from "./membership.reducer";


export interface IMembershipState {
    type: string;
    amount: number;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    membership: IMembershipState
}

export const state = combineReducers<IState>({
    membership: membershipReducer
})