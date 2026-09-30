(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mutendeh_Project4_atlas_1", frames: [[0,722,797,380],[1008,722,230,86],[1008,985,534,148],[799,722,207,515],[1637,474,270,502],[1637,0,308,472],[1282,0,353,480],[1282,482,243,501],[0,0,1280,720]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["Mutendeh_Project4_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.run_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.run_5, new cjs.Rectangle(0,0,243,501), null);


(lib.run_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.run_4, new cjs.Rectangle(0,0,353,480), null);


(lib.run_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.run_3, new cjs.Rectangle(0,0,308,472), null);


(lib.run_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.run_2, new cjs.Rectangle(0,0,270,502), null);


(lib.rock = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rock, new cjs.Rectangle(0,0,398.5,190), null);


(lib.btnStart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(76,10.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267,74);


(lib.run_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image();

	this.instance_1 = new lib.run_2();
	this.instance_1.setTransform(135,251,1,1,0,0,0,135,251);

	this.instance_2 = new lib.run_3();
	this.instance_2.setTransform(154,236,1,1,0,0,0,154,236);

	this.instance_3 = new lib.run_4();
	this.instance_3.setTransform(176.5,240,1,1,0,0,0,176.5,240);

	this.instance_4 = new lib.run_5();
	this.instance_4.setTransform(121.5,250.5,1,1,0,0,0,121.5,250.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,515);


// stage content:
(lib.Mutendeh_Project4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var gameRunning = false;
		var score = 0;
		var gameSpeed = 6;
		var gravity = 1;
		var jumpPower = -20;
		var groundY = 300;
		var isJumping = false;
		var jumpVelocity = 0;
		var obstacles = [];
		var nextRockDistance = 0;
		var speedIncrement = 1;
		
		var bg = new lib.bg();
		var btnStart = new lib.btnStart();
		var scoreText = new createjs.Text("Score: 0", "40px Times New Roman", "#800080");
		var gameOverText = new createjs.Text("GAME OVER", "70px Times New Roman", "#800080");
		
		bg.x = 0;
		bg.y = 150;
		btnStart.x = 550;
		btnStart.y = 250;
		scoreText.x = 1050;
		scoreText.y = 30;
		gameOverText.x = 640;
		gameOverText.y = 300;
		gameOverText.textAlign = "center";
		gameOverText.visible = false;
		
		stage.addChild(bg, btnStart, scoreText, gameOverText);
		
		var boy1 = new lib.run_1();
		var boy2 = new lib.run_2();
		var boy3 = new lib.run_3();
		var boy4 = new lib.run_4();
		var boy5 = new lib.run_5();
		var frames = [boy1, boy2, boy3, boy4, boy5];
		var currentFrame = 0;
		
		var runningCon = new createjs.Container();
		runningCon.x = 200;
		runningCon.y = groundY;
		runningCon.scaleX = 0.4;
		runningCon.scaleY = 0.4;
		runningCon.visible = false;
		runningCon.addChild(frames[currentFrame]);
		stage.addChild(runningCon);
		
		// loading sounds
		var q = new createjs.LoadQueue();
		q.installPlugin(createjs.Sound);
		q.loadManifest([
		    {id: "jump", src: "media/jump.mp3"},
		    {id: "hit",  src: "media/hit.mp3"}
		]);
		
		
		function activate() {
		    console.log("All sounds loaded and ready");
		    
		}
		
		
		
		function startGame() {
		    gameRunning = true;
		    score = 0;
		    gameSpeed = 6;
		    isJumping = false;
		    jumpVelocity = 0;
		
		    // Clearing all obstacles
		    for (var i = obstacles.length - 1; i >= 0; i--) {
		        stage.removeChild(obstacles[i]);
		        obstacles.splice(i, 1);
		    }
		
		    btnStart.visible = false;
		    gameOverText.visible = false;
		    runningCon.visible = true;
		    scoreText.text = "Score: 0";
		    runningCon.y = groundY;
		    nextRockDistance = 100;
		
		    currentFrame = 0;
		    runningCon.removeAllChildren();
		    runningCon.addChild(frames[currentFrame]);
		}
		
		function endGame() {
		    gameRunning = false;
		    gameOverText.visible = true;
		    createjs.Sound.play("hit");  
		
		    setTimeout(function() {
		        gameOverText.visible = false;
		        btnStart.visible = true;
		        runningCon.visible = false;
				scoreText.text = "Score: 0";
		    }, 1500);
		}
		
		document.addEventListener("keydown", function(e) {
		    if (e.code === "Space" && gameRunning && !isJumping) {
		        e.preventDefault();
		        isJumping = true;
		        jumpVelocity = jumpPower;
		        createjs.Sound.play("jump"); 
		    }
		});
		
		function updateJump() {
		    if (isJumping) {
		        runningCon.y += jumpVelocity;
		        jumpVelocity += gravity;
		        if (runningCon.y >= groundY) {
		            runningCon.y = groundY;
		            isJumping = false;
		        }
		    }
		}
		
		function spawnRock() {
		    var rock = new lib.rock();
		    rock.scaleX = 0.3;
		    rock.scaleY = 0.3;
		    rock.x = 1280;
		    rock.y = groundY+110;  
		    rock.passed = false;
		    stage.addChild(rock);
		    obstacles.push(rock);
		}
		
		function updateRocks() {
		    if (!gameRunning) return;
		
		    for (var i = obstacles.length - 1; i >= 0; i--) {
		        var rock = obstacles[i];
		        rock.x -= gameSpeed;
		
		        if (rock.x < -100) {
		            stage.removeChild(rock);
		            obstacles.splice(i, 1);
		            continue;
		        }
		
		        if (!rock.passed && rock.x + 60 < runningCon.x) {
		            rock.passed = true;
		            score += 10;
		            scoreText.text = "Score: " + score;
		            if (score % 100 === 0) {
		                gameSpeed += speedIncrement;
		            }
		        }
		
		        if (!rock.passed) {
		            var boyLeft = runningCon.x;
		            var boyRight = runningCon.x + 80;
		            var boyTop = runningCon.y;
		            var boyBottom = runningCon.y + 120;
		
		            var rockLeft = rock.x;
		            var rockRight = rock.x + 60;
		            var rockTop = rock.y;
		            var rockBottom = rock.y + 60;
		
		            if (boyRight > rockLeft &&
		                boyLeft < rockRight &&
		                boyBottom > rockTop &&
		                boyTop < rockBottom) {
		                endGame();
		                return;
		            }
		        }
		    }
		
		    if (!gameRunning) return;
		
		    nextRockDistance -= gameSpeed;
		    if (nextRockDistance <= 0) {
		        spawnRock();
		        nextRockDistance = Math.random() * 400 + 400;
		    }
		}
		
		function updateRun() {
		    if (!gameRunning) return;
		
		    if (!isJumping && createjs.Ticker.getTicks() % 3 === 0) {
		        runningCon.removeAllChildren();
		        currentFrame = (currentFrame + 1) % frames.length;
		        runningCon.addChild(frames[currentFrame]);
		    }
		}
		
		function updateGame(event) {
		    if (gameRunning) {
		        updateJump();
		        updateRocks();
		        updateRun();
		    }
		    stage.update(event);
		}
		
		createjs.Ticker.framerate = 24;
		createjs.Ticker.addEventListener("tick", updateGame);
		btnStart.addEventListener("click", startGame);
		
		//reseting
		runningCon.visible = false;
		gameOverText.visible = false;
		scoreText.text = "Score: 0";
		btnStart.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'F62058DBE34AE24CA5138B4346510F8F',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mutendeh_Project4_atlas_1.png", id:"Mutendeh_Project4_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F62058DBE34AE24CA5138B4346510F8F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;