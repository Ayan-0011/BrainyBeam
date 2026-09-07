import Link from 'next/link';

export default function page() {
  return (
    <div>
      <div className="text-center bg-red-800 text-text-white p-5 text-2xl">
        <h1>About Page</h1>
      </div>
      <p><Link href="about/blog" className='p-2 text-blue-500'>Blog</Link></p>
    </div>
  )
}