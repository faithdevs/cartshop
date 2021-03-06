/* eslint-disable no-undef */
!(function(t, e) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = e())
		: "function" == typeof define && define.amd
		? define("VueToast", [], e)
		: "object" == typeof exports
		? (exports.VueToast = e())
		: (t.VueToast = e());
})(this, function() {
	return (function(t) {
		var e = {};
		function s(o) {
			if (e[o]) return e[o].exports;
			var n = (e[o] = { i: o, l: !1, exports: {} });
			return t[o].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
		}
		return (
			(s.m = t),
			(s.c = e),
			(s.d = function(t, e, o) {
				s.o(t, e) ||
					Object.defineProperty(t, e, { enumerable: !0, get: o });
			}),
			(s.r = function(t) {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(t, "__esModule", { value: !0 });
			}),
			(s.t = function(t, e) {
				if ((1 & e && (t = s(t)), 8 & e)) return t;
				if (4 & e && "object" == typeof t && t && t.__esModule)
					return t;
				var o = Object.create(null);
				if (
					(s.r(o),
					Object.defineProperty(o, "default", {
						enumerable: !0,
						value: t
					}),
					2 & e && "string" != typeof t)
				)
					for (var n in t)
						s.d(
							o,
							n,
							function(e) {
								return t[e];
							}.bind(null, n)
						);
				return o;
			}),
			(s.n = function(t) {
				var e =
					t && t.__esModule
						? function() {
								return t.default;
						  }
						: function() {
								return t;
						  };
				return s.d(e, "a", e), e;
			}),
			(s.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(s.p = ""),
			s((s.s = 2))
		);
	})({
		2: function(t, e, s) {
			"use strict";
			s.r(e),
				s.d(e, "Component", function() {
					return a;
				}),
				s.d(e, "Positions", function() {
					return i;
				});
			class o {
				constructor(t, e) {
					(this.startedAt = Date.now()),
						(this.callback = t),
						(this.delay = e),
						(this.timer = setTimeout(t, e));
				}
				pause() {
					this.stop(), (this.delay -= Date.now() - this.startedAt);
				}
				resume() {
					this.stop(),
						(this.startedAt = Date.now()),
						(this.timer = setTimeout(this.callback, this.delay));
				}
				stop() {
					clearTimeout(this.timer);
				}
			}
			var n,
				i = Object.freeze({
					TOP_RIGHT: "top-right",
					TOP: "top",
					TOP_LEFT: "top-left",
					BOTTOM_RIGHT: "bottom-right",
					BOTTOM: "bottom",
					BOTTOM_LEFT: "bottom-left"
				}),
				r = {
					all: (n = n || new Map()),
					on: function(t, e) {
						var s = n.get(t);
						(s && s.push(e)) || n.set(t, [e]);
					},
					off: function(t, e) {
						var s = n.get(t);
						s && s.splice(s.indexOf(e) >>> 0, 1);
					},
					emit: function(t, e) {
						(n.get(t) || []).slice().map(function(t) {
							t(e);
						}),
							(n.get("*") || []).slice().map(function(s) {
								s(t, e);
							});
					}
				};
			var a = (function(t, e, s, o, n, i, r, a) {
					var u,
						c = "function" == typeof t ? t.options : t;
					if (
						(e &&
							((c.render = e),
							(c.staticRenderFns = s),
							(c._compiled = !0)),
						o && (c.functional = !0),
						i && (c._scopeId = "data-v-" + i),
						r
							? ((u = function(t) {
									(t =
										t ||
										(this.$vnode &&
											this.$vnode.ssrContext) ||
										(this.parent &&
											this.parent.$vnode &&
											this.parent.$vnode.ssrContext)) ||
										"undefined" ==
											typeof __VUE_SSR_CONTEXT__ ||
										(t = __VUE_SSR_CONTEXT__),
										n && n.call(this, t),
										t &&
											t._registeredComponents &&
											t._registeredComponents.add(r);
							  }),
							  (c._ssrRegister = u))
							: n &&
							  (u = a
									? function() {
											n.call(
												this,
												(c.functional
													? this.parent
													: this
												).$root.$options.shadowRoot
											);
									  }
									: n),
						u)
					)
						if (c.functional) {
							c._injectStyles = u;
							var l = c.render;
							c.render = function(t, e) {
								return u.call(e), l(t, e);
							};
						} else {
							var p = c.beforeCreate;
							c.beforeCreate = p ? [].concat(p, u) : [u];
						}
					return { exports: t, options: c };
				})(
					{
						name: "toast",
						props: {
							message: { type: String, required: !0 },
							type: { type: String, default: "success" },
							position: { type: String, default: "bottom-right" },
							duration: { type: Number, default: 3e3 },
							dismissible: { type: Boolean, default: !0 },
							onDismiss: {
								type: Function,
								default: function() {}
							},
							onClick: { type: Function, default: function() {} },
							queue: Boolean,
							container: {
								type: [Object, Function, i],
								default: null
							}
						},
						data: function() {
							return {
								isActive: !1,
								parentTop: null,
								parentBottom: null
							};
						},
						beforeMount: function() {
							this.setupContainer();
						},
						mounted: function() {
							this.showNotice(),
								r.on("toast-clear", this.dismiss);
						},
						methods: {
							setupContainer: function() {
								if (
									((this.parentTop = document.querySelector(
										".notices.is-top"
									)),
									(this.parentBottom = document.querySelector(
										".notices.is-bottom"
									)),
									!this.parentTop || !this.parentBottom)
								) {
									this.parentTop ||
										((this.parentTop = document.createElement(
											"div"
										)),
										(this.parentTop.className =
											"notices is-top")),
										this.parentBottom ||
											((this.parentBottom = document.createElement(
												"div"
											)),
											(this.parentBottom.className =
												"notices is-bottom"));
									var t = this.container || document.body;
									t.appendChild(this.parentTop),
										t.appendChild(this.parentBottom);
									this.container &&
										(this.parentTop.classList.add(
											"is-custom-parent"
										),
										this.parentBottom.classList.add(
											"is-custom-parent"
										));
								}
							},
							shouldQueue: function() {
								return (
									!!this.queue &&
									(this.parentTop.childElementCount > 0 ||
										this.parentBottom.childElementCount > 0)
								);
							},
							dismiss() {
								this.timer.stop(),
									clearTimeout(this.queueTimer),
									(this.isActive = !1),
									setTimeout(() => {
										var t;
										this.onDismiss.apply(null, arguments),
											this.$destroy(),
											void 0 !== (t = this.$el).remove
												? t.remove()
												: t.parentNode.removeChild(t);
									}, 150);
							},
							showNotice() {
								this.shouldQueue()
									? (this.queueTimer = setTimeout(
											this.showNotice,
											250
									  ))
									: (this.correctParent.insertAdjacentElement(
											"afterbegin",
											this.$el
									  ),
									  (this.isActive = !0),
									  (this.timer = new o(
											this.dismiss,
											this.duration
									  )));
							},
							whenClicked() {
								this.dismissible &&
									(this.onClick.apply(null, arguments),
									this.dismiss());
							},
							toggleTimer(t) {
								this.pauseOnHover &&
									(t
										? this.timer.pause()
										: this.timer.resume());
							}
						},
						computed: {
							correctParent: function() {
								switch (this.position) {
									case "top-right":
									case "top":
									case "top-left":
										return this.parentTop;
									case "bottom-right":
									case "bottom":
									case "bottom-left":
										return this.parentBottom;
								}
							},
							transition: function() {
								switch (this.position) {
									case "top-right":
									case "top":
									case "top-left":
										return {
											enter: "fadeInDown",
											leave: "fadeOut"
										};
									case "bottom-right":
									case "bottom":
									case "bottom-left":
										return {
											enter: "fadeInUp",
											leave: "fadeOut"
										};
								}
							}
						}
					},
					function() {
						var t = this,
							e = t.$createElement,
							n = t._self._c || e;
						return n(
							"transition",
							{
								attrs: {
									"enter-active-class": t.transition.enter,
									"leave-active-class": t.transition.leave
								}
							},
							[
								n(
									"div",
									{
										directives: [
											{
												name: "show",
												rawName: "v-show",
												value: t.isActive,
												expression: "isActive"
											}
										],
										staticClass: "toast",
										class: [
											"toast-" + t.type,
											"is-" + t.position
										],
										attrs: { role: "alert" },
										on: { click: t.whenClicked }
									},
									[
										n("div", { staticClass: "toast-icon" }),
										t._v(" "),
										n("p", { staticClass: "toast-text" }, [
											t._v(t._s(t.message))
										])
									]
								)
							]
						);
					},
					[],
					!1,
					null,
					null,
					null
				).exports,
				u = function(t) {
					var e =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {};
					return {
						open: function(n) {
							var o;
							"string" == typeof n && (o = n);
							var i = { message: o },
								s = Object.assign({}, i, e, n);
							return new (t.extend(a))({
								el: document.createElement("div"),
								propsData: s
							});
						},
						clear: function() {
							r.$emit("toast.clear");
						},
						success: function(t) {
							var e =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return this.open(
								Object.assign(
									{},
									{ message: t, type: "success" },
									e
								)
							);
						},
						error: function(t) {
							var e =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return this.open(
								Object.assign(
									{},
									{ message: t, type: "error" },
									e
								)
							);
						},
						info: function(t) {
							var e =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return this.open(
								Object.assign(
									{},
									{ message: t, type: "info" },
									e
								)
							);
						},
						warning: function(t) {
							var e =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return this.open(
								Object.assign(
									{},
									{ message: t, type: "warning" },
									e
								)
							);
						},
						default: function(t) {
							var e =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {};
							return this.open(
								Object.assign(
									{},
									{ message: t, type: "default" },
									e
								)
							);
						}
					};
				};
			a.install = function(t) {
				var e =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: {},
					n = u(t, e);
				(t.$toast = n), (t.prototype.$toast = n);
			};
			e.default = a;
		}
	}).default;
});
