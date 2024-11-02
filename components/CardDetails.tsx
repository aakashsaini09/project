import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
const CardDetails = ({query}: {query?: string}) => {
  return (
    <>  <Form action="/" scroll={false} className='search-form'>
    <input
    name='query'
    defaultValue={query}
    className='search-input'
    placeholder='Search Statrups'
    />
    <div className="flex gap-2">{query && <div>working</div>}</div>
    <button type='submit' className='search-btn text-white'><Search className='size-5'/></button>
  </Form>
      
    </>
  )
}

export default CardDetails
