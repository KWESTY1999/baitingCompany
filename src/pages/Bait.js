import React, { useState, useEffect } from 'react'

const Bait = () => {
  const [test2, setTest2] = useState('')

  const IP = async () => {
    const ip = await fetch('https://api.ipify.org?format=json')
    const ipJson = await ip.json()
    setTest2(ipJson.ip)
  }

  useEffect(() => {
    IP()
  }, [])

  return (
    <div className='bait'>
      <h1>XD</h1>
      <p>Dzięki za IP:</p>
      <span>{test2}</span>
    </div>
  )
}

export default Bait
