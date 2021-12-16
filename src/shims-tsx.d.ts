import Vue, { VNode } from 'vue'
import { InvokeResMock, WxResMock } from 'wecom-sidebar-jssdk'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window {
    // 外部控制是否为 mock
    _isMock?: boolean;
    // mock userId
    _mockUserId: string,
    // wx.invoke 里的 Mock 关系表，apiName -> result
    _invokeResMock?: InvokeResMock;
    // 企业微信的 JsSdk 的 Mock 关系表，fnName -> result
    _wxResMock?: WxResMock;
  }
}
