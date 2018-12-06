<template>
	<div id="my">
<mt-header title="美团网">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">美团账号登录</mt-tab-item>
  <mt-tab-item id="2">手机验证登录</mt-tab-item>
</mt-navbar>
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
<input type="text" name="" id="uses" value="" placeholder="账户名/手机号/Email" />
<hr class="dd" />
<input type="password" name="" id="psd" value="" placeholder="请输入您的密码" />
<input type="submit" id="btn" value="登录" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
<div class="comtop">
		<input type="tel" name="" id="tel" value="" placeholder="请输入手机号码" />
		<span id="verify">获取验证码</span>
		<input type="text" name="" id="text" value="" placeholder="请输入短信验证码" />
		<input type="submit" id="btn2" value="登录" />
</div>
  </mt-tab-container-item>
</mt-tab-container>
<div class="registered">
	<a class="left">立即注册</a>
	<a class="right">找回密码</a>
</div>


	</div>
</template>

<script>
	export default {
  data() {
    return {
      selected: '1'
    };
  }
}
</script>

<style scoped>
	#my{
		position: fixed;
		height: 100%;
		width: 100%;
		background:#F0EFED;
		top: 0;
		z-index: 1;
	}
	.mint-header{
		height: 50px;
		background: #06C1AE;	
	}
	.mint-tab-container{
		height: 180px;
		width: 100%;
	}
	.comtop{
		width: 100%;
		height: 50px;
		padding-top: 5px;
	}
	#tel{
		border: none;
		width: 65%;
		height: 40px;
		outline:none;
		background: #E3E3E3;
		margin-left: 10px;
		border-radius:4px ;
		padding-left: 10px;
		margin-top: 10px;
	}
	#text{
		border: none;
		width: 90%;
		height: 40px;
		outline:none;
		background: #E3E3E3;
		margin-left: 10px;
		border-radius:4px ;
		padding-left: 10px;
		margin-top: 10px;
	}
	#verify{
		display: inline-block;
		height: 40px;
		width: 25%;
		background: #E3E3E3;
		list-style: none;
		line-height: 40px;
		text-align: center;
		border-radius:4px ;
		color: #666666;
	}
	#uses{
		margin-top: 20px;
	}
	#uses,#psd{
		border: none;
		outline:none;
		height: 40px;
		width: 100%;
		padding-left: 20px;	
	}
	.dd{
		background: #E3E3E3;
		height: 1px;
		border: none;
	}
	#btn{
		width: 100%;
		height: 40px;
		background: #06C1AE;
		outline:none;
		color: #fff;
         border: 0;
         font-size: 16px;
         margin-top: 20px;
	}
	#btn2{
		width: 100%;
		height: 40px;
		background: #DCDCDC;
		outline:none;
		color: #999999;
        border: 0;
        font-size: 16px;
        margin-top: 20px;
	}
	.left,.right{
		color: #06C1AE;
		font-size: 16px;
	}
	.left{
		float: left;
		margin-left: 10px;
	}
	.right{
		float: right;
		margin-right: 10px;
	}
	#my .is-selected{
		color: #06C1AE;
		border-bottom: 3px solid #06C1AE;
	}
</style>