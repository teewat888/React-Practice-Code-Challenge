import React from 'react'

const MoreButton = ({loadSushi}) => {
    const handleOnClick = () => {
      loadSushi();
    }

    return <button onClick={handleOnClick}>
            More sushi!
          </button>
}

export default MoreButton