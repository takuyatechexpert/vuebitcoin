var app = new Vue({
  el: '#app',
  data:{
  bpi: null
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
    })
  }
})