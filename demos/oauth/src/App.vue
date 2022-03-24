<script lang="ts">
  import { NumistaConnector } from '@leopiccionia/numista-sdk'
  import { CollectedCoinsResponse, Language, OAuthConnector } from '@leopiccionia/numista-sdk'
  import { defineComponent } from 'vue'

  export default defineComponent({
    data () {
      return {
        apiKey: '',
        clicked: false,
        clientId: '',
        code: '',
        collectedCoins: null as CollectedCoinsResponse | null,
        lang: 'en' as Language,
        redirectUri: 'https://postman-echo.com/get',
      }
    },
    computed: {
      numista (): NumistaConnector {
        return new NumistaConnector(this.apiKey)
      },
      oauth (): OAuthConnector {
        return this.numista.useAuthorizationCode(this.clientId, this.redirectUri, ['view_collection'], { lang: this.lang })
      },
    },
    watch: {
      async code () {
        const userId = await this.oauth.setCode(this.code)
        this.collectedCoins = await this.numista.userCoins(userId)
      },
    },
    methods: {
      clickedLink () {
        this.clicked = true
      },
    },
  })
</script>

<template>
  <form @submit.prevent>
    <div>
      <label for="api-key">API key</label>
      <input id="api-key" type="password" autocomplete="off" v-model="apiKey">
    </div>
    <div>
      <label for="client-id">Client ID</label>
      <input id="client-id" type="password" autocomplete="off" v-model="clientId">
    </div>
    <div>
      <label for="redirect-uri">Redirect URL</label>
      <input id="redirect-uri" type="url" v-model="redirectUri">
    </div>
    <div>
      <label for="lang">Language</label>
      <select id="lang" v-model="lang">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>

    <a class="button" :href="oauth.url" rel="noreferrer noopener" target="_blank" @click="clickedLink">Authorize</a>

    <template v-if="clicked">
      <div>
        <label for="code">Token code</label>
        <input id="code" type="text" v-model="code">
      </div>
    </template>
  </form>

  <pre v-if="collectedCoins">{{ collectedCoins }}</pre>
</template>

<style>
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    text-align: center;
    padding: 20px;
  }

  form > * {
    margin: auto;
  }

  label {
    display: block;
    font-weight: bold;
    margin: 1rem 0 0.25rem;
  }

  input, select, .button, pre {
    font-size: 1rem;
    max-width: 100%;
    width: 30rem;
  }

  .button {
    background-color: darkslategray;
    border: none;
    border-radius: 3px;
    color: white;
    display: block;
    font-weight: bold;
    margin-top: 1rem;
    padding: 5px 0;
    text-decoration: none;
  }

  pre {
    background-color: #EEE;
    border-radius: 10px;
    font-size: 0.75rem;
    margin: 1rem auto;
    overflow-x: auto;
    padding: 1rem;
    text-align: left;
  }
</style>
