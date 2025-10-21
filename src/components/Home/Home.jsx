import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo)
    return (
        <div>
            <h1>this is home compo</h1>
        </div>
    );
};

export default Home;