import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ContainerBlock from '@/components/ContainerBlock'
import Backgroundbanniere from '@/components/landing/Background'
import GridMission from '@/components/landing/GridMission'
import Footer from '@/components/Footer'
import MakeDevis from '@/components/landing/MakeDevis'
import Contactmod from '@/components/landing/Contactmod'

const inter = Inter({ subsets: ['latin'] })
const datasgridmission = [
  {id: "mission1", title: "Mission 1", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam harum fuga, nulla hic sit aperiam perspiciatis iste facilis, repellendus eaque officia velit deserunt animi! Soluta aliquam vero corrupti neque."},
  {id: "mission2", title: "Mission 2", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam harum fuga, nulla hic sit aperiam perspiciatis iste facilis, repellendus eaque officia velit deserunt animi! Soluta aliquam vero corrupti neque."},
  {id: "mission3", title: "Mission 3", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam harum fuga, nulla hic sit aperiam perspiciatis iste facilis, repellendus eaque officia velit deserunt animi! Soluta aliquam vero corrupti neque."},
]

export default function Home() {
  return (
    <ContainerBlock>
      <Backgroundbanniere/>
      <GridMission data={datasgridmission}/>
      <MakeDevis/>
      <Contactmod/>
      <Footer/>
    </ContainerBlock>
  )
}
