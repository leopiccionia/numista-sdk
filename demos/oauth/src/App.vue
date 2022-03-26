<script lang="ts">
  import { NumistaConnector } from '@leopiccionia/numista-sdk'
  import type { CollectedCoinsResponse, Language, OAuthConnector, Price } from '@leopiccionia/numista-sdk'
  import { defineComponent } from 'vue'

  const currencyFormats = new Map<string, Intl.NumberFormat>()

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
        return new NumistaConnector(this.apiKey, this.clientId)
      },
      oauth (): OAuthConnector {
        return this.numista.useAuthorizationCode(this.redirectUri, ['view_collection'], { lang: this.lang })
      },
    },
    watch: {
      async code () {
        const userId = await this.oauth.setCode(this.code)
        this.collectedCoins = await this.numista.userCoins(userId, { lang: this.lang })
      },
      lang () {
        currencyFormats.clear()
      },
    },
    methods: {
      clickedLink () {
        this.clicked = true
      },
      formatPrice ({ currency, value }: Price): string {
        if (!currencyFormats.has(currency)) {
          const format = new Intl.NumberFormat(this.lang, { style: 'currency', currency })
          currencyFormats.set(currency, format)
        }
        return currencyFormats.get(currency)!.format(value)
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

  <table v-if="collectedCoins?.coin_count">
    <thead>
      <tr>
        <th>Count</th>
        <th>Country</th>
        <th>Coin</th>
        <th>Grade</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ coin, grade, id: coinId, price, quantity } of collectedCoins.collected_coins" :key="coinId">
        <td>{{ quantity }} ×</td>
        <td>{{ coin.issuer?.name ?? '–' }}</td>
        <td>
          <a :href="`https://${lang}.numista.com/catalogue/pieces${coin.id}.html`" rel="noreferrer noopener" target="_blank" v-html="coin.title"/>
        </td>
        <td>{{ grade?.toUpperCase() ?? '–' }}</td>
        <td>{{ price ? formatPrice(price) : '–' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    text-align: center;
    padding: 1ch;
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

  table {
    margin: 2rem auto;
  }

  table thead tr {
    background-color: #EEE;
  }

  table tbody tr:nth-child(even) {
    background-color: #F7F7F7;
  }

  table th, table td {
    padding: 5px 10px;
    text-align: left;
  }
</style>
