<template>
  <div id="app" class="container">
    <navbar></navbar>
    <!--a7na kda bnzhr comonents bt3 login m3 component bt3 register m3 b3d w da
    mosh mzbot 3lshan mafrod nst5d routing
    **/3lshan n3rf nt3aml routing m3 vue lazm nnzl routing package  -->
    <router-view></router-view>
    <login></login>
    <register></register>
   
  </div>
</template>

<script>
//hna 3ayzen na7ot navbar f page f anta hna bt3rd page w tb3tlha data 
//f m7tag ank t import navbar component
//byb2a key ay asm t5taro 3lshan da kda m3nah ank 3mlt  your own html 
//w value b asm navbar
import navbar from './components/navbar.vue';
//import login from './components/login.vue';
//import register from './components/register.vue';
export default {
  components:{
   'navbar': navbar,
   //'login':login,
   //'register':register

  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
