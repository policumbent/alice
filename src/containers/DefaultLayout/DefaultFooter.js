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
    // questo è il carattere ASCII 255:
    // https://theasciicode.com.ar/extended-ascii-code/non-breaking-space-no-break-space-ascii-code-255.html
    const whiteSpace = ' '
    const betweenSeparator = `${whiteSpace.repeat(2)}|${whiteSpace.repeat(2)}`

    rawData.forEach(comment => {
      // lista in ordine cronologico
      let separator = rawData[rawData.length - 1] === comment ? '' : betweenSeparator
      result.push(`${comment.time} ${comment.text}${separator}`)

      // lista in ordine cronologico inverso (prima la più recente)
      // let separator = rawData[0] === comment ? '' : betweenSeparator
      // result.unshift(`${comment.time} ${comment.text}${separator}`)
    })
    result.push(whiteSpace.repeat(50))

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

    // controlla gli aggiornamenti ogni 30 secondi (30*1000ms)
    setInterval(
      () => APIfetcher.getComments(data => getFrase(data)),
      30 * 1000
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
          <Ticker mode="smooth" offset={'run-in'} move={move} speed={7}>
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
