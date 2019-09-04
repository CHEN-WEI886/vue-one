<template>
<div>
	<nav class="navbar navbar-inverse navbar-static-top">
	<div id="first">
		<ul class="nav navbar-nav">
			<li><a href="">学校概况</a></li>
			<li><a href="">机构设置</a></li>
			<li class="dropdown"><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">人才培养<span class="caret" ></span></a>
				<ul class="dropdown-menu">
					<li><a href="#">哥哥</a></li>
					<li><a href="#">姐姐</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">妹妹1233</a></li>
				</ul>
			</li>
			<li><a href="#">科学培养</a></li>
			<li><a href="#">招生就业</a></li>
			<li><a href="#">图书馆</a></li>
			<li><a href="#">校园生活</a></li>
			<li><a href="#">人才招聘</a></li>
			<li><a href="#">合作交流</a></li>
		</ul>
		<div id="lo">
				<router-link :to="{path:'/Loge'}">
				     <a href="#">登录</a>
				 </router-link>	
				 <a>|</a>		
				 <router-link :to="{path:'/Zc'}">	 
				     <a href="#">注册</a>
				 </router-link>					 
		</div>
	</div>
</nav>
<span id="hide1" class="glyphicon glyphicon-th-list" role="button" style="left: 3px"></span>
		<nav id="navbar1" class="back navbar text-center">	
		<img src="@/assets/logo.png">	
			<ul class="nav nav-stacked">
				<li><a href="#">校园培养</a></li>
				<li><a href="#">科学培养</a></li>
				<li><a href="#" data-toggle="collapse" data-target="#collapse_demo1">培养计划<span class="caret"></span></a>
					<ul class="collapse list-group" id="collapse_demo1">
						<li class="list-group-item"><a href="#">1</a></li>
						<li class="list-group-item"><a href="#">2</a></li>
						<li class="list-group-item"><a href="#">3</a></li>
					</ul>
				</li>
				<li><a href="#">农业培养</a></li>
				<li><a href="#" data-toggle="collapse" data-target="#collapse_demo">培养农业<span class="caret"></span></a>
					<ul class="collapse list-group" id="collapse_demo">
						<li class="list-group-item"><a href="#">介绍</a></li>
						<li class="list-group-item"><a href="#">工作详情</a></li>
						<li class="list-group-item"><a href="#">人员配置</a></li>
					</ul>
				</li>
				<li><a href="#">科学培养</a></li>
				<li><a href="#">科学培养</a></li>
				<li><a href="#">科学培养</a></li>
			</ul>		
		</nav>
	<div class="fir">
	    <router-view name="a"></router-view>
	    <router-view name="b"></router-view>		
	</div>

</div>
</template>

<script>
export default {
name:'Hello',
methods:{
	
	}
}
$(function(){
	$("#hide1").click(function(){
		if($("#navbar1").css("left") =="0px" )
			$("#navbar1").animate({left:'-103px'});
		else
			$("#navbar1").animate({left:'0px'});
	})
	// $("#zc").click(function(){
	// 	$("#zcs").modal("show")
	// })
	// $("#close1").click(function(){
	// 	$("#zcs").modal("hide")
	// })
	// $("#dl").click(function(){
	// 	$("#dls").modal("show")
	// })
	// $("#close2").click(function(){
	// 	$("#dls").modal("hide")
	// })
})
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
}
.back{
	background-color: #D5D0D0;
}
.back a{
	color: #040000;
}
#navbar1{
	border-right: solid 1.5px;
	border-top: solid 1.5px;
	border-bottom: solid 1.5px;
	width: 130px;
	position: absolute;
	border-top-right-radius: 5%;
	border-bottom-right-radius: 5%;
	overflow: hidden;
	left: 0px;
}
#lo{
	float: right;	
	padding-right: 40px;
	position: relative;
	top: 15px;
}
#lo a{
	text-decoration: none;
	color: #A29C9C;
	padding-right: 5px;
}
.fir{
	width: 900px;
	height: 1500px;
	position: relative;
	left: 150px;
	border: solid 1.5px;
	border-radius: 2%;
}
img{
	width: 60px;
	height: 60px;
	position: relative;
	top: 10px;
	margin-bottom: 10px;
}
.list-group-item:hover,.list-group-item:focus{
	color: #060000;
	background-color: #f5f5f5;
}
.list-group-item a{
	text-decoration: none;
}
</style>

 