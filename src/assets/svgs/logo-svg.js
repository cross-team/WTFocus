import React from 'react'
import styled from '@emotion/styled'
import VariableContext from 'providers/variable-context'

export default function LogoSVG() {
  var { state } = React.useContext(VariableContext)

  var DesktopLogo = styled.svg`
    position: relative;
    left: calc(49%);
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  `

  return (
    <DesktopLogo
      width="889"
      height="212"
      viewBox="0 0 889 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M179.52 58.704L142.08 162H113.28L90.048 97.872L66.048 162H37.248L0 58.704H28.224L52.608 128.592L77.952 58.704H103.296L127.872 128.592L153.024 58.704H179.52Z"
        fill="white"
      />
      <path
        d="M262.881 157.008C259.937 159.184 256.289 160.848 251.937 162C247.713 163.024 243.233 163.536 238.497 163.536C226.209 163.536 216.673 160.4 209.889 154.128C203.233 147.856 199.905 138.64 199.905 126.48V84.048H183.969V61.008H199.905V35.856H229.857V61.008H255.585V84.048H229.857V126.096C229.857 130.448 230.945 133.84 233.121 136.272C235.425 138.576 238.625 139.728 242.721 139.728C247.457 139.728 251.489 138.448 254.817 135.888L262.881 157.008Z"
        fill="white"
      />
      <path
        d="M312.526 61.008H339.022V84.048H313.294V162H283.342V84.048H267.406V61.008H283.342V56.4C283.342 44.624 286.799 35.28 293.711 28.368C300.751 21.456 310.607 18 323.279 18C327.759 18 331.983 18.512 335.951 19.536C340.047 20.432 343.438 21.776 346.126 23.568L338.254 45.264C334.798 42.832 330.767 41.616 326.159 41.616C317.071 41.616 312.526 46.608 312.526 56.592V61.008Z"
        fill="white"
      />
      <path
        d="M628.721 163.536C617.713 163.536 607.793 161.296 598.961 156.816C590.257 152.208 583.409 145.872 578.417 137.808C573.553 129.744 571.121 120.592 571.121 110.352C571.121 100.112 573.553 90.96 578.417 82.896C583.409 74.832 590.257 68.56 598.961 64.08C607.793 59.472 617.713 57.168 628.721 57.168C639.601 57.168 649.073 59.472 657.137 64.08C665.329 68.56 671.281 75.024 674.993 83.472L651.761 95.952C646.385 86.48 638.641 81.744 628.529 81.744C620.721 81.744 614.257 84.304 609.137 89.424C604.017 94.544 601.457 101.52 601.457 110.352C601.457 119.184 604.017 126.16 609.137 131.28C614.257 136.4 620.721 138.96 628.529 138.96C638.769 138.96 646.513 134.224 651.761 124.752L674.993 137.424C671.281 145.616 665.329 152.016 657.137 156.624C649.073 161.232 639.601 163.536 628.721 163.536Z"
        fill="#343A40"
      />
      <path
        d="M786.703 58.704V162H758.287V149.712C754.319 154.192 749.583 157.648 744.079 160.08C738.575 162.384 732.623 163.536 726.223 163.536C712.655 163.536 701.903 159.632 693.967 151.824C686.031 144.016 682.063 132.432 682.063 117.072V58.704H712.015V112.656C712.015 129.296 718.991 137.616 732.943 137.616C740.111 137.616 745.871 135.312 750.223 130.704C754.575 125.968 756.751 118.992 756.751 109.776V58.704H786.703Z"
        fill="#343A40"
      />
      <path
        d="M839.603 163.536C831.027 163.536 822.643 162.512 814.451 160.464C806.259 158.288 799.731 155.6 794.867 152.4L804.851 130.896C809.459 133.84 815.027 136.272 821.555 138.192C828.083 139.984 834.483 140.88 840.755 140.88C853.427 140.88 859.763 137.744 859.763 131.472C859.763 128.528 858.035 126.416 854.579 125.136C851.123 123.856 845.811 122.768 838.643 121.872C830.195 120.592 823.219 119.12 817.715 117.456C812.211 115.792 807.411 112.848 803.315 108.624C799.347 104.4 797.363 98.384 797.363 90.576C797.363 84.048 799.219 78.288 802.931 73.296C806.771 68.176 812.275 64.208 819.443 61.392C826.739 58.576 835.315 57.168 845.171 57.168C852.467 57.168 859.699 58 866.867 59.664C874.163 61.2 880.179 63.376 884.915 66.192L874.931 87.504C865.843 82.384 855.923 79.824 845.171 79.824C838.771 79.824 833.971 80.72 830.771 82.512C827.571 84.304 825.971 86.608 825.971 89.424C825.971 92.624 827.699 94.864 831.155 96.144C834.611 97.424 840.115 98.64 847.667 99.792C856.115 101.2 863.027 102.736 868.403 104.4C873.779 105.936 878.451 108.816 882.419 113.04C886.387 117.264 888.371 123.152 888.371 130.704C888.371 137.104 886.451 142.8 882.611 147.792C878.771 152.784 873.139 156.688 865.715 159.504C858.419 162.192 849.715 163.536 839.603 163.536Z"
        fill="#343A40"
      />
      <rect
        x="359.12"
        y="10"
        width="192"
        height="192"
        rx="96"
        fill="white"
        stroke={state.focusColor}
        stroke-width="20"
      />
      <rect x="375.12" y="26" width="160" height="160" rx="80" fill="#1479FB" />
      <rect
        x="386.24"
        y="37.1198"
        width="137.761"
        height="137.761"
        rx="68.8803"
        fill="white"
      />
      <rect
        x="406.008"
        y="56.8881"
        width="98.2239"
        height="98.2239"
        rx="49.112"
        fill="#1479FB"
      />
    </DesktopLogo>
  )
}
