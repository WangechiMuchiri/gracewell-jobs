// app/page.tsx
import Hero from '../components/Hero'
import Image from 'next/image'
import ServicesHighlight from '../components/ServicesHighlight'
import JobSpotlight from '../components/JobSpotlight'
import Newsletter from '../components/Newsletter'
import { Suspense } from 'react'
import JobSpotlightSkeleton from '../components/JobSpotlightSkeleton'


export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesHighlight />
      <Suspense fallback={<JobSpotlightSkeleton />}>
      <JobSpotlight />
      </Suspense>
      <Newsletter />
    </>
  )
}
