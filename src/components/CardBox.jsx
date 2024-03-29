import React from 'react';

export default function CardBox(props){

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}