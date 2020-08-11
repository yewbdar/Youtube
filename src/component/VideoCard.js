import React from 'react'
import './videoCard.css'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
function VideoCard({image , title, channel, views, timeStamp, channelImage}) {
    return (
        <div className='videoCard'>
            <img src={image} alt='' width='140px' height='250px'/>
            <div className='videoCard_info'>
            <AccountCircleSharpIcon 
              className='videoCard_avatar'
              alt={channel}
              src={channelImage}
            />
            </div>
            <div className='videoCard_text'>
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views} . {timeStamp}</p>
            </div>
        </div>
    )
}

export default VideoCard
