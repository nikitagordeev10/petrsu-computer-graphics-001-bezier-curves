(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gordeev_lab_10_atlas_1", frames: [[0,0,450,449],[452,0,450,449]]}
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



(lib.moon = function() {
	this.initialize(ss["gordeev_lab_10_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.initialize(ss["gordeev_lab_10_atlas_1"]);
	this.gotoAndStop(1);
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


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sun();
	this.instance.setTransform(-60.5,-60.5,0.2689,0.2695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


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
	this.instance = new lib.moon();
	this.instance.setTransform(-60.5,-60.5,0.2689,0.2695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-60.5,121,121);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al7HpQigiSgojdQAlCNBsBbQBuBcCMgBQCqABB3iDQB4iDAAi4QAAi4h4iCQh3iDiqAAQiMABhuBbQhsBbglCNQAojdCgiSQCjiTDUAAQDxAACrC7QCsC6AAEGQAAEHisC7QirC5jxAAQjUABijiTg");
	this.shape.setTransform(70.32,63.55,1.2129,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnJHpQjCiSgwjdQAtCNCCBbQCFBcCogBQDOABCPiDQCRiDAAi4QAAi4iRiCQiPiDjOAAQioABiFBbQiCBbgtCNQAwjdDCiSQDEiTEAAAQEjAADPC7QDPC6AAEGQAAEHjPC7QjPC5kjAAQkAABjEiTg");
	this.shape_1.setTransform(70.325,63.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,140.7,127.1), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqYZzMAAAgzlQFpAOEFDnQEBDmAlFNQDBBeBrB5QBxCAAACKQAACliUCPQiPCLj8BdQjMBhkNAlIjADHIAZRzg");
	this.shape.setTransform(66.475,165.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,133,330.1), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgPpAiuMAAAhFwQBQAmA9A7QBCA9ApBUQBVg/BrgcIAggHQCWgnCUAnQCPAlBoBjQBNBJAqBgQArBeACBoQBzAbBIBMQBCBHAUBiQA0gBAtAHQDZAiCECuQCDCugkDOQgjDOi4B9Qi3B9jagiQhrgRhag3QhLA5hZAeQhbAghhAAQh/AAh3g3QgLBQglBKQgmBKg9A6Qg2AyhDAhQhCAihKAPMAA+Ahbg");
	this.shape.setTransform(100.2119,224.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,200.4,448.5), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ar1fLMAAAg9cIAug5QBzCEByCiQDnFDACCUIgBASQCmguDhgkQBxgSBQgJQgMBpgZCIQgxEShCCkQCqAdDcBAQBuAgBMAaIgcApQgrCniPCwQiHCkjHCQQjFCOjWBaQjfBejCARIArWqg");
	this.shape.setTransform(75.8,199.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,151.6,399.1), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgM4AgSMAAAg/OQAdAPAUAPQAYgpAlgjQAvgrA+gXQA+gXBCAAQBCABA9AZQA9AZAuAtQAuAtAYA6QAZA7gBA/IgCAVQAjgGAgAAQBXACBKAqQAwAiAZAXQAmAjATAlQApABAmAKQBAARA0AnQA1AmAgA3QAhA2AHA/QAIA+gRA9IgHAUQAiACAgAIQBUAXA9A7QAnAuASAeQAdAtAGArQAXBQgYBRQgYBQg/A7Qg5A0hPAWQATAYAJAVQArBJgBBTQgCBUgtBHQgeAwgwAjQgvAjg5ARQAxBQgCBbQgBBDgcA/QgdA+gyAvQgzAuhDAZQhDAZhGgBQgoAAgtgLQgaBAg6AoQg+AphJgBQhUgBhAg2QhAg2gMhOIgSABQg0AjhDANQgvAhg3ARIAmZfg");
	this.shape.setTransform(82.5253,211.5745);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,165.1,423.2), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApSGMIAAsYQAnAiAYAsQBmhCB6gBQClABB4BxQB3ByAACdIgBAbIA/gIQB2ABBkA3IAEADQBiA4A7BcIAsBjQAIAhAEAmg");
	this.shape.setTransform(59.45,39.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,118.9,79.3), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnJXlMAAAgvKQDqAOCjCmQCjCmAEDnQADDViFClQiFCjjPAsIAfDLIEUhRQABhiBJhHQBJhGBpgCQBqgCBNBGQBMBHACBkQACBmhKBIQhKBIhrACQhcABhIg2QhGg2gUhTIkJDSIANW8g");
	this.shape.setTransform(45.7526,150.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,91.5,301.9), null);


(lib.awansiang = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApbGYQAHhXAng+QAqhFBGgRIgEgPQgeiPApiSQAqibBihFQBrhLBwAjQBuAiBICAQASAhANAjQAYgEARAAQBhAAA8BRQA1BKAGBtQAnAEAnAZQAlAYAcAkQAtA6AQBNQAJAogBAxg");
	this.shape.setTransform(-638.595,-37.5543);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtBGxQAJimBeh1QBfh1CBAAQA9AAA/AjQgKi9BgiYQBkifCWAAQCXAABjBvQBYBjAYCfQAigXA3gQQAwgOAhAAQC3AABgCxQBYChgYDTg");
	this.shape_1.setTransform(1016.1333,-59.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AsfHIQgXhlAJhqQAJhsAphYQBdjKDFAAQBeAABLA0QAXiaBXhgQBhhsCTAAQCSAABiCbQBdCTgKC4QA9ghA8AAQCDAABeB6QBeB6AACqIgCAsg");
	this.shape_2.setTransform(-834.5016,111.9249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AsqGYIACgWQASihBThbQBUhaB+AFQAKAAARADQgMhNAMhMQAMhPAlg+QAnhCAwgqQA5gvA5gFIAygEQAcgCAVABQBMAEA/BBQA8A9AeBdQA6glBLAIQBqAMA8BeQA2BVACB4QAqgLAnAFQBkALBLBbQBKBYASB+g");
	this.shape_3.setTransform(180.1,73.1679);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ao5GEQgfhGAAhOQAAh7BFhYQBEhYBfAAQAtAAAtAYQgHiFBGhrQBIhwBrAAQBrAABKBOQBDBHARBuQAdgUAZgHQAggKA2AAQBSAAA7A8QA0A3AYBbQAWBXgKBfQgLBggpBFg");
	this.shape_4.setTransform(-1039.358,-88.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A3OIcQgWhdAIhiQAJhkAlhSQBXi7C4AAIAHABQgajGBQiYQBYiqCuAAQBtAABQBJQBIBBAkBwQBahXBuAAQBIgBBCAoQBAAnAvBEQAehcA0g+IAPgXIBChCQBNg6BaAAQBBgBA9AhQA9AhAuA7QAPAUAOAYQAaAjAWAxQAlBRAJBnQAygUAyAAQBrAABZBPQBWBLAsB+QAmg1A7giQA7ggA6AAQCbAABRCiQBJCSgZC6g");
	this.shape_5.setTransform(787.0588,121.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AwtGaQAGhlAmhSQArhfBJg4QBMg4BXAAQAzgBAzAWQgWiqBIiFQBPiTCXAAQCDAABPBxQBGBmAECVQBQhCBeAAQBmAABUBNQBSBKAkB4QAWguAbgiQAzhCBDgiQBCgkBIAAQBiABBUA+IAGAEQBRA3AyBxQAvBuABB5g");
	this.shape_6.setTransform(-291.025,137.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AwuGaQAIhkAlhTQArheBJg4QBMg4BXgBQAzgBAzAWQgWiqBIiFQBPiTCXAAQCDAABPBxQBGBmAECWQBQhDBeAAQBmAABUBNQBSBKAkB4QAWguAbgiQAzhCBDgiQBCgkBIAAQBhAABVA/IAGAEQBRA3AxBxQAxBtABB6g");
	this.shape_7.setTransform(548.95,-88.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ap3GHQgJg5AHg5QAHg8AXguIACgDIgDAHQAhhPA7guQAoggAygIQAwgIAuAQIAGADQgEhGAPhFQAUhfAxhFQA0hJBIgYQBogiBlBEQAtAfAhA6QAfA1AQBDQAHAeACApIABANIAFgFQA+gvBJAAQBJAAA+AvQAxAwAHAIQAYAbAUAsIAeBbQAHAYACAiIABA7QAAA5gPA4g");
	this.shape_8.setTransform(-34.6408,-139.5778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.awansiang, new cjs.Rectangle(-1099.4,-178.7,2198.9,357.4), null);


(lib.Layer1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68A04D").s().p("Ehi7ACTQghAAgWgrQgYgrAAg9QAAg8AYgrQAWgrAhAAMDF3AAAQAhAAAWArQAXArAAA8QAAA9gXArQgWArghAAg");
	this.shape.setTransform(641.05,445.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F6A71").s().p("Ehi3ADVQhFAAgMiHIgCggQAEhDAUhRQAbhuAgAAMDFyAAAQAfAAAZBqQATBTACBIIAAhvIACBEQACA6gEAlQgMBwhBAAg");
	this.shape_1.setTransform(641.308,451.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_2.setTransform(1277.875,444.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#68A04D").s().p("AgOCDQgaiFAfh9QAIghAQATQASATgJAhQgLArgCA9IABBtQAAAWgMADIgBAAQgKAAgDgSg");
	this.shape_3.setTransform(1269.1834,435.3168);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#68A04D").s().p("AgPBuIgCjYQAAggARAAQARAAAAAgIgBDYQAAAdgQAAQgPAAAAgdg");
	this.shape_4.setTransform(1252.95,426.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#68A04D").s().p("AgIDLQghiAAQiZIgEhBQgBgKAGgBQAHgCABAKIAAAGQAFgbAHgbQAIggAQASQAQASgHAgQgQBIgBBjQAAAeAFCTQABATgLAFIgFACQgGAAgEgNg");
	this.shape_5.setTransform(1263.3203,442.1284);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#68A04D").s().p("AgTB6QgBilANhbQADgWAMADQANACgBAYQgEBfgBCaQgBAhgQAAQgRAAAAghg");
	this.shape_6.setTransform(1257.7001,437.232);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#68A04D").s().p("AgMBWQAAg6ADh6QABgRAIABQAJABAAARQAEB6ABA4QAAAZgOAAQgMAAAAgZg");
	this.shape_7.setTransform(1253.85,451.5189);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQABgEACgCQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQABgGADgGIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAICEQAGBOAJA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_8.setTransform(1245.6481,438.8521);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg2gFgpQgCgUALgGQAKgGACAUQALBXgEB2QAAASgJAAQgIAAgBgSg");
	this.shape_9.setTransform(1240.9019,434.2407);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#68A04D").s().p("AgLCtQgOg6gBg8QgBg3AKhBQACgIAEgEQABguAHgsQADgbAQAIQAPAIgFAbQgFAjgDA0IgDBYQgBAUgKACQACA4AKAoQAHAagOAQQgFAFgEAAQgGAAgFgQg");
	this.shape_10.setTransform(1233.1848,430.3959);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#68A04D").s().p("AgJBjQgRhlAQhgQAEgZANAHQAOAHgEAaQgJA8AJBsQACAZgNAHIgEABQgHAAgEgTg");
	this.shape_11.setTransform(1177.9006,435.2166);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#68A04D").s().p("AABCUQgziaAjiMQAGgYALAOQANAOgGAYQgMA7AGA/QAFAvATBFQAHAYgMAOQgFAFgEAAQgGAAgGgPg");
	this.shape_12.setTransform(1151.9006,429.3451);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#68A04D").s().p("AANBjQgVhJgQhwQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgEAAgBgHg");
	this.shape_13.setTransform(1161.2941,431.8729);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#68A04D").s().p("AgKCgQgVhrASigQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgDAfgBAnQACAaAAAbIgCAIIABBtQABAagOACIgCAAQgKAAgEgUg");
	this.shape_14.setTransform(1202.7534,437.5928);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#68A04D").s().p("AgQC5QgIhQAHhyQgFAGgFgHQgFgIAEgKQAFgNAAgYIAAgnQAAgMAFgFQAFgFAGAFIAFg6QACgbAQAEQAQAEgCAbIgJCyQgFBtgIBFQgCASgJAAIgBAAQgKAAgCgSg");
	this.shape_15.setTransform(1223.1638,436.5685);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#68A04D").s().p("AgHCIIgCgsQgJgGAAgRIgChgQgBg4gFgoQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgBAUgLAAQgJAAgBgUg");
	this.shape_16.setTransform(1215.2779,432.5046);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQAAgTAKAAQAKAAABATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_17.setTransform(1206.725,431.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#68A04D").s().p("AASC0QgEALgHgEQgHgDAAgQIgBgTIAAADQAAAZgOACQgNABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgGACgCQABAAAAAAQABgBAAAAQABAAABAAQAAAAABABQABh1ALhiQACgUAMADQALAEgBAUIgEBhIAEgEQADgaANAHQAOAHgCAaQgMB5ARBjQAEAQgJAIQgDACgDAAQgFAAgEgJg");
	this.shape_18.setTransform(1193.274,425.9221);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAHgCIADhkQAAgQAHAAQAJAAAAAQIADCfQABBYgCBFQgBATgKAAQgIAAgBgTg");
	this.shape_19.setTransform(1181.4893,433.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#68A04D").s().p("AggCjQgEjDA1iRQAFgMAHAHQAGAHgEANQgUBFgJBZQgFA9gDBqQgBAXgMAAQgMAAgBgXg");
	this.shape_20.setTransform(1174.9124,428.1461);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#68A04D").s().p("AADDGIgJggQgFgDAAgKIAAgIQgQhGgBhYQAAgQAHgIQAGgHAIAEQAHhUARhOQACgJAGAEQAFAEgCAKQgQBWgGCfQAFAzAOBOQAEATgKAHQgDACgDAAQgGAAgEgLg");
	this.shape_21.setTransform(1167.1017,430.7697);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_22.setTransform(1151.125,444.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#68A04D").s().p("AgOCDQgaiGAeh8QAIghARATQARATgIAhQgLArgCA9IAABtQABAWgMADIgBAAQgKAAgDgSg");
	this.shape_23.setTransform(1142.4531,435.3168);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#68A04D").s().p("AgPBuIgBjYQgBggARAAQASAAgBAgIgBDYQAAAdgQAAQgPAAAAgdg");
	this.shape_24.setTransform(1126.225,426.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#68A04D").s().p("AgHDLQgih/AQiaIgEhBQAAgKAGgBQAGgCABAKIAAAGQAFgbAHgbQAIggAQASQAQASgHAgQgQBIgBBjQAAAeAFCTQABASgLAGIgFACQgGAAgDgNg");
	this.shape_25.setTransform(1136.562,442.1284);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#68A04D").s().p("AgUB6QgBilAOhbQADgWAMADQAOACgCAYQgEBfgBCaQgBAhgQAAQgRAAgBghg");
	this.shape_26.setTransform(1130.9541,437.232);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#68A04D").s().p("AgNBWQAAg6AFh6QABgRAHABQAJABABARQADB6AAA4QAAAZgNAAQgNAAAAgZg");
	this.shape_27.setTransform(1127.1,451.5189);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#68A04D").s().p("AADC1QgRhOABhwIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQABgFACgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABglADgdQAAgHADgFIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAJCEQAFBOAJA2QAFAfgQAIIgGACQgMAAgFgYg");
	this.shape_28.setTransform(1118.8995,438.8521);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg2gFgpQgCgVALgFQAKgGACAUQALBcgDBxQgBASgJAAQgIAAgBgSg");
	this.shape_29.setTransform(1114.1769,434.2407);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#68A04D").s().p("AgLCtQgPg6AAg8QgBg3AKhBQACgIAEgEQABguAHgsQADgbAQAIQAPAIgEAbQgGAjgDA0IgDBYQgBAUgKACQACA4AKAoQAHAagOAQQgFAFgEAAQgHAAgEgQg");
	this.shape_30.setTransform(1106.4494,430.3959);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#68A04D").s().p("AgIBjQgShlARhgQAEgZANAHQAOAHgEAaQgJA8AIBsQACAZgMAHIgFABQgHAAgDgTg");
	this.shape_31.setTransform(1051.1453,435.2166);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#68A04D").s().p("AACCUQgZhLgFhEQgGhMAThLQAGgYAMAOQAMAOgFAYQgNA7AGA/QAFAvAUBFQAHAYgNAOQgEAFgEAAQgHAAgFgPg");
	this.shape_32.setTransform(1025.1286,429.3451);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#68A04D").s().p("AANBjQgVhNgQhsQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgHg");
	this.shape_33.setTransform(1034.5441,431.8729);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#68A04D").s().p("AgKCgQgVhoASijQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgDAdgBApQACAaAAAbIgCAIIACBtQAAAagNACIgDAAQgKAAgEgUg");
	this.shape_34.setTransform(1076.0311,437.5928);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#68A04D").s().p("AgQC5QgIhQAHhyQgEAGgGgHQgFgIAEgKQAFgMABgZIgBgnQAAgMAFgFQAFgFAGAFIAFg6QACgbAQAEQAQAEgBAbIgKCyQgFBtgIBFQgCASgJAAIgBAAQgKAAgCgSg");
	this.shape_35.setTransform(1096.4424,436.5685);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#68A04D").s().p("AgHCIIgCgsQgJgGAAgRIgChgQgBg4gFgoQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgBAUgLAAQgJAAgBgUg");
	this.shape_36.setTransform(1088.5279,432.5046);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQABgTAJAAQAKAAABATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_37.setTransform(1079.975,431.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#68A04D").s().p("AATC0QgFALgHgEQgHgDAAgQIgBgTIAAADQAAAZgNACQgOABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgGACgCQABAAAAAAQABgBAAAAQABAAAAAAQABAAABABQABh1ALhiQACgUAMADQALAEgBAUIgEBhIAEgEQADgaANAHQAOAHgCAaQgMB6ASBiQADAQgJAIQgDACgDAAQgFAAgDgJg");
	this.shape_38.setTransform(1066.5375,425.9221);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAIgCIAChkQAAgQAIAAQAIAAAAAQQAFDagDBiQgBATgKAAQgIAAgBgTg");
	this.shape_39.setTransform(1054.7221,433.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#68A04D").s().p("AggCjQgEjCA2iSQAEgMAHAHQAGAHgEANQgUBEgJBaQgFA6gDBtQgBAXgMAAQgMAAgBgXg");
	this.shape_40.setTransform(1048.1625,428.1461);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#68A04D").s().p("AADDGIgJggQgFgDAAgKIAAgIQgQhIgBhWQAAgQAHgIQAGgHAIAEQAHhVARhNQACgJAGAEQAFAEgCAKQgQBWgGCfQAFAzAOBOQAEATgKAHQgDACgDAAQgGAAgEgLg");
	this.shape_41.setTransform(1040.3517,430.7697);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#68A04D").s().p("AgMBgQgDgvgBiIQAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_42.setTransform(1024.375,444.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#68A04D").s().p("AgOCDQgaiGAeh8QAIghARATQARATgIAhQgLArgCA9IAABtQABAWgMADIgBAAQgJAAgEgSg");
	this.shape_43.setTransform(1015.7031,435.3168);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#68A04D").s().p("AgQBuIgBjYQAAggARAAQASAAAAAgIgCDYQgBAdgPAAQgPAAgBgdg");
	this.shape_44.setTransform(999.5,426.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#68A04D").s().p("AgHDLQgiiCARiXIgFhBQAAgKAGgBQAGgCABAKIABAGQAEgcAIgaQAHggAQASQAQASgHAgQgQBHgBBkQAAATAFCeQABASgLAGIgFACQgGAAgDgNg");
	this.shape_45.setTransform(1009.8232,442.1284);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#68A04D").s().p("AgUB6QgBilAOhbQADgWANADQANACgBAYQgFBdgBCcQgBAhgQAAQgRAAgBghg");
	this.shape_46.setTransform(1004.2251,437.232);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#68A04D").s().p("AgNBWQABhHAEhtQAAgRAJABQAIABABARQADBiABBQQAAAZgOAAQgMAAgBgZg");
	this.shape_47.setTransform(1000.35,451.5189);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgCAHgEgCQgEgCABgIQAEgWAFgsIAJhCQAAgFADgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQAAgHAEgFIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAICEQAFBOAKA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_48.setTransform(992.175,438.8521);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg3gFgoQgCgUALgGQAKgGACAUQALBXgDB2QgBASgJAAQgIAAgBgSg");
	this.shape_49.setTransform(987.4441,434.2407);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#68A04D").s().p("AgLCtQgOg6gBg8QgBg3AKhBQACgIAEgEQABguAHgsQADgbAQAIQAPAIgEAbQgGAjgDA0IgDBYQAAAUgLACQACA4AKAoQAHAagOAQQgFAFgEAAQgHAAgEgQg");
	this.shape_50.setTransform(979.6994,430.3959);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#68A04D").s().p("AgJBjQgRhlAQhgQAFgZANAHQAOAHgEAaQgKA8AJBsQACAZgMAHIgFABQgIAAgDgTg");
	this.shape_51.setTransform(924.4191,435.2166);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#68A04D").s().p("AACCUQgZhLgFhEQgGhMAThLQAHgYALAOQAMAOgFAYQgNA7AGA/QAFAvAUBFQAHAYgNAOQgEAFgEAAQgHAAgFgPg");
	this.shape_52.setTransform(898.3786,429.3451);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#68A04D").s().p("AANBjQgVhNgQhsQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgHg");
	this.shape_53.setTransform(907.7941,431.8729);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#68A04D").s().p("AgKCgQgVhoASijQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgCAfgBAnIABA1QAAAFgCADIACBtQAAAagNACIgDAAQgKAAgEgUg");
	this.shape_54.setTransform(949.2811,437.5928);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#68A04D").s().p("AgRC5QgHhTAHhvQgFAGgFgHQgFgIAEgKQAFgMAAgZIAAgnQgBgMAGgFQAFgFAFAFIAFg6QADgbAPAEQARAEgCAbIgJCyQgGBtgHBFQgCASgKAAIAAAAQgLAAgCgSg");
	this.shape_55.setTransform(969.7013,436.5685);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#68A04D").s().p("AgHCIIgCgsQgIgFgBgSIgChgQgBg3gFgpQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgBAUgKAAQgKAAgBgUg");
	this.shape_56.setTransform(961.7779,432.5046);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQABgTAJAAQALAAAAATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_57.setTransform(953.225,431.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#68A04D").s().p("AASC0QgFALgHgEQgGgDgBgQIAAgTIAAADQgBAZgNACQgOABgCgYQgBABAAABQgBABAAAAQgBAAAAAAQgBAAAAAAQgDgBAAgGIgBhkQAAgGADgCQACgCADACQABhkAMhzQACgUANADQAMAEgBAUQgBASABAeIABAxQAMgDAAgBQAAgaALAHQAKAIgCAZQgIBMgBAiQgCA+AJAwQADAQgJAIQgDACgDAAQgFAAgDgJg");
	this.shape_58.setTransform(939.899,425.9221);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#68A04D").s().p("AgGCdIgBgzQgGgEAAgMIgBiFQAAgOAIgCIAChkQAAgQAIAAQAIAAAAAQQAFDagDBiQgBATgJAAQgJAAgBgTg");
	this.shape_59.setTransform(927.9721,433.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#68A04D").s().p("AggCjQgDjEA1iQQAEgMAHAHQAHAHgEANQgVBEgJBaQgFA6gDBtQgBAXgMAAQgMAAgBgXg");
	this.shape_60.setTransform(921.4398,428.1461);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#68A04D").s().p("AADDGIgJggQgEgCgBgLIAAgIQgRhJAAhVQAAgQAHgIQAGgHAIAEQAHhVARhNQADgJAFAEQAFAEgBAKQgSBZgECcQAEAyAOBPQAEATgKAHQgEACgCAAQgGAAgEgLg");
	this.shape_61.setTransform(913.6394,430.7697);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#68A04D").s().p("AgMBgQgDg1gBiCQAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_62.setTransform(897.625,444.875);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#68A04D").s().p("AgOCDQgaiGAeh8QAIghARATQARATgIAhQgLArgCA9QgBAeABBPQABAWgMADIgBAAQgJAAgEgSg");
	this.shape_63.setTransform(888.9531,435.3168);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#68A04D").s().p("AgPBuQgChJABiPQAAggAQAAQASAAAAAgIgCDYQgBAdgPAAQgPAAAAgdg");
	this.shape_64.setTransform(872.75,426.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#68A04D").s().p("AgHDLQgiiCARiXIgFhBQAAgKAGgBQAGgCABAKIABAGQAFgbAHgbQAHggAQASQAQASgHAgQgQBHgBBkQAAATAFCeQABATgLAFIgFACQgGAAgDgNg");
	this.shape_65.setTransform(883.0732,442.1284);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#68A04D").s().p("AgUB6QgBilAOhbQADgWANADQANACgBAYQgFBdgBCcQAAAhgRAAQgRAAgBghg");
	this.shape_66.setTransform(877.4751,437.232);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#68A04D").s().p("AgNBWQAAhHAFhtQAAgRAIABQAJABAAARQAFBuAABEQAAAZgOAAQgNAAAAgZg");
	this.shape_67.setTransform(873.625,451.5189);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgCAHgEgCQgEgCABgIQAEgWAFgsIAJhCQAAgFADgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQABgIADgEIgBhDQAAgZAIAAQAJAAAAAZIABBGQACAFAAAEIAICEQAGBOAJA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_68.setTransform(865.425,438.8521);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg3gFgoQgCgUALgGQAKgGACAUQALBXgDB2QgBASgJAAQgIAAgBgSg");
	this.shape_69.setTransform(860.6941,434.2407);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#68A04D").s().p("AgKCtQgPg6gBg8QgBg3AKhBQACgIAEgEQACg1AGglQADgbAQAIQAPAIgEAbQgGAjgDA0IgDBYQAAAUgLACQACA2AKAqQAHAagOAQQgFAFgEAAQgGAAgEgQg");
	this.shape_70.setTransform(852.9463,430.3959);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#68A04D").s().p("AgJBjQgRhlAQhgQAFgZANAHQAOAHgEAaQgKA+AJBqQACAZgMAHIgFABQgIAAgDgTg");
	this.shape_71.setTransform(797.6691,435.2166);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#68A04D").s().p("AACCUQg0iZAjiNQAGgYAMAOQAMAOgFAYQgNA7AGA/QAFAwATBEQAHAYgMAOQgEAFgEAAQgHAAgFgPg");
	this.shape_72.setTransform(771.6546,429.3451);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#68A04D").s().p("AANBjQgVhNgQhsQgCgOAIgEQAIgEACAOQAKBUAXBgQACALgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgHg");
	this.shape_73.setTransform(781.0441,431.8729);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#68A04D").s().p("AgKCgQgVhoASijQABgLAFgIIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAFAMgCAPQgCAfgBAnIABA1QAAAFgCADIACBtQAAAagNACIgDAAQgKAAgEgUg");
	this.shape_74.setTransform(822.5408,437.5928);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#68A04D").s().p("AgRC5QgHhTAHhvQgFAGgFgHQgFgIAEgKQAFgMAAgZIAAgnQAAgMAFgFQAFgFAFAFIAFg6QADgbAPAEQARAEgCAbIgJCyQgFBugIBEQgCASgKAAQgLAAgCgSg");
	this.shape_75.setTransform(842.9635,436.5679);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#68A04D").s().p("AgHCIIgCgsQgIgFgBgSIgChgQgBg3gFgpQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgCAXQgGAsgCBDIgFByQgBAUgKAAQgKAAgBgUg");
	this.shape_76.setTransform(835.045,432.5046);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQABgTAJAAQALAAAAATQABCtgBArQgBAUgKAAQgJAAgBgUg");
	this.shape_77.setTransform(826.475,431.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#68A04D").s().p("AATC0QgFALgHgEQgHgDAAgQIAAgTIAAADQgBAZgNACQgOABgCgYQgCAEgDgBQgCgBgBgGIAAhkQAAgGACgCQABAAAAAAQABgBAAAAQABAAAAAAQABAAABABQABhvALhoQACgUAMADQALAEgBAUQgCAqgBA3IADgEQADgaAOAHQANAIgCAZQgMB6ASBiQADAQgJAIQgDACgDAAQgFAAgDgJg");
	this.shape_78.setTransform(813.0375,425.9221);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAHgCIAChkQABgQAHAAQAIAAABAQQAFDbgDBhQgBATgKAAQgIAAgBgTg");
	this.shape_79.setTransform(801.2563,433.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#68A04D").s().p("AggCjQgDjEA1iQQAEgMAHAHQAHAHgEANQgVBEgJBaQgFA6gDBtQgBAXgMAAQgMAAgBgXg");
	this.shape_80.setTransform(794.6898,428.1461);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#68A04D").s().p("AADDGIgJggQgEgCgBgLIAAgIQgQhGgBhYQAAgQAHgIQAGgHAIAEQAHhVARhNQADgJAFAEQAFAEgBAKQgSBdgECYQAEAyAOBPQAEATgKAHQgEACgCAAQgGAAgEgLg");
	this.shape_81.setTransform(786.8894,430.7697);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QgBgfARAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_82.setTransform(770.9,444.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#68A04D").s().p("AgOCDQgaiGAeh8QAIghARATQARATgIAhQgLArgCA9QgBAeABBPQABAWgMADIgBAAQgKAAgDgSg");
	this.shape_83.setTransform(762.2147,435.3168);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#68A04D").s().p("AgPBuQgChJAAiPQABggAQAAQARAAAAAgQAABrgBBtQAAAdgQAAQgOAAgBgdg");
	this.shape_84.setTransform(746,426.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#68A04D").s().p("AgHDLQgiiCARiXIgFhBQAAgKAGgBQAGgCABAKIABAGQAFgbAHgbQAHggAQASQAQASgHAgQgQBHgBBkIAFCxQABATgLAFIgFACQgGAAgDgNg");
	this.shape_85.setTransform(756.3232,442.1284);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#68A04D").s().p("AgUB6QAAhRACgvQAChHAJg5QADgWANADQANACgBAYQgFBdgBCcQAAAhgRAAQgRAAgBghg");
	this.shape_86.setTransform(750.7236,437.232);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#68A04D").s().p("AgMBWQAAhTADhhQABgRAIABQAJABAAARQAEBuABBEQAAAZgOAAQgMAAAAgZg");
	this.shape_87.setTransform(746.9,451.5189);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQABgFACgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQABgIADgEIgBhDQAAgZAIAAQAJAAAAAZIABBGQACAFAAAEIAICEQAGBOAJA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_88.setTransform(738.675,438.8521);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#68A04D").s().p("AgEBmIgChiQgDg2gFgpQgCgUALgGQAKgGACAUQALBXgDB2QgBASgJAAQgIAAgBgSg");
	this.shape_89.setTransform(733.9441,434.2407);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#68A04D").s().p("AgKCtQgPg6gBg8QgBg3AKhBQACgIAEgEQACg1AGglQADgbAQAIQAPAIgEAbQgGAjgDA0IgDBYQAAAUgLACQACAzAKAtQAHAagOAQQgFAFgEAAQgGAAgEgQg");
	this.shape_90.setTransform(726.1963,430.3959);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#68A04D").s().p("AgJBjQgRhjARhiQAEgZANAHQAOAHgEAaQgKA+AJBqQACAZgMAHIgFABQgIAAgDgTg");
	this.shape_91.setTransform(670.9381,435.2166);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#68A04D").s().p("AACCUQg0iZAjiNQAGgYAMAOQAMAOgFAYQgNA7AGA/QAFAwATBEQAHAYgMAOQgEAFgEAAQgHAAgFgPg");
	this.shape_92.setTransform(644.9046,429.3451);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#68A04D").s().p("AAMBjQgWhPgOhqQgCgOAIgEQAIgFACAPQAIBMAYBoQADALgGAHQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAgCgHg");
	this.shape_93.setTransform(654.3289,431.8641);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#68A04D").s().p("AgKCgQgVhpASiiQAAgLAFgIIgEgiQgCgOAIgEQAHgEACAOIAEAmQAIAEAEALQAEAMgBAPQgDAfgBAnIABA1QAAAFgBADIABBtQAAAagNACIgCAAQgKAAgEgUg");
	this.shape_94.setTransform(695.8034,437.5928);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#68A04D").s().p("AgQC5QgJhSAIhwQgFAGgFgHQgFgIAEgKQAFgMAAgZIAAgnQAAgMAFgFQAFgFAFAFIAGg6QACgbAQAEQAQAEgCAbIgJCyQgFBugIBEQgCASgKAAIAAAAQgLAAgBgSg");
	this.shape_95.setTransform(716.2138,436.5685);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#68A04D").s().p("AgHCIIgDgsQgIgFAAgSIgChgQgCg3gFgpQgCgYAMgHQANgHADAYIABAUQAIgPALAKQALAKgDAXQgFAsgDBDIgEByQgCAUgKAAQgJAAgBgUg");
	this.shape_96.setTransform(708.3023,432.5046);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#68A04D").s().p("AgJBsQgChIACiQQAAgTAJAAQALAAAAATQABCtgBArQgBAUgKAAQgJAAAAgUg");
	this.shape_97.setTransform(699.725,431.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#68A04D").s().p("AATC0QgFALgHgEQgHgDAAgQIAAgTIAAADQgBAZgNACQgOABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgGACgCQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAABQACh/AJhYQADgUALADQAKAEgBAUIgDAwIgCAcQAEgGAKAEQASAIgDAZQgJBjAWB5QADAQgJAIQgDACgDAAQgFAAgDgJg");
	this.shape_98.setTransform(686.2875,425.9221);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAHgCIAChkQABgQAHAAQAJAAAAAQIADCfQABBYgCBFQgBATgKAAQgIAAgBgTg");
	this.shape_99.setTransform(674.5393,433.75);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#68A04D").s().p("AggCjQgDjEA1iQQAEgMAHAHQAHAHgEANQgVBFgJBZQgFA7gDBsQAAAXgNAAQgMAAgBgXg");
	this.shape_100.setTransform(667.9398,428.1461);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#68A04D").s().p("AADDGIgJggQgEgCgBgLIAAgIQgQhGgBhYQAAgQAHgIQAGgHAIAEQAHhZARhJQACgJAGAEQAFAEgCAKQgRBdgFCYQAFA2AOBLQAEATgLAHQgDACgCAAQgGAAgEgLg");
	this.shape_101.setTransform(660.1517,430.7697);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QAAgfAQAAQARAAAAAfQgBCCgDA1QgCAXgLAAQgKAAgCgXg");
	this.shape_102.setTransform(644.175,444.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#68A04D").s().p("AgOCDQgZiEAdh+QAJghAQATQASATgJAhQgLArgCA9QgBAeABBPQABAWgMADIgBAAQgKAAgDgSg");
	this.shape_103.setTransform(635.4905,435.3168);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#68A04D").s().p("AgPBuQgBhtgBhrQAAggARAAQASAAAAAgQgBCPgBBJQgBAdgPAAQgPAAAAgdg");
	this.shape_104.setTransform(619.25,426.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#68A04D").s().p("AgIDLQghiAAQiZIgEhBQgBgKAGgBQAHgCABAKIAAAGQAFgbAHgbQAHggARASQAQASgHAgQgQBIgBBjQAAAeAFCTQAAATgLAFIgEACQgGAAgEgNg");
	this.shape_105.setTransform(629.6203,442.1284);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#68A04D").s().p("AgTB6QgBhUACgsQADhHAIg5QADgWANADQANACgBAYQgFBqgBCPQAAAhgRAAQgRAAAAghg");
	this.shape_106.setTransform(623.9973,437.232);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#68A04D").s().p("AgMBWQAAg6AEh6QAAgRAIABQAJABAAARQAEB6ABA4QAAAZgOAAQgMAAAAgZg");
	this.shape_107.setTransform(620.15,451.5189);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQABgEACgCQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQABgGADgGIgBhDQAAgZAIAAQAJAAAAAZIABBGQACAFAAAEIAICEQAGBOAJA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_108.setTransform(611.9481,438.8521);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#68A04D").s().p("AgDBmIgDhiQgDg2gFgpQgCgUALgGQAKgGACAUQALBXgDB2QgBASgJAAQgIAAAAgSg");
	this.shape_109.setTransform(607.1941,434.2407);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#68A04D").s().p("AgKCtQgPg6gBg8QgBg3AKhBQACgIAEgEQACg1AGglQAEgbAPAIQAPAIgEAbQgGAkgCAzIgEBYQAAAUgLACQADA4AKAoQAGAagOAQQgFAFgEAAQgGAAgEgQg");
	this.shape_110.setTransform(599.4476,430.3959);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#68A04D").s().p("AgJBjQgRhjARhiQAEgZANAHQAOAHgEAaQgKA+AJBqQACAZgMAHIgFABQgIAAgDgTg");
	this.shape_111.setTransform(544.1881,435.2166);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#68A04D").s().p("AACCUQg0iZAjiNQAGgYAMAOQAMAOgFAYQgNA7AGA/QAFAwATBEQAHAYgMAOQgEAFgEAAQgHAAgFgPg");
	this.shape_112.setTransform(518.1669,429.3451);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#68A04D").s().p("AAMBjQgUhJgQhwQgCgOAIgEQAIgFACAPQAJBPAYBlQACALgFAHQgBAAAAABQgBAAgBABQAAAAAAAAQgBAAAAAAQgEAAgCgHg");
	this.shape_113.setTransform(527.593,431.8641);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#68A04D").s().p("AgKCgQgVhpASiiQABgMAEgHIgEgiQgCgOAIgEQAHgEACAOIAEAmQAIAEAEALQAEAMgBAPQgDAfgBAnQACAdgBAYQAAAFgBADIABBtQAAAagNACIgCAAQgKAAgEgUg");
	this.shape_114.setTransform(569.0534,437.5928);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#68A04D").s().p("AgQC5QgJhSAIhwQgFAGgFgHQgFgIAEgKQAFgMAAgZIAAgnQAAgMAFgFQAFgFAFAFIAGg6QACgbAQAEQAQAEgCAbIgJCyQgFBugIBEQgCASgKAAIAAAAQgLAAgBgSg");
	this.shape_115.setTransform(589.4638,436.5685);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#68A04D").s().p("AgHCIIgCgsQgJgFAAgSIgChgQgCg3gFgpQgCgYAMgHQANgHADAYIACAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgCAUgKAAQgJAAgBgUg");
	this.shape_116.setTransform(581.5523,432.5046);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#68A04D").s().p("AgKBsQgBgrABitQAAgTAKAAQAKAAAAATQACCQgCBIQAAAUgKAAQgJAAgBgUg");
	this.shape_117.setTransform(573.025,431.925);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#68A04D").s().p("AASC0QgEALgHgEQgHgDAAgQIgBgTIAAADQAAAZgOACQgNABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgFACgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAChvALhoQACgUAMADQALAEgBAUQgDAqgBA3IAEgEQACgaAOAHQAOAIgDAZQgLB6ARBiQADAQgJAIQgCACgDAAQgFAAgEgJg");
	this.shape_118.setTransform(559.5625,425.9221);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAHgCIAChkQABgQAHAAQAJAAAAAQIADCfQABBYgCBFQgBATgKAAQgIAAgBgTg");
	this.shape_119.setTransform(547.7893,433.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#68A04D").s().p("AggCjQgEjDA1iRQAFgMAGAHQAHAHgEANQgVBFgIBZQgFA7gDBsQgBAXgMAAQgMAAgBgXg");
	this.shape_120.setTransform(541.2089,428.1461);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#68A04D").s().p("AADDGIgJggQgEgCgBgLIAAgIQgQhGgBhYQAAgQAHgIQAGgHAIAEQAHhUARhOQACgJAGAEQAFAEgCAKQgRBdgFCYQAEAsAPBVQAEATgLAHQgDACgCAAQgGAAgEgLg");
	this.shape_121.setTransform(533.4017,430.7697);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QAAgfAQAAQARAAAAAfQgBCIgDAvQgCAXgLAAQgKAAgCgXg");
	this.shape_122.setTransform(517.425,444.875);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#68A04D").s().p("AgOCDQgaiFAfh9QAIghAQATQASATgJAhQgLArgCA9QgBAhACBMQAAAWgMADIgBAAQgKAAgDgSg");
	this.shape_123.setTransform(508.7334,435.3168);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#68A04D").s().p("AgPBuIgBjYQAAggAQAAQARAAABAgIgBDYQgBAdgQAAQgPAAAAgdg");
	this.shape_124.setTransform(492.5,426.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#68A04D").s().p("AgIDLQghiAAQiZIgEhBQgBgKAGgBQAHgCABAKIAAAGQAFgbAHgbQAHggARASQAQASgHAgQgQBIgBBjQAAAeAFCTQAAATgLAFIgEACQgGAAgEgNg");
	this.shape_125.setTransform(502.8703,442.1284);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#68A04D").s().p("AgUB6QgBilAOhbQADgWAMADQANACAAAYQgFBfgBCaQAAAhgRAAQgSAAAAghg");
	this.shape_126.setTransform(497.2501,437.232);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#68A04D").s().p("AgNBWQAAg6AFh6QABgRAHABQAJABABARQADB6AAA4QAAAZgNAAQgNAAAAgZg");
	this.shape_127.setTransform(493.4,451.5189);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQABgEACgCQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQABgGADgGIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAICEQAGBOAJA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_128.setTransform(485.1981,438.8521);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#68A04D").s().p("AgDBmIgDhiQgDg2gFgpQgCgUALgGQAKgGACAUQALBXgDB2QgBASgJAAQgIAAAAgSg");
	this.shape_129.setTransform(480.4441,434.2321);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#68A04D").s().p("AgLCtQgOg6gBg8QgBg3AKhBQABgIAFgEQABgwAHgqQADgbAQAIQAPAIgFAbQgFAjgDA0IgDBYQgBAUgKACQACA4AKAoQAHAagOAQQgFAFgEAAQgGAAgFgQg");
	this.shape_130.setTransform(472.7224,430.3959);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#68A04D").s().p("AgJBjQgRhlAQhgQAEgZANAHQAOAHgEAaQgJA8AJBsQACAZgNAHIgEABQgIAAgDgTg");
	this.shape_131.setTransform(417.4506,435.2166);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#68A04D").s().p("AACCUQg0iZAjiNQAGgYAMAOQAMAOgFAYQgNA7AGA/QAFAwAUBEQAHAYgNAOQgFAFgEAAQgGAAgFgPg");
	this.shape_132.setTransform(391.4386,429.3451);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#68A04D").s().p("AAMBjQgUhJgQhwQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAgBABQAAAAgBABQAAAAgBAAQAAAAAAAAQgEAAgCgHg");
	this.shape_133.setTransform(400.8441,431.8729);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#68A04D").s().p("AgKCgQgVhrASigQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgDAfgBAnQACAdgBAYQAAAFgBADIABBtQABAagOACIgCAAQgKAAgEgUg");
	this.shape_134.setTransform(442.3034,437.5928);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#68A04D").s().p("AgQC5QgIhNAHh1QgFAGgFgHQgFgIAEgKQAFgNAAgYIAAgnQAAgMAFgFQAFgFAFAFIAGg6QACgbAQAEQAQAEgCAbIgJCyQgFBtgIBFQgCASgKAAIAAAAQgLAAgBgSg");
	this.shape_135.setTransform(462.7138,436.5685);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#68A04D").s().p("AgHCIIgCgsQgJgGAAgRIgChgQgCg3gFgpQgCgYANgHQAMgHAEAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgCAUgKAAQgJAAgBgUg");
	this.shape_136.setTransform(454.803,432.5046);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#68A04D").s().p("AgKBsQgBgrABitQAAgTAKAAQAKAAABATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_137.setTransform(446.275,431.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#68A04D").s().p("AASC0QgEALgHgEQgHgDAAgQIgBgTIAAADQAAAZgOACQgNABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgFACgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQAChvALhoQACgUAMADQALAEgBAUQgDAqgBA3IAEgEQACgaAOAHQAOAHgCAaQgMB8ARBgQAEAQgJAIQgDACgDAAQgFAAgEgJg");
	this.shape_138.setTransform(432.824,425.9221);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAHgCIAChkQABgQAHAAQAJAAAAAQIADCfQABBYgCBFQgBATgKAAQgIAAgBgTg");
	this.shape_139.setTransform(421.0393,433.75);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#68A04D").s().p("AggCjQgEjDA1iRQAFgMAHAHQAGAHgEANQgUBFgJBZQgFA9gDBqQgBAXgMAAQgMAAgBgXg");
	this.shape_140.setTransform(414.4624,428.1461);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#68A04D").s().p("AADDGIgJggQgFgCAAgLIAAgIQgQhGgBhYQAAgQAHgIQAGgHAIAEQAHhUARhOQACgJAGAEQAFAEgCAKQgQBWgGCfQAEAsAPBVQAEATgKAHQgDACgDAAQgGAAgEgLg");
	this.shape_141.setTransform(406.6517,430.7697);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_142.setTransform(390.675,444.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#68A04D").s().p("AgOCDQgaiFAfh9QAIghAQATQASATgJAhQgLArgCA9IABBtQAAAWgMADIgBAAQgKAAgDgSg");
	this.shape_143.setTransform(381.9834,435.3168);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#68A04D").s().p("AgPBuIgCjYQABggAQAAQARAAAAAgIgBDYQAAAdgQAAQgOAAgBgdg");
	this.shape_144.setTransform(365.75,426.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#68A04D").s().p("AgIDLQghiAAQiZIgEhBQgBgKAGgBQAHgCABAKIAAAGQAFgbAHgbQAIggAQASQAQASgHAgQgQBIgBBjQAAAeAFCTQABATgLAFIgFACQgGAAgEgNg");
	this.shape_145.setTransform(376.1203,442.1284);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#68A04D").s().p("AgUB6QAAilANhbQADgWAMADQAOACgCAYQgEBfgBCaQAAAhgRAAQgSAAAAghg");
	this.shape_146.setTransform(370.5001,437.232);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#68A04D").s().p("AgMBWQAAg6ADh6QABgRAIABQAJABAAARQAFB6AAA4QAAAZgOAAQgMAAAAgZg");
	this.shape_147.setTransform(366.65,451.5189);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQABgEACgCQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQABgGADgGIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAICEQAGBOAJA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_148.setTransform(358.4481,438.8521);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg2gFgpQgCgUALgGQAKgGACAUQALBXgEB2QAAASgJAAQgIAAgBgSg");
	this.shape_149.setTransform(353.7019,434.2407);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#68A04D").s().p("AgLCtQgOg6gBg8QgBg3AKhBQACgIAEgEQABguAHgsQADgbAQAIQAPAIgFAbQgFAjgDA0IgDBYQgBAUgKACQACA4AKAoQAHAagOAQQgFAFgEAAQgGAAgFgQg");
	this.shape_150.setTransform(345.9848,430.3959);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#68A04D").s().p("AgJBjQgRhlAQhgQAEgZANAHQAOAHgEAaQgJA8AJBsQACAZgNAHIgEABQgHAAgEgTg");
	this.shape_151.setTransform(290.7006,435.2166);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#68A04D").s().p("AABCUQgziaAjiMQAGgYALAOQANAOgGAYQgMA7AGA/QAFAvATBFQAHAYgMAOQgFAFgEAAQgGAAgGgPg");
	this.shape_152.setTransform(264.7006,429.3451);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#68A04D").s().p("AANBjQgVhJgQhwQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAgBABQAAAAgBABQAAAAAAAAQgBAAAAAAQgEAAgBgHg");
	this.shape_153.setTransform(274.0941,431.8729);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#68A04D").s().p("AgKCgQgVhrASigQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgDAfgBAnQACAaAAAbIgCAIIABBtQABAagOACIgCAAQgKAAgEgUg");
	this.shape_154.setTransform(315.5534,437.5928);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#68A04D").s().p("AgQC5QgIhQAHhyQgFAGgFgHQgFgIAEgKQAFgNAAgYIAAgnQAAgMAFgFQAFgFAGAFIAFg6QACgbAQAEQAQAEgBAbIgKCyQgFBtgIBFQgCASgJAAIgBAAQgKAAgCgSg");
	this.shape_155.setTransform(335.9842,436.5685);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#68A04D").s().p("AgHCIIgCgsQgJgGAAgRIgChgQgBg4gFgoQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgBAUgLAAQgJAAgBgUg");
	this.shape_156.setTransform(328.0779,432.5046);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQAAgTAKAAQAKAAABATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_157.setTransform(319.525,431.925);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#68A04D").s().p("AASC0QgEALgHgEQgHgDAAgQIgBgTIAAADQAAAZgOACQgNABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgGACgCQABAAAAAAQABgBAAAAQABAAAAAAQABAAABABQABh1ALhiQACgUAMADQALAEgBAUIgEBhIAEgEQADgaANAHQAOAHgCAaQgMB6ASBiQADAQgJAIQgDACgDAAQgFAAgEgJg");
	this.shape_158.setTransform(306.0875,425.9221);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAHgCIADhkQAAgQAHAAQAJAAAAAQQAFDSgDBqQgBATgKAAQgIAAgBgTg");
	this.shape_159.setTransform(294.2721,433.75);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#68A04D").s().p("AggCjQgEjDA1iRQAFgMAHAHQAGAHgEANQgUBFgJBZQgFA9gDBqQgBAXgMAAQgMAAgBgXg");
	this.shape_160.setTransform(287.7124,428.1461);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#68A04D").s().p("AADDGIgJggQgFgDAAgKIAAgIQgQhGgBhYQAAgQAHgIQAGgHAIAEQAHhUARhOQACgJAGAEQAFAEgCAKQgQBWgGCfQAFAzAOBOQAEATgKAHQgDACgDAAQgGAAgEgLg");
	this.shape_161.setTransform(279.9017,430.7697);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#68A04D").s().p("AgMBgQgEg+AAh5QAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_162.setTransform(263.925,444.875);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#68A04D").s().p("AgOCDQgaiGAeh8QAIghARATQARATgIAhQgLArgCA9IAABtQABAWgMADIgBAAQgKAAgDgSg");
	this.shape_163.setTransform(255.2531,435.3168);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#68A04D").s().p("AgPBuIgBjYQgBggARAAQASAAgBAgIgBDYQAAAdgQAAQgPAAAAgdg");
	this.shape_164.setTransform(239.025,426.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#68A04D").s().p("AgHDLQgih/AQiaIgEhBQAAgKAGgBQAGgCABAKIABAGQAEgZAHgdQAIggAQASQAQASgHAgQgQBIgBBjQAAAeAFCTQABASgLAGIgFACQgGAAgDgNg");
	this.shape_165.setTransform(249.362,442.1284);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#68A04D").s().p("AgUB6QAAhRACgvQAChHAJg5QADgWAMADQAOACgCAYQgEBfgBCaQgBAhgQAAQgSAAAAghg");
	this.shape_166.setTransform(243.7525,437.232);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#68A04D").s().p("AgMBWQgBhHAFhtQABgRAHABQAJABAAARQAEB6ABA4QAAAZgOAAQgMAAAAgZg");
	this.shape_167.setTransform(239.9,451.5189);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#68A04D").s().p("AADC1QgRhOABhwIgHA6IgIA7QgBAHgFgCQgEgCABgIQAEgWAFgsIAJhCQAAgFADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABglADgdQAAgHADgFIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAJCEQAFBOAJA2QAFAfgQAIIgGACQgMAAgFgYg");
	this.shape_168.setTransform(231.6995,438.8521);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg2gFgpQgCgVALgFQAKgGACAUQALBcgDBxQgBASgJAAQgIAAgBgSg");
	this.shape_169.setTransform(226.9769,434.2407);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#68A04D").s().p("AgLCtQgOg6gBg8QgBg3AKhBQACgIAEgEQABguAHgsQADgbAQAIQAPAIgEAbQgGAjgDA0IgDBYQgBAUgKACQACA4AKAoQAHAagOAQQgFAFgEAAQgHAAgEgQg");
	this.shape_170.setTransform(219.2494,430.3959);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#68A04D").s().p("AgIBjQgShlARhgQAEgZANAHQAOAHgEAaQgJA8AIBsQACAZgMAHIgFABQgHAAgDgTg");
	this.shape_171.setTransform(163.9453,435.2166);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#68A04D").s().p("AACCUQgZhLgFhEQgGhMAThLQAGgYAMAOQAMAOgFAYQgNA7AGA/QAFAvAUBFQAHAYgNAOQgEAFgEAAQgHAAgFgPg");
	this.shape_172.setTransform(137.9286,429.3451);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#68A04D").s().p("AANBjQgVhNgQhsQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgHg");
	this.shape_173.setTransform(147.3441,431.8729);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#68A04D").s().p("AgKCgQgVhoASijQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgDAdgBApQACAaAAAbIgCAIIACBtQAAAagNACIgDAAQgKAAgEgUg");
	this.shape_174.setTransform(188.8311,437.5928);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#68A04D").s().p("AgQC5QgIhQAHhyQgEAGgGgHQgFgIAEgKQAFgMABgZIgBgnQAAgMAFgFQAFgFAGAFIAFg6QACgbAQAEQAQAEgBAbIgKCyQgFBtgIBFQgCASgJAAIgBAAQgKAAgCgSg");
	this.shape_175.setTransform(209.2424,436.5685);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#68A04D").s().p("AgHCIIgCgsQgIgFgBgSIgChgQgBg4gFgoQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgBAUgLAAQgJAAgBgUg");
	this.shape_176.setTransform(201.3279,432.5046);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQABgTAJAAQAKAAABATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_177.setTransform(192.775,431.925);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#68A04D").s().p("AATC0QgFALgHgEQgHgDAAgQIgBgTIAAADQAAAZgNACQgOABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgGACgCQABAAAAAAQABgBAAAAQABAAAAAAQABAAABABQABh1ALhiQACgUAMADQALAEgBAUIgEBhIAEgEQADgaANAHQAOAHgCAaQgMB6ASBiQADAQgJAIQgDACgDAAQgFAAgDgJg");
	this.shape_178.setTransform(179.3375,425.9221);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#68A04D").s().p("AgGCdIgBgzQgHgEAAgMIAAiFQAAgOAIgCIAChkQAAgQAIAAQAIAAAAAQQAFDagDBiQgBATgJAAQgJAAgBgTg");
	this.shape_179.setTransform(167.5221,433.75);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#68A04D").s().p("AggCjQgDjEA1iQQAEgMAHAHQAGAHgEANQgUBEgJBaQgFA6gDBtQgBAXgMAAQgMAAgBgXg");
	this.shape_180.setTransform(160.9682,428.1461);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#68A04D").s().p("AADDGIgJggQgFgDAAgKIAAgIQgQhIgBhWQAAgQAHgIQAGgHAIAEQAHhVARhNQACgJAGAEQAFAEgCAKQgQBWgGCfQAFAzAOBOQAEATgKAHQgDACgDAAQgGAAgEgLg");
	this.shape_181.setTransform(153.1517,430.7697);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#68A04D").s().p("AgMBgQgDgvgBiIQAAgfAQAAQARAAAAAfQAAB5gEA+QgCAXgLAAQgKAAgCgXg");
	this.shape_182.setTransform(137.175,444.875);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#68A04D").s().p("AgOCDQgaiGAeh8QAIghARATQARATgIAhQgLArgCA9IAABtQABAWgMADIgBAAQgJAAgEgSg");
	this.shape_183.setTransform(128.5031,435.3168);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#68A04D").s().p("AgQBuIgBjYQAAggARAAQARAAAAAgIgBDYQAAAdgQAAQgOAAgCgdg");
	this.shape_184.setTransform(112.3,426.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#68A04D").s().p("AgHDLQgiiCARiXIgFhBQAAgKAGgBQAGgCABAKIABAGQAEgcAIgaQAHggAQASQAQASgHAgQgQBHgBBkQAAATAFCeQABASgLAGIgFACQgGAAgDgNg");
	this.shape_185.setTransform(122.6232,442.1284);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#68A04D").s().p("AgUB6QgBilAOhbQADgWANADQANACgBAYQgFBdgBCcQAAAhgRAAQgRAAgBghg");
	this.shape_186.setTransform(117.0251,437.232);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#68A04D").s().p("AgNBWQAAhHAFhtQAAgRAIABQAJABAAARQAFBuAABEQAAAZgOAAQgNAAAAgZg");
	this.shape_187.setTransform(113.175,451.5189);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#68A04D").s().p("AADC1QgRhSABhsIgHA6IgIA7QgCAHgEgCQgEgCABgIQAEgWAFgsIAJhCQAAgFADgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIADhCQAAgHAEgFIgBhDQAAgZAIAAQAJAAAAAZIABBGIACAJIAICEQAFBOAKA2QAFAfgQAIIgHACQgLAAgFgYg");
	this.shape_188.setTransform(104.975,438.8521);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#68A04D").s().p("AgDBmIgDhhQgDg3gFgpQgCgVALgFQAKgGACAVQALBXgDB1QgBASgJAAQgIAAAAgSg");
	this.shape_189.setTransform(45.9941,430.6918);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#68A04D").s().p("AgEBmIgDhiQgCg2gFgpQgCgVALgFQAKgGACAUQALBXgDB2QgBASgJAAQgIAAgBgSg");
	this.shape_190.setTransform(100.2269,434.2407);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#68A04D").s().p("AgLCtQgOg6gBg8QgBg3AKhBQACgIAEgEQACg0AGgmQADgbAQAIQAPAIgEAbQgGAjgDA0IgDBYQgBAUgKACQACA4AKAoQAHAagOAQQgFAFgEAAQgHAAgEgQg");
	this.shape_191.setTransform(92.4994,430.3959);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#68A04D").s().p("AgJBjQgRhlAQhgQAFgZANAHQAOAHgEAaQgKA8AJBsQACAZgMAHIgFABQgIAAgDgTg");
	this.shape_192.setTransform(37.2191,435.2166);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#68A04D").s().p("AANBjQgVhNgQhsQgCgOAIgEQAIgEACAOQAKBVAXBfQACALgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgCgHg");
	this.shape_193.setTransform(20.5941,431.8729);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#68A04D").s().p("AgKCfQgVhqASigQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAlQAHAEAEALQAEANgBAPQgDAfgBAnQACAaAAAbIgCAHIABBuQABAagOACIgCAAQgKAAgEgVg");
	this.shape_194.setTransform(22.8034,444.6178);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#68A04D").s().p("AgHCIIgCgsQgJgGAAgRIgChgQgCg3gFgpQgCgYANgHQANgHADAYIABAUQAHgPALAKQALALgDAWQgFArgCBEIgFByQgBAVgLAAQgJAAgBgVg");
	this.shape_195.setTransform(35.3109,439.546);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#68A04D").s().p("AgKBtQgBgsABisQAAgUAKAAQAKAAABAUQABChgBA3QgBATgKAAQgJAAgBgTg");
	this.shape_196.setTransform(26.775,438.925);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#68A04D").s().p("AASC0QgEAKgHgDQgHgDAAgQIgBgUIAAADQAAAagOABQgNACgCgYQgCAEgDgCQgDgBAAgGIAAhkQAAgFACgCQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQABh0ALhjQACgUAMADQALADgBAUIgEBhIAEgDIAAgBQACgZAOAHQAOAHgCAaQgMB6ARBhQAEARgJAIQgDACgDAAQgFAAgEgJg");
	this.shape_197.setTransform(13.324,432.9717);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#68A04D").s().p("AgKCgQgVhoASijQABgNAFgGIgFgiQgCgOAIgEQAHgEACAOIAFAmQAHAEAEALQAEAMgBAPQgCAfgBAnIABA1QAAAFgCADIACBtQAAAagNACIgDAAQgKAAgEgUg");
	this.shape_198.setTransform(62.0811,437.5928);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#68A04D").s().p("AgRC5QgHhTAHhvQgFAGgFgHQgFgIAEgKQAFgMAAgZIAAgnQgBgMAGgFQAFgFAFAFIAFg6QADgbAPAEQARAEgCAbIgJCyQgGBtgHBFQgCASgKAAIAAAAQgLAAgCgSg");
	this.shape_199.setTransform(82.5013,436.5685);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#68A04D").s().p("AgHCIIgCgsQgIgFgBgSIgChgQgBg3gFgpQgDgYANgHQANgHADAYIABAUQAHgPALAKQALAKgDAXQgFArgCBEIgFByQgBAUgKAAQgKAAgBgUg");
	this.shape_200.setTransform(74.5779,432.5046);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#68A04D").s().p("AgKBsQgBg2ABiiQABgTAJAAQALAAAAATQABCigBA2QgBAUgKAAQgJAAgBgUg");
	this.shape_201.setTransform(66.025,431.925);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#68A04D").s().p("AATC0QgFALgHgEQgHgDAAgQIAAgTIgBADQAAAZgNACQgOABgCgYQgCAEgDgBQgDgBAAgGIAAhkQAAgGACgCQABAAAAAAQABgBAAAAQABAAAAAAQABAAABABQABh1ALhiQACgUAMADQALAEgBAUIgEBhIAEgEQADgaAOAHQANAIgCAZQgMB6ASBiQADAQgJAIQgDACgDAAQgFAAgDgJg");
	this.shape_202.setTransform(52.5875,425.9221);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#68A04D").s().p("AgGCdIgBgzQgGgEAAgMIgBiFQAAgOAIgCIAChkQAAgQAIAAQAIAAAAAQQAFDagDBiQgBATgJAAQgJAAgBgTg");
	this.shape_203.setTransform(40.7956,433.75);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#68A04D").s().p("AggCjQgDjEA1iQQAEgMAHAHQAHAHgEANQgVBEgJBaQgFA6gDBtQgBAXgMAAQgMAAgBgXg");
	this.shape_204.setTransform(34.2398,428.1461);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#68A04D").s().p("AADDGIgJggQgEgCgBgLIAAgIQgRhJAAhVQAAgQAHgIQAGgHAIAEQAHhVARhNQADgJAFAEQAFAEgBAKQgSBZgECcQAEAyAOBPQAEATgKAHQgEACgCAAQgGAAgEgLg");
	this.shape_205.setTransform(26.4394,430.7697);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFD235").s().p("AhMBHQgagdAAgqQAAgpAagdQAcggAwAAQAxAAAdAgQAaAdAAApQAAAqgaAdQgdAggxAAQgwAAgcggg");
	this.shape_206.setTransform(855.15,255.15);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFD235").s().p("AhgBUQghgjAAgxQAAgwAhgjQAkgmA8AAQA9AAAkAmQAhAjAAAwQAAAxghAjQgkAmg9AAQg8AAgkgmg");
	this.shape_207.setTransform(827.525,211.075);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFD235").s().p("AhnBdQgmgmAAg3QAAg2AmgmQArgqBJAAQA9AAAkAqQAhAmgBA2QABA3ghAmQgkAqg9AAQhJAAgrgqg");
	this.shape_208.setTransform(774.45,258.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFD235").s().p("AhaBSQgagiAAgwQAAgvAagiQAdgkAxgBQA8ABAkAkQAhAigBAvQABAwghAiQgkAkg8ABQgxgBgdgkg");
	this.shape_209.setTransform(797.75,170.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFD235").s().p("AhgBUQghgiAAgyQAAgxAhgiQAkgnA8AAQA9AAAkAnQAgAiAAAxQAAAyggAiQgkAng9AAQg8AAgkgng");
	this.shape_210.setTransform(737.75,185.875);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFD235").s().p("AhtBhQgggngBg6QABg5AggnQAkgtA9AAQBIAAArAtQAnAnABA5QgBA6gnAnQgrAthIAAQg9AAgkgtg");
	this.shape_211.setTransform(711.4,239.425);

	this.instance = new lib.Path_4();
	this.instance.setTransform(852.6,279.15,1,1,0,0,0,66.5,165.1);
	this.instance.alpha = 0.1992;

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C7733B").s().p("AiMOaIAZxyIqQqnIKdG5IBmnTIBnH4IKdneIqQKnIAYRyg");
	this.shape_212.setTransform(786.625,351.95);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#61A750").s().p("AssKpQighRhXhoQhahtAAh2QAAhwBQhnQBOhiCPhPQAYkyDtjSQDujTFGAAQE+AADtDLQDqDJAhEpQCmBRBbBqQBeBuAAB5QAAB2haBtQhXBoigBRQlRCqncAAQncAAlQiqg");
	this.shape_213.setTransform(786.625,227.475);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#77C04F").s().p("AoDOfQjtgzi4hdQi3hchkh5Qhph8AAiJQAAiABeh2QBZhyClhbQANitBPibQBOiXCBhzQCDhzCkg/QCrhBC5AAQFuAAERDpQCABvBPCSQBSCVASCpQC/BdBpB5QBtB/AACLQAACJhpB8QhkB5i3BcQi4BdjtAzQj2A1kOAAQkNAAj2g1g");
	this.shape_214.setTransform(786.6,212);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AhiBdQgognAAg2QAAg2AognQApgmA5AAQA6AAAoAmQAqAnAAA2QAAA2gqAnQgoAng6AAQg5AAgpgng");
	this.shape_215.setTransform(245.4,165.25);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFD235").s().p("AgXhaQAogxAaAWQAPAOgFAVQgFAWAIAIQAIAHAYgEQAXgFAOAPQAXAYgxAjQg9AuipA7QA5ibAzg8g");
	this.shape_216.setTransform(258.6199,152.746);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFD235").s().p("ABZBRQhNgJikhIQCchHBRgJQBCgHABAhQABAUgTAMQgUAMAAAKQAAALAUAMQAUANgBATQgCAbgqAAIgUgBg");
	this.shape_217.setTransform(260.6774,165.2258);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFD235").s().p("AgUBeQgwg6g/igQCkA2BAAwQAzAmgXAYQgOAPgXgFQgYgEgIAHQgIAIAFAWQAFAWgPANQgIAHgKAAQgUAAgZgfg");
	this.shape_218.setTransform(258.6182,177.7783);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFD235").s().p("AAYB/QgNgTgLAAQgLAAgNATQgMASgVgBQgigBAHg6QAJhKBLibQBMCTAJBOQAHA+gjABIgCABQgTAAgMgSg");
	this.shape_219.setTransform(245.4564,179.7026);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFD235").s().p("AgqB2QgPgNAFgWQAFgWgIgIQgJgHgXAEQgXAFgOgPQgXgYAxgjQA9guCpg7Qg5CbgzA9QgbAhgVAAQgJAAgJgHg");
	this.shape_220.setTransform(232.2051,177.7683);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFD235").s().p("AiXA3QgBgUAUgMQAUgMAAgLQAAgKgUgMQgUgMABgUQACghA9AHQBNAJCkBHQibBIhSAJIgVABQgtAAgBgbg");
	this.shape_221.setTransform(230.1476,165.2742);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFD235").s().p("AhgAXQgzgmAXgYQAOgPAXAFQAXAEAJgHQAIgIgFgWQgFgVAPgOQAagWAlAuQAwA6A/CgQikg1hAgxg");
	this.shape_222.setTransform(232.2068,152.7441);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFD235").s().p("AhUhQQgIg+AjgBQAVgBANASQAMATALAAQALAAANgTQANgSAVABQAiABgHA7QgKBJhLCbQhLiTgJhOg");
	this.shape_223.setTransform(245.4008,150.7974);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AhhBdQgqgmAAg3QAAg2AqgnQAogmA5AAQA6AAApAmQAoAnAAA2QAAA3goAmQgpAng6AAQg4AAgpgng");
	this.shape_224.setTransform(241.95,67.075);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFD235").s().p("AgXhbQAogwAaAWQAPANgFAWQgFAWAIAHQAIAIAYgFQAXgEAOAOQAXAYgxAkQg+AuioA7QA4ibA0g9g");
	this.shape_225.setTransform(255.1699,54.5567);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFD235").s().p("ABZBQQhNgIikhIQCchHBRgJQBCgHABAhQABAUgTAMQgUAMAAAKQAAALAUAMQATAMgBAUQgBAbgqAAIgUgCg");
	this.shape_226.setTransform(257.2024,67.0508);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFD235").s().p("AgUBeQgwg6g/igQCkA2BAAwQAzAmgXAZQgOAOgXgEQgYgFgIAIQgIAHAFAWQAFAWgPANQgIAHgKAAQgUAAgZgfg");
	this.shape_227.setTransform(255.1682,79.5783);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFD235").s().p("AAYB/QgNgTgLAAQgLAAgMATQgNATgVgBQgigCAHg6QAJhKBLibQBMCUAJBNQAIA+gjACIgDAAQgTAAgMgSg");
	this.shape_228.setTransform(241.9992,81.5275);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFD235").s().p("AgqB2QgPgNAFgWQAFgWgJgHQgIgIgXAFQgXAEgOgOQgXgYAxgkQA9guCpg7Qg5CbgzA9QgbAhgVAAQgJAAgJgHg");
	this.shape_229.setTransform(228.7551,79.5683);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFD235").s().p("AiXA3QgBgUATgMQAUgMAAgLQAAgKgUgMQgTgMABgUQACggA9AHQBOAICjBHQibBIhSAJIgVABQgtAAgBgbg");
	this.shape_230.setTransform(226.6976,67.0992);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFD235").s().p("AhgAXQgzgmAXgYQAOgPAXAFQAXAEAIgHQAJgIgFgWQgFgVAPgOQAagWAlAuQAwA7A/CfQikg1hAgxg");
	this.shape_231.setTransform(228.7568,54.5441);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFD235").s().p("AhUhQQgHg9AjgCQAVgBAMASQANATAKAAQAMAAANgTQAMgSAVABQAiACgHA6QgJBJhMCbQhLiUgJhNg");
	this.shape_232.setTransform(241.9264,52.5974);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AhzBuQgwgtAAhBQAAhAAwgtQAwguBDAAQBEAAAwAuQAwAtAABAQAABBgwAtQgwAthEABQhDgBgwgtg");
	this.shape_233.setTransform(337.175,124.55);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFD235").s().p("AgchrQAwg5AeAaQASAQgFAZQgGAaAJAJQAKAJAbgFQAbgGARARQAbAdg6AqQhIA1jHBGQBDi2A8hIg");
	this.shape_234.setTransform(352.7064,109.8428);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFD235").s().p("ABpBfQhbgKjBhVQC3hUBhgKQBNgIACAnQABAXgXAOQgYAPAAALQAAANAYAOQAXAOgBAYQgCAfgxAAIgYgBg");
	this.shape_235.setTransform(355.1271,124.5258);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFD235").s().p("AgYBvQg5hFhKi8QDBA/BMA5QA8AtgbAdQgRARgbgFQgbgGgKAJQgJAJAGAaQAFAagSAPQgJAIgLAAQgYAAgegkg");
	this.shape_236.setTransform(352.7047,139.2949);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFD235").s().p("AAdCWQgQgXgNAAQgNAAgPAXQgPAVgYgBQgpgCAJhEQALhXBYi2QBaCtAKBbQAJBJgpACIgCAAQgXAAgOgUg");
	this.shape_237.setTransform(337.1823,141.5772);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFD235").s().p("AgxCLQgSgPAFgaQAGgagJgJQgKgJgbAGQgbAFgRgRQgbgcA6gqQBIg2DGhGQhCC3g8BHQggAngZAAQgMAAgJgIg");
	this.shape_238.setTransform(321.6186,139.293);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFD235").s().p("AiyBAQgBgXAXgOQAXgOAAgNQAAgMgXgOQgXgOABgYQACgmBIAIQBbALDBBTQi3BVhgAKIgZABQg1AAgBggg");
	this.shape_239.setTransform(319.1979,124.5985);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFD235").s().p("AhxAbQg8gtAbgdQARgRAbAGQAbAFAKgJQAJgJgGgaQgFgZASgQQAegaAsA3QA4BEBKC8QjAg/hMg5g");
	this.shape_240.setTransform(321.6203,109.8301);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFD235").s().p("AhjheQgJhJApgCQAZgBAPAWQAPAWAMAAQAOAAAPgWQAPgWAZABQAoACgJBEQgLBXhZC2QhZitgKhbg");
	this.shape_241.setTransform(337.1265,107.5228);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AhzBuQgwgtAAhBQAAhAAwgtQAwguBDAAQBEAAAwAuQAwAtAABAQAABBgwAtQgwAthEABQhDgBgwgtg");
	this.shape_242.setTransform(157.575,124.55);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFD235").s().p("AgbhrQAvg5AeAaQASAQgFAZQgGAaAJAJQAKAJAbgFQAbgGARARQAbAdg5AqQhJA1jGBGQBCi2A9hIg");
	this.shape_243.setTransform(173.1339,109.8428);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFD235").s().p("ABpBfQhcgKjAhVQC3hUBggKQBNgIACAnQABAXgXAOQgXAPAAALQAAANAXAOQAXAOgBAYQgBAfgxAAIgYgBg");
	this.shape_244.setTransform(175.5521,124.5258);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFD235").s().p("AgYBvQg4hFhKi8QDAA/BMA5QA8AtgbAdQgRARgbgFQgbgGgKAJQgJAJAGAaQAFAagSAPQgJAIgMAAQgXAAgegkg");
	this.shape_245.setTransform(173.1297,139.2949);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFD235").s().p("AAcCWQgPgXgNAAQgNAAgPAXQgPAVgZgBQgogCAJhEQALhXBYi2QBaCtAKBbQAJBJgpACIgCAAQgXAAgPgUg");
	this.shape_246.setTransform(157.6235,141.5772);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFD235").s().p("AgyCLQgSgPAGgaQAGgagKgJQgJgJgcAGQgaAFgRgRQgbgcA5gqQBIg2DHhGQhCC3g9BHQggAngZAAQgLAAgKgIg");
	this.shape_247.setTransform(142.0551,139.293);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFD235").s().p("AizBAQgBgXAXgOQAYgOAAgNQAAgMgYgOQgXgOABgYQACgmBJAIQBbALDBBTQi3BVhgAKIgYABQg2AAgCggg");
	this.shape_248.setTransform(139.6229,124.5985);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFD235").s().p("AhxAbQg9gtAcgdQARgRAaAGQAcAFAJgJQAKgJgGgaQgGgZASgQQAegaAsA3QA5BEBKC8QjBg/hLg5g");
	this.shape_249.setTransform(142.0571,109.8301);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFD235").s().p("AhjheQgJhJApgCQAYgBAPAWQAQAWAMAAQAOAAAPgWQAPgWAYABQApACgJBEQgLBXhZC2QhZitgKhbg");
	this.shape_250.setTransform(157.5677,107.5228);

	this.instance_1 = new lib.Path_3();
	this.instance_1.setTransform(354.45,229.65,1,1,0,0,0,100.2,224.2);
	this.instance_1.alpha = 0.1992;

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#77C04F").s().p("AjdSPQhfglhJhEQhkhegjiFQhsBNiZAAQiWAAhshLQhihDgthzQgrhtAQh3QAQh5BHhbQgQgMgQgQQhDhAgmhTQgkhTAAhbQAAhaAkhUQAmhTBDhAQA0gxBCghQBAggBJgMQgHgpAAgoIATiJQAoiDBlhhIAfgaQBmhgCJgkICQgTQBsAABkAoQBlAnBKBIQBBA+AqBTQBVg/BrgcIAggHQCVgnCVAnQCPAlBpBjQBOBLArBiQArBiAABpQAABTgbBPQgaBOgyBDQCNBEBWB/QBYCDAACZQAADdioCfQioCfjoAAQiAAAh3g3QgKBRgmBJQgmBKg8A6QhJBEheAlQhgAmhkAAQhnAAhegmg");
	this.shape_251.setTransform(263.7,120.475);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#61A750").s().p("AgWNIQhYAmhrAAQi4AAh4hrQhrhfgbiXQgbiTA9iEQBAiNCLg+QgghPAChYQAChZAkhOQBSiyDHgjQgIhHAUhGQAYhAASggQAcgwAogiQAsgmAjgUQAsgaAxgLQA5gNAtAAQAsAAA6ANQBiAbBJBEQAoAiAbAwQATAgAYBAQAcBkgcBlQgdBghKBGIgEAFQhIBLh0AYQAPBxgpBmQgrBtheA/IAngCQCuAABmBwQBcBmAACSQAACThcBlQhmBxiuAAQiaAAhjhcg");
	this.shape_252.setTransform(134.4089,118.6241);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#61A750").s().p("AAXKHQjYgiiEitQiDitAjjOQiMg0g6iCQg0h3AkiHQAkiIBrhNQB5hVClAaQCDAUBRBQQBKBJAVBqQA1gBAsAHQDaAiCDCuQCECtgkDOQgkDOi3B9QiQBiilAAQgtAAgvgHg");
	this.shape_253.setTransform(389.6047,134.1615);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#C7733B").s().p("AjLVMMABQgq6ID3AAMABQArdg");
	this.shape_254.setTransform(257.2,314.85);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFD235").s().p("Ag7A5QgZgXAAgiQAAggAZgYQAYgYAjAAQAjAAAZAYQAZAYAAAgQAAAigZAXQgZAYgjAAQgiAAgZgYg");
	this.shape_255.setTransform(344.925,375.825);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AhbBXQgmgkAAgzQAAgyAmgkQAmgkA1AAQA2AAAmAkQAmAkAAAyQAAAzgmAkQgmAkg2AAQg1AAgmgkg");
	this.shape_256.setTransform(344.925,375.825);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#51BEBE").s().p("AgSE0Qgmg5gFhAQhBBAh8ALQgBgXAJgiQAPhCAtgwQheABhghKQARgSAfgRQA8gkBEgFQhEg9gMh1IA8AGQBGAPAzAqQgBhYBPhbIAkAtQAnA5AEBAQBAhAB9gLIgHA5QgQBCgtAwQBegBBgBKQgRARgfASQg8AkhEAFQBEA+AMB0QgZABgjgHQhHgPgzgqQADBYhPBbQgTgQgSgdg");
	this.shape_257.setTransform(345,375.825);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFD235").s().p("Ag7A5QgZgXAAgiQAAggAZgYQAZgYAiAAQAkAAAYAYQAZAYAAAgQAAAigZAXQgYAYgkAAQgiAAgZgYg");
	this.shape_258.setTransform(365.625,326.725);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AhbBXQgmgkAAgzQAAgyAmgkQAmgkA1AAQA2AAAmAkQAmAkAAAyQAAAzgmAkQgmAkg2AAQg1AAgmgkg");
	this.shape_259.setTransform(365.625,326.75);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#51BEBE").s().p("AgRE0Qgng5gFhAQhBBBh8AKQgBgYAJggQAQhDAsgxQheAChghKQARgSAfgRQA8glBEgDQhEg+gMh1IA9AGQBFAPAzArQgBhZBPhbIAkAtQAnA5AEBAQBBhAB8gLIgHA4QgQBDgtAwQBfgCBfBLQgRARgeASQg9AkhDAFQBDA9AMB1QgZACgjgIQhGgQgzgqQACBahPBaQgTgQgRgdg");
	this.shape_260.setTransform(365.7,326.75);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFD235").s().p("Ag7A5QgZgXAAgiQAAggAZgYQAZgYAiAAQAjAAAZAYQAZAYAAAgQAAAigZAXQgZAYgjAAQgiAAgZgYg");
	this.shape_261.setTransform(462.325,307.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AhbBXQgmgkAAgzQAAgyAmgkQAmgkA1AAQA2AAAmAkQAmAkAAAyQAAAzgmAkQgmAkg2AAQg1AAgmgkg");
	this.shape_262.setTransform(462.325,307.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#51BEBE").s().p("AgSE0Qgmg5gFhAQhABAh9AMQAAgYAHghQAQhDAtgwQheABhghKIAvgjQA9gkBEgFQhEg9gLh2IA7AHQBGAPA0AqQgChYBOhcIAlAtQAmA6AFBAQBBhAB7gLIgGA5QgQBCgsAxQBegCBfBLQgRAQgeASQg9AlhEADQBEA+AMB1QgZABgjgHQhGgPgzgrQACBahPBaQgSgPgTgeg");
	this.shape_263.setTransform(462.4,307.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFD235").s().p("Ag7A5QgZgXAAgiQAAggAZgYQAYgYAjAAQAjAAAZAYQAZAYAAAgQAAAigZAXQgZAYgjAAQgiAAgZgYg");
	this.shape_264.setTransform(545.225,326.725);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AhbBXQgmgkAAgzQAAgyAmgkQAmgkA1AAQA2AAAmAkQAmAkAAAyQAAAzgmAkQgmAkg2AAQg1AAgmgkg");
	this.shape_265.setTransform(545.225,326.75);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#51BEBE").s().p("AgSE0Qgng5gEhAQhBBBh7AKQgCgYAIggQAQhDAtgxQheAChghKIAvgjQA9glBEgDQhEg/gMh0IA8AGQBGAPAzArQgChZBPhbIAlAtQAmA5AFBAQBAhAB8gLIgHA4QgQBDgsAwQBegCBgBLQgRARgeASQg9AkhEAFQBEA+AMB0QgZACgjgIQhGgQg0gqQADBZhQBbQgSgQgSgdg");
	this.shape_266.setTransform(545.3,326.75);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFD235").s().p("Ag7A5QgZgXAAgiQAAggAZgYQAZgYAiAAQAjAAAZAYQAZAYAAAgQAAAigZAXQgZAYgjAAQgiAAgZgYg");
	this.shape_267.setTransform(545.225,392.175);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AhbBXQgmgkAAgzQAAgyAmgkQAmgkA1AAQA2AAAmAkQAmAkAAAyQAAAzgmAkQgmAkg2AAQg1AAgmgkg");
	this.shape_268.setTransform(545.225,392.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#51BEBE").s().p("AgSE1Qgng6gEhAQhBBAh7ALQgCgXAIgiQAQhCAtgxQheAChghLIAvgiQA9glBEgDQhEg+gMh1IA8AGQBGAPAzArQgChZBPhbIAlAtQAmA5AFBAQBAhAB8gMIgHA5QgQBDgsAwQBdgBBhBKQgRARgeASQg9AkhEAFQBEA9AMB2QgZABgjgIQhGgPg0gqQADBYhQBcQgSgRgSgcg");
	this.shape_269.setTransform(545.3,392.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#508147").s().p("AhdDjQABiKAOhtQAGg9ANg+QAOhGAQgzQAWhCAagwQAhg8ArgmQgnAogdA9QgXA0gQBAQgNAygIBGQgIA4gCBCQgGBwAICDQAICCARBwIhFAJQgKh7ACh/g");
	this.shape_270.setTransform(453.1398,374.475);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#508147").s().p("AFcDVQgKgfgMgdQgag7glg0QhJhohzhIQgygghCgcQgwgTgOgEIg/gTQh8gfiNgEQCRgFB7AXIBCAPIBCATQBMAcAwAaQB/BGBVBpQAsA3AgA+QASAkALAcIAWBGIhFALg");
	this.shape_271.setTransform(406.575,410.2054);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#508147").s().p("AmvEFIAKgkQAFgRAHgRQANgjAQgdQAgg+Asg3QBVhpB/hGQAygbBKgbIBBgTIBDgPQB6gXCSAFQiMAEh9AfIhAATQgPAEgvATQhCAcgxAgQhyBHhKBpQgkAzgbA8QgOAfgIAdIgJAeIgGAdg");
	this.shape_272.setTransform(488.775,410.2054);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#508147").s().p("AFbHRIgFgqQgEgagLg5QgThZgZhLQg6irhciEQgzhKg6g6QhBhDhBgrIhJgtQg9gegQgHQg9gbhngbQBnAVBAAZQASAGA+AcQAOAGAZAOIAmAWQBFApBGBAQA7A2A7BMQBmCFBFCtQAhBTAWBUQANA3AHAgIAIAsIAGAtIhGAFQgCgdgCgMg");
	this.shape_273.setTransform(415.125,387.95);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#508147").s().p("AmkH1IAOhZQAIglANgyQAWhXAghQQBFiuBmiEQA4hJA/g5QBFhABFgpIAmgWIAngUQBBgdAPgFQBBgZBmgVQhnAag9AcQgSAHg7AeIhKAtQg/ArhCBDQg4A3g1BNQhdCEg5CrQgZBLgTBZIgPBTIgGAqIgDApg");
	this.shape_274.setTransform(483.4,387.95);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFD235").s().p("Ag/A9QgbgZAAgkQAAgjAbgZQAagZAlAAQAmAAAbAZQAaAZAAAjQAAAkgaAZQgbAagmAAQglAAgagag");
	this.shape_275.setTransform(1036.2,353.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AhhBdQgpgmAAg3QAAg2ApgmQApgnA4AAQA6AAApAnQAoAmAAA2QAAA3goAmQgpAng6AAQg4AAgpgng");
	this.shape_276.setTransform(1036.2,353.425);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F47A51").s().p("AgTFLQgqg+gEhFQhFBFiFAMQgBgZAIgkQARhHAwg0QhlAChnhQIAzglQBBgnBJgFQhJhCgNh+IBBAHQBLAQA2AuQgBhgBUhhIAnAwQAqA+AEBFQBGhFCEgMIgHA9QgRBHgwA0QBlgCBnBQQgSASghATQhBAnhJAFQBJBCANB9QgbABglgIQhMgQg2gtQABBfhUBiQgTgRgUgfg");
	this.shape_277.setTransform(1036.275,353.425);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#77C04F").s().p("AhBCUQAEhfAJhDQAMhZAYhGQANgoATgjQAVglAdgaQgaAbgRAoQgOAfgJAsQgHAfgGAwQgEAkgBArQgCBHAHBWQAGBXAMBGIhDAJQgEhEABhgg");
	this.shape_278.setTransform(1030.1795,399.475);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#77C04F").s().p("AAvhCQg+hMhNgyQhQgzhfgZQBiARBVAsQBWAuBGBIQBDBFAzBZQAvBTAfBkIhCARQgpjFhyiKg");
	this.shape_279.setTransform(1005.2,402.075);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#77C04F").s().p("AkLD8QAdhhAxhWQAyhZBEhFQBGhIBWguQBUgsBjgRQhgAZhOAzQhPAyg9BMQhyCKgoDFg");
	this.shape_280.setTransform(1051,402.075);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(692.3,239.65,1,1,0,0,0,75.8,199.5);
	this.instance_2.alpha = 0.1992;

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#C7733B").s().p("AkMBZIIZnSIoCLyg");
	this.shape_281.setTransform(646.075,210.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#C7733B").s().p("AkMl5IIZHSIgXEgg");
	this.shape_282.setTransform(592.225,210.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#C7733B").s().p("AitW8IAv41Ip/mlIJxChIB0w/ICLQ/IKLiaIqwGeIAvY1g");
	this.shape_283.setTransform(622.2,294);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#77C04F").s().p("Al5FrQiFh8gBixQgBiwCEh+QBthoGShSQDJgpC0gTQgUCqgpC/QhSF+huBoQiDB+i6AAIgCABQi5AAiEh9g");
	this.shape_284.setTransform(674.5246,156.3501);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#77C04F").s().p("AA7HnQi6AAiDh+QhuhohSl+Qgah4gUiEIgPhtIBzAOQCMAVB+AZQGSBSBtBoQCEB+gBCwQgBCxiFB8QiEB9i5AAIgCgBg");
	this.shape_285.setTransform(563.7754,156.3501);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#77C04F").s().p("AlnF7QiohPg7ioQg7inBSieQBTifCxg4QCUgvGOBiQDHAxCqA7QhiCQh/CYQj/EziTAvQhKAXhIAAQhlAAhhgtg");
	this.shape_286.setTransform(706.92,215.6232);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#77C04F").s().p("AAQGRQiSgvj/kzQhQhfhRhuIhBhbIBugkQCHgpB9gfQGNhiCUAvQCxA4BTCfQBTCeg8CnQg7CoioBPQhhAthlAAQhIAAhKgXg");
	this.shape_287.setTransform(526.6922,215.6232);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#77C04F").s().p("Ak5HfQiGh8gDixQgCiTDclJQBvilBuiHIBHBWQBWBrBIBlQDnFCACCUQACCxiCB/QiCB/i7ACIgGAAQi2AAiDh4g");
	this.shape_288.setTransform(622.226,100.0775);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#77C04F").s().p("Al+NXQjihBjMh8QnLkWjUnYIQvgMIGUs1IIxMqIOjgKQghCyiaC/QiPCzjaCaQjYCYjoBYQjyBdjJAAQjQAAjbg/g");
	this.shape_289.setTransform(617.675,202.825);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#435C39").s().p("AhLCrQAEhrALhQQAIg4AIgmQALgyAOgpQARgwAUgmQAZgtAigcQgdAegVAvQgRAngKAwQgIAigHA5QgEAlgCA3QgCBZAIBeQAHBbAOBaIhOAKQgFhXAChng");
	this.shape_290.setTransform(989.1859,412.675);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#435C39").s().p("AD1CkIgPgsQgUgtgagmQg0hNhVg4QglgZgxgWQglgPgJgCIgwgPQhbgZhsgFQBtgFBeAQIAzAKQAMACAmAMQA4ATAnAVQBjA0BCBPQAhAoAbAxQAPAeAIAUIASA3IhOAMg");
	this.shape_291.setTransform(955.175,439.6797);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#435C39").s().p("AlMDDIASg3QAIgWAPgcQAZguAjgrQBDhQBigzQAngVA4gTIAygOIAzgKQBegQBtAFQhsAFhcAZIgvAPIguARQgzAXgjAYQhVA4g0BNQgbAngSAsQgKAXgHAVIgJArg");
	this.shape_292.setTransform(1016,439.6797);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#435C39").s().p("ADwFBIgKg+QgNg+gTg9QgqiDhDhiQglg3grgsQgzg1gugfIg2gjIgdgPIgdgNQgugWhOgVQBOAPAxASIA+AZIAdAPIAdARQA0AeA2AwQAxArArA3QBOBjA3CFQAZA+ASBBIAQBCIAMBEIhPAGg");
	this.shape_293.setTransform(961.625,422.825);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#435C39").s().p("AlEF5IAMhEIAQhCQAShBAZg+QA1iDBQhlQArg3AxgrQA3gxAzgdIAdgRIAegPIA9gZQAxgSBNgPQhNAWgtAVIgeANIgdAPIg2AjQgxAhgwAzQgrAsgkA3QhEBigqCDQgUA9gLA+IgLA+IgGA+g");
	this.shape_294.setTransform(1011.95,422.825);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#77C04F").s().p("Ag9CMQADhVAJhEQAMhWAWhBQAOgoAQgeQAWgmAagWQgYAZgRAmQgNAegJAqQgOBAgDBVQgCBDAHBSQAHBVAKA/Ig/AIQgFhJAChSg");
	this.shape_295.setTransform(322.0833,391.825);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#77C04F").s().p("ADEEGIgJgyQgLg2gPgvQghhpg4hRQgggwghghQgngpgogcIgKgIIgigUIgvgYQgmgRg/gSQBDAOAlAOQAKADAnARIAwAaQArAZAsAnQAmAhAkAuQBCBTArBrQATAvAQA4IAOA2QAHAnACARIhAAFQgBgSgEghg");
	this.shape_296.setTransform(299.6,400.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#77C04F").s().p("AkIE0QADgXAHghQAFgZAIgdQANgwAWg3QAthtBAhRQAmgvAlggQAqgnAsgZIAwgaIAxgUQAkgOBEgOQg+ASgmARIgwAYIgsAcQgmAagpArQgiAigfAvQg3BRgiBpQgQAygKAzQgGAcgCAWQgFAdgBAWg");
	this.shape_297.setTransform(340.65,400.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#77C04F").s().p("Ag9CMQADhVAJhEQALhWAXhAQANgpARgeQAVglAbgXQgYAYgRAnQgNAfgJAoQgOBBgDBVQgCBAAGBUQAHBOAKBHIg/AIQgEhMAChPg");
	this.shape_298.setTransform(1195.8304,408.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#77C04F").s().p("ADDEGIgIgzQgLg2gOguQgjhqg2hQQgggvgigjQgpgqglgaIgtgcIgwgYQgjgQhBgSQA+ALAqAQIAxAUIAwAaQArAZArAnQAoAjAkAtQBABSAsBqQAWA2ANAyIANA2IAKA4IhAAEQgBgUgFgeg");
	this.shape_299.setTransform(1173.35,416.475);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#77C04F").s().p("AkIE0IAJg4IAOg2QAPg0AUg0QAthsBAhQQAigtAogjQAsgoArgYIAvgaIAzgUQApgQA+gLQhBASgkAQIgvAYIgsAcQgmAagpAqQgiAjgfAvQg4BQghBqQgPAugLA2IgJAzQgEAegBAUg");
	this.shape_300.setTransform(1214.4,416.475);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#435C39").s().p("Ai0CtQAAgRAFgcQAKg2AbgyQBYifDkg4IADA2QAABDgWA5QhEC2j5AXg");
	this.shape_301.setTransform(739.4977,388.475);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFD235").s().p("AhAA+QgbgaAAgkQAAgjAbgaQAbgZAlAAQAnAAAaAZQAbAaAAAjQAAAkgbAaQgbAZgmAAQglAAgbgZg");
	this.shape_302.setTransform(689.475,352.975);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AhiBeQgpgnAAg3QAAg2ApgnQApgnA5AAQA6AAApAnQApAnAAA2QAAA3gpAnQgpAng6AAQg5AAgpgng");
	this.shape_303.setTransform(689.475,353);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#51BEBE").s().p("AhnC8Qg3AuhMAQIhBAHQAOiABIhBQhJgFhBgoIgzglQBohRBlACQgxg0gRhIIgHg+QCHANBFBFQAFhFApg/QAUgfAUgRQBWBjgDBfQA4gtBLgRQAmgIAbABQgNB/hJBDQBJAEBCAoQAhASASATQhnBRhmgCQAwA0ARBIQAJAkgBAaQiGgMhGhGQgFBGgqA+IgnAwQhVhiABhgg");
	this.shape_304.setTransform(689.425,352.975);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#508147").s().p("ADKHAQAHg2AAhRQAAhGgIhCQgPiMg0h6QgYg9gog8IgUgcIgVgbQglgqgJgIQgJgKgQgNIgbgWIg5gmQgqgbhTghQBUAdAsAZIA7AlQAtAiAKAKQAMAKAlAmIAXAbIAVAcQAtA9AbA8QA6B6AXCSQALBKADBBQADBSgFA8g");
	this.shape_305.setTransform(699.6971,395.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFC62D").s().p("AiqCiQhGhDAAhfQAAheBGhDQBHhCBjAAQBkAABHBCQBGBDAABeQAABfhGBDQhHBChkAAQhjAAhHhCg");
	this.shape_306.setTransform(920.425,327.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F06082").s().p("AgpidQBGhVAtAnQAbAXgIAlQgJAnAOANQAOANAogIQAngIAZAZQAoAqhUA+QhrBPkkBnQBhkNBZhpg");
	this.shape_307.setTransform(943.2452,305.4475);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#F06082").s().p("ACaCLQiGgPkbh8QENh8CNgPQBygMACA5QACAjgiAUQgiAWAAARQAAATAiAVQAiAVgBAiQgDAvhIAAQgQAAgTgDg");
	this.shape_308.setTransform(946.8032,327.0515);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#F06082").s().p("AgjCjQhThlhtkVQEbBcBvBVQBaBCgpAqQgZAagngIQgogJgOAOQgOANAJAmQAIAlgbAXQgOAMgRAAQgiAAgsg1g");
	this.shape_309.setTransform(943.2441,348.7395);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F06082").s().p("AApDbQgWgggTAAQgUAAgWAgQgWAggkgBQg7gDANhlQAQh/CCkMQCDD/AQCGQANBrg9ADIgDAAQgiAAgVgfg");
	this.shape_310.setTransform(920.4728,352.1034);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#F06082").s().p("AhJDMQgbgXAJglQAJgmgPgNQgOgOgoAJQgnAIgZgaQgogpBVg+QBqhPEkhnQhhENhZBpQgwA5gkAAQgRAAgOgMg");
	this.shape_311.setTransform(897.5574,348.7408);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#F06082").s().p("AkHBfQgBgjAhgUQAjgWAAgSQAAgSgjgVQghgVABgiQADg4BqAMQCHAPEbB7QkOB9iNAPQgTACgRAAQhOAAgCgvg");
	this.shape_312.setTransform(894.0218,327.1485);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F06082").s().p("AimAoQhZhDAogqQAZgZAnAIQAoAIAOgNQAPgOgJgmQgJglAbgXQAsgmBBBQQBUBlBsEVQkbhdhvhUg");
	this.shape_313.setTransform(897.5667,305.4381);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#F06082").s().p("AiTiLQgMhrA8gDQAkgBAWAgQAWAgATAAQAUAAAWggQAWggAkABQA8ACgNBlQgQCAiDEMQiDj/gQiGg");
	this.shape_314.setTransform(920.3515,302.0966);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#61A750").s().p("ACdFXQiwjBgKi4QgKi4iWieQgvgxg3gpIgugfQHsDPCJGeQAsCCACCHQABBDgHAqQhXg7hYhgg");
	this.shape_315.setTransform(852.7625,397.975);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#77C04F").s().p("Ai+GwQgOhSgEhYQgLiyAlifQAShPAkhSIASgmIAVglIAXgkIALgSIANgRQALgPAqgxIBfhUIBJgvIAhgVIghAVIgUANIhRBCIgeAdIgdAeQgmAwgLASIgXAjIgUAkIgTAlIgQAmQgfBOgPBQQgdCcASCsQAJBXAQBMQALA0AIAcQALApANAlIg3ATQgWhIgQhfg");
	this.shape_316.setTransform(903.3839,398.625);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AhUBQQgjghAAgvQAAguAjghQAjgiAxAAQAyAAAjAiQAjAhAAAuQAAAvgjAhQgjAigyAAQgxAAgjgig");
	this.shape_317.setTransform(1019.775,195.25);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#9467AA").s().p("AgSFBQgpg9gEhCQhEBCiAAMQgBgYAIgiQAQhFAvgzQhhADhkhPIAxgjQA/gnBGgEQhGg/gNh6IA/AGQBIAQA1AsQgBhcBShfIAlAuQAoA9AFBCQBDhCCBgMIgHA6QgQBFgvAzQBigCBjBOQgSARgfASQg/AnhGAEQBGA/AMB6QgaABgkgHQhJgQg1gsQACBchSBfQgTgQgSgeg");
	this.shape_318.setTransform(1019.85,195.25);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AhUBQQgjghAAgvQAAguAjghQAjgiAxABQAygBAjAiQAjAhAAAuQAAAvgjAhQgjAhgyABQgxgBgjghg");
	this.shape_319.setTransform(1107.325,227.85);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#9467AA").s().p("AgSFBQgog9gFhCQhEBDiAALQgBgYAIgiQAQhFAvgzQhiAChjhOIAxgkQA/gmBGgEQhFhAgNh5IA+AHQBJAPA1ArQgChcBSheIAlAvQAoA7AFBDQBEhCCAgMIgHA6QgRBGguAyQBhgDBkBOQgSASgfASQg/AnhGAEQBGBAANB6QgbAAgkgHQhIgQg2gsQACBdhSBeQgSgRgTgdg");
	this.shape_320.setTransform(1107.4,227.85);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AhUBQQgighgBgvQABguAighQAjghAxAAQAxAAAkAhQAjAhAAAuQAAAvgjAhQgkAhgxAAQgxAAgjghg");
	this.shape_321.setTransform(1193.05,204.275);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#9467AA").s().p("AgTFAQgog7gEhDQhEBDiAALQgBgYAIgjQARhFAugyQhhAChkhOIAxgkQA/glBGgFQhGhAgMh6IA+AHQBJAQA1AsQgDhcBThfIAmAvQAoA7AEBDQBFhDB/gLIgHA7QgQBFgvAyQBigCBjBOQgRARggATQg/AlhGAFQBGBAANB5QgaABglgHQhJgQg1gsQADBchTBfQgTgRgTgeg");
	this.shape_322.setTransform(1193.125,204.275);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AhUBQQgighgBgvQABguAighQAkghAwgBQAxABAjAhQAkAhAAAuQAAAvgkAhQgjAigxgBQgwABgkgig");
	this.shape_323.setTransform(1146.8,111.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#9467AA").s().p("AgTFAQgog7gEhDQhDBDiBAMQgBgZAIgjQARhFAugyQhhADhkhOIAxgkQA/gmBGgFQhGg/gMh7IA+AHQBJAQA1AsQgCheBShdIAmAuQAoA9AEBCQBEhDCAgMIgHA7QgQBFgvAzQBhgCBkBOQgRARggATQg/AmhGAEQBGBAANB5QgaACglgJQhJgPg1gsQADBchTBfQgTgQgTgfg");
	this.shape_324.setTransform(1146.875,111.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AhTBQQgkghAAgvQAAguAkghQAjghAwAAQAyAAAjAhQAjAhAAAuQAAAvgjAhQgjAhgyAAQgwAAgjghg");
	this.shape_325.setTransform(1063.025,120.375);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#9467AA").s().p("AgTFAQgog7gEhDQhFBDh/ALQgBgYAIgjQAQhFAvgyQhhAChkhOIAxgkQA/glBGgFQhGhAgNh5IA/AGQBJAQA1AsQgDhcBThfIAmAvQAoA7AEBDQBEhDCAgLIgHA7QgQBFgvAyQBhgCBkBOQgRARggATQg/AlhGAFQBGBAAMB6QgaABgkgIQhJgQg1gsQACBdhSBeQgTgRgTgeg");
	this.shape_326.setTransform(1063.125,120.375);

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(1191.3,242.8,1,1,0,0,0,82.5,211.6);
	this.instance_3.alpha = 0.1992;

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#77C04F").s().p("AiQQxQhdhMgUhwIgYADQg6AnhDAVQhEAVhHAAQhZAAhUghQhTghhAg8Qg/g8gjhPQgihPAAhVQAAhbAphXQhmgghLhHQg/g8gjhPQgihPAAhUQAAhxA8hkQA9hkBng5QAmgVArgPQgOg0AAg0QAAi2CLiEQCLiEDAAAQBPAABKAZQBIAYA9AtQAhg+A0gwQBChABYgiQBYgjBeAAQBfAABYAjQBYAiBDBAQBDA/AkBUQAlBTAABaQAAAPgCAQQAxgKAvAAQB9AABsA7QBKA0AlAhQA5A0AaA4QBABmAAB5QAAB5hABlQgqBGhEAzQhDAzhRAZQBIBzAACDQAABhgnBaQgoBZhIBEQhHBEhfAmQhfAlhlAAQg+AAg9gPQgjBdhUA6QhXA8hpAAQh4AAhdhMg");
	this.shape_327.setTransform(1109.575,177.775);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#C7733B").s().p("AixNxQANm2ALnBQAVuEgHg5IEQARIAtd2g");
	this.shape_328.setTransform(1112.1,357.95);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#61A750").s().p("AAiMgQhTgBhAg2QhAg1gMhOIgSABQhUA3hkgBQg/gBg6gYQg6gXgrgrQgsgqgXg4QgXg3ABg8QABg/Aeg8QhIgYgzgyQgrgqgYg4QgXg4ABg6QABhOAshGQArhFBIgmQAcgPAegJQgKgmABgkQACh/BihaQBihbCHACQBuACBYBCQAYgrAkghQAvgrA9gXQA+gXBCAAQBCABA9AZQA9AZAuAtQAuAtAZA7QAYA6gBA/IgBAVQAhgGAiAAQBXACBKAqQAzAkAaAYQAnAlASAnQArBJgBBTQgCBUgtBHQgeAwgwAjQgvAig5ARQAxBRgCBcQgBBDgcA+QgdA+gyAvQgzAvhDAZQhCAZhHgBQgnAAgugLQgaBAg7AoQg8AohHAAIgEgBg");
	this.shape_329.setTransform(1068.9754,114.7507);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#61A750").s().p("AAiMgQhTgBhAg2QhAg1gMhPIgSACQhUA3hkgBQg/gBg6gYQg6gXgrgrQgsgqgXg4QgXg3ABg8QABg/Aeg8QhGgYg1gyQgrgqgYg4QgXg4ABg6QABhOAshGQArhFBIgmQAcgPAegJQgKgnABgjQACh/BihaQBihbCHACQBuACBYBCQAYgrAkghQAvgrA9gXQA+gXBCAAQBCABA9AZQA9AZAuAtQAuAtAZA7QAYA6gBA/IgBAVQAigGAhAAQBXACBKAqQAzAjAaAZQAnAlASAnQArBJgBBTQgCBUgtBGQgeAwgwAkQgvAig5ARQAxBRgCBcQgBBDgcA+QgdA+gyAvQgzAvhDAZQhDAZhGgBQgoAAgtgMQgaBBg7AoQg8AohHAAIgEgBg");
	this.shape_330.setTransform(1168.9254,220.0007);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#61A750").s().p("AAiMgQhTgBhBg2Qg/g2gNhOIgRACQhUA4hlgCQg+gBg6gYQg6gYgrgqQgsgrgXg3QgXg4ABg7QABg/Adg8QhGgYg0gyQgrgqgYg4QgXg3ABg7QABhPArhFQAshFBIgnQAdgPAcgIQgJgoABgiQACh/BihaQBjhbCGACQBtABBYBDQAYgpAlgjQAvgrA9gXQA+gXBCAAQBCABA9AZQA9AZAuAtQAuAtAYA6QAZA7gBA/IgCAVQAjgGAgAAQBYACBKAqQAzAkAZAYQAoAlASAnQArBJgBBTQgCBUgtBGQgfAwgvAkQgvAig5ARQAwBQgBBdQgBBDgcA+QgdA+gzAvQgyAvhDAZQhCAZhHgBQgrgBgrgLQgZBBg8AoQg7AohHAAIgEgBg");
	this.shape_331.setTransform(1128.2006,111.2507);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#61A750").s().p("AjMMHQhRgVgwhEQgvhDAJhPIgRgDQgvAQgxACQgyACgvgMQg9gQgxglQgxgkgfg0Qgfg0gIg7QgHg7AQg5QATg/AtgyQg/gogkg7Qgfg0gIg7QgHg7ARg5QAWhMA8g5QA9g4BQgUQAdgHAhgDQABglAKgjQAkh7B4hAQB3hACBAiQBqAcBDBWQAigjAsgYQA6geBCgIQBCgIA/ARQBAARA0AnQA1AnAgA2QAhA3AHA+QAIA/gRA8IgHAUQAiADAgAIQBUAWA9A7QAnAvASAdQAdAuAGAqQAXBPgYBRQgYBRg/A6QgrAng3AXQg3AWg7ACQAZBagaBZQgTBBgsA1QgsA1g+AhQg+AhhHAIQhHAJhEgTQgngKgogVQgqA4hDAYQgoAOgoAAQgfAAgegIg");
	this.shape_332.setTransform(1186.0355,157.6454);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#61A750").s().p("AAiMgQhTgBhBg2Qg/g2gNhOIgRACQhUA3hlgBQg+gBg6gYQg6gYgrgqQgsgrgXg3QgXg4ABg7QABhAAdg7QhGgYg0gyQgsgqgXg4QgXg3ABg7QABhPArhFQArhFBJgnQAdgPAcgIQgJgoABgiQACh/BihaQBjhbCGACQBtABBYBDQAYgpAlgjQAvgrA9gXQA+gXBCAAQBCABA9AZQA9AZAuAtQAuAtAYA6QAZA7gBA/QAAAKgCALQAjgGAgAAQBWABBMArQAzAkAZAYQAoAlASAnQArBJgBBTQgCBUgtBGQgfAwgvAkQgvAig5ARQAwBSgBBbQgBBDgcA+QgdA+gzAvQgyAvhDAZQhCAZhHgBQgrgBgrgLQgZBBg8AoQg7AohHAAIgEgBg");
	this.shape_333.setTransform(1024.5506,195.4507);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#61A750").s().p("AhkLsQhBg0gNhOIgSABQhTA5hlAAQg+AAg6gXQg6gXgtgqQgsgqgYg3QgYg3AAg7QAAhAAdg9QhIgWg0gxQgsgqgYg3QgYg4AAg6QAAhPAqhFQAqhGBIgoQAdgPAcgKQgKgkAAglQAAh/BhhcQBhhcCGAAQBtAABaBCQAYgrAjgiQAvgsA9gYQA9gYBCAAQBCAAA9AYQA+AYAvAsQAuAtAaA6QAZA6AAA+IgBAWQAigHAhAAQBXABBLApQA0AjAZAXQAoAlATAnQAsBIAABUQAABTgsBHQgeAxgvAkQgvAjg4ASQAyBQAABbQAABDgcA/QgbA/gyAvQgyAwhCAaQhCAahHAAQgpAAgtgLQgYBBg7ApQg8AphKAAQhTAAhBg1g");
	this.shape_334.setTransform(1057.725,219.875);

	this.instance_4 = new lib.Path_0();
	this.instance_4.setTransform(220.75,407.75,1,1,0,0,0,59.5,39.6);
	this.instance_4.alpha = 0.1992;

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#77C04F").s().p("AysGuQAJiABlhaQBlhaCIAAIAFAAQgJgigBgiQAAhuBVhPQBUhQB0AAQAyAAAzASQARhjBGg/QBOhGB4AAQBaAABEApQA8AlAjBCQBmhCB6AAQCmAAB4BxQB4BygBCcIgBAdIBAgJQB1ABBlA3IAEADQBiA4A6BcIAsBjQAJAhAEAng");
	this.shape_335.setTransform(160.45,404.475);

	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(135.25,308.4,1,1,0,0,0,45.8,151);
	this.instance_5.alpha = 0.1992;

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#61A750").s().p("AhkBjQgpgpAAg6QAAg5ApgpQAqgpA6AAQA7AAAqApQApApAAA5QAAA6gpApQgqApg7AAQg6AAgqgpg");
	this.shape_336.setTransform(158.95,290.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#77C04F").s().p("AmfGnQizipgEj0QgEjzCsivQCtivD4gEQD3gECyCpQCzCpAED0QAEDyisCwQitCvj4AEIgKAAQjxAAiuilg");
	this.shape_337.setTransform(86.0012,216.125);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#77C04F").s().p("AiyCvQhMhGgChlQgChkBKhIQBKhJBrgCQBpgBBMBGQBNBGACBlQACBkhKBIQhKBJhrACIgEAAQhnAAhLhFg");
	this.shape_338.setTransform(155.25,286.025);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#77C04F").s().p("AjUDKQhZhUAAh2QAAh1BZhUQBYhUB8AAQB9AABYBUQBZBUAAB1QAAB2hZBUQhYBUh9AAQh8AAhYhUg");
	this.shape_339.setTransform(36.775,307.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#C7733B").s().p("AitTFIAjyzIlskSIGOBiIBWwmIB+MoIGLhzIl6EjIANWxg");
	this.shape_340.setTransform(91.15,335.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.instance_5},{t:this.shape_335},{t:this.instance_4},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.instance_3},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.instance_2},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.instance_1},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.instance},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Layer1, new cjs.Rectangle(0,0,1282.4,473.2), null);


(lib.pepohonanliteai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Layer1();
	this.instance.setTransform(641.2,236.6,1,1,0,0,0,641.2,236.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1282.4,473.2);


(lib.awansiangai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// awan siang
	this.instance = new lib.awansiang();
	this.instance.setTransform(1099.45,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2199,357.4);


// stage content:
(lib.gordeev_lab_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [10,40];
	// timeline functions:
	this.frame_10 = function() {
		this.stop();
		
		this.btn_moon.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.play();
		}
		
		this.btn_sun.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			this.play();
		}
	}
	this.frame_40 = function() {
		this.stop();
		
		this.btn_moon.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.play();
		}
		
		this.btn_sun.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(30).call(this.frame_40).wait(20));

	// btn_sun copy
	this.btn_sun = new lib.Tween3();
	this.btn_sun.name = "btn_sun";
	this.btn_sun.setTransform(99.5,82.5);
	this.btn_sun._off = true;
	new cjs.ButtonHelper(this.btn_sun, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_sun).wait(40).to({_off:false},0).to({_off:true},1).wait(19));

	// btn_sun
	this.btn_sun_1 = new lib.Tween3();
	this.btn_sun_1.name = "btn_sun_1";
	this.btn_sun_1.setTransform(99.5,82.5);
	new cjs.ButtonHelper(this.btn_sun_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_sun_1).to({_off:true},1).wait(59));

	// btn_moon
	this.btn_moon = new lib.Symbol2();
	this.btn_moon.name = "btn_moon";
	this.btn_moon.setTransform(1170.5,82.5);
	this.btn_moon._off = true;
	new cjs.ButtonHelper(this.btn_moon, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_moon).wait(10).to({_off:false},0).to({_off:true},1).wait(49));

	// sun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD235").s().p("AnwHRQjOjAAAkRQAAkPDOjBQDOjBEiAAQEjAADODBQBiBbA1B2QA3B6AACFQAAEQjODBQjODBkjAAQkiAAjOjBg");
	this.shape.setTransform(-116.325,321.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F47A51").s().p("AAALuIlhEOIh1mdInIAXICkmPIl/jnIF/jnIikmPIHIAYIB1mdIFhEOIFikOIB1GdIHIgYIikGPIF/DnIl/DnICkGPInIgXIh1Gdg");
	this.shape_1.setTransform(-116.325,321.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F57E50").s().p("AADLrIgCgCIgBABIlaD+IgCgHIh2mFIgIAAIj3AIIi6AHIAAgDICVl+IABgDQi4hzi2h0QC1hyC2hyIADgCIiTl5IgDgLIC2AHID7AJIAIgBIB2mFIACgHIFaD/IABAAIFZj/IADAHIB3GFIAGAAID4gIIC7gGIgBABQg5CVg7CWIghBUIgBADQC4BzC1BzIABAAIgDACQizByi1BxIgDACQBLC9BHC7IAFALQhbgChcgDIj8gKIgGABIh3GHIgCAFIlYj9gAnwnQQjODBAAEPQAAERDODAQDODBEjAAQEiAADPjBQDNjBABkQQgBiFg3h6Qg1h2hhhbQjPjBkiAAQkjAAjODBg");
	this.shape_2.setTransform(-42.2,302.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5834E").s().p("AACLmIgCgBIAAAAQipB5ipB2IgDgGQg9i5g9i8IgHgBIjvAFIi0ACIAAgDQBDi5BFi7IABgCQiwhyith0QCshyCuhyIADgBQhFi4hBi3IgDgKICxACIDyAFIAHgBQA9i8A9i5IADgGIFSDvIFTjvIADAGQA9C5A9C8IAGABIDwgFIC0gCIAAACQg0CQg2CSIgeBTIgBACQCwByCsBzIABAAIgDACQiqByitBwIgDACQBFC4BBC3IADAKIiwgCIj0gFIgGABQg9C9g9C6IgDAEQioh2iph4gAnwnQQjODBAAEPQAAEQDODBQDODAEiAAQEjAADOjAQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjODBg");
	this.shape_3.setTransform(31.925,284.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6874D").s().p("AACLiIgBgCIgBABQimByikBtIgDgFQhAiwg9i0IgHgCQh0ABhzgBIivgCIAAgCQA7i0BAi2IABgCQiphxijh0QCihyCnhwIADgCQg/izg7iyIgBgJICrgCIDpAAIAHgBQA+i0BAixIADgFQCkBuCmByIABAAQCmhyClhuIACAFQBACwA+C1IAGABQB0gBBzABICvACIAAACQguCMgxCOIgcBQIgBACQCpByCiByIABAAIgCACQihByimBvIgDACQBAC0A5CxIACAJQhUAChWAAQh1ABh2gBIgGABQg+C2hACxIgCADQikhtimhxgAnwnQQjODBAAEPQAAERDODAQDODBEjAAQEiAADOjBQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkiAAQkjAAjODBg");
	this.shape_4.setTransform(106.05,265.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F68C4B").s().p("AACLdIgCgBIAAAAQiiBrihBmIgDgFQhCing/itIgGgDQhwAAhvgEIiogGIgBgCQA0iuA6ixIAAgCQighxiahzQCZhyCfhwIACgCQg5iugzitIAAgHIClgGQBwgDBxgCIAGgCQA/isBCipIADgDQChBlCiBrIAAAAQCjhrChhlIADADQBCCoA/CtIAFACQBxACBvADICpAGIAAABQgpCIgsCKIgZBOIAAACQCgBwCZBzIABAAIgDACQiXByieBuIgCADQA6CuAyCsIAAAIIikAHQhxAChyABIgFACQg/CuhCCpIgDADQifhmijhqgAnwnQQjODBAAEPQAAEQDODBQDODAEiAAQEjAADOjAQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjODBg");
	this.shape_5.setTransform(180.175,247.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7904A").s().p("AACLYIgCgBIAAAAQifBkicBeIgDgDQhEifhBimIgGgDQhsgDhrgGIiigJIgBgCQAtipA0isIAAgCQiYhwiRhzIAAAAQCQhyCYhvIABgCQgziqgtinIACgHICegKQBtgFBsgEIAGgCQBAimBEifIAEgDQCdBeCeBkIAAAAQCghkCcheIAEADQBECfBBCmIAFACQBsAEBrAFICjALIAAABQgjCDgnCGIgXBMIAAACQCZBwCPByIAAAAIgBABQiPByiWBuIgCADQA1CqArCmIgCAHIieAKQhsAGhtADIgFACQhBCnhECgIgDACQichdifhkgAnwnRQjODBAAEQQAAEQDODBQDODAEiAAQEkAADNjAQDPjBgBkQQABiFg4h6Qg1h2hihcQjNjAkkAAQkiAAjODAg");
	this.shape_6.setTransform(254.3,228.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F89449").s().p("AACLUIgCgCIAAABQibBdiZBVIgDgCQhGiWhCifIgFgCQhogGhngJIicgNIgCgCQAliiAvioIgBgCQiQhuiGh0IAAAAQCFhyCRhuIABgCQguimglihIADgGQBLgIBNgFQBogJBogFIAFgDQBCieBGiXIAEgCQCZBVCbBdIABAAQCchdCYhVIAEACQBGCXBCCeIAEACQBpAGBnAJICcANIABABQgdCAgjCCIgUBJIAAACQCRBwCGBxIAAAAIgCACQiEBxiPBtIgBADQAuClAkCiIgDAGQhLAIhMAFQhoAJhqAFIgEADQhCCfhGCXIgDABQiYhUichdgAnwnQQjODBAAEPQAAEQDODBQDODAEiAAQEjAADOjAQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjODBg");
	this.shape_7.setTransform(328.425,210.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F89947").s().p("AACLPIgCgCIAAAAQiYBXiUBNIgEgBQhIiOhDiXIgFgDQhkgHhjgLIiWgSIgCgBQAeieAoiiIAAgCQiJhuh8hzIAAAAQB8hyCIhuIABgCQgoiggeicIAFgFICSgSQBjgLBkgHIAFgEQBDiXBIiNIAFgBQCUBMCYBXIAAAAQCZhXCVhMIADABQBJCNBECYIADADQBkAHBjALICWASIABABQgXB7geB+IgRBHIAAACQCJBuB9ByIAAAAIgCABQh7ByiIBsIAAADQApChAcCcIgDAFIiSASQhjAKhmAIIgDACQhECZhJCOIgDAAQiUhMiYhWgAnxnRQjNDBgBEQQABEQDNDBQDODAEjAAQEjAADOjAQDOjBAAkQQAAiFg4h6Qg1h2hhhcQjOjAkjAAQkjAAjODAg");
	this.shape_8.setTransform(402.55,192.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F99D46").s().p("AEnNdQiQhDiVhQIgCgBIAAAAQiUBQiQBEIgFAAQhKiFhEiPIgEgEQhhgKhegNIiQgVIgCgCQAViYAjieIAAgBQiBhthzhzIAAAAQBzhyCBhtIAAgCQgiicgXiXIAGgEQBFgLBHgKQBegNBhgKIAEgEQBEiPBKiGIAGAAQCQBFCUBPIABABQCVhQCQhFIAEAAQBKCFBGCRIADADQBgAJBfAOQBKAKBGAMIABAAQgRB3gZB7IgPBEIABACQCBBuBzBxIAAAAIgCABQhxByiABrIgBADQAjCcAWCXIgGAEQhEAMhHAKQhfANhhAJIgDADQhGCShKCFIgDgBgAnwnRQjODBAAEQQAAEQDODBQDODAEiAAQEjAADOjAQDOjBAAkQQAAiFg3h6Qg1h2hihcQjOjAkjAAQkiAAjODAg");
	this.shape_9.setTransform(476.675,173.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9A244").s().p("AEfNKQiLg8iShJIgCgBIAAAAQiRBJiMA9IgFABQhLh9hHiIIgDgFQhdgLhagQIiKgZIgCgBQAOiTAeiZIgCgBQh5hshphzIAAAAQBphyB5hsIABgCQgdiXgPiSIAGgDICGgaQBbgPBcgMIAEgEQBFiIBMh9IAGABQCNA8CQBJIABAAQCRhJCMg8IAFgBQBMB8BHCJIACAEQBeAMBaAPICJAbIACAAQgMBygUB3IgMBDIABABQB5BtBqBxIAAAAIgCABQhoBxh4BsIAAADQAdCXAOCRIgGADQhBAOhEAMQhcAQhdALIgCAEQhHCJhMB9IgEgBgAnxnRQjODBAAEQQAAEQDODBQDODAEjAAQEjAADOjAQDOjBAAkQQAAiFg4h6Qg1h2hhhcQjOjAkjAAQkjAAjODAg");
	this.shape_10.setTransform(550.8,155.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAA643").s().p("AACLBIgCgBQiQBDiKA1QhQh1hJiFQhYgNhXgSQhFgPhBgQQAHiMAXiVQhyhrhgh0IAAAAQBghyByhrQgYiTgIiOQBDgRBFgPQBWgRBYgOQBJiEBQh2QCLA0CQBDIABABQCQhDCLg1QBPB2BJCEQBZANBXASQBEAPBBAQQgGBtgQB0IgJBAQBzBtBgBxIgCABQhfByhwBqQAYCUAHCNQhCARhFAQQhXAShZANQhJCEhPB2QiKg0iQhDgAnwnQQjODBAAEPQAAEQDODBQDODAEiAAQEjAADOjAQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjODBg");
	this.shape_11.setTransform(624.925,136.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBAA42").s().p("AACK9IgCgCQiNA9iHAsQhRhshKh9QhSgPhQgUIgGgCQhCgQg9gSQgBiGASiPQhqhshXhyIAAgBQBXhxBqhrQgTiOAAiIQA/gSBCgRIAJgDQBOgTBQgPQBKh8BShtQCHAsCNA8IAAAAIABAAQCOg7CGguQBSBuBKB8QBSAPBQAUIAFABQBCARA9ASQAABpgMBvIAAADIgFA7QBqBsBWBxIAAABIgBACQhWBvhoBqQATCOgBCIQg+AUhCAQIgKACQhOAUhQAOQhKB9hSBtQiFgsiOg7gAnwnRQjODBAAEQQAAERDODAQDODAEjABQEigBDOjAQDOjBABkQQgBiFg3h6Qg1h2hihcQjOjAkiAAQkjAAjODAg");
	this.shape_12.setTransform(699.05,151.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBAF40").s().p("AACK3IgCgBQiKA2iDAlQhThkhMh2QhOgRhMgWIgGgCQg+gSg6gTQgIiCAMiJQhjhqhMhzIAAgBQBMhxBihqQgMiJAHiBQA7gVA/gTIAJgDQBKgWBMgQQBLh1BUhlQCDAkCLA2IAAAAIABAAQCKg1CDglQBUBkBMB1QBOARBMAXIAFABQA+ATA6AUQAFBkgGBrIAAADIgEA4QBkBsBMBxIgBABIgBABQhMBwhgBoQANCKgICCQg6AVg/ATIgJADQhLAVhMARQhMB2hTBkQiDgkiKg2gAnwnRQjODBAAEQQAAEQDODBQDODAEiAAQEjAADOjAQDOjBAAkQQAAiFg3h6Qg1h2hihcQjOjAkjAAQkiAAjODAg");
	this.shape_13.setTransform(773.175,166.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FCB33F").s().p("AmpI0QhKgThJgZIgEgCQg8gUg2gVQgPh7AGiEQhbhqhDhzIAAgBQBDhxBZhoQgFiEANh8QA4gWA8gWIAJgDQBFgYBIgSQBOhvBWhbQB/AcCIAvIAAAAIABAAQCHgvCAgcQBWBbBMBuQBMATBHAZIAFACQA7AUA2AWQALBfgBBmIAAADIgBA3QBbBrBDBxIgBAAIgBACQhCBwhYBnQAHCFgQB8Qg2AXg8AVIgJADQhGAYhJATQhOBuhVBbQh/gbiHgvIgCgBQiHAvh/AcQhWhbhNhugAnwnQQjODBAAEPQAAERDODAQDODBEiAAQEkAADNjBQDOjBAAkQQABiFg4h6Qg1h2hihbQjNjBkkAAQkiAAjODBg");
	this.shape_14.setTransform(847.3,181.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCB83D").s().p("AmmIxQhHgWhEgbIgFgCQg3gWgzgXQgWh2AAh+QhUhqg5hyIAAgBQA5hxBShnQAAh/AVh2QA0gYA4gYIAJgDQBCgaBFgVQBOhnBYhSQB8ATCFAoIAAAAIABABQCFgpB7gTQBYBRBOBnQBHAVBEAcIAFABQA3AXAzAXQAQBbAEBiIAAADIABA0QBUBrA6BxIgBAAIAAACQg5BvhRBnQABB/gWB2QgzAZg5AXIgIAEQhDAbhFAUQhPBnhYBSQh7gTiEgoIgCgBQiEAoh7AVQhYhThPhmgAnwnRQjODBAAEQQAAERDODAQDODAEiABQEjgBDOjAQDOjBAAkQQAAiFg3h6Qg1h2hihcQjOjAkjAAQkiAAjODAg");
	this.shape_15.setTransform(921.425,195.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDBC3C").s().p("AmiItQhDgXhBgeIgFgBQgzgZgwgZQgdhvgHh5QhLhpgwhzIAAgBQAwhwBKhnQAFh5AdhwQAwgbA1gZIAIgEQA+gdBCgXQBQhfBahJQB4AKCCAiIAAAAIABAAQCCghB3gMQBaBJBQBgQBEAWA/AeIAFACQA0AYAvAbQAVBVAJBeIAAADIAFAzQBMBpAwBwIAAABIgBABQgwBwhJBlQgEB6geBxQgwAbg1AaIgIADQg+AdhCAWQhRBghZBKQh4gLiBghIgCgBQiBAhh4AMQhahJhPhggAnwnRQjODBAAEQQAAERDODAQDODBEigBQEkABDNjBQDPjBgBkQQAAiFg3h6Qg1h2hihcQjNjAkkAAQkiAAjODAg");
	this.shape_16.setTransform(995.55,210.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDC03B").s().p("AACKlIgCgBQh+Abh0ADQhchAhShYQg/gZg8ggIgEgCQgxgagsgcQglhpgMh0QhDhognhzIAAgBQAnhwBChmQAKhzAkhqQAtgdAxgbIAIgFQA7gfA+gZQBShYBbhBQB1ADB/AbIABAAIABAAQB+gbB0gDQBbBBBSBYQA/AYA9AhIAEACQAwAZAsAdQAbBRANBZIABADQAEAYACAYQBFBpAnBwIgBABIAAACQgmBvhBBlQgLB0glBrQgsAdgxAbIgIAEQg7Agg+AYQhSBYhcBBQh0gCh+gbgAnwnQQjODBAAEPQAAERDODAQDODBEiAAQEjAADOjBQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjODBg");
	this.shape_17.setTransform(1069.675,225.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDC539").s().p("AABKgIgCAAQh6AUhxgGQhdg3hUhRQg7gbg5gjIgEgCQgsgbgogdQgthlgShuQg8hngchzIAAgBQAchwA7hlQAPhuAshjQApggAugdIAIgFQA3giA6gbQBThQBeg4QBxgGB8AUIABAAIABAAQB7gUBwAGQBdA3BTBRQA8AaA5AkIAEABQAsAcAoAeQAhBNATBVIABADQAEAXAEAXQA+BoAdBwIgBABIAAABQgdBvg5BkQgQBvgsBlQgpAfguAeIgIAEQg3Aig7AaQhTBRhdA4IgyACQhaAAhhgQgAnxnRQjODBAAEQQAAERDODAQDODAEjAAQEjAADOjAQDOjBAAkQQAAiFg4h6Qg1h2hhhcQjOjAkjAAQkjAAjODAg");
	this.shape_18.setTransform(1143.8,240.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC938").s().p("AABKbIgCAAQh3ANhtgNQhggvhUhJQg4gdg1glIgDgDQgqgdgkggQg1hdgXhqQg0hmgUhzIAAgBQAUhvAyhlQAWhpAyhdQAmgiArgfIAHgFQAzgkA3gdQBVhKBggvQBtgOB5AOIABAAIABAAQB4gOBtAOQBfAvBUBJQA4AdA1AlIAEADQApAdAkAgQAnBIAXBQIABADIALAsQA2BoAUBwIgBABIAAABQgTBugxBkQgWBqg0BfQglAhgrAgIgHAEQgzAlg4AcQhUBJhgAvQg5AIg7AAQg3AAg7gHgAnwnQQjODBAAEPQAAERDODAQDODBEiAAQEjAADOjBQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjODBg");
	this.shape_19.setTransform(1217.925,255.1505);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECE36").s().p("AACKWIgDAAQh0AHhpgWQhigmhWhCQg0gfgxgnIgDgDQgngfggghQg8hYgdhkQgthmgJhzIAAgBQAJhvArhkQAbhjA6hYQAhgjAogiIAHgFQAwgnAzgeQBWhDBigmQBqgWB2AGIABAAIABABQB1gHBpAWQBhAmBWBCQA0AeAxAoIADADQAnAfAgAiQAsBDAcBMIABADQAIAVAGAVQAuBnAKBvIAAACIAAAAQgKBvgpBiQgcBmg7BYQghAkgoAhIgHAFQgvAngzAfQhWBChiAmQhRARhXAAQgcAAgbgCgAnxnQQjODBAAEPQAAERDODAQDPDBEiAAQEjAADOjBQDOjBAAkQQAAiFg3h6Qg1h2hihbQjOjBkjAAQkiAAjPDBg");
	this.shape_20.setTransform(1292.05,269.9589);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:-116.325,y:321.175}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:-42.175,y:302.725}}]},1).to({state:[{t:this.shape_3},{t:this.shape,p:{x:31.925,y:284.275}}]},1).to({state:[{t:this.shape_4},{t:this.shape,p:{x:106.075,y:265.825}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:180.175,y:247.375}}]},1).to({state:[{t:this.shape_6},{t:this.shape,p:{x:254.325,y:228.925}}]},1).to({state:[{t:this.shape_7},{t:this.shape,p:{x:328.425,y:210.475}}]},1).to({state:[{t:this.shape_8},{t:this.shape,p:{x:402.525,y:192.025}}]},1).to({state:[{t:this.shape_9},{t:this.shape,p:{x:476.675,y:173.575}}]},1).to({state:[{t:this.shape_10},{t:this.shape,p:{x:550.775,y:155.125}}]},1).to({state:[{t:this.shape_11},{t:this.shape,p:{x:624.925,y:136.675}}]},1).to({state:[{t:this.shape_12},{t:this.shape,p:{x:699.075,y:151.475}}]},1).to({state:[{t:this.shape_13},{t:this.shape,p:{x:773.175,y:166.275}}]},1).to({state:[{t:this.shape_14},{t:this.shape,p:{x:847.325,y:181.125}}]},1).to({state:[{t:this.shape_15},{t:this.shape,p:{x:921.425,y:195.925}}]},1).to({state:[{t:this.shape_16},{t:this.shape,p:{x:995.575,y:210.725}}]},1).to({state:[{t:this.shape_17},{t:this.shape,p:{x:1069.675,y:225.525}}]},1).to({state:[{t:this.shape_18},{t:this.shape,p:{x:1143.775,y:240.325}}]},1).to({state:[{t:this.shape_19},{t:this.shape,p:{x:1217.925,y:255.175}}]},1).to({state:[{t:this.shape_20},{t:this.shape,p:{x:1292.025,y:269.975}}]},1).to({state:[{t:this.shape,p:{x:1366.175,y:284.775}}]},1).to({state:[]},1).wait(39));

	// moon
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1425.65,312.4,1,1,0,0,0,70.3,63.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1).to({regY:63.5,x:1384.75,y:291.3},0).wait(1).to({x:1343.95,y:271.4},0).wait(1).to({x:1303.2,y:252.6},0).wait(1).to({x:1262.55,y:234.95},0).wait(1).to({x:1221.95,y:218.4},0).wait(1).to({x:1181.45,y:202.95},0).wait(1).to({x:1141,y:188.6},0).wait(1).to({x:1100.6,y:175.35},0).wait(1).to({x:1060.25,y:163.2},0).wait(1).to({x:1020,y:152.15},0).wait(1).to({x:979.8,y:142.25},0).wait(1).to({x:939.7,y:133.4},0).wait(1).to({x:899.65,y:125.7},0).wait(1).to({x:859.65,y:119.05},0).wait(1).to({x:819.7,y:113.55},0).wait(1).to({x:779.85,y:109.15},0).wait(1).to({x:740.05,y:105.85},0).wait(1).to({x:700.35,y:103.65},0).wait(1).to({x:660.65,y:102.55},0).wait(1).to({x:621.05},0).wait(1).to({x:581.5,y:103.65},0).wait(1).to({x:542.05,y:105.85},0).wait(1).to({x:502.6,y:109.15},0).wait(1).to({x:463.25,y:113.55},0).wait(1).to({x:423.95,y:119.05},0).wait(1).to({x:384.75,y:125.7},0).wait(1).to({x:345.55,y:133.4},0).wait(1).to({x:306.45,y:142.25},0).wait(1).to({x:267.4,y:152.15},0).wait(1).to({x:228.45,y:163.2},0).wait(1).to({x:189.5,y:175.35},0).wait(1).to({x:150.65,y:188.6},0).wait(1).to({x:111.85,y:202.95},0).wait(1).to({x:73.1,y:218.4},0).wait(1).to({x:34.45,y:234.95},0).wait(1).to({x:-4.2,y:252.6},0).wait(1).to({x:-42.75,y:271.4},0).wait(1).to({x:-81.25,y:291.3},0).wait(1).to({x:-119.75,y:312.3},0).wait(1));

	// stars
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1,3,true).p("EBHugEjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgEBGfAT0IBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgEAyegUiIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgALpxaIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAWikjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAR+QsIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEArWADAIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgA1PxaIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEgtngC+IBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAgIi+IBOgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAzhJkIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEhK/gIZIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgEgyUARjIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLg");
	this.shape_21.setTransform(613.575,252.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_22.setTransform(613.575,252.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1,3,true).p("EAyegUiIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEBHugEjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgEBGfAT0IBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgALpxaIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAWikjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAgIi+IBOgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAR+QsIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEArWADAIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgA1PxaIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEgtngC+IBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEgyUARjIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAzhJkIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEhK/gIZIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLg");
	this.shape_23.setTransform(639.475,234.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#404040").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_24.setTransform(639.475,234.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1,3,true).p("EBHugEjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgEAyegUiIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEBGfAT0IBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgAWikjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAgIi+IBOgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgALpxaIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAR+QsIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEArWADAIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgA1PxaIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEgtngC+IBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEgyUARjIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAzhJkIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEhK/gIZIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLg");
	this.shape_25.setTransform(665.375,215.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#808080").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_26.setTransform(665.375,215.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("EBHugEjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgEAyegUiIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEArWADAIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgEBGfAT0IBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgAWikjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgALpxaIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAgIi+IBOgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAR+QsIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgA1PxaIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEgtngC+IBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEgyUARjIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAzhJkIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEhK/gIZIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLg");
	this.shape_27.setTransform(691.225,196.725);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BFBFBF").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_28.setTransform(691.225,196.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_29.setTransform(717.125,177.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E5E5E5").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_30.setTransform(717.075,178.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_31.setTransform(716.975,178.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B2B2B2").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_32.setTransform(716.925,179.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_33.setTransform(716.875,179.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_34.setTransform(716.725,180.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D4D4D").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_35.setTransform(716.675,181.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_36.setTransform(716.625,181.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1A1A1A").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_37.setTransform(716.525,182.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22,p:{x:613.575,y:252.975}},{t:this.shape_21}]},20).to({state:[{t:this.shape_24,p:{x:639.475,y:234.225}},{t:this.shape_23}]},1).to({state:[{t:this.shape_26,p:{x:665.375,y:215.475}},{t:this.shape_25}]},1).to({state:[{t:this.shape_28,p:{x:691.225,y:196.725}},{t:this.shape_27,p:{x:691.225,y:196.725}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_28,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_26,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_24,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_22,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_24,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_26,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_28,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_28,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_26,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_24,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_22,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_24,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_26,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_28,p:{x:717.125,y:177.975}},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},5).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_29},{t:this.shape_27,p:{x:717.125,y:177.975}}]},1).to({state:[{t:this.shape_30},{t:this.shape_27,p:{x:717.075,y:178.475}}]},1).to({state:[{t:this.shape_31},{t:this.shape_27,p:{x:716.975,y:178.925}}]},1).to({state:[{t:this.shape_32},{t:this.shape_27,p:{x:716.925,y:179.425}}]},1).to({state:[{t:this.shape_33},{t:this.shape_27,p:{x:716.875,y:179.925}}]},1).to({state:[{t:this.shape_26,p:{x:716.825,y:180.425}},{t:this.shape_27,p:{x:716.825,y:180.425}}]},1).to({state:[{t:this.shape_34},{t:this.shape_27,p:{x:716.725,y:180.875}}]},1).to({state:[{t:this.shape_35},{t:this.shape_27,p:{x:716.675,y:181.375}}]},1).to({state:[{t:this.shape_36},{t:this.shape_27,p:{x:716.625,y:181.875}}]},1).to({state:[{t:this.shape_37},{t:this.shape_27,p:{x:716.525,y:182.325}}]},1).to({state:[{t:this.shape_22,p:{x:716.475,y:182.825}},{t:this.shape_27,p:{x:716.475,y:182.825}}]},1).wait(1));

	// stars
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1,3,true).p("EBHugEjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgEBGfAT0IBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgEAyegUiIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgEArWADAIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgALpxaIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAWikjIBPgCIAahKIAaBKIBPACIg/AwIAXBMIhBgtIhBAtIAWhMgAR+QsIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgA1PxaIBPgCIAahKIAaBKIBPACIg+AwIAWBMIhBgtIhBAtIAXhMgAgIi+IBOgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEgtngC+IBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgAzhJkIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLgEhK/gIZIBPgCIAahLIAaBLIBPACIg+AwIAWBLIhBgsIhBAsIAXhLgEgyUARjIBPgCIAahLIAaBLIBPACIg/AwIAXBLIhBgsIhBAsIAWhLg");
	this.shape_38.setTransform(621.425,162.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_39.setTransform(621.425,162.825);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BFBFBF").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_40.setTransform(621.425,162.825);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#808080").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_41.setTransform(621.425,162.825);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#404040").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_42.setTransform(621.425,162.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_43.setTransform(621.425,162.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_44.setTransform(621.425,162.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_45.setTransform(621.425,162.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_46.setTransform(621.425,162.825);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_47.setTransform(621.425,162.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E5E5E5").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_48.setTransform(621.425,162.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B2B2B2").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_49.setTransform(621.425,162.825);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D4D4D").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_50.setTransform(621.425,162.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#1A1A1A").s().p("EBIIAVDIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgEgwrASyIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgATnR7IhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgAx4KzIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEAs/AEPIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgABghvIhBAsIAWhLIg9gwIBOgCIAahLIAaBLIBPACIg/AwIAXBLgEgr+gBvIhBAsIAWhLIg+gwIBPgCIAahLIAaBLIBPACIg/AwIAXBLgEBJXgDUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAYLjUIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgEhJWgHKIhBAsIAXhLIg/gwIBPgCIAahLIAaBLIBPACIg+AwIAWBLgANSwLIhBAtIAWhMIg+gwIBPgCIAahKIAaBKIBPACIg/AwIAXBMgAzmwLIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMgEA0HgTTIhBAtIAXhMIg/gwIBPgCIAahKIAaBKIBPACIg+AwIAWBMg");
	this.shape_51.setTransform(621.425,162.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38}]},20).to({state:[{t:this.shape_40},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_38}]},1).to({state:[{t:this.shape_42},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_38}]},1).to({state:[{t:this.shape_42},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_38}]},1).to({state:[{t:this.shape_40},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_40},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_38}]},1).to({state:[{t:this.shape_42},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_38}]},1).to({state:[{t:this.shape_42},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_38}]},1).to({state:[{t:this.shape_40},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_40},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_38}]},1).to({state:[{t:this.shape_42},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_38}]},1).to({state:[{t:this.shape_44},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_38}]},1).to({state:[{t:this.shape_46},{t:this.shape_38}]},1).to({state:[{t:this.shape_47},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_48},{t:this.shape_38}]},1).to({state:[{t:this.shape_47},{t:this.shape_38}]},1).to({state:[{t:this.shape_49},{t:this.shape_38}]},1).to({state:[{t:this.shape_46},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_38}]},1).to({state:[{t:this.shape_50},{t:this.shape_38}]},1).to({state:[{t:this.shape_44},{t:this.shape_38}]},1).to({state:[{t:this.shape_51},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_38}]},1).wait(1));

	// forest
	this.instance_1 = new lib.pepohonanliteai("synched",0);
	this.instance_1.setTransform(641.2,485.4,1,1,0,0,0,641.2,236.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// sky
	this.instance_2 = new lib.awansiangai("synched",0);
	this.instance_2.setTransform(1099.5,244.45,1,1,0,0,0,1099.5,178.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:1083.95},0).wait(1).to({x:1068.35},0).wait(1).to({x:1052.8},0).wait(1).to({x:1037.2},0).wait(1).to({x:1021.65},0).wait(1).to({x:1006.05},0).wait(1).to({x:990.5},0).wait(1).to({x:974.9},0).wait(1).to({x:959.35},0).wait(1).to({x:943.75},0).wait(1).to({x:928.2},0).wait(1).to({x:912.6},0).wait(1).to({x:897.05},0).wait(1).to({x:881.45},0).wait(1).to({x:865.9},0).wait(1).to({x:850.3},0).wait(1).to({x:834.75},0).wait(1).to({x:819.15},0).wait(1).to({x:803.6},0).wait(1).to({x:788},0).wait(1).to({x:772.45},0).wait(1).to({x:756.85},0).wait(1).to({x:741.3},0).wait(1).to({x:725.7},0).wait(1).to({x:710.15},0).wait(1).to({x:694.55},0).wait(1).to({x:679},0).wait(1).to({x:663.4},0).wait(1).to({x:647.85},0).wait(1).to({x:632.25},0).wait(1).to({x:616.7},0).wait(1).to({x:601.1},0).wait(1).to({x:585.55},0).wait(1).to({x:569.95},0).wait(1).to({x:554.4},0).wait(1).to({x:538.8},0).wait(1).to({x:523.25},0).wait(1).to({x:507.65},0).wait(1).to({x:492.1},0).wait(1).to({x:476.5},0).wait(1).to({x:460.95},0).wait(1).to({x:445.35},0).wait(1).to({x:429.8},0).wait(1).to({x:414.2},0).wait(1).to({x:398.65},0).wait(1).to({x:383.05},0).wait(1).to({x:367.5},0).wait(1).to({x:351.9},0).wait(1).to({x:336.35},0).wait(1).to({x:320.75},0).wait(1).to({x:305.2},0).wait(1).to({x:289.6},0).wait(1).to({x:274.05},0).wait(1).to({x:258.45},0).wait(1).to({x:242.9},0).wait(1).to({x:227.3},0).wait(1).to({x:211.75},0).wait(1).to({x:196.15},0).wait(1).to({x:180.55},0).wait(1));

	// background
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CBEAED").s().p("EjH/A4QMAAAhwfMGP/AAAMAAABwfg");
	this.shape_52.setTransform(640.1359,362,0.5014,1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CEEAE8").s().p("EhkQA4QMAAAhwfMDIhAAAMAAABwfg");
	this.shape_53.setTransform(640.075,362);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0EAE3").s().p("EhkOA4QMAAAhwfMDIdAAAMAAABwfg");
	this.shape_54.setTransform(640,362);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D3EADE").s().p("EhkNA4QMAAAhwfMDIbAAAMAAABwfg");
	this.shape_55.setTransform(639.975,362);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D5EAD9").s().p("EhkMA4QMAAAhwfMDIZAAAMAAABwfg");
	this.shape_56.setTransform(639.925,362);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D8EBD4").s().p("EhkKA4QMAAAhwfMDIVAAAMAAABwfg");
	this.shape_57.setTransform(639.875,362);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DAEBCF").s().p("EhkJA4QMAAAhwfMDITAAAMAAABwfg");
	this.shape_58.setTransform(639.8,362);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DDEBCA").s().p("EhkHA4QMAAAhwfMDIQAAAMAAABwfg");
	this.shape_59.setTransform(639.75,362);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DFEBC5").s().p("EhkGA4QMAAAhwfMDINAAAMAAABwfg");
	this.shape_60.setTransform(639.725,362);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E2EBC0").s().p("EhkFA4QMAAAhwfMDILAAAMAAABwfg");
	this.shape_61.setTransform(639.65,362);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E5EBBC").s().p("EhkDA4QMAAAhwfMDIIAAAMAAABwfg");
	this.shape_62.setTransform(639.6,362);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E7EBB7").s().p("EhkCA4QMAAAhwfMDIFAAAMAAABwfg");
	this.shape_63.setTransform(639.55,362);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EAEBB2").s().p("EhkBA4QMAAAhwfMDIDAAAMAAABwfg");
	this.shape_64.setTransform(639.475,362);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#ECEBAD").s().p("EhkAA4QMAAAhwfMDIBAAAMAAABwfg");
	this.shape_65.setTransform(639.45,362);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EFEBA8").s().p("Ehj+A4QMAAAhwfMDH9AAAMAAABwfg");
	this.shape_66.setTransform(639.4,362);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F1ECA3").s().p("Ehj8A4QMAAAhwfMDH5AAAMAAABwfg");
	this.shape_67.setTransform(639.35,362);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F4EC9E").s().p("Ehj7A4QMAAAhwfMDH3AAAMAAABwfg");
	this.shape_68.setTransform(639.275,362);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F6EC99").s().p("Ehj6A4QMAAAhwfMDH1AAAMAAABwfg");
	this.shape_69.setTransform(639.225,362);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F9EC94").s().p("Ehj5A4QMAAAhwfMDHyAAAMAAABwfg");
	this.shape_70.setTransform(639.2,362);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FBEC8F").s().p("Ehj3A4QMAAAhwfMDHvAAAMAAABwfg");
	this.shape_71.setTransform(639.125,362);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FEEC8A").s().p("EjH/A4QMAAAhwfMGP/AAAMAAABwfg");
	this.shape_72.setTransform(639.082,362,0.4993,1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F4E589").s().p("Ehj4A4QMAAAhwfMDHxAAAMAAABwfg");
	this.shape_73.setTransform(639.075,362);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EADD87").s().p("Ehj6A4QMAAAhwfMDH1AAAMAAABwfg");
	this.shape_74.setTransform(639.075,362);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E0D686").s().p("Ehj8A4QMAAAhwfMDH5AAAMAAABwfg");
	this.shape_75.setTransform(639.075,362);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D6CE85").s().p("Ehj+A4QMAAAhwfMDH9AAAMAAABwfg");
	this.shape_76.setTransform(639.075,362);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CCC784").s().p("EhkAA4QMAAAhwfMDIBAAAMAAABwfg");
	this.shape_77.setTransform(639.075,362);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C2C082").s().p("EhkCA4QMAAAhwfMDIFAAAMAAABwfg");
	this.shape_78.setTransform(639.075,362);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B8B881").s().p("EhkEA4QMAAAhwfMDIJAAAMAAABwfg");
	this.shape_79.setTransform(639.075,362);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#AEB180").s().p("EhkGA4QMAAAhwfMDINAAAMAAABwfg");
	this.shape_80.setTransform(639.075,362);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A4A97E").s().p("EhkIA4QMAAAhwfMDIRAAAMAAABwfg");
	this.shape_81.setTransform(639.075,362);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9BA27D").s().p("EhkKA4QMAAAhwfMDIVAAAMAAABwfg");
	this.shape_82.setTransform(639.1,362);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#919B7C").s().p("EhkMA4QMAAAhwfMDIYAAAMAAABwfg");
	this.shape_83.setTransform(639.1,362);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#87937A").s().p("EhkNA4QMAAAhwfMDIbAAAMAAABwfg");
	this.shape_84.setTransform(639.1,362);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#7D8C79").s().p("EhkPA4QMAAAhwfMDIgAAAMAAABwfg");
	this.shape_85.setTransform(639.1,362);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#738478").s().p("EhkSA4QMAAAhwfMDIlAAAMAAABwfg");
	this.shape_86.setTransform(639.1,362);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#697D77").s().p("EhkUA4QMAAAhwfMDIpAAAMAAABwfg");
	this.shape_87.setTransform(639.1,362);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5F7675").s().p("EhkWA4QMAAAhwfMDIsAAAMAAABwfg");
	this.shape_88.setTransform(639.1,362);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#556E74").s().p("EhkXA4QMAAAhwfMDIvAAAMAAABwfg");
	this.shape_89.setTransform(639.1,362);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4B6773").s().p("EhkZA4QMAAAhwfMDI0AAAMAAABwfg");
	this.shape_90.setTransform(639.1,362);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#415F71").s().p("EhkcA4QMAAAhwfMDI5AAAMAAABwfg");
	this.shape_91.setTransform(639.1,362);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#375870").s().p("EjH/A4QMAAAhwfMGP/AAAMAAABwfg");
	this.shape_92.setTransform(639.0969,362,0.5024,1);
	this.shape_92._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_92}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_92).wait(40).to({_off:false},0).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-279,362,2478,360);
// library properties:
lib.properties = {
	id: 'CCD9F82E376ED344BA47113ABFA57D24',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/gordeev_lab_10_atlas_1.png?1672169535357", id:"gordeev_lab_10_atlas_1"}
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
an.compositions['CCD9F82E376ED344BA47113ABFA57D24'] = {
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