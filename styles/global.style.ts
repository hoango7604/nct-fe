import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './theme.style'

type StyleType = {
  theme: ThemeType,
  isLoaded: boolean,
}

const GlobalStyle = createGlobalStyle<StyleType>`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  body {
    background-color: ${(props) => props.theme.OTHER.WHITE};
    div#__next {
      min-height: 100%;
    }

    div.wrapper-banner-down-app {
      position: relative;
    }

    div.react-joyride__spotlight {
      border-radius: 0 !important;
    }

    // Wrapper for icon to keep layout consistent when font-faces
    // haven't fully loaded yet. Default width & height is the same
    // with default font-size of material-icons (24px)
    .material-icons-wrapper {
      display: flex;
      width: 24px;
      height: 24px;

      .material-icons,
      .material-icons-outlined,
      .material-icons-two-tone,
      .material-icons-round,
      .material-icons-sharp {
        font-size: 24px !important;
      }

      &.md-12 {
        width: 12px;
        height: 12px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 12px !important;
        }
      }

      &.md-16 {
        width: 16px;
        height: 16px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 16px !important;
        }
      }

      &.md-18 {
        width: 18px;
        height: 18px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 18px !important;
        }
      }

      &.md-24 {
        width: 24px;
        height: 24px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 24px !important;
        }
      }

      &.md-36 {
        width: 36px;
        height: 36px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 36px !important;
        }
      }

      &.md-48 {
        width: 48px;
        height: 48px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 48px !important;
        }
      }

      &.md-96 {
        width: 96px;
        height: 96px;

        .material-icons,
        .material-icons-outlined,
        .material-icons-two-tone,
        .material-icons-round,
        .material-icons-sharp {
          font-size: 96px !important;
        }
      }

      &.with-background {
        border-radius: 100%;
        background-color: ${(props) => (props.isLoaded ? 'transparent' : props.theme.NEUTRAL.LIGHTEST_BG)};
      }

      // Material icons two-tone can not be affected color by using CSS color
      // but to use a workaround way by using CSS filter
      // Put your overriden color class here
      &.color--vex-blue {
        .material-icons-two-tone {
          filter: invert(37%) sepia(91%) saturate(3111%) hue-rotate(204deg) brightness(94%) contrast(90%);
        }
      }
    }

    .material-icons,
    .material-icons-outlined,
    .material-icons-two-tone,
    .material-icons-round,
    .material-icons-sharp {
      line-height: 1 !important;
      opacity: ${(props) => (props.isLoaded ? 1 : 0)};
    }

    // Problem with white spacing in carousel and workaround
    // Ref: https://github.com/ant-design/ant-design/issues/25878
    .slick-slide > div {
      font-size: 0;
    }

    // Change font-size back to normal
    .slick-slide > div > * {
      font-size: 14px;
    }

    // SECTION TEXT COLOR
    .color--vex-blue {
      color: ${(props) => props.theme.PRIMARY.VEX_BLUE} !important;
    }

    .color--vex-blue-light {
      color: ${(props) => props.theme.PRIMARY.VEX_BLUE_LIGHT} !important;
    }

    .color--vex-blue-lightest {
      color: ${(props) => props.theme.PRIMARY.VEX_BLUE_LIGHTEST} !important;
    }

    .color--vex-yellow {
      color: ${(props) => props.theme.PRIMARY.VEX_YELLOW} !important;
    }

    .color--vex-yellow-light {
      color: ${(props) => props.theme.PRIMARY.VEX_YELLOW_LIGHT} !important;
    }

    .color--vex-yellow-lightest {
      color: ${(props) => props.theme.PRIMARY.VEX_YELLOW_LIGHTEST} !important;
    }

    .color--vex-d-blue {
      color: ${(props) => props.theme.ACCENT.VEX_D_BLUE} !important;
    }

    .color--vex-d-blue-lighter {
      color: ${(props) => props.theme.ACCENT.VEX_D_BLUE_LIGHTER} !important;
    }

    .color--information {
      color: ${(props) => props.theme.SEMANTIC.INFORMATION} !important;
    }

    .color--information-light {
      color: ${(props) => props.theme.SEMANTIC.INFORMATION_LIGHT} !important;
    }

    .color--information-lightest {
      color: ${(props) => props.theme.SEMANTIC.INFORMATION_LIGHTEST} !important;
    }

    .color--positive {
      color: ${(props) => props.theme.SEMANTIC.POSITIVE} !important;
    }

    .color--positive-light {
      color: ${(props) => props.theme.SEMANTIC.POSITIVE_LIGHT} !important;
    }

    .color--positive-lightest {
      color: ${(props) => props.theme.SEMANTIC.POSITIVE_LIGHTEST} !important;
    }

    .color--critical {
      color: ${(props) => props.theme.SEMANTIC.CRITICAL} !important;
    }

    .color--critical-light {
      color: ${(props) => props.theme.SEMANTIC.CRITICAL_LIGHT} !important;
    }

    .color--critical-lightest {
      color: ${(props) => props.theme.SEMANTIC.CRITICAL_LIGHTEST} !important;
    }

    .color--negative {
      color: ${(props) => props.theme.SEMANTIC.NEGATIVE} !important;
    }

    .color--negative-light {
      color: ${(props) => props.theme.SEMANTIC.NEGATIVE_LIGHT} !important;
    }

    .color--negative-lightest {
      color: ${(props) => props.theme.SEMANTIC.NEGATIVE_LIGHTEST} !important;
    }

    .color--darkness {
      color: ${(props) => props.theme.NEUTRAL.DARKNESS} !important;
    }

    .color--dark {
      color: ${(props) => props.theme.NEUTRAL.DARK} !important;
    }

    .color--medium-sub {
      color: ${(props) => props.theme.NEUTRAL.MEDIUM_SUB} !important;
    }

    .color--lightest-bg {
      color: ${(props) => props.theme.NEUTRAL.LIGHTEST_BG} !important;
    }

    .color--lighter-border {
      color: ${(props) => props.theme.NEUTRAL.LIGHTER_BORDER} !important;
    }

    .color--light-disable {
      color: ${(props) => props.theme.NEUTRAL.LIGHT_DISABLE} !important;
    }

    .color--black {
      color: ${(props) => props.theme.OTHER.BLACK} !important;
    }

    .color--white {
      color: ${(props) => props.theme.OTHER.WHITE} !important;
    }

    // SECTION BACKGROUND COLOR
    .bg--vex-blue {
      background-color: ${(props) => props.theme.PRIMARY.VEX_BLUE} !important;
    }

    .bg--vex-blue-light {
      background-color: ${(props) => props.theme.PRIMARY.VEX_BLUE_LIGHT} !important;
    }

    .bg--vex-blue-lightest {
      background-color: ${(props) => props.theme.PRIMARY.VEX_BLUE_LIGHTEST} !important;
    }

    .bg--vex-yellow {
      background-color: ${(props) => props.theme.PRIMARY.VEX_YELLOW} !important;
    }

    .bg--vex-yellow-light {
      background-color: ${(props) => props.theme.PRIMARY.VEX_YELLOW_LIGHT} !important;
    }

    .bg--vex-yellow-lightest {
      background-color: ${(props) => props.theme.PRIMARY.VEX_YELLOW_LIGHTEST} !important;
    }

    .bg--vex-d-blue {
      background-color: ${(props) => props.theme.ACCENT.VEX_D_BLUE} !important;
    }

    .bg--vex-d-blue-lighter {
      background-color: ${(props) => props.theme.ACCENT.VEX_D_BLUE_LIGHTER} !important;
    }

    .bg--information {
      background-color: ${(props) => props.theme.SEMANTIC.INFORMATION} !important;
    }

    .bg--information-light {
      background-color: ${(props) => props.theme.SEMANTIC.INFORMATION_LIGHT} !important;
    }

    .bg--information-lightest {
      background-color: ${(props) => props.theme.SEMANTIC.INFORMATION_LIGHTEST} !important;
    }

    .bg--positive {
      background-color: ${(props) => props.theme.SEMANTIC.POSITIVE} !important;
    }

    .bg--positive-light {
      background-color: ${(props) => props.theme.SEMANTIC.POSITIVE_LIGHT} !important;
    }

    .bg--positive-lightest {
      background-color: ${(props) => props.theme.SEMANTIC.POSITIVE_LIGHTEST} !important;
    }

    .bg--critical {
      background-color: ${(props) => props.theme.SEMANTIC.CRITICAL} !important;
    }

    .bg--critical-light {
      background-color: ${(props) => props.theme.SEMANTIC.CRITICAL_LIGHT} !important;
    }

    .bg--critical-lightest {
      background-color: ${(props) => props.theme.SEMANTIC.CRITICAL_LIGHTEST} !important;
    }

    .bg--negative {
      background-color: ${(props) => props.theme.SEMANTIC.NEGATIVE} !important;
    }

    .bg--negative-light {
      background-color: ${(props) => props.theme.SEMANTIC.NEGATIVE_LIGHT} !important;
    }

    .bg--negative-lightest {
      background-color: ${(props) => props.theme.SEMANTIC.NEGATIVE_LIGHTEST} !important;
    }

    .bg--darkness {
      background-color: ${(props) => props.theme.NEUTRAL.DARKNESS} !important;
    }

    .bg--dark {
      background-color: ${(props) => props.theme.NEUTRAL.DARK} !important;
    }

    .bg--medium-sub {
      background-color: ${(props) => props.theme.NEUTRAL.MEDIUM_SUB} !important;
    }

    .bg--lightest-bg {
      background-color: ${(props) => props.theme.NEUTRAL.LIGHTEST_BG} !important;
    }

    .bg--lighter-border {
      background-color: ${(props) => props.theme.NEUTRAL.LIGHTER_BORDER} !important;
    }

    .bg--light-disable {
      background-color: ${(props) => props.theme.NEUTRAL.LIGHT_DISABLE} !important;
    }

    .bg--black {
      background-color: ${(props) => props.theme.OTHER.BLACK} !important;
    }

    .bg--white {
      background-color: ${(props) => props.theme.OTHER.WHITE} !important;
    }

    // Override default arrow of react-joyride lib
    .__floater__arrow {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // Fix scrolling modal in fullscreen
    .ant-modal-wrap {
      overflow: hidden;
    }

    .hidden-button {
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      padding: 0;
      margin: 0;
      background: unset !important;
      box-shadow: unset !important;
      cursor: pointer;

      &[disabled] * {
        color: #C0C0C0 !important;
      }
    }

    .link {
      text-decoration: underline;
      text-align: left;
      cursor: pointer;
      color: ${(props) => props.theme.PRIMARY.VEX_BLUE};
    }

    .anticon.anticon-loading,
    .button-icon {
      margin-right: 4px;
    }

    .button-icon.right {
      margin-right: 0;
      margin-left: 4px;
    }
  }
`

export default GlobalStyle
