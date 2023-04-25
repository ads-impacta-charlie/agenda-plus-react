import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ContactList from "@/components/contact-list";
import { Children } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <> 
      <ContactList></ContactList>
    </>
  )
}
