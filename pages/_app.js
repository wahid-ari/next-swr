import { GlobalProvider } from "@utils/GlobalContext";
import "@styles/globals.css";
import "@styles/prism.css";
import useSWR, { SWRConfig } from 'swr';

function MyApp({ Component, pageProps, fallback }) {
  return (
    <GlobalProvider>
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
          // fallback
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </GlobalProvider>
  )
}

export default MyApp