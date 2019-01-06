const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  public: [
    'CATALOG_API_URL',
    'MEDIA_STORAGE_API_URL'
  ],

  server: [
    'CATALOG_API_URL',
    'MEDIA_STORAGE_API_URL'
  ]
})

module.exports = withConfig()
