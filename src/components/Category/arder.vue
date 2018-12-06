<template>
	<main id="arder">
<mt-header title="分类">
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
<ul class="navlist">
	<li>休闲娱乐</li>
	<li>全城</li>
	<li>默认排序</li>
	<li>筛选</li>
</ul>
<ul class="list">
	<li  v-for="(v,i) in list">
		<div class="listleft">
			<img :src="v.url" />
		</div>
		<div class="listright">
			<div>{{v.title}}</div>
			<div class="price">
            <strong>{{v.price}}</strong><samp>元</samp><del>{{v.Visit}}</del>
	            <span class="line-right">
	                   {{v.traded}}
	            </span>
        </div>
		</div>
	</li>
</ul>





<p style="text-align: center;"> Q~W~Q   我可是有底线的哟</p>


	</main>
</template>

<script>
	 export default {
	 	data(){
	  		return{
	  			list:[]
	  		}
	  },
    mounted(){
			this.$http.get('./data/arder.json')
			  .then((response)=> {
			    console.log(response.data.arder);
			    this.list=response.data.arder;
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			  });  
		}
	 	
	 }
</script>

<style scoped="">
	#arder .is-right img{
		width: 20px;
		height: 20px;
	}
	#arder .mint-header{
		background: #06C1AE;
	}
	#arder .imgdown{
		width: 100%;
	}
	#arder .imgdown img{
		width: 100%;
	}
	.navlist{
		display: flex;
		height: 40px;
		width: 100%;
		line-height: 40px;
		background: #FFFFFF;
		border-top:1px solid #F0EFED;
		border-bottom: 1px solid #F0EFED;
	}
	.navlist li{
		flex: 1;
		text-align: center;
		color: #666666;
		border-right:1px solid #F0EFED ;
	}
	.navlist li:nth-of-type(4){
		border: 0;
	}
	 .list{
		padding-left:5px ;
	}
	 .list li{
		padding-bottom: 23.24%;
		height: 0px;
         width: 100%;
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
	 .list .listright{
		width: 68.57%;
		float: left;
		margin-left: 10px;
		color: #666666;
	}
	 .list .listright p{
		font-size: 12px;
	}
	 .list .listright .price{
		margin-top: 25px;
	}
	 .list .listright .price strong, .list .listright .price samp{
		color: #06C1AE;
	}
	 .list .listright .market{
		font-size: 8px;
	}
	 .list .listright .line-right{
		float: right;
		font-size: 8px;
	}
</style>