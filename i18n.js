module.exports = {
  locales: ['ru', 'en', 'uz'],
  defaultLocale: 'uz',
  loadLocaleFrom: (lang, ns) =>
    import(`@/locales/${lang}/common.json`).then((m) => m.default),
  pages: {
    '*': ['common']
  },
  localeDetection: false,
}