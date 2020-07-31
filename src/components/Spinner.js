import React from 'react';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mb-5 py-5 w-100">
            <div className="spinner-border text-primary" style={ { width: '3rem', height: '3rem' } } role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;