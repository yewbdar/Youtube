import React from 'react'
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannalRow from './ChannalRow'
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
        </div>
    )
}

export default SearchPage
