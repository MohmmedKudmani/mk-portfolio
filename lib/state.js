import { proxy } from 'valtio'

const state = proxy({
  modelOpened: false,
})

export { state }
