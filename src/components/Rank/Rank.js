import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3">
            <strong> {`${name} your current rank is...`} </strong>
            </div>
            <div className='white f1'>
                <strong> {entries} </strong>
            </div>
        </div>
    );
}

export default Rank;