<template>
<main id="car">
	<!--<div class="box">-->
<mt-header title="猫眼电影">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">正在热映</mt-tab-item>
  <mt-tab-item id="2">即将上映</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <ul class="carlist">
	<li v-for="(v,i) in list">
		<div class="car-left">
			<img :src="v.url"/>
		</div>
		<div class="car-right">
			<div class="title"><span>{{v.title}}</span><p>3D MAX</p></div>	
			<div class="detail">
				<p>观众评 <span>{{v.score}}</span></p>
				<p>{{v.Starring}}</p>
			  <p>{{v.About}}</p>
			</div>
			<div class="buy">
				<span>购买</span>
			</div>
		</div>
	</li>
</ul>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <ul class="carlist">
	<li  v-for="(v,i) in list2">
		<div class="car-left">
			<img :src="v.url"/>
		</div>
		<div class="car-right">
			<div class="title"><span>{{v.title}}</span><p>3D MAX</p></div>	
			<div class="detail">
				<p>观众评 <span>{{v.score}}</span></p>
				<p>{{v.Starring}}</p>
			  <p>{{v.About}}</p>
			</div>
			<div class="buy">
				<span>购买</span>
			</div>
		</div>
	</li>
	</ul>
  </mt-tab-container-item>
</mt-tab-container>

<v-footer></v-footer>
		<!--</div>-->
</main>
</template>

<script>
	import vfooter from '../publics/footer.vue'
export default {
	 data() {
    return {
      selected: '1',
      list:[],
      list2:[]
    };
  },
  components:{
    	'v-footer':vfooter
  	},
  	mounted(){
			this.$http.get('./data/car.json')
			  .then((response)=> {
			    console.log(response.data.one);
			    this.list=response.data.one;
			    this.list2=response.data.two;
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			  });  
		}
} 
</script>

<style>
	#car{
		position: absolute;
		width: 100%;
		height: 100%;
		background:#FFFFFF;
		top: 0;
		z-index: 999999999;
		left:0;
	}
	#car .mint-header{
		background: #06C1AE;
	}
	#car  .carlist{
		margin-top: 20px;
		height: 0px;
	}
	#car  .carlist li{
		padding-bottom:35%;
		margin-left: 15px;
	}
	#car .car-left{
		width: 21%;
		float: left;
	}
	#car .car-left img{
		width: 100%;
	}
	#car .car-right{
		width: 75%;
		float: right;
	}
	#car .title{
		height:24px;
		width:100%;
	}
	#car .title span{
		width:40%;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		float: left;
	}
	#car .title p{
		width: 40%;
		height: 24px;
		float: left;
		
	}
	#car .detail {
		width: 50%;
		float: left;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 10px;
	}
	#car .detail p {
		width: 100%;
		float: left;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 6px;
	}
	#car .buy{
		width: 50%;
		float: right;
		text-align: center;
	}
	#car .buy span{
		display: inline-block;
		width: 47px;
		height: 27px;
		text-align: center;
		line-height: 27px;
		background: red;
		color: #FFFFFF;
		border-radius:4px ;
		margin-top:25%;
	}
	#car .is-selected{
		color: #06C1AE;
		border-bottom: 3px solid #06C1AE;
	}
</style>