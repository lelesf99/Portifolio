class	Tile {
	constructor(colorSample, img, bigText, bigTextColor, smaltext, passingText){
		this.colorSample = colorSample;
		this.img = img;
		this.bigText = bigText;
		this.bigTextColor = bigTextColor;
		this.smaltext = smaltext;
		this.passingText = passingText;
	}
}

var tiles = [new Tile("#e1d399",
					"assets/1985.png",
					["!9","84"],
					"#94391c"),
			 new Tile("#af207f",
			 		"assets/atlanta.png",
			 		["**U*****"," MAD*"],
			 		"#af207f"),
			 new Tile("#f93c02",
			 		"assets/avatar2.png",
			 		["The last", "Agni Kai"],
			 		"#196bfb"),
			 new Tile("#c2f23f",
			 		"assets/billie.png",
			 		["Look at u,", "needing me"],
			 		"#c2f23f"),
			 new Tile("#e18b4a",
			 		"assets/chiriro.png",
					["..."],
					"#85c55a"),
			 new Tile("#770807",
			 		"assets/crimefull.png",
			 		["I've killed","a louse Sonia"],
			 		"#cb6502"),
			 new Tile("#f4c33a",
			 		"assets/ellie.png",
			 		["Ellie Kiddo"],
			 		"#111111"),
			 new Tile("#010116",
			 		"assets/elsa.png",
			 		["Clash", "of the spirits"],
			 		"#fcf9ee"),
			 new Tile("#FFFFFF",
			 		"assets/luke_yoda.png",
			 		["The greatest", "teacher","failure is"],
			 		"#000000"),
			 new Tile("#030303",
			 		"assets/maddie.png",
			 		["L.S.D"],
			 		"#815391"),
			 new Tile("#000000",
			 		"assets/rachel.png",
			 		["Do androids", "dream of", "electric sheep?"],
			 		"#000000"),
			 new Tile("#ac0101",
			 		"assets/raskolnikov1.png",
			 		["useless,", "loathsome,","harmful", "creature"],
			 		"#c10a00"),
			 new Tile("#0196c3",
			 		"assets/tumulo.png",
			 		["why do fireflies","die so young?"],
			 		"#16aa51"),
			 new Tile("#3f4f6b",
			 		"assets/sunlit.png",
			 		["The moonlit", "earth"],
			 		"#3f4f6b"),
			 new Tile("#d6d6d6",
			 		"assets/theLordOfTheFlies.png",
			 		["Kill the pig!","Cut her throat!","Spill her blood!"],
			 		"#000000"),
			 new Tile("#280f39",
			 		"assets/towel1.png",
			 		["Oh no..","not again.."],
			 		"#c918bd")];
console.log(tiles);
var index = 0;
function setBigText(currentValue, i, array, thisArg){
	console.log(currentValue);
	bigText = $(".bigTextContainer");
	setTimeout(function(){
		bigText.append(`<div class='bigTextDiv'><h1 class='bigText bigText-` + index + `' style='color:` + tiles[index].bigTextColor + `'>` + currentValue + `</h1></div>`);
	},i*100);
	
	// bigText.
}
function transition (){
	console.log("transition");
}
function setContent (type) {
	$(".bigTextContainer").empty();
	if(type === "next"){
		if(index == 15){
			index = -1;
			index++;
			$(".contentTile").css("background-image","url(" + tiles[index].img + ")");
			tiles[index].bigText.forEach(setBigText);
		}else{
			index++;
			$(".contentTile").css("background-image","url(" + tiles[index].img + ")");
			tiles[index].bigText.forEach(setBigText);
		}
	}else{
		if(index == 0){
			index = 16;
			index--;
			$(".contentTile").css("background-image","url(" + tiles[index].img + ")");
			tiles[index].bigText.forEach(setBigText);
		}else{
			index--;
			$(".contentTile").css("background-image","url(" + tiles[index].img + ")");
			tiles[index].bigText.forEach(setBigText);
		}
	}
	if(index == 0){
		$(".contentTileBufferNex").css("background-image","url(" + tiles[index+1].img + ")");
		$(".contentTileBufferPrev").css("background-image","url(" + tiles[15].img + ")");
	}else if(index ==15){
		$(".contentTileBufferNex").css("background-image","url(" + tiles[0].img + ")");
		$(".contentTileBufferPrev").css("background-image","url(" + tiles[index-1].img + ")");
	}else{
		$(".contentTileBufferNex").css("background-image","url(" + tiles[index+1].img + ")");
		$(".contentTileBufferPrev").css("background-image","url(" + tiles[index-1].img + ")");
	}
}

$(document).ready(function(){
	
	$(".contentTile").css("background-image","url(" + tiles[index].img + ")");
	$(".contentTileBufferNex").css("background-image","url(" + tiles[index+1].img + ")");
	$(".contentTileBufferNex").css("background-image","url(" + tiles[15].img + ")");
	tiles[index].bigText.forEach(setBigText);
	// for (let i = 0;i < tiles[index].bigText.length; i++) {
	// 	setTimeout(function(){$(".bigText").text(tiles[index].bigText[i])},500)
	// }
	// $(".bigText").text(tiles[index].bigText);
	
	// document.querySelector(".prev").addEventListener("click",()=>{
	// 	if(index == 0)
	// 		index = 16
	// 	index--;
	// 	setContent();
	// 	$(".transition").css("background-color", tiles[index].colorSample);
	// 	$(".transition").css("margin-left", "100vw");
	// 	$(".transition").css("width", "100vw");
	// 	$(".transition").animate({
	// 		marginLeft: '0vw'
	// 	},"500");
	// 	$(".transition").delay(200).animate({
	// 		width: '0vw'
	// 	});
	// });
});