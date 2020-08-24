var data = [
  // {
  //   label: 'Font Weight',
  //   name: 'fontWeight',
  //   options: [
  //     { label: '100', value: 100 },
  //     { label: '200', value: 200 },
  //     { label: '300', value: 300 },
  //     { label: '400', value: 400 },
  //     { label: '500', value: 500 },
  //     { label: '600', value: 600 },
  //     { label: '700', value: 700 },
  //     { label: '800', value: 800 },
  //     { label: '900', value: 900 },
  //   ],
  // },
  // {
  //   label: 'Example Theme',
  //   name: 'theme',
  //   options: [
  //     { label: 'Vanilla HTML', value: 'html' },
  //     { label: 'Material UI', value: 'material' },
  //     { label: 'Bootstrap', value: 'bootstrap' },
  //   ],
  // },
  {
    label: 'Width',
    name: 'width',
    input: true,
    type: 'number',
  },
  {
    label: 'Style',
    name: 'outline',
    options: [
      { label: 'Solid', value: 'solid' },
      { label: 'Dashed', value: 'dashed' },
      { label: 'Dotted', value: 'dotted' },
    ],
  },
  {
    label: 'Motion',
    name: 'motion',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Pulsing', value: 'pulse' },
      { label: 'Bouncing', value: 'bounce' },
      { label: 'Fading', value: 'fade' },
    ],
  },
  {
    label: 'Speed',
    name: 'duration',
    options: [
      { label: 'Slow', value: '2s' },
      { label: 'Medium', value: '1s' },
      { label: 'Fast', value: '650ms' },
    ],
  },
  {
    label: 'Loop',
    name: 'loop',
    options: [
      { label: 'One', value: '1' },
      { label: 'Two', value: '2' },
      { label: 'Indefinitely', value: 'infinite' },
    ],
  },
]

export default data
