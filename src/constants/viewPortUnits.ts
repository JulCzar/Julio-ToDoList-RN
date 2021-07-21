import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const _vh = height / 100
const _vw = width / 100

const getMultiplier = (multiplier: number) => (size = 1) => size * multiplier

export const vh = getMultiplier(_vh)
export const vw = getMultiplier(_vw)
export const vMin = getMultiplier(Math.min(_vh, _vw))
export const vMax = getMultiplier(Math.max(_vh, _vw))