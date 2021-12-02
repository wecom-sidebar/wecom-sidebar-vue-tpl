import apis from '../jsSdk/apis'
import { JsSDK } from '@/lib/jsSdk'
import { TicketRes } from '@/api/types'

export interface Config {
  corpId: string;
  agentId: string;
}

export type GetSignatures = () => Promise<TicketRes>

/**
 * 初始化企业微信 SDK 库
 * config: 基础信息配置
 * getSignatures: 获取签名函数
 */
const initSdk = async (jsSdk: JsSDK, config: Config, getSignatures: GetSignatures) => {
  const { corpId, agentId } = config

  // 获取 ticket
  const signaturesRes = await getSignatures()

  const agentConfigRes = await jsSdk.agentConfig({
    corpid: corpId,
    agentid: agentId,
    timestamp: signaturesRes.meta.timestamp,
    nonceStr: signaturesRes.meta.nonceStr,
    signature: signaturesRes.app.signature,
    jsApiList: apis
  }).catch(e => {
    console.error(e)
  })

  console.log('agentConfig res', agentConfigRes)

  wx.error(console.error)
}

export default initSdk
