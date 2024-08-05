const mapping = {
  house: 'home',
  airplane: '',
  airplaneLanding: '',
  airplaneTakeoff: '',
  airplay: 'cast-variant',
  alarm: '',
  alien: '',
  alignBottom: 'align-vertical-bottom',
  alignTop: 'align-vertical-top',
  alignStart: 'align-horizontal-left',
  alignEnd: 'align-horizontal-right',
  alignCenter: 'align-horizontal-center',
  alignMiddle: 'align-vertical-center',
  ambulance: '',
  anchor: '',
  angle: 'angle-acute',
  aperture: 'camera-iris',
  archive: '',
  arrowDown: '',
  arrowUp: '',
  arrowStart: 'arrow-left',
  arrowEnd: 'arrow-right'
}

function iconset (ctx) {
  return {
    name: 'mdi',
    css: 'waibuMdi.virtual:/mdi/css/materialdesignicons.min.css',
    prefix: 'mdi mdi-',
    mapping
  }
}

export default iconset
