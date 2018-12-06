<template>
<main id="cate">
	<router-link to="/">
		<span class="index-left">&lt;</span>
	</router-link>
<input type="text" name="" id="search" placeholder="输入商家名、品类或商圈" align="right" />
<div class="index-right">
	<router-link to="/my">
	<img src="../../assets/images/my2.png" />
	</router-link>
</div>
<div class="imgdown">
	<img src="../../assets/images/download_banner.png" />
</div>
<ul class="nav"> 	
  	<li>
  		<img src="../../assets/images/Fondue.png" />
  		<p>火锅</p>
  	</li>
  	<li>
  		<img src="../../assets/images/Drink.png" />
  		<p>甜点饮品</p>
  	</li>
  	<li>
  		<img src="../../assets/images/Buffet.png" />
  		<p>自助餐</p>
  	</li>
  	<li>
  		<img src="../../assets/images/Snack.png" />
  		<p>小吃快餐</p>
  	</li>
  	<li>
  		<img src="../../assets/images/Western.png" />
  		<p>西餐</p>
  	</li>
  	<li>
  		<img src="../../assets/images/roast.png" />
  		<p>烧烤烤肉</p>
  	</li>
  	<li>
  		<img src="../../assets/images/Fish.png" />
  		<p>香锅烤鱼</p>
  	</li>
  	<li>
  		<img src="../../assets/images/Seafood.png" />
  		<p>海鲜</p>
  	</li>
  </ul>

<ul class="navlist">
	<li>全部类目</li>
	<li>附近商家</li>
	<li>智能排序</li>
	<li>筛选</li>
</ul>

<ul class="list">
		<li>
		<div class="listleft">
			<img src="../../assets/images/list1.jpg" />
		</div>
		<div class="listright">
			<div>岭南第一锅（萝岗万达店）</div>
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star3.png">
			￥12/人
			<p class="introduce">披萨<span>&nbsp;回头客多</span></p>
			<div class="price">
            <small>支持外卖</small>
	        <span class="line-right">万达广场2km</span>
	        <div class="privilege"><img src="../../assets/images/MT.png">9.9元精美小吃5选1，18.9元精美小吃6选2 </div>
	        <div class="privilege"><img src="../../assets/images/Q.png">17.9代20元 </div>
        </div>
		</div>
	</li>
	<li>
		<div class="listleft">
			<img src="../../assets/images/list2.jpg" />
			<span>限时5折</span>
		</div>
		<div class="listright">
			<div>囧囧捞重庆老火锅</div>
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star.png">
			<img src="../../assets/images/star2.png">
			￥12/人
			<p class="introduce">川味火锅<span>&nbsp;万达广场火锅第8名&nbsp;毛肚赞&nbsp;牛肉不错</span></p>
			<div class="price">
            <small>支持买单</small>
	        <div class="privilege"><img src="../../assets/images/MT.png">12.8元特色米粉单人特惠，15.8元招牌卤粉</div>
	        <div class="privilege"><img src="../../assets/images/Q.png"><span class="content">50代100元，80代100元</span> </div>
        </div>
		</div>
	</li>
</ul>
<v-footer></v-footer>


</main>
</template>

<script>
	import vfooter from '../publics/footer.vue'
	  export default {
	  	components:{
    	'v-footer':vfooter
  	} 
  }
</script>

<style scoped="">
#cate{
		position: absolute;
		background:#F0EFED;
		top: 0;
		z-index: 1;
		left:0;
		width:100%;
		/*height: 100%*/
	}
	#search{
		display:block;
		width: 70%;
		height:30px;
		margin: auto;
		outline:none;
		border-radius:8px ;
		border: 0;
		background: #E3E3E3;
		padding-left: 30px;
	}

	#cate .index-left{
		display: inline-block;
		width: 10%;
		height: 30px;
		color: #06C1AE;
		position: absolute;
		left: 0px;
		top: 0px;
		line-height:25px;
		text-align: center;
		font-size: 32px;
	}
	#cate .index-right a{
		width: 10%;
		height: 50px;
		position: absolute;
		right: 0px;
		top: 0px;
		text-align: center;
	}
	#cate .index-right img{
		height: 30px;
		width: 30px;
	}
	.imgdown{
		margin-top: 10px;
		width: 100%;
		border-bottom:2px solid #F0EFED;
	}
	.imgdown img{
		width: 100%;
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
	.navlist{
		display: flex;
		height: 40px;
		width: 100%;
		line-height: 40px;
		margin-top: 10px;
		background: #FFFFFF;
	}
	.navlist li{
		flex: 1;
		text-align: center;
		color: #666666;
	}
	.list{
		padding-left:5px ;
		background:#FFFFFF;
	}
	 .list li{
		padding-bottom: 39.14%;
		height: 0px;
		padding-top: 10px;
		border-bottom: 1px solid #F0EFED;
	}
	 .list .listleft{
		width: 25.71%;
		float: left;
	}
	 .list .listleft img{
		width: 100%;
		height: 100%;
	}
	.listleft span{
		border: 1px solid orange;
		color: orange;
		border-radius:4px;
		float: right;
		margin-top: 15px;
	}
	 .list .listright{
		width: 68.57%;
		float: left;
		margin-left: 10px;
		color: #666666;
	}
	 .list .listright img{
	 	margin-top:10px ;
		width: 12px;
		height: 12px;
	}
	.introduce{
		margin-top: 10px;
		font-size: 12px;
	}
	.introduce span{
		color: orange;
	}
	 .list .listright .price{
		margin-top: 10px;
	}
	 .list .listright .price small{
		color: #06C1AE;
	}
	
	 .list .listright .line-right{
		float: right;
		font-size: 8px;
	}
    .privilege{
    	font-size: 12px;
    }
</style>