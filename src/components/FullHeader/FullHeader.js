import BaseHeader from 'components/atoms/BaseHeader'
import LoginHeader from 'components/atoms/LoginHeader'
import { Search } from 'components/Search/Search'
import React from 'react'

export const FullHeader = () => {
  return (
      <div className='row'>
        <div className='d-flex  align-items-center p-3 pe-5'>
            <LoginHeader/>
            <BaseHeader/>
        </div>
        <Search/>
      </div>
  )
}
