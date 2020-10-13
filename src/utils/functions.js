import React from 'react'

export function getURLData(location) {
  let urlData = new URLSearchParams(location.search)
  return {
    bgColor: urlData.get('bgColor') || 'f2f2f2',
    inputBg: urlData.get('inputBg') || 'ffffff',
    focusColor: urlData.get('focusColor') || '0e63c8',
    width: urlData.get('width') || '2',
    offset: urlData.get('offset') || '4',
    outline: urlData.get('outline') || 'solid',
    reducedMotion: urlData.get('reducedMotion') || 'true',
    motion: urlData.get('motion') || 'none',
    duration: urlData.get('duration') || '1s',
    loop: urlData.get('loop') || 'infinite',
  }
}

export function setParams({
  bgColor = '#f2f2f2',
  inputBg = '#f2f2f2',
  focusColor = '#0e63c8',
  width = '2',
  offset = '4',
  outline = 'solid',
  reducedMotion = 'true',
  motion = 'none',
  duration = '1s',
  loop = 'infinite',
}) {
  let urlData = URLSearchParams()
  urlData.set('bgColor', bgColor)
  urlData.set('inputBg', inputBg)
  urlData.set('focusColor', focusColor)
  urlData.set('width', width)
  urlData.set('offset', offset)
  urlData.set('outline', outline)
  urlData.set('reducedMotion', reducedMotion)
  urlData.set('motion', motion)
  urlData.set('duration', duration)
  urlData.set('loop', loop)
  return urlData.toString()
}

export function updateURL(history, state) {
  url = setParams(state)
  history.push(`?${url}`)
}

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null
}

export function luminanace(r, g, b) {
  var a = [r, g, b].map(function(v) {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

export function contrast(rgb1, rgb2) {
  var lum1 = luminanace(rgb1[0], rgb1[1], rgb1[2])
  var lum2 = luminanace(rgb2[0], rgb2[1], rgb2[2])
  var brightest = Math.max(lum1, lum2)
  var darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

export function getFontColor(hex) {
  let rgb = hexToRgb(hex)
  let white = contrast(rgb, hexToRgb('#ffffff'))
  let black = contrast(rgb, hexToRgb('#000000'))
  if (white > black) return '#ffffff'
  else return '#000000'
}
