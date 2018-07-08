import React from 'react';

const FaceRecognition = ({imgUrl}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img src={imgUrl} width='500px' height='auto' alt='user choice upload' />
            </div>
        </div>
    );
}

export default FaceRecognition;