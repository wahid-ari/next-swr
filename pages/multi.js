import Head from 'next/head'
import useSWR from 'swr'
import Image from 'next/image';
import axios from 'axios';
import Code from '@components/Code';
import Navbar from '@components/Navbar';

// using in page fetcher, or set fetcher in _app.js
const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcherAxios = url => axios.get(url).then(res => res.data)

export default function Multi() {

  // const { data, error } = useSWR('https://api.github.com/users/github', fetcher)
  // const { data: dataFacebook, error: errorFacebook } = useSWR('https://api.github.com/users/vercel', fetcherAxios)
  const { data, error } = useSWR('/api/users/github', fetcher)
  const { data: dataFacebook, error: errorFacebook } = useSWR('/api/users/facebook', fetcherAxios)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  if (errorFacebook) return <div>failed to load</div>
  if (!dataFacebook) return <div>loading...</div>

  return (
    <>
      <Head>
        <title>Multi Request</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">
        
        <Navbar/>

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold pb-4">Multi Request</h1>
          <div className="border dark:border-neutral-700 p-4 rounded my-6">
            <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer block mb-4" href="https://api.github.com/users/github" target="_blank" rel="noreferrer">https://api.github.com/users/github</a>
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
          <div className="border dark:border-neutral-700 p-4 rounded my-6">
            <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer block mb-4" href="https://api.github.com/users/facebook" target="_blank" rel="noreferrer">https://api.github.com/users/facebook</a>
            <div className="space-y-1.5 dark:text-white">
              <div className="relative w-20 h-20 ">
                <Image alt="Image" className="rounded" layout="fill" src={dataFacebook.image} />
              </div>
              <p>Name : {dataFacebook.name}</p>
              <p>Bio : {dataFacebook.bio}</p>
              <p>Type : {dataFacebook.type}</p>
              <p>Public Repos : {dataFacebook.repos}</p>
              <p>Blog : {dataFacebook.blog ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={dataFacebook.blog} target="_blank" rel="noreferrer">{dataFacebook.blog}</a> : "-"}</p>
              <p>Location : {dataFacebook.location}</p>
              <p>Email : {dataFacebook.email ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={`mailto:${dataFacebook.email}`} target="_blank" rel="noreferrer">{dataFacebook.email}</a> : "-"}</p>
            </div>
          </div>
          <Code name="pages/multi" code={`import useSWR from 'swr'
import axios from 'axios';

// using in page fetcher, or set fetcher in _app.js
const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcherAxios = url => axios.get(url).then(res => res.data)

export default function Multi() {

  const { data, error } = useSWR('https://api.github.com/users/github', fetcher)
  const { data: dataFacebook, error: errorFacebook } = useSWR('https://api.github.com/users/facebook', fetcherAxios)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  if (errorFacebook) return <div>failed to load</div>
  if (!dataFacebook) return <div>loading...</div>

  return (
    <>
      <div>
        <Image alt="Image" src={data.image} />
        <p>Name : {data.name}</p>
        <p>Bio : {data.bio}</p>
        <p>Type : {data.type}</p>
        <p>Public Repos : {data.repos}</p>
        <p>Blog : {data.blog}</p>
        <p>Location : {data.location}</p>
        <p>Email : {data.email}</p>
      </div>
      <div>
        <Image alt="Image" src={dataFacebook.image} />
        <p>Name : {dataFacebook.name}</p>
        <p>Bio : {dataFacebook.bio}</p>
        <p>Type : {dataFacebook.type}</p>
        <p>Public Repos : {dataFacebook.repos}</p>
        <p>Blog : {dataFacebook.blog}</p>
        <p>Location : {dataFacebook.location}</p>
        <p>Email : {dataFacebook.email}</p>
      </div>
    </>
  )
}`} />
        </div>
      </main >
    </>
  )
}