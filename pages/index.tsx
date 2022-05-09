import type { NextPage } from 'next'
import Head from 'next/head'
import { Overlay, Portal, Search, Sidebar } from '../components'
import { useGlobalContext } from '../store/context'
import Categories from '../Warppers/Categories'

const Home: NextPage = () => {
  const { isLoading, showSearchPage } = useGlobalContext()
  console.log(isLoading)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-1">
      <Head>
        <title>Jumia Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Portal>
        <Sidebar />
        {showSearchPage && <Search />}
        {isLoading && <Overlay />}
      </Portal>
      <main className="flex-1 w-full ">
        <Categories />
      </main>
    </div>
  )
}

export default Home
