var app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue.js',
    newItem: "",
    todos: []
  },

  methods:{
    addItem:function(event){
      // eventにはeventオブジェクトが入っている
      // alert(event)
      var todo ={
        item: this.newItem,
        isDone: false
      }
      if (this.newItem == "") return
      this.todos.push(todo)
      this.newItem = ""
    },

    deleteItem:function(index){

      // alert(index)
      this.todos.splice(index,1)
      // 配列の中身を削除する sliceと同じかな 第一引数がスタートで第二引数が範囲
    }
  }
})