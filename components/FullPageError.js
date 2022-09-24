export default function FullPageError({ children }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-gray-800 dark:text-white dark:bg-neutral-900'>
      {children}
    </div>
  );
}