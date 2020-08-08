import React from 'react'
import './sidebarRow.css'

function SidbarRow({selected,Icon,title}) {
    return (
        <div className={`sidebar__row ${selected && 'selected'}`}>
            <Icon className='sidebar_icon'/>
            <h3 className='sidebar_title'>{title}</h3>
        </div>
    )
}

export default SidbarRow
