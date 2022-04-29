import { useState, useEffect, useCallback } from 'react';
import Ticker from 'react-ticker';

import { default as api } from '../api';
import { parseComments, usePolling } from '../utils';

const Footer = () => {
  const [comments, setComments] = useState<string[]>();
  const [move, setMove] = useState(true);

  const moveOption = useCallback(
    (event) => {
      switch (event) {
        case 'over':
          setMove(false);
          break;
        case 'leave':
          setMove(true);
          break;
        case 'touch':
          setMove(!move);
          break;
        default:
          break;
      }
    },
    [move]
  );

  const fetchComments = async () => {
    const data = await api.getComments();
    const c = parseComments(data);
    setComments(c);
  };

  // 30 secs polling on comments api
  usePolling(() => fetchComments(), 30 * 1000, true);

  useEffect(() => {
    fetchComments();
  }, []);

  if (!comments) {
    return null;
  }

  return (
    <div
      className="ml-auto mr-auto noselect"
      onFocus={() => moveOption('over')}
      onMouseOver={() => moveOption('over')}
      onMouseLeave={() => moveOption('leave')}
      onTouchStart={() => moveOption('touch')}>
      <Ticker mode="smooth" offset={'run-in'} move={move} speed={7}>
        {() => <>{comments}</>}
      </Ticker>
    </div>
  );
};

export default Footer;
