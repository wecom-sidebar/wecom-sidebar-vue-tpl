import Vue, { VNode } from 'vue'

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
    isMock?: boolean;
    // mock userId
    mockUserId: string,
    // wx.invoke 里的 Mock 关系表，apiName -> result
    invokeResMock?: Partial<JsSDK>;
    // 企业微信的 JsSdk 的 Mock 关系表，fnName -> result
    wxResMock?: Partial<JsSDK>;
  }
}
