import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Homeview from '@components/Home'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Welcome to my app!" />

      <main>
        <p className="description">
          Get started fafis by editing 4 <code>pages/index.js</code>
        </p>
        
        
        <Homeview/>
      </main>

      <Footer />
    </div>
  )
}

