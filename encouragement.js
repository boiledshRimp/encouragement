//メッセージを用意
let encouragement = ["十分睡眠を取ろう", "海を見に行こう", "陽の光を浴びよう", "明日は今よりいい日", "自分を信じろ", "努力は裏切らない", "諦めちゃダメだよ", "人事を尽くして天命を待て", "神は見捨てない", "君ならできる"];

//表示領域保持
let resultBox =  document.getElementById("result");

//クリアボタンの表示領域を隠す
document.getElementById('buttonClear').style.display="none";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ボタンを押したらの動き
document.getElementById("button").onclick = function(){

	//入力値保持
	let commentBox = document.getElementById("comment").value;

	//もしもコメントボックスに何か入力されていたら
	if (commentBox != "") {

		//あらかじめ用意したメッセージから.lengthで配列の要素数取得、その要素数だけループ処理、この場合条件を満たしている限りずっとループ
		while (0 < encouragement.length) {
			//クリアボタン表示
			document.getElementById('buttonClear').style.display="block";
			//配列の要素数に乱数を発生させてそれを整数に直す。
			let eNumber = Math.floor(Math.random()*encouragement.length);
			//配列の中身の文字[ランダムに取得したインデックスナンバー]、つまりランダムでメッセージを取得しそれを表示領域に表示
			resultBox.innerHTML = encouragement[eNumber];
			//処理終わり
			break;
		}
	}
	//そうでない場合、つまりコメントが何も入力されていなかったら。
	else {

		//結果を空に
		resultBox.innerHTML = "";
		//クリアボタン削除
		document.getElementById('buttonClear').style.display="none";
		//警告文表示
		alert("本当に悩みはありませんか?");

	}
	
}

//ボタンを押したらの動き
document.getElementById("buttonClear").onclick = function(){

	//コメントを空に
	document.getElementById("comment").value = "";
	//結果を空に
	resultBox.innerHTML = "";
	//クリアボタン削除
	document.getElementById('buttonClear').style.display="none";
	
}