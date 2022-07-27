import React from 'react';

const Card = (props) => {
    return (
        <div className='col pr-4 h-100'>
            <div className="card">
                <div className="card-image w-100 mh-50">
                    <img alt={props.payload.fields.header.stringValue} src={props.payload.fields.image.stringValue} style={{ maxHeight: 150 }}/>
                    <span className="card-title">{props.payload.fields.header.stringValue}</span>
                </div>
                <div className="card-content px-2 py-1">
                    {props.payload.fields.description.stringValue}
                </div>
                <div className="card-action">
                    <a rel="noopener noreferrer" href="/event">Buy now!</a> <span className='text-decoration-none mr-md-3 text-primary float-end'>{props.payload.fields.price.stringValue}</span>
                </div>
            </div>
        </div>
    );
};

export default Card; 
