
export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '16',
  modelsSources: {
    type: 'contentful'
  },
  models: {
    page: { type: 'page', urlPath: '/{slug}' },
  },
}