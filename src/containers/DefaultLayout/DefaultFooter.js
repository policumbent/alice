import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import APIfetcher from 'api'
import Ticker from 'react-ticker'

const propTypes = {
  children: PropTypes.node,
}
const defaultProps = {}

const DefaultFooter = () => {
  const [comments, setComments] = useState()
  const [move, setMove] = useState(true)

  const getFrase = rawData => {
    let result = []

    rawData.forEach(comment => {
      let separator = rawData[rawData.length - 1] === comment ? '' : '| '
      result.push(`${comment.time} ${comment.text} ${separator}`)
    })

    setComments(result)
  }

  const moveOption = useCallback(
    event => {
      switch (event) {
        case 'over':
          setMove(false)
          break
        case 'leave':
          setMove(true)
          break
        case 'touch':
          setMove(!move)
          break
        default:
          break
      }
    },
    [move]
  )

  useEffect(() => {
    // inizializza comments
    APIfetcher.getComments(data => getFrase(data))

    // controlla gli aggiornamenti ogni 2 minuti (2*60*1000ms)
    setInterval(
      () => APIfetcher.getComments(data => getFrase(data)),
      2 * 60 * 1000
    )
  }, [])

  return (
    <>
      {comments === undefined ? null : (
        <div
          className="ml-auto mr-auto noselect"
          onMouseOver={() => moveOption('over')}
          onMouseLeave={() => moveOption('leave')}
          onTouchStart={() => moveOption('touch')}
        >
          <Ticker offset="run-in" mode="await" move={move} speed={5}>
            {() => <span>{comments}</span>}
          </Ticker>
        </div>
      )}
    </>
  )
}

DefaultFooter.propTypes = propTypes
DefaultFooter.defaultProps = defaultProps

export default DefaultFooter
