import React, { Fragment } from 'react'

export default function ListIDBox({ list }) {
    
    // filter out all list items that have names set to empty strings or null
    const filteredList = list.filter(item => item.name !== "" && item.name !== null);

    // sort list by name via generic "a - b" sort OR sort by specific naming convention
    filteredList.sort((a, b) => a.name - b.name || a.name.slice(4) - b.name.slice(4))
    
    return (
        <Fragment>
            {filteredList.map(listItem => (
                <div className="card" key={listItem.id}>
                    <span>{listItem.id}</span>
                    <span>{listItem.listId}</span>
                    <span>{listItem.name}</span>
                </div>
            ))}
        </Fragment>
    )
}
