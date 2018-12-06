import vueRouter from 'vue-router'
import my from '../../components/publics/my.vue'
import index from '../../components/index/index.vue'
import cate from '../../components/Category/cate.vue'
import car from '../../components/Category/car.vue'
import pub from '../../components/Category/pub.vue'
import arder from '../../components/Category/arder.vue'
import take from '../../components/Category/take.vue'
import ktv from '../../components/Category/ktv.vue'
import prep from '../../components/Category/prep.vue'
import beauty from '../../components/Category/beauty.vue'
import food from '../../components/Category/food.vue'
import train from '../../components/Category/train.vue'
import buy from '../../components/publics/buy.vue'
export default new vueRouter({
	routes:[
		{
			path:'/my',component:my
		},
		{
			path:'/cate',component:cate
		},
		{
			path:'/car',component:car
		},
		{
			path:'/pub',component:pub
		},
		{
			path:'/arder',component:arder
		},
		{
			path:'/take',component:take
		},
		{
			path:'/ktv',component:ktv
		},
		{
			path:'/prep',component:prep
		},
		{
			path:'/beauty',component:beauty
		},
		{
			path:'/food',component:food
		},
		{
			path:'/train',component:train
		},
		{
			path:'/buy',component:buy
		},
		{
			path:'/',component:index
		},
		{
			path:`/*`,redirect:index
		}

	]
})