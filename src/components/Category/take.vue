<template>
	<main id="take">
<mt-header title="外卖">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  
   <mt-button slot="right">
   	<router-link to="/my">
   	<img src="../../assets/images/my.png">
   	</router-link>
   </mt-button> 
</mt-header>
<ul class="nav"> 	
  	<li>
  		<img src="../../assets/images/takenav1.png" />
  		<p>美食</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav2.png" />
  		<p>美团超市</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav3.png" />
  		<p>生疏果鲜</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav4.png" />
  		<p>美团专送</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav5.png" />
  		<p>下午茶</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav6.png" />
  		<p>汉堡披萨</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav7.png" />
  		<p>小吃馆</p>
  	</li>
  	<li>
  		<img src="../../assets/images/takenav8.png" />
  		<p>家常菜</p>
  	</li>
  </ul>






<p> sorry~该功能尚未开启，请返回首页</p>


	</main>
</template>

<script>
</script>

<style scoped="">
	.is-right img{
		width: 20px;
		height: 20px;
	}
	.mint-header{
		background: #06C1AE;
	}
	.nav {
		padding-bottom:39.1%;
		height:0px;
		background: #FFFFFF;
	}
	.nav li{
		width: 25%;
		padding-bottom:19.56%;
		height: 0px;
		float: left;
		text-align: center;
		font-size: 12px;
		color: #666666;
		text-decoration:none
	}
	.nav li img{
		margin-top: 5px;
		width: 50%;
	}
</style>