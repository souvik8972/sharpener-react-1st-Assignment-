/* eslint-disable react/prop-types */
// import React from 'react'

// eslint-disable-next-line react/prop-types
const List = ({ list }) => {
    console.log(list,"ll")
    return (
        <div>
            <ul>
                {list.map((user, index) => {
                    return <li key={index}>
                        {user.name}({user.age}Years old)
                    </li>
                })}
            </ul>
        </div>
    )
}

export default List
