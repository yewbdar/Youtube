import React from 'react'
import SidbarRow from './sidebars/SidbarRow'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidbarRow selected={true} Icon={HomeRoundedIcon} title='Home'/>
            <SidbarRow Icon={WhatshotRoundedIcon} title='Trending'/>
            <SidbarRow Icon={SubscriptionsRoundedIcon} title='Subscription'/>
            
            <hr/>
            <SidbarRow Icon={VideoLibraryIcon} title='Library'/>
            <SidbarRow Icon={HistoryIcon} title='History'/>
            <SidbarRow Icon={OndemandVideoSharpIcon} title='Your video'/>
            <SidbarRow Icon={WatchLaterSharpIcon} title='Watch later'/>
            <SidbarRow Icon={ThumbUpSharpIcon} title='Liked videos'/>
            <SidbarRow Icon={ExpandMoreSharpIcon} title='Show more'/>
            
            </div>
    )
}

export default Sidebar
