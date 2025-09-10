'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  '/doctor.jpg',
  '/contentcreator.jpg',
  '/softwareengineer.jpg',
]

export default function HeroImage() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000) // 4s per image
    return () => clearInterval(timer)
  }, [])

  return (
<div className="relative h-40 w-40 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-[420px] lg:w-[420px] xl:h-[500px] xl:w-[500px] overflow-hidden shadow-lg rounded-[60%_40%_70%_30%/60%_40%_70%_30%] animate-floatLg will-change-transform">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Career visual"
          fill
          priority={i === index}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}