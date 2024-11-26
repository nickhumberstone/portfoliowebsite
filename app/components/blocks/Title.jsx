import React from 'react';

const Title = (props) => {
    return (
        <div className="text-center text-lg bg-brand-primary rounded-lg text-brand-text-inverse p-2 my-2">
            <h2>{props.text}</h2>
        </div>
    );
};

export default Title;
