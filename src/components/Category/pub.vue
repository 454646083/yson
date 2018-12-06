<template>
	<main id="pub">
		<div class="img">
			<img src="../../assets/images/pub.png" />
		</div>
		
		<div class="pibbox">
				<ul class="pubtitle">
					<li  @click="time(1)"   :class='{www:abc==1}'>全日房</li>
					<li  @click="time(2)"   :class='{www:abc==2}'>钟点房</li>
				</ul>										
				<div class="bourn">
					<span>目的地</span><p>广州</p>
				</div>
				<div class="time" v-show="abc==1">
					<span>时间</span><div>11月19日<small>周一入住</small></div><div>11月20日<small>周二离店  1晚</small></div>
				</div>
				<div class="sj" v-show="abc==2">
					<span>时间</span><p>11月19日<small>周一入住</small></p>
				</div>
				<div class="search">
					<span>搜索</span><p>我的附近<small>位置/酒店/关键词</small></p>
				</div>			
				<span class="btn">查找酒店</span>
			</div>
			<div class="footer">
	<div class="footer-bar">
	<div class="left">
	<router-link to="/my">
	登录
	</router-link>
	<router-link to="/my">
	注册
	</router-link>
	</div>
	<div class="right">
	<span>城市：</span>
	<a>广州</a>
	</div>	
</div>
<ul class="footer-nav">
	<router-link to="/"><li>首页</li></router-link>
	<li>我的</li>
	<li>美团下载</li>
	<li>电脑版</li>
	<li>帮助</li>
</ul>  
</div>
	</main>
</template>

<script>
	export default {
		data(){
			return{
			abc:1
			}			
		},
		methods:{
			time(n){
				this.abc=n;          
			}
		},
	}
	
</script>

<style>
	#pub .www{
		color: #06C1AE;
	}
	#pub{
		position:fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background:#F5F5F5;
		z-index:1;
	}
	#pub .img{
		padding-bottom: 54.66%;
		height: 0px;
		width: 100%;
	}
	#pub .img img{
		width: 100%;
	}
	#pub .pibbox{
		position: fixed;
		top: 28%;
		left: 50%;
		margin-left: -45%;
		text-align: center;
		width: 90%;
		background: #FFFFFF;
		border-radius:10px ;
		box-shadow:0 0 1px #000 inset;
		padding: 10px 0 10px 0;
	}
	#pub .pubtitle{
		display: flex;
	}
	#pub .pubtitle li{
		flex: 1;
		text-align: center;
		height: 50px;
		font-size: 32px;
		
	}
	#pub span{
		color:#BCBCBC;
		font-size: 18px;
	}
	#pub .bourn,#pub .sj,#pub .search{
		width: 90%;
		margin: auto;
	}
	#pub .bourn{
		height: 35px;
		line-height: 35px;
	}
	#pub .bourn p{
		width: 75%;
		float: right;
		text-align: left;
		font-size: 24px;
	}
	#pub .bourn p i{
		float: right;
	}
	#pub .time,#pub .sj{
		width: 90%;
		height: 70px;		
		margin: auto;
	}
	#pub .time small,#pub .sj small{
		font-size: 16px;
		color: #BCBCBC;
	}
	#pub .sj{
		line-height: 70px;
	}
	#pub .sj p{
		height: 70px;
	}
	#pub .time>span{
		display: inline-block;
		width: 25%;
		float: left;
		line-height: 50px;
	}
	#pub .time>div,#pub .sj p{
		font-size: 24px;
	}
	#pub .search p{
		font-size: 18px;
	}
	#pub .time>div,#pub .sj p,#pub .search p{	
		display: inline-block;
		width: 75%;
		float: right;
		text-align: left;
	}
	#pub .search {
		height: 35px;
		line-height: 35px;
	}
	#pub .search>span{
		display: inline-block;
		width: 25%;
		float: left;
	}
	#pub .btn{
		display: inline-block;
		height: 50px;
		line-height: 50px;
		font-size: 32px;
		color: #FFFFFF;
		width:90%;
		margin:auto;
		background: #06C1AE;
		text-align: center;
		border-radius:6px ;
	}
	#pub .footer-bar{
		padding: 20px 0 60px 0;
	}
	#pub .footer-bar a{
		border: 1px solid #06C1AE;
		width: 60px;
		height: 30px;
		display: inline-block;
		text-align: center;
		border-radius: 10px;
		line-height: 30px;
		color: #06C1AE;
	}
	#pub .left{
		width: 40%;
		float: left;
		margin-left: 20px;
	}
	#pub .right{
		width: 40%;
		float: right;
		text-align: right;
		padding-right: 20px;
	}
	#pub .right a{
		width: 90px;
	}
	#pub .footer-nav{
		display: flex;
		padding: 0 0 30px 0;
	}
	#pub .footer-nav li{
		flex: 1;
		text-align: center;
		color: #06C1AE;
	}
	#pub .footer{
		position: fixed;
		bottom: 0px;
		width: 100%;
	}
</style>