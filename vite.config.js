import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

// Custom Handlebars helpers
const handlebarsHelpers = {
  uppercase: (str) => str.toUpperCase(),
  formatDate: (date) => new Date(date).toLocaleDateString(),
  eq: (a, b) => a === b,
  or: (a, b) => a || b
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  assetsInclude: ['**/*.xml', '**/*.txt'],
  plugins: [
    handlebars({
      partialDirectory: './partials',
      context: (pagePath) => {
        // Base context for all pages
        const baseContext = {
          // Campaign Information
          candidateName: 'Anthony Colucci',
          office: 'Toms River Ward 1 Council',
          slogan: 'Leadership You Can Trust',
          electionDate: 'November 4, 2025',
          
          // Site Information
          title: 'Anthony Colucci for Ward 1 Councilman',
          description: 'Experienced leadership and community-focused solutions for Toms River Ward 1. Vote Anthony Colucci for Council - Leadership You Can Trust.',
          author: 'Colucci Campaign Team',
          year: new Date().getFullYear(),
          version: '1.0.0',
          environment: 'development',
          
          // SEO Variables
          // siteUrl: 'https://jonssmall.github.io/campaign/',
          canonical_path: '',
          
          // Campaign Details
          experience: '15+ years of community service',
          priorities: ['Public Safety', 'Economic Development', 'Infrastructure', 'Community Engagement'],
          campaignEmail: 'Anthonycolucci732@gmail.com',
          campaignPhone: '(732) 503-9707',
          
          // Social Media
          facebook: 'ColucciForWard1',
          twitter: '@ColucciWard1',
          instagram: 'colucciforward1'
        };

        if (pagePath.includes('issues/index.html')) {
          return {
            ...baseContext,
            title: 'Issues & Platform - Anthony Colucci for Ward 1',
            description: 'Anthony Colucci\'s platform for Ward 1: Public Safety, Economic Development, Infrastructure, and Community Engagement. Real solutions for Toms River.',
            canonical_path: 'issues/'
          };
        }

        if (pagePath.includes('endorsements/index.html')) {
          return {
            ...baseContext,
            title: 'Endorsements - Anthony Colucci for Ward 1',
            description: 'Community leaders and organizations endorsing Anthony Colucci for Toms River Ward 1 Council. Trusted leadership you can count on.',
            canonical_path: 'endorsements/'
          };
        }

        if (pagePath.includes('letter/index.html')) {
          return {
            ...baseContext,
            title: 'Open Letter - Anthony Colucci for Ward 1',
            description: 'An open letter from Anthony Colucci to the residents of Toms River Ward 1. Learn about his vision and commitment to our community.',
            canonical_path: 'letter/'
          };
        }

        // Default context for homepage
        return {
          ...baseContext,
          title: 'Anthony Colucci for Toms River Ward 1 Council - Leadership You Can Trust',
          description: 'Vote Anthony Colucci for Toms River Ward 1 Council. Experienced leadership, proven results.',
          canonical_path: ''
        };
      },
      helpers: handlebarsHelpers
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        endorsements: resolve(__dirname, 'endorsements/index.html'),
        issues: resolve(__dirname, 'issues/index.html'),
        letter: resolve(__dirname, 'letter/index.html'),
      }
    }
  }
})
