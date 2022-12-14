import Head from 'next/head'
import useSWR from "swr";
import Image from 'next/image';
import Code from '@components/Code';
import Navbar from '@components/Navbar';
import Skeletons from '@components/Skeletons';

const fetcher = (url) => fetch(url).then(res => res.json())
const API = "https://api.github.com/repos/facebook/react";

export default function Skeleton() {

  // const { data, error } = useSWR(API, fetcher)
  const { data, error } = useSWR('/api/repos/react', fetcher)

  if (error) return <div>failed to load</div>

  return (
    <>
      <Head>
        <title>Skeleton SWR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold pb-4">Skeleton SWR</h1>
          <div className="border dark:border-neutral-700 p-4 rounded my-6">
            <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer block mb-4 break-all" href="https://api.github.com/repos/facebook/react" target="_blank" rel="noreferrer">https://api.github.com/repos/facebook/react</a>

            {data ?
              <div className="space-y-1.5 dark:text-white">
                <div className="relative w-20 h-20 mb-2">
                  <Image alt="Image" className="rounded" layout="fill" src={data.image} />
                </div>
                <p>Name : {data.name}</p>
                <p>Full Name : {data.full_name}</p>
                <p>Language : {data.language}</p>
                <p>Homepage : {data.homepage ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={data.homepage} target="_blank" rel="noreferrer">{data.homepage}</a> : "-"}</p>
                <p>Description : {data.description}</p>
                <p>Repo URL : {data.repo_url ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={data.repo_url} target="_blank" rel="noreferrer">{data.repo_url}</a> : "-"}</p>
                <p>License : {data.license}</p>
                <p>Owner : {data.owner}</p>
                <p>Owner URL : {data.owner_url ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={data.owner_url} target="_blank" rel="noreferrer">{data.owner_url}</a> : "-"}</p>
              </div>
              :
              <Skeletons className="!h-32"/>
            }

          </div>
          <Code name="pages/skeleton" code={`import useSWR from "swr";
import Skeletons from '@components/Skeletons';

const fetcher = (url) => fetch(url).then(res => res.json())
const API = "https://api.github.com/repos/facebook/react";

export default function Skeleton() {

  const { data, error } = useSWR(API, fetcher)

  if (error) return <div>failed to load</div>

  return (
    {data ?
      <div>
        <Image alt="Image" src={data.image} />
        <p>Name : {data.name}</p>
        <p>Full Name : {data.full_name}</p>
        <p>Language : {data.language}</p>
        <p>Homepage : {data.homepage}</p>
        <p>Description : {data.description}</p>
        <p>Repo URL : {data.repo_url}</p>
        <p>License : {data.license}</p>
        <p>Owner : {data.owner}</p>
        <p>Owner URL : {data.owner_url}</p>
      </div>
      :
      <Skeletons />
    }
  )
}`} />
        </div>
      </main >
    </>
  )
}
