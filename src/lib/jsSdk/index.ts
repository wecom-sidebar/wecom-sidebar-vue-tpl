import compareVersions from 'compare-versions'

/**
 * jssdk 的 config 函数的封装
 * @param setting
 */
const config = (setting: wx.ConfigParams): Promise<wx.WxFnCallbackRes | null> => {
  return new Promise((resolve) => {
    wx.config({ ...setting })
    wx.ready(() => resolve(null))
  })
}

/**
 * jssdk 的 agentConfig 函数封装
 * @param agentSetting
 */
const agentConfig = (agentSetting: Omit<wx.AgentConfigParams, 'success' | 'fail'>): Promise<wx.WxFnCallbackRes> => {
  return new Promise((resolve, reject) => {
    wx.agentConfig({
      ...agentSetting,
      success: resolve,
      fail: reject
    })
  })
}

/**
 * 根据 userAgent 检查当前企业微信版本号是否 < 3.0.24
 */
const checkDeprecated = async (): Promise<boolean> => {
  const DEPRECATED_VERSION = '3.0.24'

  const versionRegexp = /wxwork\/([\d.]+)/
  const versionResult = navigator.userAgent.match(versionRegexp)

  if (!versionResult || versionResult.length < 2) {
    return true
  }

  const [, version] = versionResult

  // version < DEPRECATED_VERSION ?
  return compareVersions(version, DEPRECATED_VERSION) === -1
}

/**
 * 通用调用企业微信 SDK 的函数
 * @param apiName api 名称
 * @param params 传入参数
 */
const invoke = <Res = { hasError: boolean }>(apiName: wx.Api, params = {}) => {
  return new Promise<wx.WxInvokeCallbackRes & Res>((resolve) => {
    wx.invoke<Res>(apiName, params, res => {
      const hasError = res.err_msg !== `${apiName}:ok`

      if (hasError) {
        // 错误日志
        console.error(apiName, params, res)
      }

      resolve({ ...res, hasError })
    })
  })
}

const _jsSdk = {
  checkDeprecated,
  config,
  agentConfig,
  invoke
}

export type JsSDK = typeof _jsSdk;

export default _jsSdk
