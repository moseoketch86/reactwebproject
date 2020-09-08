import React from 'react';
import './VideoCard.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function VideoCard({movie}){
    return(
        <div className='videocard'>
            <img src='movienight.png' alt=''/>
            <div className='paragraph'>
            <p>this is a film about coding</p>
            <h2>movie title</h2>
            <ThumbUpAltIcon/>
            <p>number of likes</p>
            </div>
            
        </div>
    )
}

export default VideoCard;
