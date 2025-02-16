(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gordeev_lab_9_atlas_1", frames: [[0,0,700,700]]},
		{name:"gordeev_lab_9_atlas_2", frames: [[0,0,700,700],[0,702,700,700],[702,0,700,700],[702,702,700,700]]}
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



(lib.background = function() {
	this.initialize(ss["gordeev_lab_9_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.button = function() {
	this.initialize(ss["gordeev_lab_9_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.feedback = function() {
	this.initialize(ss["gordeev_lab_9_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.initialize(ss["gordeev_lab_9_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.telephone = function() {
	this.initialize(ss["gordeev_lab_9_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.button();
	this.instance.setTransform(-350,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-350,700,700);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.header();
	this.instance.setTransform(-350,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-350,700,700);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.telephone();
	this.instance.setTransform(-350,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-350,700,700);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.feedback();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,700,700), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol4("synched",0);

	this.instance_1 = new lib.Symbol4("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-350,-350,700,700), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(350,350);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,700,700), null);


// stage content:
(lib.gordeev_lab_9 = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		this.btn_click.addEventListener("click", GoToWebPage);
		
		function GoToWebPage(){
			window.open("http://cs.petrsu.ru/");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// header
	this.instance = new lib.Symbol5();
	this.instance.setTransform(350,-350);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-300},0).wait(1).to({y:-250},0).wait(1).to({y:-200},0).wait(1).to({y:-150},0).wait(1).to({y:-100},0).wait(1).to({y:-50},0).wait(1).to({y:0},0).wait(1).to({y:50},0).wait(1).to({y:100},0).wait(1).to({y:150},0).wait(1).to({y:200},0).wait(1).to({y:250},0).wait(1).to({y:300},0).wait(1).to({y:350},0).wait(46));

	// button
	this.btn_click = new lib.Symbol6();
	this.btn_click.name = "btn_click";
	this.btn_click.setTransform(350,350);
	this.btn_click._off = true;
	new cjs.ButtonHelper(this.btn_click, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_click).wait(14).to({_off:false},0).wait(46));

	// button_shape_tweening
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AnOiXIOdAAIAAEvIudAAg");
	this.shape.setTransform(140.5,655.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6C79").s().p("AgZAsQgKgygFgFIgOgOQgJgKgIg/IAoAAIAOAVQAOAVAYAGQAdgBAPgbIAHgJIgKAsQgMAxgUAuIgIAWQgKAXgWABQgEgDgLgzg");
	this.shape_1.setTransform(-67.55,586.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("An1icIPsAAIAAE5IvsAAg");
	this.shape_2.setTransform(166.45,650.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6C79").s().p("AggA5QgbgwgWgFQgMgEgPgIQgHgCgIgLQgEgigEg0IA9AAIAcATQAcAUAlAFQAsgBAfgZIALgJIAQAqIAHAPQgHApgJAoIgbAYIgVAUQgVAWgkACQgSgEgZgvg");
	this.shape_3.setTransform(-27.4,586.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AodihIQ7AAIAAFDIw7AAg");
	this.shape_4.setTransform(192.35,645.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6C79").s().p("AgtBHQgsgtgogEQgSgEgVgIQgLgDgLgJQgFgwgDhCIBRAAIArASQAqASAxAFQA7AAAvgYIAQgIIAsAmIAQAPQgGA2gIA3IgsAWIgiASQgiAUguACQghgDgngrg");
	this.shape_5.setTransform(13.45,586.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("ApEinISJAAIAAFPIyJAAg");
	this.shape_6.setTransform(218.3,640.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6C79").s().p("Ag7BTQg9gpg5gDQgYgFgagGQgQgDgQgJIgHiMIBnAAIA5APQA3ASA+ADQBKAAA+gWIAXgHIBGAjIAbAOQgGBEgHBEIg+AVIguARQguASg5ABQgwgCg2gog");
	this.shape_7.setTransform(54.275,586.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AprisITXAAIAAFZIzXAAg");
	this.shape_8.setTransform(244.225,635.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AlOiGIB8AAQAkAHAkAIQBEAPBMAEQBYgBBOgTQAOgDAOgEQAxAQAxAQQASAGATAGQgGBTgGBTQgnAJgoAKQgdAHgdAIQg7AQhEACQhAgDhEgkQhNglhKgDQgfgEgggGQgUgDgUgIQgDhMgEhcg");
	this.shape_9.setTransform(95.125,586.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6C79").s().p("AhJBgQhNglhKgDQgfgEgggGQgUgDgUgIIgHioIAAgBIB8AAIBIAPQBEAPBMAEQBYgBBOgTIAcgHIBiAgIAlAMIgMCmIhPATIg6APQg7AQhEACQhAgDhEgkg");
	this.shape_10.setTransform(95.125,586.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AqSixIUlAAIAAFjI0lAAg");
	this.shape_11.setTransform(270.175,630.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AmRiPICQAAQAsAHArAGQBSAOBYAEQBngBBegRQARgDARgDQA+AOA+APQAYAFAXAFQgFBhgGBhQgvAJgxAIQgjAHgjAHQhHAPhQABQhOgChTghQheghhbgDQglgDgmgGQgYgCgYgIQgDhbgDhpg");
	this.shape_12.setTransform(135.975,586.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6C79").s().p("AhXBtQheghhbgDQglgDgmgGQgYgCgYgIIgGjEIAAgBICQAAIBXANQBSAOBYAEQBngBBegRIAigGIB8AdIAvAKIgLDCIhgARIhGAOQhHAPhQABQhOgChTghg");
	this.shape_13.setTransform(135.975,586.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("Aq5i2IVzAAIAAFtI1zAAg");
	this.shape_14.setTransform(296.075,625.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AnViYICmAAQAyAGAzAGQBfAMBmADQB1AABugQQAUgCATgDQBMANBLAMQAdAFAdAFQgFBvgFBvQg4AIg5AHQgqAGgpAGQhTAOhbABQhegChhgdQhvgehsgCQgrgDgsgFQgcgCgcgHQgDhqgDh2g");
	this.shape_15.setTransform(176.825,586.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6C79").s().p("AhlB6QhvgehsgCQgrgDgsgFQgcgCgcgHIgGjgIAAgBICmAAIBlAMQBfAMBmADQB1AABugQIAngFICXAZIA6AKIgKDeIhxAPIhTAMQhTAOhbABQhegChhgdg");
	this.shape_16.setTransform(176.825,586.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("Argi7IXBAAIAAF3I3BAAg");
	this.shape_17.setTransform(322.025,621.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AoYihIC6AAQA6AFA6AFQBtALByADQCEgBB+gNQAWgDAXgCQBZALBZALQAhAFAiAEQgEB9gEB9QhBAHhBAHQgwAFgwAFQhfAMhnABQhsgChwgZQiAgah9gDQgxgCgygFQgggBghgGQgCh5gCiDg");
	this.shape_18.setTransform(217.675,586.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6C79").s().p("AhzCHQiAgah9gDQgxgCgygFQgggBghgGIgEj8IAAgBIC6AAIB0AKQBtALByADQCEgBB+gNIAtgFICyAWIBDAJIgID6IiCAOIhgAKQhfAMhnABQhsgChwgZg");
	this.shape_19.setTransform(217.675,586.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AsHjBIHgAAIQvAAIAAGDI4PAAIAAk8g");
	this.shape_20.setTransform(347.975,616.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("ApciqIDQAAQBBAFBBAEQB6AJCAACQCTAACNgLQAZgDAZgBQBnAJBmAKQAnADAnAEQgDB4gDB3QgBAUAAAUQhKAGhJAFQg3AFg2AEQhrAKhyABQgBAAgBAAQh6gBh9gWQiRgWiPgDQg3gCg3gEQglgBglgFQgCiHgCiRg");
	this.shape_21.setTransform(258.475,586.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6C79").s().p("AmdFJIAAk8Qh7gBh9gVQiRgWiPgDQg3gCg3gEQglgBglgFIgEkZIAAgBIDQAAICCAJQB6AJCAACQCUAACNgLIAygEIDNATIBNAHIgGDwInfAAIHfAAIgBAoIiSALIhtAIQhrAKhyABIgCAAIAAhGIAABGIACAAQBygBBrgKIBtgIICSgLIABgoIQwAAIAAGCgAmdANgABCg5g");
	this.shape_22.setTransform(311.775,602.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AsujGILiAAIN7AAIAAGNI5dAAIAAkRg");
	this.shape_23.setTransform(373.875,611.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AqfizIDkAAQBIAEBJADQCIAICMACQCiAACdgKQAcgCAcgBQB0AHBzAIQAsAEAsADQgBBjgCBjQgCA2gBA3QhSAFhSAEQg8AEg9AEQh3AIh9ABQhngBhmgKQglgEglgFQiigSiggCQg9gCg9gDQgpgBgpgEQgCiWgBieg");
	this.shape_24.setTransform(299.325,586.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6C79").s().p("AoAE3IAAkSIhKgIQiigTiggBIh6gGQgpgBgpgDIgDk1IAAgBIDkAAICRAIQCIAHCMACQCjAACdgKIA4gDIDmAPIBYAHIgEDHIrgAAILgAAIgCBsIikAJIh4AIQh3AIh9ABQhngBhngKIAAh7IAAB7QBnAKBnABQB9gBB3gIIB4gIICkgJIAChsIN8AAIAAGNgAoAAlIAAAAgADghWg");
	this.shape_25.setTransform(343.725,600.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AtVjLIPiAAILJAAIAAGXI6rAAIAAjog");
	this.shape_26.setTransform(399.825,606.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("Arji8ID5AAQBQADBPADQCWAGCZACQCxAACtgIQAfgCAegBQCBAGCCAHQAxACAxADQgBBQgBBQQgCBXgBBYQhbAEhaAEQhDADhDADQiEAHiIAAQiZgBibgOQgygEgygEQiAgIiAgBQhDgBhDgDQgtgBgtgDQgCilgBirg");
	this.shape_27.setTransform(340.175,586.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6C79").s().p("ApjEmIAAjpQiBgIh/gBIiGgEQgugBgsgDIgDlRIAAAAID5AAICfAFQCWAHCYABQCyAACugIIA8gCIEDAMIBiAFIgDCgIvhAAIPhAAIgDCwIi1AHIiFAGQiDAHiIAAQiaAAicgPIhjgHIAAiuIAACuIBjAHQCcAPCaAAQCIAACDgHICFgGIC1gHIADiwILJAAIAAGXgApjA9IAAAAgAF+hxg");
	this.shape_28.setTransform(375.7,597.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("ArHBhQg6gBg5gBQhJgBhKgCQgxgBgxgCQgBizgBi5IAAgBIEOAAQBXACBXACQCjAFCmABQDAAAC9gGQAhgBAhgBQCPAFCPAFQA2ABA2ACQgBA8AAA8IIWAAIAAGiI75AAIAAi0IAAjuITjAAQgBB7gCB5QhjADhjADQhJAChJACQiQAFiSABQiqgBiqgLQiJgHiJgDg");
	this.shape_29.setTransform(407.675,594.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6C79").s().p("ArHEVIAAi0QCJADCJAHQCqALCqABQCSgBCQgFICSgEIDGgGIADjzIzjAAIAADtIhzgCIiTgCQgxgBgxgDIgClsIAAgBIEOAAICuAEQCjAFCmACQDAgBC9gGIBCgBIEeAJIBsADIgBB5IIWAAIAAGhgAm1BrQiJgHiJgDIAAjtITjAAIgDDzIjGAGIiSAEQiQAFiSABQiqgBiqgLgArHBhIAAAAg");
	this.shape_30.setTransform(407.675,594.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AsqCKQhDAAhDgBQg1gBg1gBQgBjCgBjGIAAgBIEkAAQBeABBeACQCwADCzAAQDPAADMgDQAkgCAkAAQCdADCcAEQA7ABA7ABQAAAoAAAoIFkAAIAAGsI9HAAgAK5ioQgBCcgBCcQhsAChsACQhPAChPABQicADifABQi3gBi5gHQjUgHjTgBQgNgBgMAAIAAkyg");
	this.shape_31.setTransform(439.625,592.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6C79").s().p("AsqEDIAAh5IiGgBIhqgCIgCmIIAAgBIEkAAIC8ACQCwADCzABQDPAADMgEIBIgBIE5AHIB2ACIAABQIFkAAIAAGrgAsqCKIAZAAQDTABDUAIQC5AHC3ABQCfgBCcgDICegDIDYgEIACk4I3jAAIAAEygAlqCTQjUgIjTgBIgZAAIAAkyIXjAAIgCE4IjYAEIieADQicADifABQi3gBi5gHgAK5iog");
	this.shape_32.setTransform(439.625,592.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AuOC1QgCAAgDAAQg5gBg5gBQgBjQAAjUIAAgBIE4AAQBlABBlABQC/ABC/ABQDdAADdgCQAnAAAngBQCpACCqABQBAABBBABQAAAUAAAUICxAAIAAG3I+VAAgANWjEQgBC/AAC9Qh1ABh0ABQhWABhVABQipABipAAQjGAAjIgDQjkgEjlAAQhTAAhTgBIAAl5g");
	this.shape_33.setTransform(471.575,589.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6C79").s().p("AuODzIAAg+IgFAAIhygBIgBmkIAAgBIE4AAIDKABIF+ACQDdAADdgCIBOAAIFTACICBACIAAAoICxAAIAAG3gAuOC1ICmABQDlAADkAEQDIADDGABQCpgBCpgBICrgCIDpgCIABl8I7kAAIAAF5gAkfC6QjkgEjlAAIimgBIAAl5IbkAAIgBF8IjpACIirACQipABipABQjGgBjIgDgANWjEg");
	this.shape_34.setTransform(471.575,589.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(1,1,1,0)").ss(0.1,1,1).p("AvxjgIfjAAIAAHBI/jAAg");
	this.shape_35.setTransform(503.55,587.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6C79").s().p("AvxDhIAAnBIfjAAIAAHBg");
	this.shape_36.setTransform(503.55,587.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

	// phone
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(1050,350,1,1,0,0,0,350,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1000},0).wait(1).to({x:950},0).wait(1).to({x:900},0).wait(1).to({x:850},0).wait(1).to({x:800},0).wait(1).to({x:750},0).wait(1).to({x:700},0).wait(1).to({x:650},0).wait(1).to({x:600},0).wait(1).to({x:550},0).wait(1).to({x:500},0).wait(1).to({x:450},0).wait(1).to({x:400},0).wait(1).to({x:350},0).wait(46));

	// feedback
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(-350,350,1,1,0,0,0,350,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-300},0).wait(1).to({x:-250},0).wait(1).to({x:-200},0).wait(1).to({x:-150},0).wait(1).to({x:-100},0).wait(1).to({x:-50},0).wait(1).to({x:0},0).wait(1).to({x:50},0).wait(1).to({x:100},0).wait(1).to({x:150},0).wait(1).to({x:200},0).wait(1).to({x:250},0).wait(1).to({x:300},0).wait(1).to({x:350},0).wait(46));

	// background
	this.instance_3 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-350,-350,1750,1050);
// library properties:
lib.properties = {
	id: '41AB930D114B7B44A83E21A0C16C5CE6',
	width: 700,
	height: 700,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gordeev_lab_9_atlas_1.png?1671622124077", id:"gordeev_lab_9_atlas_1"},
		{src:"images/gordeev_lab_9_atlas_2.png?1671622124078", id:"gordeev_lab_9_atlas_2"}
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
an.compositions['41AB930D114B7B44A83E21A0C16C5CE6'] = {
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