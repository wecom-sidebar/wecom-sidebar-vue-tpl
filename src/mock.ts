// Mock 当前用户 Id
export const mockUserId = window.mockUserId || 'YanHaiXiang'

// 可在这里自由 mock wx.invoke 的内容
export const invokeResMock: Record<string, any> = window.invokeResMock || {
  getCurExternalContact: {
    userId: 'wouUG7CQAADUoVZJzqDMgv_pfX8hm7WQ'
  }
}

// 可在这里自由 wx.fn 的内容
export const wxResMock: Record<string, any> = window.wxResMock || {
  agentConfig: () => {
    console.log('mock agent config')
  }
}
