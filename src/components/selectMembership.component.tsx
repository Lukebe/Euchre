import React from 'react';
import { IMembershipState, IState } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export interface IMembershipProps {
    membership: IMembershipState
}

export class SelectMembershipComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    async MembershipSelected () {
        
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
            <Link to="/paypal" className="button">Select</Link>
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