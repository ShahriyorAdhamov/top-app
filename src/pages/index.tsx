'use client'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HTag from '@/components/htag/htag'
import Button from '@/components/button/button'
import { useState } from 'react'
import { widthLayout } from '@/layout/layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '../../interfaces/manu.interface'

const inter = Inter({ subsets: ['latin'] })

function Home({menu}: HomeProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
     <HTag tag = 'h1'>hello</HTag>
     <Button appearance='ghost' arrow={isClicked? 'down' : 'right'} onClick={() => setIsClicked(prev => !prev)}>
      click
     </Button>
     <ul>
        {menu.map((m) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
     </ul>
    </>
  )
}

export default widthLayout(Home);

export const getStaticProps: GetStaticProps = async() => {
  const firstCategory = 0;
  const {data} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })
  return {
    props: {
      menu: data,
      firstCategory
    }
  }

}

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}