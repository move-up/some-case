<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-text="title"></h1>
    <h2>Essential Links</h2>
    <form action="">
      <div class="form-group username">
        <input type="text" name="account" placeholder="邮箱或手机号" class="form-control">
      </div>
      <div class="form-group pwd">
        <input type="password" name="pwd" placeholder="邮箱或手机号" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-login login form-control">登录</button>
      </div>
      <div class="form-group">
        <button class="btn btn-reg register form-control">注册</button>
      </div>
    </form>

    <h1 v-text="title"></h1>
    <ul>
      <h1 v-if="ok">This is bro</h1>
      <div v-if="Math.random() > 0.5">Now you see me!</div>
      <div v-else>Now you dont</div>

      <h1>
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>Not A/B/C</div>

        <div v-show="ok">Hello!</div>

        <li v-for="lis in uls" :key="lis" v-bind:class="{lis: isLis}">{{ lis.message }}</li>
        <li class="lis" v-for="(lis,index) in uls" :key="lis">{{ parentMessage }} - {{ index }} - {{ lis.message }}</li>

        <li class="lis" v-for="value in object" :key="value">{{ value }}</li>

        <li class="lis" v-for="(value,key,index) in object" :key="value">{{ index + 1 }}. {{ key }}: {{ value }}</li>

      </h1>

      <input v-model="newItem" v-on:keyup.enter="addNew">

    </ul>
    <ul class="list">
      <h2>todolist</h2>
      <li v-for="item in items" :key="item" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{ item.label }} <p v-on:click="deleteItem(index)">删除</p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your first Vue.js App',
      title: 'this is a todo list',
      ok: true,
      isLis: true,
      type: 'B',
      parentMessage: 'Parent',
      items: [
        {
          label: 'coding',
          isFinished: false
        },
        {
          label: 'walking',
          isFinished: true
        }
      ],
      uls: [
        { message: 'Foo' },
        { message: 'Bar' },
        { message: 'snap'}
      ],
      object: {firstName:'John',lastName:'Doe',age: 30},
      newItem: ''
    }
  },
  methods: {
    toggleFinish: function (item){
      item.isFinished = !item.isFinished
    },
    addNew: function(){
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    deleteItem: function(index){
      this.items.pop(this.items.indexOf(index),1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  form {
    width: 440px;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fafafa;
    border-radius: 10px;
  }
  .form-group {
    position: relative;
    margin-bottom: 15px;
  }
  .form-group .form-control {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 38px;
    font-size: 14px;
    color: #555;
    background-image: none;
    border: 1px solid #e4e4e4;
    text-indent: 10px;
    border-radius: 3px;
  }
  .btn {
    text-align: center;
    outline: 0;
  }
  .form-group  .btn-login {
    background-color: #41b883;
    color: #fff;
    border-color: transparent;
  }
  .form-group  .btn-reg {
    background-color: #fff;
    border: 1px solid #e4e4e4;
  }
  .lis {
    display: block;
    line-height: 50px;
    border-bottom: 1px dotted #eee;
  }
  .isFinished {
    text-decoration: underline;
  }
  .list li p {
    display: inline-block;
    cursor: pointer;
  }
  .list li {
    display: block;
  }
</style>
