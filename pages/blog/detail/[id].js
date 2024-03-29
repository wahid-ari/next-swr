import Code from "@components/Code";
import Navbar from "@components/Navbar";
import Head from "next/head";
import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

export async function getServerSideProps({ params }) {
  const res = await fetcher(`${process.env.API_URL}/api/blog?id=${params.id}`)
  return {
    props: {
      id: params.id,
      fallback: {
        [`/api/blog?id=${params.id}`]: res
      }
    }
  }
}

export default function BlogDetail({ id, fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Page id={id} />
    </SWRConfig>
  );
}

function Page({ id }) {
  const { data, error } = useSWR(`/api/blog?id=${id}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <Head>
        <title>Blog Detail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold pb-4">Blog Detail</h1>
          <p className="dark:text-white text-xl mb-2 font-semibold">{data.title}</p>
          <p className="dark:text-white">{data.body}</p>

          <Code name="pages/blog/detail" code={`import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then(res => res.json())

export async function getServerSideProps({ params }) {
  const res = await fetcher('$(process.env.API_URL)/api/blog?id=$(params.id)')
  return {
    props: {
      id: params.id,
      fallback: {
        ['/api/blog?id=$(params.id)']: res
      }
    }
  }
}

export default function BlogDetail({id, fallback}) {
  return (
    <SWRConfig value={{ fallback }}>
      <Page id={id} />
    </SWRConfig>
  );
}

function Page({ id }) {
  const { data, error } = useSWR('/api/blog?id=$(id)', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <p className="dark:text-white text-xl mb-2 font-semibold">{data.title}</p>
    <p className="dark:text-white">{data.body}</p>
  )
}
`} />
        </div>
      </main >
    </>
  )
}