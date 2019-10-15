import React from 'react';
import { IState, IMembershipState } from '../reducers';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMembership } from '../actions/membership.actions';

export interface IMembershipProps {
    membership: IMembershipState;
    updateMembership: (membershipType: string, endDate: number) => void;
}

export class SelectMembershipComponent extends React.Component<IMembershipProps> {

    constructor(props: any) {
        super(props);

    }

    MembershipSelected () {
        console.log("Member select");
        this.props.updateMembership("myString", 5);
        console.log(`membership data: ${this.props.membership.endDate}`);
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
                {/*<Link to="/paypal" className="buttonLinks">Select</Link> */}select
            </button>
            </>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    membership: state.membership
});

const mapDispatchToProps = {
    updateMembership: updateMembership
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMembershipComponent);