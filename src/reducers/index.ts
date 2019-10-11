import { combineReducers } from "redux";
import { homeReducer } from "./home.reducer";
import { membershipReducer } from "./membership.reducer";

export interface IHomeState {

}

export interface IMembershipState {
    type: string;
    amount: number;
}

// Composed state of all substates
// means that to access clicks -> state.clicker.clicks
export interface IState {
    home: IHomeState,
    membership: IMembershipState
}

export const state = combineReducers<IState>({
    home: homeReducer,
    membership: membershipReducer
})