import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ContainerBlock from '@/components/ContainerBlock'
import Backgroundbanniere from '@/components/landing/Background'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContainerBlock>
      <Backgroundbanniere/>
    </ContainerBlock>
  )
}
