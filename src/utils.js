import { useRef, useEffect } from 'react'

const parseDate = (date, time) => {
  date = date.split('-')
  time = time.split(':')
  return Date.UTC(date[0], date[1] - 1, date[2], time[0], time[1], time[2])
}

const parseDateTime = dateTime => {
  dateTime = dateTime.split(/[-: ]+/)
  return new Date(
    Date.UTC(
      dateTime[0],
      dateTime[1] - 1,
      dateTime[2],
      dateTime[3],
      dateTime[4],
      dateTime[5]
    )
  )
}

const useIsMounted = () => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])

  return isMounted
}

export { parseDate, useIsMounted, parseDateTime }
