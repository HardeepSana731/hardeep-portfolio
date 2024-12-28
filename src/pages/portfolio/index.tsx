import About from '@/components/about';
import Experience from '@/components/experience';
import Gallery from '@/components/gallery';
import Header from '@/components/header'
import Home from '@/components/home';
import { useFilter } from '@/hooks/useFilter';
import { TabEnum } from '@/utils/constants';
import React from 'react'

function MainComponent() {
  const {tabSelected} = useFilter();
  console.log(tabSelected,'tabSelected')
  return (
    <div className='relative flex h-screen max-h-screen w-screen grow overflow-hidden bg-opacity-20 bg-black'>
    {tabSelected == TabEnum.HOME ? <Home /> : ''}
    {tabSelected == TabEnum.EXPERIENCE ? <Experience /> : ''}
    {tabSelected == TabEnum.ABOUT ? <About /> : ''}
    {tabSelected == TabEnum.GALLERY ? <Gallery /> : ''}
    </div>
  )
}

export default MainComponent;