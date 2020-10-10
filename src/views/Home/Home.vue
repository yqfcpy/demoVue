<template>
  <div>
    <el-row>
      <el-button @click="changeLanguageEn" type="primary">English</el-button>
      <el-button @click="changeLanguageZh" type="primary">中文简体</el-button>
      <el-button @click="changeLanguageEs" type="primary">Español</el-button>
      <el-button @click="changeLanguage"><p>{{$t("global.language")}}</p></el-button>
    </el-row>
    <h1>{{$t("home.hello")}}</h1>
    <h1>{{message}}</h1>
    <el-input v-model="input" :placeholder="$t('home.user')" style="width:400px"></el-input>
  </div>
</template>

<script>
import { setup } from '@/i18n'
import LangStorage from '@/i18n/lang.js'
export default {
  name: 'Home',
  data () {
    return {
      message: window.i18n.t('home.message'),
      input: ''
    }
  },
  methods: {
    updateData () {
      this.message = window.i18n.t('home.message')
    },
    changeLanguage () {
      if (this.$i18n.locale === 'en') {
        setup('zh')
      } else {
        setup('en')
      }
      // 把当前语言保存起来 下次进入页面还是这个语言
      LangStorage.setLang(this.$i18n.locale)
      this.updateData()
    },
    // 设置成英文
    changeLanguageEn () {
      if (this.$i18n.locale !== 'en') {
        setup('en')
      }
      LangStorage.setLang(this.$i18n.locale)
      this.updateData()
    },
    // 设置成中文
    changeLanguageZh () {
      if (this.$i18n.locale !== 'zh') {
        setup('zh')
      }
      LangStorage.setLang(this.$i18n.locale)
      this.updateData()
    },
    // 设置成西班牙文
    changeLanguageEs () {
      if (this.$i18n.locale !== 'es') {
        setup('es')
      }
      LangStorage.setLang(this.$i18n.locale)
      this.updateData()
    }
  }
}
</script>

<style lang="scss">

</style>
