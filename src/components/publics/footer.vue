<template>
	<main id="footer">
<div class="footer-bar">
	<div class="left">
	<a>登录</a>
	<a>注册</a>
	</div>
	<div class="right">
	<span>城市：</span>
	<a>广州</a>
	</div>	
</div>
<ul class="footer-nav">
	<li>首页</li>
	<li>我的</li>
	<li>美团下载</li>
	<li>电脑版</li>
	<li>帮助</li>
</ul>
<div class="footer-links">
	友情链接：<a>猫眼电影</a><a>大众点评</a><a>美团旅行</a><a>榛果民宿</a><a>大众点评下载</a><a>美团收银官网</a><a>美团点评餐饮学院</a><a>快驴进货商家合作</a>
</div>
<div class="footer-copyright">©2018 美团网  京ICP证070791号</div>
	</main>
</template>

<script>
</script>

<style scoped="">
	#footer{
		background: #F0EFED;
	}
	.footer-bar{
		padding: 20px 0 60px 0;
	}
	.footer-bar a{
		border: 1px solid #06C1AE;
		width: 60px;
		height: 30px;
		display: inline-block;
		text-align: center;
		border-radius: 10px;
		line-height: 30px;
		color: #06C1AE;
	}
	.left{
		width: 40%;
		float: left;
		margin-left: 20px;
	}
	.right{
		width: 40%;
		float: right;
		text-align: right;
		padding-right: 20px;
	}
	.right a{
		width: 90px;
	}
	.footer-nav{
		display: flex;
		padding: 0 0 30px 0;
	}
	.footer-nav li{
		flex: 1;
		text-align: center;
		border-right:1px solid #000000 ;
		color: #06C1AE;
	}
	.footer-nav li:nth-of-type(5){
		border:none
	}
	.footer-links{
		width: 90%;
		margin: auto;
		text-align: center;
	}
	.footer-links a:nth-of-type(1){
		padding-left: 0px;
	}
	.footer-links a{
		color: #06C1AE;
		padding-left:1.8rem;
		
	}
	.footer-copyright{
		margin-top:40px;
		text-align: center;
		color: #666666;
	}
</style>