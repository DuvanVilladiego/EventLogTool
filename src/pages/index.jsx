import Head from 'next/head'
import EventList from '../components/EventList'

export default function Home() {
  return (
    <>
      <Head>
        <title>EventLogs Tool</title>
        <meta name="EventLogs Tool" content="EventLogs Admin Tool" />
      </Head>
      <main >
          <EventList />
      </main>
    </>
  )
}
