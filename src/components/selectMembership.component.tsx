import React from 'react';
import { IMembershipState, IState } from '../reducers';
import { connect } from 'react-redux';

export interface IMembershipProps {
    membership: IMembershipState
}

const initialState: IMembershipState = {
    type: "normal",
    amount: 0
}

export class SelectMembershipComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    async Accept () {
        this.props.history.push('/home');
        window.location.reload();
    }

    render(){
        return(
            <>
            <h1>Select Your Membership Plan</h1>
            <div>
                <input type="radio" name="membership" value="monthly"/>
                <label>9.99 Monthly</label>
            </div>
            <div>
                <input type="radio" name="membership" value="yearly"/>
                <label>99.99 Yearly</label>
            </div>
            <div>
                <input type="radio" name="membership" value="trial"/>
                <label>Unlimited Trial (Virtual Currency Only)</label>
            </div>
            <button>Select</button>
            </>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        membership: state.membership
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMembershipComponent);