/* eslint-disable no-nested-ternary */
import React from 'react'

/**
 * A wrapper for lazyload image lib
 * ref: https://github.com/aFarkas/lazysizes
 */
const Image = ({
  className,
  src,
  otherProps,
  lazyload,
  defaultImgSrc,
  alt,
}: ImageProps) => (
  <img
    className={`${className} ${lazyload ? 'lazyload' : ''}`}
    data-src={src}
    src={src
      ? (lazyload ? '' : src)
      : defaultImgSrc
    }
    alt={alt}
    {...otherProps}
  />
)

interface ImageProps {
  className?: string
  /**
   * Source of image to be use
   * Will be handle to be lazy loaded if *lazyload* is
   * set to be *true*
   */
  src: string
  /**
   * *img* alt
   * Default: "default-alt"
   */
  alt?: string
  /**
   * Other props to be set to the *img*
   */
  otherProps?: object | any
  /**
   * Should this *img* be lazy loaded for optimization
   * Default: false
   */
  lazyload?: boolean
  /**
   * Default image to be displayed when the *img* is not
   * fully loaded
   */
  defaultImgSrc?: string
}

Image.defaultProps = {
  className: '',
  otherProps: {},
  lazyload: false,
  defaultImgSrc: 'https://lh3.googleusercontent.com/proxy/F6kcvfEWFFTcM93TS4U1fPiFchfYR3MCz6IIEr9deIqF0y5MjqGNSTANfaEskeYDyUICGSV9i_QpWZ7azv4hG13f6LGwVifzklzowsRwDFZ9EqM60fUfoW4fjS8z-pIRgQ',
  alt: 'default-alt',
}

export default Image
