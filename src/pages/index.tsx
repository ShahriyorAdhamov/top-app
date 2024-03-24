'use client'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HTag from '@/components/htag/htag'
import Button from '@/components/button/button'
import { useState } from 'react'
import { withLayout } from '@/layout/layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '../../interfaces/menu.interface'

const inter = Inter({ subsets: ['latin'] })

function Home({menu}: HomeProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
    </>
  )
}

export default withLayout(Home);

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