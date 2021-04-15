import { useState, useEffect, useCallback } from 'react';

import dataService from 'api';
import Ticker from 'react-ticker';
import { parseComments, usePolling } from 'utils';

const Footer = () => {
  const [comments, setComments] = useState<string[] | null>();
  const [move, setMove] = useState(true);

  const getPhrase = useCallback((data) => {
    const result = parseComments(data);
    setComments(result);
  }, []);

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
    getPhrase(await dataService.getComments());
  };

  // 30 secs polling on comments api
  usePolling(async () => fetchComments(), 30 * 1000);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!comments ? null : (
        <div
          className="ml-auto mr-auto noselect"
          onFocus={() => moveOption('over')}
          onMouseOver={() => moveOption('over')}
          onMouseLeave={() => moveOption('leave')}
          onTouchStart={() => moveOption('touch')}>
          <Ticker mode="smooth" offset={'run-in'} move={move} speed={7}>
            {() => <span>{comments}</span>}
          </Ticker>
        </div>
      )}
    </>
  );
};

export default Footer;
