<template>
	<main id="arder">
<mt-header title="火车票">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  
   <mt-button slot="right">
   	<router-link to="/my">
   	<img src="../../assets/images/my.png">
   	</router-link>
   </mt-button> 
</mt-header>
<div class="imgdown">
	<img src="../../assets/images/download_banner.png" />
</div>
<p> sorry~该功能尚未开启，请返回首页</p>


	</main>
</template>

<script>
</script>

<style>
	#arder .is-right img{
		width: 20px;
		height: 20px;
	}
	#arder .mint-header{
		background: #06C1AE;
	}
	#arder .imgdown{
		width: 100%;
		border-bottom:2px solid #F0EFED;
	}
	#arder .imgdown img{
		width: 100%;
	}
</style>