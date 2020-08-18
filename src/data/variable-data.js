var data = [
  {
    label: 'Border Thickness (px)',
    name: 'thickness',
    input: true,
    type: 'number',
  },
  {
    label: 'Size',
    name: 'size',
    options: [
      { label: 'Thin', value: 'thin' },
      { label: 'Medium', value: 'medium' },
      { label: 'Thick', value: 'thick' },
    ],
  },
  {
    label: 'Shape',
    name: 'shape',
    options: [
      { label: 'Outline', value: 'outline' },
      { label: 'Circle', value: 'circle' },
      { label: 'Diamond', value: 'diamond' },
      { label: 'Square', value: 'square' },
      // { label: 'FontAwesome Icon', value: 'icon' },
    ],
  },
  {
    label: 'Outline Style',
    name: 'outline',
    options: [
      { label: 'Solid', value: 'solid' },
      { label: 'Dashed', value: 'dashed' },
      { label: 'Dotted', value: 'dotted' },
    ],
  },
  {
    label: 'Position',
    name: 'position',
    options: [
      { label: 'Before', value: 'before' },
      { label: 'After', value: 'after' },
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
