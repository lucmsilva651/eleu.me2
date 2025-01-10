"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Typed from 'typed.js';

export default function Home() {
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const typed = new Typed('#welcome', {
      strings: ['Welcome to my website!'],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="space-y-6">
      <h1 id="welcome" className="text-4xl font-bold"></h1>
      <div className="space-y-2 pb-6">
        <p>Hi, I&apos;m Lucas Gabriel (aka. lucmsilva/eleu/luki/etc.)!</p>
        <p>
          I am a 15 y.o. Brazilian boy, enthusiast and passionate with
          experience in hardware, troubleshooting, software installation, and
          etc.
        </p>
        <p>
          Also, I like too much to mess with Android, having a large community
          following me with my projects.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">GitHub Stats</h2>
        {imageError ? (
          <p>Sorry, we're unable to load GitHub stats at the moment.</p>
        ) : (
          <div className="flex space-x-4">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=lucmsilva651&theme=dark&show_icons=true&hide_border=true&count_private=true"
              alt="GitHub stats"
              width={495}
              height={195}
              onError={() => setImageError(true)}
            />
            <Image
              src="https://streak-stats.demolab.com/?user=lucmsilva651&theme=github-dark-blue&disable_animations=true"
              alt="GitHub Streak"
              width={495}
              height={195}
              onError={() => setImageError(true)}
            />
          </div>
        )}
      </div>
    </div>
  )
}