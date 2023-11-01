import React from 'react'


export const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props
    return (
        <ul className='projectFilters' onClick={onSelectFilter}>
            {filters.map((filterItm) => (
                filterItm === selected ? <li className='filterBar active'><div className='bar'>{filterItm}</div></li> : <li className='filterBar'><div className='bar'>{filterItm}</div></li>
            ))}
        </ul>
    )
}
