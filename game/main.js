

var user = localStorage.getItem('myNum');//和mynum判斷
var config = {
    apiKey: "AIzaSyCcTw_QM1QzrZBiMfBp0sVA1AqhQQcG32w",
    authDomain: "gameapp-a8f57.firebaseapp.com",
    databaseURL: "https://gameapp-a8f57.firebaseio.com",
    projectId: "gameapp-a8f57",
    storageBucket: "gameapp-a8f57.appspot.com",
    messagingSenderId: "450989909307",
  };
  // Initialize Firebase
  firebase.initializeApp(config);

    var firebase_ref = firebase.database().ref().child('button');
	var myNameRef = firebase.database().ref('button/player');
    var guest = firebase.database().ref('Player');
    var mynum;
    var flag =false;

	//on 隨時監聽
	myNameRef.on('value', function (snapshot) {//監聽現在玩家是否有變動
				clockstart();
				var p1scpath=firebase.database().ref('score/1');
	       		p1scpath.once('value', function (snapshot) {
	       					p1sc=snapshot.val();
	       					document.getElementById("p1").innerHTML="Player1 score:"+p1sc;
	       				})
	       				var p2scpath=firebase.database().ref('score/2');
	       				p2scpath.once('value', function (snapshot) {
	       					p2sc=snapshot.val();
	       					document.getElementById("p2").innerHTML="Player2 score:"+p2sc;
	       				})
	       				var p3scpath=firebase.database().ref('score/3');
	       				p3scpath.once('value', function (snapshot) {
	       					p3sc=snapshot.val();
	       					document.getElementById("p3").innerHTML="Player3 score:"+p3sc;
	       				})	
				        var playerelements = document.getElementsByClassName("turnPlayer");
				        myNameRef.once('value',function(snapshot){//判斷是否切換玩家，有的話就重新刷新頁面
						var nowplayer=snapshot.val();
						playerelements[0].innerHTML="操作玩家：玩家" + nowplayer;
					})
//	    console.log(snapshot.val());

		flag=true;
		var setRef = firebase.database().ref('button/'+'1');
		setRef.once('value', function (snapshot) {

				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(1).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(1).style.color="#7f7f7f";	
					document.getElementById(1).style.backgroundColor="#8b8b8b";	

				}
			

			})
		var setRef = firebase.database().ref('button/'+'2');
		setRef.once('value', function (snapshot) {

				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(2).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(2).style.color="#7f7f7f";	
					document.getElementById(2).style.backgroundColor="#8b8b8b";	
				}
			

			})
		var setRef = firebase.database().ref('button/'+'3');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(3).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(3).style.color="#7f7f7f";	
					document.getElementById(3).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'4');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(4).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(4).style.color="#7f7f7f";	
					document.getElementById(4).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'5');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(5).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(5).style.color="#7f7f7f";	
					document.getElementById(5).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'6');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(6).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(6).style.color="#7f7f7f";	
					document.getElementById(6).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'7');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(7).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(7).style.color="#7f7f7f";	
					document.getElementById(7).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'8');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(8).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(8).style.color="#7f7f7f";	
					document.getElementById(8).style.backgroundColor="#8b8b8b";		
				}})
		var setRef = firebase.database().ref('button/'+'9');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(9).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(9).style.color="#7f7f7f";	
					document.getElementById(9).style.backgroundColor="#8b8b8b";		
				}})
		var setRef = firebase.database().ref('button/'+'10');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(10).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(10).style.color="#7f7f7f";	
					document.getElementById(10).style.backgroundColor="#8b8b8b";		
				}})
		var setRef = firebase.database().ref('button/'+'11');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(11).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(11).style.color="#7f7f7f";	
					document.getElementById(11).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'12');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(12).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(12).style.color="#7f7f7f";	
					document.getElementById(12).style.backgroundColor="#8b8b8b";	
				}})
		var setRef = firebase.database().ref('button/'+'13');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(13).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(13).style.color="#7f7f7f";	
					document.getElementById(13).style.backgroundColor="#8b8b8b";	
				}})
				var setRef = firebase.database().ref('button/'+'14');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(14).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(14).style.color="#7f7f7f";	
					document.getElementById(14).style.backgroundColor="#8b8b8b";	
				}})
				var setRef = firebase.database().ref('button/'+'15');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(15).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(15).style.color="#7f7f7f";	
					document.getElementById(15).style.backgroundColor="#8b8b8b";
				}})
				var setRef = firebase.database().ref('button/'+'16');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(16).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(16).style.color="#7f7f7f";	
					document.getElementById(16).style.backgroundColor="#8b8b8b";
				}})
				var setRef = firebase.database().ref('button/'+'17');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(17).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(17).style.color="#7f7f7f";	
					document.getElementById(17).style.backgroundColor="#8b8b8b";
				}})
		var setRef = firebase.database().ref('button/'+'18');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(18).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(18).style.color="#7f7f7f";	
					document.getElementById(18).style.backgroundColor="#8b8b8b";
				}})
				var setRef = firebase.database().ref('button/'+'19');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(19).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(19).style.color="#7f7f7f";	
					document.getElementById(19).style.backgroundColor="#8b8b8b";				
				}})
				var setRef = firebase.database().ref('button/'+'20');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(20).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(20).style.color="#7f7f7f";	
					document.getElementById(20).style.backgroundColor="#8b8b8b";	
				}})
				var setRef = firebase.database().ref('button/'+'21');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(21).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(21).style.color="#7f7f7f";	
					document.getElementById(21).style.backgroundColor="#8b8b8b";
				}})
				var setRef = firebase.database().ref('button/'+'22');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(22).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(22).style.color="#7f7f7f";	
					document.getElementById(22).style.backgroundColor="#8b8b8b";	
				}})
				var setRef = firebase.database().ref('button/'+'23');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(23).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(23).style.color="#7f7f7f";	
					document.getElementById(23).style.backgroundColor="#8b8b8b";	
				}})
				var setRef = firebase.database().ref('button/'+'24');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(24).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(24).style.color="#7f7f7f";	
					document.getElementById(24).style.backgroundColor="#8b8b8b";	
				}})
				var setRef = firebase.database().ref('button/'+'25');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(25).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(25).style.color="#7f7f7f";	
					document.getElementById(25).style.backgroundColor="#8b8b8b";
				}})
				var setRef = firebase.database().ref('button/'+'26');
		setRef.once('value', function (snapshot) {
				console.log(snapshot.val());
				if(snapshot.val()==true){
					//document.getElementById(26).style.color="black";
				}
				else if(snapshot.val()==false){
					document.getElementById(26).style.color="#7f7f7f";	
					document.getElementById(26).style.backgroundColor="#8b8b8b";	
				}})
	
	
})
var playercnt=3;
var PtimeCnt=8;
var timecount=0;
var themearr =["醫院","學校"] //主題陣列
var score = new Array(playercnt);

