<template>
	<main id="app">

		<span class="index-left">广州</span>
<mt-search
  v-model="value"
  cancel-text=""
  placeholder="输入商家/品类/商圈">
</mt-search>
<div class="index-right">
	<router-link to="/my">
	<img src="../../assets/images/my.png" />
	<p>我的</p>
	</router-link>
</div>
<div class="imgdown">
	<img src="../../assets/images/download_banner.png" />
</div>

<mt-swipe :auto="0">
  <mt-swipe-item>
  <ul class="nav">
  	
  	<li>
  		<router-link to="/cate">
  		<img src="../../assets/images/cate.png" />
  		<p>美食</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/car">
  		<img src="../../assets/images/cinema.png" />
  		<p>猫眼电影</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/pub">
  		<img src="../../assets/images/Hotel.png" />
  		<p>酒店</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/arder">
  		<img src="../../assets/images/arder.png" />
  		<p>休闲娱乐</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/take">
  		<img src="../../assets/images/take.png" />
  		<p>外卖</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/ktv">
  		<img src="../../assets/images/KTV.png" />
  		<p>KTV</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/prep">
  		<img src="../../assets/images/prep.png" />
  		<p>周边游</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/beauty">
  		<img src="../../assets/images/beauty.png" />
  		<p>丽人</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/food">
  		<img src="../../assets/images/food.png" />
  		<p>小吃快餐</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/train">
  		<img src="../../assets/images/train.png" />
  		<p>火车票</p>
  		</router-link>
  	</li>
  </ul>
  </mt-swipe-item>
  <mt-swipe-item>
  	<ul class="nav">
  	
  	<li>
  		<router-link to="/cate">
  		<img src="../../assets/images/order.png" />
  		<p>今日新单</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/car">
  		<img src="../../assets/images/live.png" />
  		<p>生活服务</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/pub">
  		<img src="../../assets/images/Pedicure.png" />
  		<p>足疗/按摩</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/arder">
  		<img src="../../assets/images/Dessert.png" />
  		<p>甜点饮品</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/take">
  		<img src="../../assets/images/Family.png" />
  		<p>母婴亲子</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/ktv">
  		<img src="../../assets/images/study.png" />
  		<p>学习培训</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/prep">
  		<img src="../../assets/images/Marry.png" />
  		<p>结婚</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/beauty">
  		<img src="../../assets/images/house.png" />
  		<p>家装</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/food">
  		<img src="../../assets/images/chit.png" />
  		<p>代金券</p>
  		</router-link>
  	</li>
  	<li>
  		<router-link to="/train">
  		<img src="../../assets/images/more.png" />
  		<p>全部分类</p>
  		</router-link>
  	</li>
  </ul>
  </mt-swipe-item>
</mt-swipe>
<h3>猜你喜欢</h3>
<ul class="list">
	<li  v-for="(v,i) in list" @click="aa(i)">
		<div class="listleft">
			<img :src="v.url" />
		</div>
		<div class="listright">
			<div>{{v.title}}</div>
			<p>{{v.introduce}}</p>
			<div class="price">
            <strong>{{v.price}}</strong><samp>元</samp>
                <span class="tag">{{v.Visit}}</span>
	            <span class="line-right">
	                   {{v.traded}}
	            </span>
        </div>
		</div>
	</li>
</ul>
<div class="more">查看全部团购 <span>&gt;</span></div>
<v-footer></v-footer>
</main>
</template>
<script>
	import vfooter from '../publics/footer.vue'
	  export default {
	  	data(){
	  		return{
	  			value:'',
	  			list:[]
	  		}
	  	},
	  	components:{
    	'v-footer':vfooter
    },
    mounted(){
			this.$http.get('./data/data.json')
			  .then((response)=> {
			    console.log(response.data.list);
			    this.list=response.data.list;
			    console.log(this.list)
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			  });  
		},
    methods:{
    	aa(i){
    		this.$router.push('/buy')
    		this.$store.commit('increment',i)
//  		console.log(this.$store.state.count)
    	}
    }
  }
</script>

<style>
	#app .mint-search{
		background-color: #06C1AE;
		width: 80%;
		height:50px;
		margin: auto;
	}
    #app .mint-search .mint-searchbar{
		background-color: #06C1AE;
	}
	#app .mint-search .mint-searchbar-inner,#app .mint-search .mint-searchbar-inner input{
		background-color:#05A494;
	}
	#app .index-left{
		display: inline-block;
		width: 10%;
		height: 50px;
		background: #06C1AE;
		position: absolute;
		left: 0px;
		top: 0px;
		line-height: 50px;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
	}
	#app .index-right a{
		display: inline-block;
		width: 10%;
		height: 50px;
		background: #06C1AE;
		position: absolute;
		right: 0px;
		top: 0px;
		text-align: center;
		color: #FFFFFF;
		font-size: 12px;
		text-decoration:none
	}
	#app .index-right img{
		margin-top: 5px;
		height: 20px;
		width: 20px;
	}
	#app .imgdown{
		width: 100%;
		border-bottom:2px solid #F0EFED;
	}
	#app .imgdown img{
		width: 100%;
	}
	#app .mint-swipe-items-wrap,#app .mint-swipe-item{	
		padding-bottom:43.7%;
		height:0px
	}
	#app .mint-swipe-items-wrap img{
		width: 100%;
	}
	#app .mint-swipe-item .nav {
		padding-bottom:39.1%;
		height:0px
	}
	#app .mint-swipe-item .nav li a{
		width: 20%;
		padding-bottom:19.56%;
		height: 0px;
		float: left;
		text-align: center;
		font-size: 12px;
		color: #666666;
		text-decoration:none
	}
	#app .mint-swipe-item .nav li img{
		margin-top: 5px;
		width: 50%;
	}
	#app .mint-swipe-item .nav li {
		margin-top: 0px;
	}
	#app .mint-swipe-indicator.is-active{
		background-color: #06C1AE;
	}
	#app .is-active{
		opacity:1
	}
	#app h3{
		border-top:10px solid #F0EFED;
		border-bottom: 1px solid #F0EFED;
		font-weight:normal;
		line-height: 45px;
		padding-left: 5px;
	}
	#app .list{
		padding-left:5px ;
	}
	#app .list li{
		padding-bottom: 29.14%;
		height: 0px;
		padding-top: 10px;
		border-bottom: 1px solid #F0EFED;
	}
	
	#app .list .listleft{
		width: 25.71%;
		float: left;
	}
	#app .list .listleft img{
		width: 100%;
		height: 100%;
	}
	#app .list .listright{
		width: 68.57%;
		float: left;
		margin-left: 10px;
		color: #666666;
	}
	#app .list .listright p{
		font-size: 12px;
	}
	#app .list .listright .price{
		margin-top: 25px;
	}
	#app .list .listright .price strong,#app .list .listright .price samp{
		color: #06C1AE;
	}
	#app .list .listright .tag{
		font-size: 8px;
		border-radius:4px ;
		text-align: center;
		display: inline-block;
	}
	#app .list .listright .market{
		font-size: 8px;
	}
	#app .list .listright .line-right{
		float: right;
		font-size: 8px;
	}
	#app .more{
		color: #06C1AE;
		padding:0 5px 0 5px ;
		font-size: 16px;
		padding-bottom: 11.76%;
		height: 0px;
		line-height: 40px;
		border-bottom: 2px solid #F0EFED;
	}
	#app .more span{
		float: right;
	}
</style>