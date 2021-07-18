import React from 'react'
import styled from 'styled-components'

const ICON_SIZE = {
  xxs: 12,
  xs: 16,
  small: 18,
  normal: 24,
  large: 36,
  xl: 48,
  xxl: 96,
}

const ICON_TYPE = {
  filled: 'material-icons',
  outlined: 'material-icons-outlined',
  rounded: 'material-icons-round',
  'two-tone': 'material-icons-two-tone',
  sharp: 'material-icons-sharp',
}

type ContainerType = {
  width: number,
  height: number
}

const Container = styled.div<ContainerType>`
  width: ${(props) => props.width}px !important;
  height: ${(props) => props.height}px !important;

  &&& > i {
    font-size: ${(props) => (props.width < props.height ? props.width : props.height)}px !important;
  }
`

/**
 * Just a wrapper for material icons support by google
 * with lazyload config
 * You can look up for icons that met your requirement:
 * https://www.google.com/design/icons/
 */
const Icon = ({
  className,
  iconName,
  iconType,
  iconClass,
  size,
  width,
  height,
  withBackground,
  otherProps,
}: IconProps) => (width && height
  ? (
    <Container
      className={`material-icons-wrapper ${className} ${withBackground ? 'with-background' : ''}`}
      width={width}
      height={height}
      {...otherProps}
    >
      <i className={`${ICON_TYPE[iconType]} ${iconClass}`}>{iconName}</i>
    </Container>
  )
  : (
    <div
      className={`material-icons-wrapper md-${ICON_SIZE[size]} ${className} ${withBackground ? 'with-background' : ''}`}
      {...otherProps}
    >
      <i className={`${ICON_TYPE[iconType]} ${iconClass}`}>{iconName}</i>
    </div>
  )
)

interface IconProps {
  className?: string
  /**
   * Look up for iconName here: https://fonts.google.com/icons
   */
  iconName: string
  /**
   * Can be one of "filled", "outlined", "rounded", "two-tone", "sharp"
   * Default: "filled"
   */
  iconType?: 'filled' | 'outlined' | 'rounded' | 'two-tone' | 'sharp'
  /**
   * Use iconClass to provide pre-defined color to icon
   * Look them up at *\/assets/global.style.js*
   */
  iconClass?: string
  /**
   * if width and height is provided, they will override
   * pre-defined size of the icon
   *
   * size can be one of:
   *   - "xxs": 12px
   *   - "xs": 16px
   *   - "small": 18px
   *   - "normal": 24px
   *   - "large": 36px
   *   - "xl": 48px
   *   - "xxl": 96px
   *
   * Default: "normal"
   */
  size?: 'xxs' | 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'xxl'
  width?: number
  height?: number
  withBackground?: boolean
  /**
   * Other props to be added to icon container
   */
  otherProps?: object | any
}

Icon.defaultProps = {
  className: '',
  iconType: 'filled',
  iconClass: '',
  size: 'normal',
  width: undefined,
  height: undefined,
  withBackground: false,
  otherProps: {},
}

export default Icon
