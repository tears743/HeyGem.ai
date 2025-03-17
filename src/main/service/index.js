import { init as videoResult } from './video.js'
import { init as model } from './model.js'
import { init as context } from './context.js'
import { init as voice } from './voice.js'
import { init as cozeWorkflow } from './coze_workflow.js'

export function registerHandler() {
  videoResult()
  model()
  context()
  voice()
  cozeWorkflow()
}
