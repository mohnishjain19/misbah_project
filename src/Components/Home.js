import React from 'react'
import Animations from './Animations';
import DesignButton from './DesignButton';
import Header from './Header';
export default function Home() 
{
  return (
    <div className="App">
<div className="display-3 text-center mt-4">Mission Million Books </div>
      <Animations/>
      <DesignButton/>
      <div className="space">

      </div>
    </div>
  )
}
