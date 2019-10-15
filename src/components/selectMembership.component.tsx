import React from 'react';
import { IMembershipState, IState } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMembership } from '../actions/membership.actions';
import { number } from 'prop-types';

export interface IMembershipProps {
    membership: IMembershipState;
    updateMembership: (membershipType: string, endDate: number) => void;
}

export class SelectMembershipComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    async MembershipSelected () {
        console.log("Is this working?");
        updateMembership("myString", 5);
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
            <button className='btns' id='memberSelectBtn' onClick= { () => this.MembershipSelected()} >
                <Link to="/paypal" className="buttonLinks">Select</Link>
            </button>
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