window.onload=function (){
	console.log("test");
	//主題設置
	var elements = document.getElementsByClassName("theme");
	elements[0].innerHTML=themearr[0];
	//console.log(elements);
	
 	

    //設置玩家起始分數
    for( var i = 0; i< playercnt; ++i){
	    score[i] = 0;
	}

	//遊戲左側列表設置
/*	var ele = document.getElementById("showplayer");
    for( var i = 1; i<= playercnt; ++i){
	    var p = document.createElement("p");
	    p.setAttribute("class", "listshow");
	    p.append("player"+i+" score:"+score[i-1]);
	    ele.appendChild(p);
	}*/
	clockstart();
}
var answerFlag=0;
var myscore=0
var guest = firebase.database().ref('Player/count');
var buttonflag=firebase.database().ref('button/divId');//當前玩家是否按下按鈕

/*buttonflag.on('value', function (snapshot) {
answerFlag=snapshot.val();
console.log('聆聽中');*/

	document.getElementById("divId").addEventListener("click", someFunction);//

	function someFunction(event) {
	  console.log(event.target.id);
	  var tar=event.target.id;//聽現在點到哪個按鈕
	  console.log(tar);
	//  document.getElementById(tar).style.color="red";

	  myNameRef.once('value',function(snapshot){//判斷是否切換玩家，有的話就重新刷新頁面
		var nowplayer=snapshot.val();
		if (nowplayer==user){

	    firebase.database().ref('button/'+tar).set(false);//把按鈕調成灰色
	    buttonNum=firebase.database().ref('button/btn');//總共按了幾個按鈕
		buttonNum.once('value',function(snapshot){
		  	var btNum=snapshot.val();
		  	btNum++;
		  	buttonNum.set(btNum);
		  	myscore=btNum*5;
		  	document.getElementById("scoreLabel").innerHTML="score:"+myscore;
            firebase.database().ref('score/'+nowplayer).set(myscore);
		  	//加入計分function
		  })
	  firebase.database().ref('button/divId').set(1);	  

	            
	            var guest = firebase.database().ref('Player/count');//總共遊戲人數
	       		guest.once('value', function (snapshot) {
	       		console.log(nowplayer);//現在玩家
	            var per=snapshot.val();
		            if(nowplayer<per){//若現在玩家<3
		            	nowplayer++;
		            	//localStorage.setItem('myNum', nowplayer);
		            	console.log(nowplayer);
		            	firebase.database().ref('button/player').set(nowplayer);

		            }
		            else if(nowplayer>=per){
		            	nowplayer=1;//若現在玩家>3則回到第一位玩家
		            	firebase.database().ref('button/player').set(nowplayer);


		            }
	        	})


		}
	})
	//	else
	//		{alert("Not Player");}
	
	//是否按下按鈕




}
//})
var timeflag=0
function clockstart(){
PtimeCnt=8;
timecount=0;
timeflag++;
	if(timeflag>1){
		clearInterval(timestart);
	}
	else{
		var timestart = setInterval(function(){
			timecount++;
			var clock = document.getElementById("clock");
			clock.innerHTML = PtimeCnt - timecount;
			if(timecount==8){
			window.location.href = 'end.html';
				clearInterval(timestart);
			}
		}, 1000);//時間計算等動態表現
	}
}


