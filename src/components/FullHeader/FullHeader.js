import BaseHeader from 'components/atoms/BaseHeader'
import LoginHeader from 'components/atoms/LoginHeader'
import { Search } from 'components/Search/Search'
import React from 'react'

export const FullHeader = () => {
  return (
      <div>
        <div className='d-flex bg- align-items-center p-3 pe-5'>
            <LoginHeader/>
            <BaseHeader/>
        </div>
        <Search/>
      </div>
  )
}
