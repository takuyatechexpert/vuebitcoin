var app = new Vue({
  el: '#app',
  data:{
  bpi: null,
  hasError: false,
  loading: true
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response){
      console.log(response.data.bpi)
      // responseでapiサーバーからの返り値を取得できる
      // dataの中の欲しい値 今回はbpiなのでドットで繋いで取得する
      
      console.log(response.data.bpi.USD.rate_float)
      // bpiの中のUSDのrate_floatを呼び出せる
      this.bpi = response.data.bpi
    }.bind(this))
    // .bind(this)でbpiで使える様にしている
    // dataのプロパティに紐づけている

    // 補足メモ
    // .bind(this)を使用しないと
    // windowオブジェクトに保存されるイメージ
    // windowは、今はあらゆるオブジェクトの大元と言うイメージ思っている
    // それをvue内で使用する為にbindで紐付けしている
    // bindも少しややこしい
    // reactの時よりは少しだけわかってきたかも

    .catch(function(error){
      console.log(error)
      // catchでerrorを取ってこれる
      this.hasError = true
      // あらかじめ定義したhasError=falseをエラーを掴んだ時にtrueにする
      // hasErrorを使う為にまたbindをしようする
      // スコープが違うと言うことか?
    }.bind(this))

    .finally(function(){
      // // finallyは固有のもの
      // loadingは任意で決めた値
      this.loading = false
    }.bind(this))
    // finallyは通信に関する処理が終わった後に読み込まれる
    // 例によてbindする
  },

  filters:{
    currencyDecimal(value){
      return value.toFixed(2)
      // toFixedメソッド  固定小数点表記を用いてフォーマットする
      // 簡単に言うと小数点以下の数
    }
  }
})