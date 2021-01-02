import { useRef, useEffect } from 'react'

const parseDate = (date, time) => {
  date = date.split('-')
  time = time.split(':')
  return Date.UTC(date[0], date[1] - 1, date[2], time[0], time[1], time[2])
}

const useIsMounted = () => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])

  return isMounted
}

export { parseDate, useIsMounted }
