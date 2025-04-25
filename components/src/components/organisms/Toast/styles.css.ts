import { createVar, style } from '@vanilla-extract/css'
import { modeVars } from '@/src/css/theme.css'

export const containerLeft = createVar()
export const containerRight = createVar()
export const containerTop = createVar()
export const containerBottom = createVar()
export const containerWidth = createVar()
export const containerTransform = createVar()

export const container = style({
  backgroundColor: modeVars.color.backgroundPrimary,
  left: containerLeft,
  right: containerRight,
  top: containerTop,
  bottom: containerBottom,
  width: containerWidth,
  boxShadow: '0.02',
  transform: containerTransform,
  selectors: {
    '&.touch': {
      backgroundColor: `rgba(${modeVars.color.backgroundPrimary}, 0.8)`,
      backdropFilter: 'blur(16px)',
    },
  },
})

export const draggable = style({
  marginBottom: 'calc(-1 * 0.5rem)',
})
