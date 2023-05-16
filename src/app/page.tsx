import { Logo } from '@/components';
import React from 'react'
import { Button, AddPlayerBtn } from '@/components';

export const metadata = {
    title: 'Home',
    description: 'idk man',
};

export default function page() {
  return (
    <div>
        <Logo/>
        
        <AddPlayerBtn />
        <Button text='Settings'/>
        <Button text='Start'/>

    </div>
  )
}