/*
$(function(){

	$( ".game_btn" ).on( "click", function ( event ) {
		if(currentplayer == user){ //＊＊＊要用資料庫判斷使用者是誰
		
			 if(answerFlag == 0){ 
				 //注音button變色 無法在點擊

				$(this).attr('disabled', true); 
				$(this).css('color','#7f7f7f');
				$(this).css('background','#8b8b8b');
				console.log(this);
				answerFlag = 1; //目前玩家已經作答
				score[currentplayer-1] += getScore(); //玩家分數增加 (需要資料庫同步)
				 
			}
			selfScoreUpdate();
		}
		//左側列表分數更新
		barSetting();
		if(score[currentplayer-1] >= 300){
			//reset
			for( var i = 0; i< playercnt; ++i){
	    		score[i] = 0;
			}
			barSetting();
			selfScoreUpdate()
			alert( 'player'+currentplayer + '勝利');
		} 
	} );
	
});*/
function reset(){
	for(var i = 1 ; i <= 26 ; i++){
		firebase.database().ref('button/'+i).set(true);		
	}
	firebase.database().ref('button/btn').set(0);
	firebase.database().ref('button/player').set(1);  
	firebase.database().ref('Player/count').set(0);  	
	firebase.database().ref('Player/ready/1').set(false);  
	firebase.database().ref('Player/ready/2').set(false);
	firebase.database().ref('Player/ready/3').set(false);
	firebase.database().ref('Player/ready/all').set(0);
	firebase.database().ref('Player/ready/start').set(false);
	firebase.database().ref('score/1').set(0);
	firebase.database().ref('score/2').set(0);
	firebase.database().ref('score/3').set(0);
}
function remove(){

	firebase_ref.remove();
}
function barSetting(){
	var elements = document.getElementsByClassName("listshow");
	elements[currentplayer-1].innerHTML="player"+currentplayer+" score:"+score[currentplayer-1];

}

//自己的分數更新
function selfScoreUpdate(){
	var elements = document.getElementsByClassName("scoreLabel");
	elements[0].innerHTML="score:"+score[user-1];
}
function change(){
		 myNameRef.once('value',function(snapshot){//判斷是否切換玩家，有的話就重新刷新頁面
		var nowplayer=snapshot.val();	            
	            var guest = firebase.database().ref('Player/count');//總共遊戲人數
	       		guest.once('value', function (snapshot) {
	       		console.log(nowplayer);//現在玩家
	            var per=snapshot.val();
		            if(nowplayer<per){//若現在玩家<3
		            	nowplayer++;
		            	//localStorage.setItem('myNum', nowplayer);
		            	console.log(nowplayer);
		            	firebase.database().ref('button/player').set(nowplayer);
		            	var playerelements = document.getElementsByClassName("turnPlayer");

						playerelements[0].innerHTML="操作玩家：玩家" + nowplayer;//之後要刪掉變成結束判斷式
						clockstart();

		            }
		            else if(nowplayer>=per){
		            	nowplayer=1;//若現在玩家>3則回到第一位玩家
		            	firebase.database().ref('button/player').set(nowplayer);
		            	var playerelements = document.getElementsByClassName("turnPlayer");
						playerelements[0].innerHTML="操作玩家：玩家" + nowplayer;//之後要刪掉變成結束判斷式
						clockstart();
												var p1scpath=firebase.database().ref('score/1');
	       				p1scpath.once('value', function (snapshot) {
	       					p1sc=snapshot.val();
	       					document.getElementById("p1").innerHTML="Player1 score:"+p1sc;
	       				})
	       				var p2scpath=firebase.database().ref('score/2');
	       				p2scpath.once('value', function (snapshot) {
	       					p2sc=snapshot.val();
	       					document.getElementById("p2").innerHTML="Player2 score:"+p2sc;
	       				})
	       				var p3scpath=firebase.database().ref('score/3');
	       				p3scpath.once('value', function (snapshot) {
	       					p3sc=snapshot.val();
	       					document.getElementById("p3").innerHTML="Player3 score:"+p3sc;
	       				})
		            }
	        	})


		})

}
