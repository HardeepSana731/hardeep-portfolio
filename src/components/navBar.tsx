import React from 'react'
import Header from './header'
import { Breadcrumbs, Button, Typography } from '@mui/material'
import { useFilter } from '@/hooks/useFilter'
import { TabEnum } from '@/utils/constants';

export default function NavigationBar() {
  const {updateFilterValue} = useFilter();
  const TabSelected = (selectedTab:string) =>{
    updateFilterValue("tabSelected",selectedTab)
  }
  return (
    <>
      <Header></Header>
      <div className='flex flex-row justify-end p-10'>
        <Breadcrumbs className='flex flex-row' >
          <Button onClick={()=> TabSelected(TabEnum.HOME)}>
            <Typography fontSize={25}>{TabEnum.HOME.toUpperCase()}</Typography>
          </Button>
          <Button onClick={()=> TabSelected(TabEnum.EXPERIENCE)} >
            <Typography fontSize={25}>{TabEnum.EXPERIENCE.toUpperCase()}</Typography>
          </Button>
          <Button onClick={()=> TabSelected(TabEnum.ABOUT)} >
            <Typography fontSize={25}>{TabEnum.ABOUT.toUpperCase()}</Typography>
          </Button>
          <Button onClick={()=> TabSelected(TabEnum.GALLERY)}>
            <Typography fontSize={25}>{TabEnum.GALLERY.toUpperCase()}</Typography>
          </Button>
        </Breadcrumbs>
      </div>
    </>
  )
}
