<template>
	<main id="buy">
<mt-header title="团购详情">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<div class="imgdown">
	<img src="../../assets/images/download_banner.png" />
</div>
<div class="buy">
	<img :src="url" />
		<!--<img :src="list[this.$store.state.count].url" />-->
	<div class="title">
		<h3>{{title}}</h3>
		<p>{{introduce}}</p>
	</div>
</div>
<div class="price">
	<div class="left"><b>{{price}}</b>元&nbsp;<span>{{Visit}}</span></div>
	<div class="right">
		<a>立即抢购</a>
	</div>
</div>
	</main>
</template>

<script>
	 export default {
	 	data(){
	 		return{
	 			list:[],
	 			url:'',
	 			title:'',
	 			introduce:'',
	 			price:'',
	 			Visit:'',
	 		}
	 	},
	 	  mounted(){
			this.$http.get('./data/qqq.json')
			  .then((response)=> {
			    console.log(response.data.list);
			   this.list=response.data.list;
			   this.url= this.list[this.$store.state.count].url;
			   this.title= this.list[this.$store.state.count].title;
			   this.introduce= this.list[this.$store.state.count].introduce;
			   this.price= this.list[this.$store.state.count].price;
			   this.Visit= this.list[this.$store.state.count].Visit;
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			  });  
		},
	 
	 }
</script>

<style scoped="">
	#buy{
		position: fixed;
         height: 100%;
         width: 100%;
	}
	.mint-header{
		background: #06C1AE;
	}
	.imgdown{
		width: 100%;
		border-bottom:2px solid #F0EFED;
	}
	.imgdown img{
		width: 100%;
	}
	.buy{
		width: 100%;
	}
	.buy img{
		width: 100%;
	}
	.buy .title{
		position: fixed;
		top:50%;
		left: 20px;
		color: #FFFFFF;
	}
	.price {
		height: 42px;
	}
	.price .left{
		width:60%;
		float: left;
		color:#06C1AE;
	}
	.price .left b{
		color:#06C1AE;
		font-size: 32px;
	}
	.price .left span{
		color: #66512C;
	}
	.right{
		width:40%;
		float:right;
		line-height: 42px;
	}
	.right a{
		display: inline-block;
		width:120px;
		border-radius:4px ;
		background: orange;
		color: #FFFFFF;
		font-size:24px;
		text-align: center;	
	}
</style>