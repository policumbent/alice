import { useRef, useEffect, useState, Dispatch, SetStateAction } from 'react';

const filterReserved = (value: number) => (value === -1 ? null : value);

const parseComments = (data: { timestamp: string; message: string }[]): string[] => {
  // this is char ASCII 255:
  // https://theasciicode.com.ar/extended-ascii-code/non-breaking-space-no-break-space-ascii-code-255.html
  const whiteSpace = ' ';
  const betweenSeparator = `${whiteSpace.repeat(2)}|${whiteSpace.repeat(2)}`;

  let result = data.map((c) => {
    const ts = parseDateTime(c.timestamp);
    const separator = data[data.length - 1] === c ? '' : betweenSeparator;

    return `${ts.getHours()}:${ts.getMinutes()} ${c.message}${separator}`;
  });

  result.push(whiteSpace.repeat(50));

  return result;
};

const parseDate = (date: string, time: string): number => {
  const d = date.split('-').map((s) => parseInt(s));
  const t = time.split(':').map((s) => parseInt(s));

  return Date.UTC(d[0], d[1] - 1, d[2], t[0], t[1], t[2]);
};

const parseDateTime = (dateTime: string): Date => {
  const dt = dateTime.split(/[-: ]+/).map((s) => parseInt(s));
  const date = Date.UTC(dt[0], dt[1] - 1, dt[2], dt[3], dt[4], dt[5]);

  return new Date(date);
};

const useIsMounted = (): { current: boolean } => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

const usePolling = (
  call: Function,
  time: number,
  autostart?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [start, setStart] = useState(autostart || false);
  const intervalId = useRef(0);

  // Create interval on startup if autostart is enabled
  useEffect(() => {
    if (start) intervalId.current = setInterval(call, time);
    return () => {
      clearInterval(intervalId.current);
    };
    // eslint-disable-next-line
  }, [start]);

  return [start, setStart];
};

export { filterReserved, parseComments, parseDate, parseDateTime, useIsMounted, usePolling };
