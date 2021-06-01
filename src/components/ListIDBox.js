import React, { Fragment } from 'react'

export default function ListIDBox({ list }) {
    
    // filter out all list items that have names set to empty strings or null
    const filteredList = list.filter(item => item.name !== "" && item.name !== null);
    // sort list by name
    filteredList.sort((a, b) => a.name - b.name || a.name.slice(4) - b.name.slice(4))
    console.log(filteredList)
    
    return (
        <Fragment>
            {filteredList.map(listItem => (
                <tr key={listItem.id}>
                    <td>{listItem.id}</td>
                    <td>{listItem.listId}</td>
                    <td>{listItem.name}</td>
                </tr>
            ))}
        </Fragment>
)
}
