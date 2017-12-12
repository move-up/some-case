<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

  </div>
</template>

<script>
export default {
  name: 'zhuye',
  data () {
    return {
      msg: 'Welcome to Your first Vue.js App',
      title: 'this is a todo list'
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
</style>
