import React from 'react'
// @ts-ignore
const StartupCard = ({post}: {post: StartupTypeCard}) => {
  return (
    <li className='startup-card group'>
      <div className="flex-between">
        <p className='startup_card_date'>
            {post._createdAt}
        </p>
      </div>
    </li>
  )
}

export default StartupCard