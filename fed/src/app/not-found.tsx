import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl pt-10 px-6 flex-grow">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </main>
    </div>
  )
};