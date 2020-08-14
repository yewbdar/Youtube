import React from 'react'
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannalRow from './ChannalRow'
import VideoCard from './VideoCard'
import './SearchPage.css'
function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage_filter'>
            <TuneSharpIcon/><h2>FILTER</h2>
            </div>
            <hr/>
            <ChannalRow 
            image='https://i.ytimg.com/vi/dMH1_YtUTSQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDeBAOfu_FoFY101FenE8tPNdIKRg'
            channel="clearver programmer "
            numOfVideo={200}
            verified
            subs='300k'
            description='you can find awsome programing'
             />
            <hr/>
            <div className='searchPage_video'>
            <VideoCard 
            image='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ'
            title='🔴How to Build a TODO app with React + Firebase (LIVE)'
            channelImage='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ'
            views='34.7k views '
            timeStamp='3 days ago'
            channel='claver programer'
            />
            <VideoCard 
            image='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ'
            title='How to Build a TODO app with React + Firebase (LIVE)'
            channelImage='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ'
            views='34.7k views '
            timeStamp='3 days ago'
            channel='claver programer'
            />
            <VideoCard 
            image='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ'
            title='How to Build a TODO app with React + Firebase (LIVE)'
            channelImage='https://i.ytimg.com/vi/Gzu7D6PvxXY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbTUAac1bQ-WrbuFSnt0uiPbFpBQ'
            views='34.7k views '
            timeStamp='3 days ago'
            channel='claver programer'
            />
            </div>
        </div>
    )
}

export default SearchPage
