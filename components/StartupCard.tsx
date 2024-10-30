import { formateDate } from '@/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
// @ts-ignore
const StartupCard = ({post}: {post: StartupTypeCard}) => {
  return (
    <li className='startup-card group'>
      <div className="flex-between">
        <p className='startup_card_date'>
            {formateDate(post._createdAt)}
        </p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary'/ >
          <span className="text-16-medium">{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className='flex-1'>
          <Link href={`/user/${post.auther?._id}`}/>
          <p className="text-16-medium line-clamp-1">{post.auther?.name}</p>
        </div>
      </div>
    </li>
  )
}

export default StartupCard
