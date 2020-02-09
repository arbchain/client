import React from 'react'
import { GU, textStyle } from '@aragon/ui'
import Account from './Account/Account'
import Clock from './Clock'

const Header = React.memo(function Header() {
  return (
    <header
      css={`
        position: relative;
        z-index: 3;
        height: ${8 * GU}px;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.05) 0 2px 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${2 * GU}px;
      `}
    >
      <div
        css={`
          display: flex;
          height: 100%;
          align-items: center;
        `}
      >
        <h1
          css={`
            display: flex;
            height: 100%;
            align-items: center;
            ${textStyle('body1')};
          `}
        >
          Aragon Court
        </h1>
      </div>

      <div
        css={`
          display: flex;
          flex-grow: 1;
          justify-content: center;
        `}
      >
        <Clock />
      </div>

      <Account />
    </header>
  )
})

export default Header
