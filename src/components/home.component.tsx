import { IHomeState, IState } from "../reducers";
import React from 'react';
import { updateHome } from "../actions/home.actions";
import {connect} from 'react-redux';

export interface IHomeProps {

}

export class HomeComponent extends React.Component<IHomeProps, {}> {
    render() {
        return(
            <>
            <h1>Euchre</h1>
            <b>This is the game of euchre, please start a game.</b>
            </>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = {
    updateHome: updateHome
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);