class canvasTextbox {
	constructor() {
		this.css = {"module":".vinh_canvas-textbox__module","content":".vinh_canvas-textbox__content","title":".vinh_canvas-textbox__title","text":".vinh_canvas-textbox__text","btn":".vinh_canvas-textbox__btn","canvas":".vinh_canvas-textbox__canvas","":""};
		this.apply();
	}
	
	apply() {
		const { css } = this;
		$(css.canvas).each(function(index) {
			var self = $(this),
				canvasId = $('canvas', self).attr('id', self.attr('class') + '-' + index),
				ww = window.innerWidth,
				rangeY = 180,
				cst = 40,
				_level = .65,
				_count = 6;
			if (ww < 992) {
				_count = 5;
				rangeY = 150;
				cst = 30;
			} else if (ww < 768) {
				_count = 4;
				rangeY = 100;
				cst = 20;
			} else if (ww < 640) {
				_count = 3;
				rangeY = 30;
				cst = 10;
				_level = .75;
			}
			var c = document.getElementById(self.attr('class') + '-' + index),
				ctx = c.getContext('2d'),
				cw = c.width = self.width(),
				ch = c.height = self.height(),
				points = [],
				tick = 0,
				opt = {
					count: _count,
					range: {
						x: 30,
						y: rangeY
					},
					duration: {
						min: 200,
						max: 300
					},
					thickness: 10,
					level: _level,
					curved: true,
					gradient: {
						colorLeft: self.attr('data-gradient-left'),
						colorRight: self.attr('data-gradient-right')
					}
				},
				rand = function(min, max) {
					return Math.floor( (Math.random() * (max - min + 1) ) + min);
				},
				ease = function (t, b, c, d) {
					if ((t/=d/2) < 1) return c/2*t*t + b;
					return -c/2 * ((--t)*(t-2) - 1) + b;
				};
			
			ctx.lineJoin = 'round';
			ctx.lineWidth = opt.thickness;
			
			var Point = function(config) {
				this.anchorX = config.x;
				this.anchorY = config.y;
				this.x = config.x;
				this.y = config.y;
				this.setTarget();  
			};
			
			Point.prototype.setTarget = function() {
				this.initialX = this.x;
				this.initialY = this.y;
				this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
				this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
				this.tick = 0;
				this.duration = rand(opt.duration.min, opt.duration.max);
			}
			
			Point.prototype.update = function() {
				var dx = this.targetX - this.x;
				var dy = this.targetY - this.y;
				var dist = Math.sqrt(dx * dx + dy * dy);
				
				if(Math.abs(dist) <= 0) {
					this.setTarget();
				} else {       
					var t = this.tick;
					var b = this.initialY;
					var c = this.targetY - this.initialY;
					var d = this.duration;
					this.y = ease(t, b, c, d);
				
					b = this.initialX;
					c = this.targetX - this.initialX;
					d = this.duration;
					this.x = ease(t, b, c, d);
				
					this.tick++;
				}
			};
			
			var updatePoints = function() {
				var i = points.length;
				while(i--){
					points[i].update();
				}
			};
		
			var renderShape = function(opacity, cst) {
				ctx.beginPath();
				var pointCount = points.length;
				ctx.moveTo(points[0].x, points[0].y);	  
				var i;
				for (i = 0; i < pointCount - 1; i++) {
					var c = (points[i].x + points[i + 1].x) / 2;
					var d = (points[i].y + points[i + 1].y) / 2;
					ctx.quadraticCurveTo(points[i].x - cst, points[i].y - cst, c - cst, d - cst);
				}
				ctx.lineTo(-opt.range.x - cst*2 - opt.thickness, ch + opt.thickness);
				ctx.lineTo(cw + opt.range.x - cst*2 + opt.thickness, ch + opt.thickness);
				ctx.closePath();
				var grd = ctx.createLinearGradient(0, 0, self.width()/1.5, 0);
				grd.addColorStop(0, opt.gradient.colorLeft);
				grd.addColorStop(1, opt.gradient.colorRight);
				ctx.globalAlpha = opacity;
				ctx.fillStyle = grd;
				ctx.fill();
			};
			
			var clear = function() {
				ctx.clearRect(0, 0, cw, ch);
			};
			
			var loop = function() {
				window.requestAnimFrame(loop, c);
				clear();
				updatePoints();
		
				renderShape(0.2, cst);
				renderShape(0.4, cst/2);
				renderShape(1, 0);
			};
			
			var i = opt.count + 2;
			var spacing = (cw + (opt.range.x * 2)) / (opt.count-1);
			while(i--) {
				points.push(new Point({
					x: (spacing * (i - 1)) - opt.range.x,
					y: ch - (ch * opt.level)
				}));
			}
			
			window.requestAnimFrame = function() {
				return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a) {window.setTimeout(a,1E3/60)}
			}();
			
			loop();
		});
		
	}
}
new canvasTextbox();
