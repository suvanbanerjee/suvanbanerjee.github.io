import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const Timezone = ({ timezone }: any) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone)
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm A'))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div className="font-[OldNewspaperTypes]">
      <p>{dateTime}</p>
      <p className="font-[OldNewspaperTypes]">Bengaluru, India 🇮🇳</p>
    </div>
  )
}

export default Timezone
