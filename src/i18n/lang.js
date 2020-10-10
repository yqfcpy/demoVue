export default {
  // 设置语言
  setLang (lang) {
    window.localStorage.setItem('user_lang', lang)
  },
  // 默认语言
  getLang (defaultLang) {
    const localLang = window.localStorage.getItem('user_lang')
    if (localLang === null) {
      return defaultLang
    } else {
      return localLang
    }
  }
}
