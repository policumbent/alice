import { useRef, useEffect } from 'react'

const filterReserved = (value: number) => (value === -1 ? null : value)

const parseDate = (date: string, time: string): number => {
  const d = date.split('-').map((s) => parseInt(s))
  const t = time.split(':').map((s) => parseInt(s))

  return Date.UTC(d[0], d[1] - 1, d[2], t[0], t[1], t[2])
}

const parseDateTime = (dateTime: string): Date => {
  const dt = dateTime.split(/[-: ]+/).map((s) => parseInt(s))
  const date = Date.UTC(dt[0], dt[1] - 1, dt[2], dt[3], dt[4], dt[5])

  return new Date(date)
}

const useIsMounted = (): { current: boolean } => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return isMounted
}

const usePolling = (call: Function, time: number) => {
  const intervalId = useRef(0)

  useEffect(() => {
    intervalId.current = setInterval(call, time)
    return () => {
      clearInterval(intervalId.current)
    }
    // eslint-disable-next-line
  }, [])
}

export { parseDate, parseDateTime, filterReserved, useIsMounted, usePolling }
