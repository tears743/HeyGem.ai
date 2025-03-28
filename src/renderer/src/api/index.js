import { localUrl } from '@renderer/utils'

export function videoPage({ page = 1, pageSize = 1, name = '' }) {
  return window.electron.ipcRenderer.invoke('video/page', { page, pageSize, name })
}

export function findVideo(id) {
  return window.electron.ipcRenderer.invoke('video/find', id)
}

export function removeVideo(id) {
  return window.electron.ipcRenderer.invoke('video/remove', id)
}

export function saveVideo(video) {
  // id, model_id, name, text_content, voice_id, audio_path
  return window.electron.ipcRenderer.invoke('video/save', video)
}

export function makeVideo(id) {
  return window.electron.ipcRenderer.invoke('video/make', id)
}

export function exportVideo(id, outputPath) {
  return window.electron.ipcRenderer.invoke('video/export', id, outputPath)
}

export function modifyVideo(video) {
  return window.electron.ipcRenderer.invoke('video/modify', video)
}

export function countVideo(name = '') {
  return window.electron.ipcRenderer.invoke('video/count', name)
}

export function modelPage({ page = 1, pageSize = 1, name = '' }) {
  return window.electron.ipcRenderer.invoke('model/page', { page, pageSize, name })
}

export function findModel(id) {
  return window.electron.ipcRenderer.invoke('model/find', id)
}

export function addModel({ name, videoPath }) {
  videoPath = localUrl.delFileProtocol(videoPath)
  return window.electron.ipcRenderer.invoke('model/addModel', name, videoPath)
}

export function countModel(name = '') {
  return window.electron.ipcRenderer.invoke('model/count', name)
}

export function removeModel(id) {
  return window.electron.ipcRenderer.invoke('model/remove', id)
}

export function getContext(key) {
  return window.electron.ipcRenderer.invoke('context/get', key)
}

export function saveContext(key, val) {
  return window.electron.ipcRenderer.invoke('context/save', key, val)
}

export function audition(voiceId, text) {
  return window.electron.ipcRenderer.invoke('voice/audition', voiceId, text)
}

export function addCozeWorkflow({ name, desc, workflow_id, app_id, coze_token, status }) {
  return window.electron.ipcRenderer.invoke('coze_workflow/addCozeWorkflow', {
    name,
    desc,
    workflow_id,
    app_id,
    coze_token,
    status
  })
}

export function updateCozeWorkflow({ id, name, desc, workflow_id, app_id, coze_token, status }) {
  return window.electron.ipcRenderer.invoke('coze_workflow/updateCozeWorkflow', {
    id,
    name,
    desc,
    workflow_id,
    app_id,
    coze_token,
    status
  })
}

export function updateCozeWorkflowStatus(id, status, execute_id) {
  return window.electron.ipcRenderer.invoke(
    'coze_workflow/updateCozeWorkflowStatus',
    id,
    status,
    execute_id
  )
}

export function updateCozeWorkflowExecuteId({ workflow_id, execute_id }) {
  return window.electron.ipcRenderer.invoke('coze_workflow/updateCozeWorkflowExecuteId', {
    workflow_id,
    execute_id
  })
}

export function removeCozeWorkflow(id) {
  return window.electron.ipcRenderer.invoke('coze_workflow/removeCozeWorkflow', id)
}

export function queryAllCozeWorkflow() {
  return window.electron.ipcRenderer.invoke('coze_workflow/queryAllCozeWorkflow')
}

export function queryWorkFlowResultById(id) {
  return window.electron.ipcRenderer.invoke('coze_workflow/queryWorkFlowResultById', id)
}

export function insertWorkFlowResult({ workflow_id, text }) {
  return window.electron.ipcRenderer.invoke('coze_workflow/insertWorkFlowResult', {
    workflow_id,
    text
  })
}

export function updateWorkFlowExcutedId({ id, execute_id }) {
  return window.electron.ipcRenderer.invoke('coze_workflow/updateWorkFlowExecuteId', {
    id,
    execute_id
  })
}

export function updateWorkFlowResultExcutedId({ id, execute_id }) {
  return window.electron.ipcRenderer.invoke('coze_workflow/updateWorkFlowResultExecuteId', {
    id,
    execute_id
  })
}
