<template lang="pug">
v-app(:dark="dark",standalone)
  v-navigation-drawer(v-model='drawer',:mini-variant.sync="mini", persistent,enable-resize-watcher)
    .pa-3.text-xs-center(v-show="!mini")
      div.display-2.py-4 MOD Plumber
      p {{$t('MOD Backend help tool')}}
    .pa-3.text-xs-center(v-show="mini")
      .display-2 A
    v-divider
    v-list(dense)
      template(v-for='item in menu')
        v-list-group(v-if='item.items', v-bind:group='item.group')
          v-list-tile(:to='item.href', slot='item', :title="item.title")
            v-list-tile-action
              v-icon() {{ item.icon }}
            v-list-tile-content
              v-list-tile-title {{ $t(item.title) }}
            v-list-tile-action
              v-icon() keyboard_arrow_down

          v-list-tile(v-for='subItem in item.items', :key='subItem.href',:to='subItem.href', v-bind:router='!subItem.target', ripple, v-bind:disabled='subItem.disabled', v-bind:target='subItem.target')
            v-list-tile-action(v-if='subItem.icon')
              v-icon.success--text {{ subItem.icon }}
            v-list-tile-content
              v-list-tile-title {{ $t(subItem.title) }}
        v-subheader(v-else-if='item.header') {{ item.header }}
        v-divider(v-else-if='item.divider')
        v-list-tile(v-else,:to='item.href', router, ripple, v-bind:disabled='item.disabled', :title="item.title")
          v-list-tile-action
            v-icon() {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ $t(item.title) }}
          v-list-tile-action(v-if='item.subAction')
            v-icon.success--text {{ item.subAction }}
  v-toolbar.darken-1(fixed,dark,:class="theme")
    v-toolbar-side-icon(dark, @click.native.stop='drawer = !drawer')
    v-toolbar-title {{$t(pageTitle)}}
    v-spacer
    v-menu(offset-y)
      v-btn(icon, dark, slot="activator")
        v-icon(dark) language
    v-menu(offset-y)
      v-btn(icon, dark, slot="activator", @click="openJenkins")
        img(src="../../static/img/jenkins_logo.png" style="width:100%; height:100%;")
    v-menu(offset-y)
      v-btn(icon, dark, slot="activator", @click="openJenkins")
        img(src="../../static/img/jenkins_logo.png" style="width:100%; height:100%;")

  main
    v-container.pa-4(fluid)
        v-alert(v-bind='message', v-model='message.body', dismissible) {{message.body}}
        .py-2
          v-slide-y-transition(mode='out-in')
            router-view
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {
      dark: false,
      theme: 'primary',
      mini: false,
      drawer: true,
      locales: ['en-US'],
      colors: ['blue', 'green', 'purple', 'red']
    }
  },
  computed: {
    ...mapState(['message', 'menu', 'pageTitle'])
  },
  methods: {
    // changeLocale (to) {
    //   global.helper.ls.set('locale', to)
    //   this.$i18n.locale = to
    // },
    openJenkins () {
      window.open('http://www.naver.com', '_blank')
    },
    fetchMenu () {
      // fetch menu from server
      // this.$http.get('menu').then(({data}) => this.$store.commit('setMenu', data))
    }
  },

  created () {
    this.fetchMenu()
  }
}
</script>

