import React from 'react';
import Comment from '../Comment';
import CardBox from "../CardBox";

export default function Content(){
    let author='Mehras';
    return (
        <div>
            <CardBox>
                <Comment author={author}/>
            </CardBox>
        </div>
    );
}