import { useRef, useEffect, useState, Dispatch, SetStateAction } from 'react';

import { default as api } from 'api';
import Store from './store';

export const isLogged = (): boolean => api.isLogged();

export const isNotificationsActive = (): boolean => {
  const token = Store.get('notifications');

  return token !== null && token !== '';
};

export function hoursToMs(hh: number) {
  return hh * 60 * 60 * 1000;
}

export const filterReserved = (value: number, logged: boolean) => {
  return logged ? value : 0;
};

export const parseComments = (data: { timestamp: string; message: string }[]): string[] => {
  // this is char ASCII 255:
  // https://theasciicode.com.ar/extended-ascii-code/non-breaking-space-no-break-space-ascii-code-255.html
  const whiteSpace = ' ';
  const betweenSeparator = `${whiteSpace.repeat(2)}🔥${whiteSpace.repeat(2)}`;

  let result = data.map((c) => {
    const ts = parseDateTime(c.timestamp);
    const separator = data[data.length - 1] === c ? '' : betweenSeparator;

    return `${ts.getHours()}:${ts.getMinutes()} ${c.message}${separator}`;
  });

  // add emojis
  result.unshift(`🚴‍♀️${whiteSpace.repeat(2)}`);
  result.push(`${whiteSpace.repeat(2)}🚴`);

  // add space
  result.push(whiteSpace.repeat(50));

  return result;
};

export const parseDate = (date: string, time: string): number => {
  const d = date.split('-').map((s) => parseInt(s));
  const t = time.split(':').map((s) => parseInt(s));
  const utc = Date.UTC(d[0], d[1] - 1, d[2], t[0] - 2, t[1], t[2]);

  return utc;
};

export const parseDateTime = (dateTime: string): Date => {
  const dt = dateTime.split(/[-: ]+/).map((s) => parseInt(s));
  const utc = Date.UTC(dt[0], dt[1] - 1, dt[2], dt[3] - 2, dt[4], dt[5]);
  const date = new Date(utc);

  return date;
};

export const convertTimeMinSec = (time: number) => {
  const floatMinutes = time / 60;
  const minutes = Math.trunc(floatMinutes);
  const seconds = Math.floor((floatMinutes - minutes) * 6);

  return `${minutes}' ${seconds}"`;
};

export const useIsMounted = (): { current: boolean } => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export const usePolling = (
  call: Function,
  time: number,
  autostart?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [start, setStart] = useState(autostart || false);
  const timerID = useRef(0);

  // Create interval on startup if autostart is enabled
  useEffect(() => {
    if (start) timerID.current = setTimeout(call, time);
    return () => {
      clearTimeout(timerID.current);
    };
  }, [start, call, time]);

  return [start, setStart];
};
