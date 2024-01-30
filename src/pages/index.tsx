import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HTag from '@/components/htag/htag'
import Button from '@/components/button/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <HTag tag = 'h1'>hello</HTag>
     <Button appearance='ghost'>
      click
     </Button>
    </>
  )
}
