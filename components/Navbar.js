import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import {SunIcon, MoonIcon} from "@heroicons/react/24/outline"

export default function Navbar(){
  const [darkMode, setDarkMode] = useContext(GlobalContext);
  return (
    <div className="py-4 max-w-5xl px-4 mx-auto flex gap-x-5 justify-between sticky top-0 z-10 bg-opacity-40 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-900 backdrop-filter backdrop-blur">
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href="/">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Home</a>
        </Link>
        <Link href="/axios">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Axios</a>
        </Link>
        <Link href="/multi">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Multi</a>
        </Link>
        <Link href="/global">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Global</a>
        </Link>
        <Link href="/server">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Server</a>
        </Link>
        <Link href="/skeleton">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Skeleton</a>
        </Link>
        <Link href="/loader">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Page Loader</a>
        </Link>
        <Link href="/token">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Token</a>
        </Link>
        <Link href="/no-token">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">No-Token</a>
        </Link>
        <Link href="/use-request">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Use Request</a>
        </Link>
        <Link href="/infinite">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Infinite</a>
        </Link>
        <Link href="/pagination">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">Pagination</a>
        </Link>
        <Link href="/state">
          <a className="text-blue-500 hover:text-blue-600 transition-all text-sm font-medium">State</a>
        </Link>
      </nav>
      {darkMode ?
        <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
        :
        <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
      }
    </div>
  )
}