export const SITE_METADATA = {
  title: `zhuang's blog - zhuang's coding journey`,
  author: 'zhuang',
  headerTitle: `zhuang's blog`,
  description: 'I am here to document my life ：>',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.zhuang.me',
  siteRepo: 'https://github.com/nonacosa/zhuang.me',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/profile.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,

  locale: 'en-US',
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://cloud.umami.is/share/hGwv3TOzpGVQqojs/zhuang.me',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
