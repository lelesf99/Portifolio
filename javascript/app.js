// class	Tile {
// 	constructor(colorSample, img, bigText, smaltext, passingText){
// 		this.colorSample = colorSample;
// 		this.img = img;
// 		this.bigText = bigText;
// 		this.smaltext = smaltext;
// 		this.passingText = passingText;
// 	}
// }

// var tiles = [new Tile("#FBD782",
// 					"assets/1985.jpg",
// 					"!984"),
// 			 new Tile("#D800AC",
// 			 		"assets/atlanta.jpg",
// 			 		"**U***** MAD*"),
// 			 new Tile("#FFFFFF",
// 			 		"assets/avatar2.jpg",
// 			 		"The last Agni Kai"),
// 			 new Tile("#6BFF00",
// 			 		"assets/billie.jpg",
// 			 		"Look at u, needing me"),
// 			 new Tile("#FF9800",
// 			 		"assets/chiriro.jpg",
// 					"..."),
// 			 new Tile("#B21111",
// 			 		"assets/crimefull.jpg",
// 			 		"I've killed a louse"),
// 			 new Tile("#FFDA00",
// 			 		"assets/ellie.jpg",
// 			 		"Ellie Kiddo"),
// 			 new Tile("#001162",
// 			 		"assets/elsa.jpg",
// 			 		"Into the the unknown"),
// 			 new Tile("#FFFFFF",
// 			 		"assets/luke_yoda.jpg",
// 			 		"The greatest teacher"),
// 			 new Tile("#001162",
// 			 		"assets/maddie.jpg",
// 			 		"L.S.D"),
// 			 new Tile("#000000",
// 			 		"assets/rachel.jpg",
// 			 		"Do androids dream?"),
// 			 new Tile("#FFFFFF",
// 			 		"assets/raskolnikov1.jpg",
// 			 		"useless, loathsome, harmful creature"),
// 			 new Tile("#19CDE6",
// 			 		"assets/tumulo.jpg",
// 			 		"Fireflies"),
// 			 new Tile("#6566AD",
// 			 		"assets/sunlit.jpg",
// 			 		"The moonlit earth"),
// 			 new Tile("#D5D5D5",
// 			 		"assets/theLordOfTheFlies.jpg",
// 			 		"Kill the pig!"),
// 			 new Tile("#2D0980",
// 			 		"assets/towel1.jpg",
// 			 		"Oh no.. not again..")];
// var index = 0;
tiles = document.querySelectorAll(".contentTile");

document.querySelector(".nex").addEventListener("click",()=>{
	currentTile = document.querySelector(".on");
	for(i = 0; i < tiles.length; i++){
		if(tiles[i] === currentTile){
			currentTile.classList.remove('on');
			if(i != (tiles.length - 1)){
				tiles[i+1].classList.add('on');
			}else{
				tiles[0].classList.add('on');
			}
		}
	}
});
document.querySelector(".prev").addEventListener("click",()=>{
	currentTile = document.querySelector(".on");
	for(i = 0; i < tiles.length; i++){
		if(tiles[i] === currentTile){
			currentTile.classList.remove('on');
			if(i != (0)){
				tiles[i-1].classList.add('on');
			}else{
				tiles[tiles.length-1].classList.add('on');
			}
		}
	}
});

// $(document).ready(function(){
	
// $(".contentTile").css("background-image","url(" + tiles[index].img + ")");
// 	document.querySelector(".nex").addEventListener("click",()=>{
// 		if(index == 15)
// 			index = -1
// 		index++;
// 		setContent();
// 		$(".transition").css("background-color", tiles[index].colorSample);
// 		$(".transition").css("margin-left", "0vw");
// 		$(".transition").animate({
// 			width: '100vw'
// 		},"500");
// 		$(".transition").delay(200).animate({
// 			width: '0vw',
// 			marginLeft: '100vw'
// 		});
// 	});
// 	document.querySelector(".prev").addEventListener("click",()=>{
// 		if(index == 0)
// 			index = 16
// 		index--;
// 		setContent();
// 		$(".transition").css("background-color", tiles[index].colorSample);
// 		$(".transition").css("margin-left", "100vw");
// 		$(".transition").css("width", "100vw");
// 		$(".transition").animate({
// 			marginLeft: '0vw'
// 		},"500");
// 		$(".transition").delay(200).animate({
// 			width: '0vw'
// 		});
// 	});
// });

// function setContent () {
// 	if(index < 15){
// 		$(".contentTileBuffer").css("background-image","url(" + tiles[index+1].img + ")");
// 	}else{
// 		$(".contentTileBuffer").css("background-image","url(" + tiles[0].img + ")");
// 	}
// 	setTimeout(function(){
// 		$(".contentTile").css("background-image","url(" + tiles[index].img + ")");
// 		$(".bigText").text(tiles[index].bigText);
// 	},500);
// }

