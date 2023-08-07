'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>          {/* When the theme is dark, hide this div */}
          <div data-hide-on-theme="dark">
          {/* <Image src="light.png" width={400} height={400} /> */}
          sun
        </div>
  
        {/* When the theme is light, hide this div */}
        <div data-hide-on-theme="light">
          {/* <Image src="dark.png" width={400} height={400} /> */}
          moon
        </div>
    </>


  )
}

export default ThemeSwitch