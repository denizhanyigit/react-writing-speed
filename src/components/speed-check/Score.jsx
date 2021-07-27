import React from 'react';
import { ScoreTypes } from '../data/Types';
import ScoreCard from './ScoreCard';
const Score = ({values}) => {
    return (
            <div className="card-deck">
                {
                    Object.entries(values).map(([key,value])=>{
                        return (
                            <ScoreCard type={ScoreTypes[key]} key={key} value={value} /> 
                        )
                    })
                }
            </div>
    );
}

export default Score;