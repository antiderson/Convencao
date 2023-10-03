import React from 'react';
import './index.css';

import ButtonComponent from '../components/Button/Button';

const App: React.FC = () => {
    return (
        <>
            <div className='container'>
                <div className='cont'>
                    <ButtonComponent number={0} />
                </div>
            </div>
        </>
    );
};

export default App;