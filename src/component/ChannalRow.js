import React from 'react'
import './channalRow.css'
import VerifiedUserSharpIcon from '@material-ui/icons/VerifiedUserSharp';
import Avatar from '@material-ui/core/Avatar';
function ChannalRow({image,channel,numOfVideo,verified,subs,description
}) {
    return (
        <div className='channalRow'>
            <Avatar className='avatar' src={image} alt={channel}/>
            <div className='channalRow_text'>
            <h4>{channel} {{channel} && <VerifiedUserSharpIcon/>}</h4>
            <p>{subs} subscrber . {numOfVideo} video</p>
            <p>{description}</p>
            <p>{channel}</p>
            </div>
        </div>
    )
}

export default ChannalRow
