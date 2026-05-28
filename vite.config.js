import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgPages = repositoryName.endsWith('.github.io')
const base = process.env.GITHUB_ACTIONS
  ? isUserOrOrgPages || repositoryName === ''
    ? '/'
    : `/${repositoryName}/`
  : '/'

const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self' ws: wss:; font-src 'self' data:; frame-src 'self' https://www.google.com https://maps.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
}

function normalizeSiteUrl(siteUrl) {
  if (!siteUrl) {
    return ''
  }

  return siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = normalizeSiteUrl(env.VITE_SITE_URL)
  const seoUrlMeta = siteUrl
    ? [
        `<meta property="og:url" content="${siteUrl}" />`,
        `<meta property="og:image" content="${new URL('logo.jpg', siteUrl).toString()}" />`,
        `<meta name="twitter:image" content="${new URL('logo.jpg', siteUrl).toString()}" />`,
        `<link rel="canonical" href="${siteUrl}" />`,
      ].join('\n    ')
    : ''

  return {
    base,
    plugins: [
      vue(),
      {
        name: 'inject-seo-url-meta',
        transformIndexHtml(html) {
          return html.replace('<!-- seo-url-meta -->', seoUrlMeta)
        },
      },
    ],
    server: {
      headers: securityHeaders,
    },
    preview: {
      headers: securityHeaders,
    },
  }
})
