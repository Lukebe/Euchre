import { IState } from "../reducers";
import React from 'react';
import {connect} from 'react-redux';

export interface ILoginProps {

}

export class LoginComponent extends React.Component<ILoginProps, {}> {
    render () {
        return(
            <>
                <div className="container">
                    <h1>Sign In</h1>
                    <input type="text" id="username"/>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);