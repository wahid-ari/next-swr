import Head from 'next/head'
import useSWR from 'swr'
import Image from 'next/image';
import Code from '@components/Code';
import Navbar from '@components/Navbar';
import FullPageLoader from '@components/FullPageLoader';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Loader() {

  const { data, error } = useSWR('/api/users/axios', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <FullPageLoader />

  return (
    <>
      <Head>
        <title>Full Page Loader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold pb-4">Full Page Loader</h1>
          <div className="border dark:border-neutral-700 p-4 rounded my-6">
            <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer block mb-4" href={data.api} target="_blank" rel="noreferrer">{data.api}</a>
            <div className="space-y-1.5 dark:text-white">
              <div className="relative w-20 h-20 ">
                <Image alt="Image" className="rounded" layout="fill" src={data.image} />
              </div>
              <p>Name : {data.name}</p>
              <p>Bio : {data.bio}</p>
              <p>Type : {data.type}</p>
              <p>Public Repos : {data.repos}</p>
              <p>Blog : {data.blog ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={data.blog} target="_blank" rel="noreferrer">{data.blog}</a> : "-"}</p>
              <p>Location : {data.location}</p>
              <p>Email : {data.email ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={`mailto:${data.email}`} target="_blank" rel="noreferrer">{data.email}</a> : "-"}</p>
            </div>
          </div>
          <Code name="pages/loader" code={`import useSWR from 'swr'
import FullPageLoader from '@components/FullPageLoader';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Loader() {

  const { data, error } = useSWR('https://api.github.com/users/axios', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <FullPageLoader />

  return (
    <Image alt="Image" src={data.image} />
    <p>Name : {data.name}</p>
    <p>Bio : {data.bio}</p>
    <p>Type : {data.type}</p>
    <p>Public Repos : {data.repos}</p>
    <p>Blog : {data.blog}</p>
    <p>Location : {data.location}</p>
    <p>Email : {data.email}</p>
  )
}`} />
        </div>
      </main >
    </>
  )
}
