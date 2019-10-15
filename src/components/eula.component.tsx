import React from 'react';
import {Link} from 'react-router-dom';

const EulaComponent: React.FC = () => {
    return(
        <>
            <h1>EULA</h1>
            <br/>
            <b>This is some text that I am not aware of but is easily editable</b>
            <br/><br/>
            <h2>Terms and Conditions</h2>
            <br/>
            <b>These are the terms and conditions you are agreeing to.</b>
            <div>
                <Link to="/selectMembership">I Agree</Link>
            </div>
        </>
    );
}
export default EulaComponent;