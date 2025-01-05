import { registerPlugin } from '@capacitor/core';

import  { WechatSDKPlugin } from './definitions';

const WechatSDK = registerPlugin<WechatSDKPlugin>('WechatSDK', {
  web: () => import('./web').then(m => new m.WechatSDKWeb()),
});

export * from './definitions';
export { WechatSDK };
