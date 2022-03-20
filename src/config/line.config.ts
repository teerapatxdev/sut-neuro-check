export default () => ({

    channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
    channelSecret: process.env.LINE_CHANNEL_SECRET || '',
    cmsBaseUrl: process.env.CMS_API_URL || '',
    lineJWT: process.env.LINE_JWT || '',
    liffId: process.env.LIFF_ID || '',
    richMenuMemberId: process.env.LIFF_MENU_MEMBER_ID || '',
    richMenuDefaultId: process.env.LIFF_MENU_DEFAULT_ID || '',
    channelId: process.env.LIFF_CHANNEL_ID || '',
    
  });
  