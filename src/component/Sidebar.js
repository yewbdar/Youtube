import React from 'react'
import SidbarRow from './sidebars/SidbarRow'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import './Sidebar.css'
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidbarRow selected={true} Icon={HomeRoundedIcon} title='Home'/>
            <SidbarRow Icon={WhatshotRoundedIcon} title='Trending'/>
            <SidbarRow Icon={SubscriptionsRoundedIcon} title='Subscription'/>
            <hr/>
        </div>
    )
}

export default Sidebar
