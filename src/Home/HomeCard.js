import React from 'react'

const HomeCard = ({title, width, height}) => {
    return (
        <div className='homecard' style={{width : width, height : height}}>
            <div className='homecard-title'>
                {title}
            </div>
        </div>
    )
}

export default HomeCard
