webpackJsonp([3],{29:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _vue2.default({\n  el: "#fullscreen-menu",\n  data: {\n    changed: false,\n    menu: [{\n      name: "Мои работы",\n      link: "my-works.html"\n    }, {\n      name: "Обо мне",\n      link: "about.html"\n    }, {\n      name: "Блог",\n      link: "blog.html"\n    }, {\n      name: "Авторизация",\n      link: "index.html"\n    }]\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVuLW1lbnUuanM/ODAyNSJdLCJuYW1lcyI6WyJlbCIsImRhdGEiLCJjaGFuZ2VkIiwibWVudSIsIm5hbWUiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxrQkFBUTtBQUNOQSxNQUFJLGtCQURFO0FBRU5DLFFBQU07QUFDSkMsYUFBUyxLQURMO0FBRUpDLFVBQU0sQ0FDSjtBQUNFQyxZQUFNLFlBRFI7QUFFRUMsWUFBTTtBQUZSLEtBREksRUFLSjtBQUNFRCxZQUFNLFNBRFI7QUFFRUMsWUFBTTtBQUZSLEtBTEksRUFTSjtBQUNFRCxZQUFNLE1BRFI7QUFFRUMsWUFBTTtBQUZSLEtBVEksRUFhSjtBQUNFRCxZQUFNLGFBRFI7QUFFRUMsWUFBTTtBQUZSLEtBYkk7QUFGRjtBQUZBLENBQVIiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcclxuXHJcbm5ldyBWdWUoe1xyXG4gIGVsOiBcIiNmdWxsc2NyZWVuLW1lbnVcIixcclxuICBkYXRhOiB7XHJcbiAgICBjaGFuZ2VkOiBmYWxzZSxcclxuICAgIG1lbnU6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JzQvtC4INGA0LDQsdC+0YLRi1wiLFxyXG4gICAgICAgIGxpbms6IFwibXktd29ya3MuaHRtbFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCe0LHQviDQvNC90LVcIixcclxuICAgICAgICBsaW5rOiBcImFib3V0Lmh0bWxcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkdC70L7Qs1wiLFxyXG4gICAgICAgIGxpbms6IFwiYmxvZy5odG1sXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JDQstGC0L7RgNC40LfQsNGG0LjRj1wiLFxyXG4gICAgICAgIGxpbms6IFwiaW5kZXguaHRtbFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mdWxsc2NyZWVuLW1lbnUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n')},30:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar parallax = function () {\n  var bg = document.querySelector("picture");\n  var heroContent = document.querySelector(".hero__content");\n\n  return {\n    move: function move(block, scrollAmount, speedCoef) {\n      var style = block.style;\n\n      var strafe = -(scrollAmount / speedCoef) + "%";\n      style.transform = "translate3d(0, " + strafe + ", 0)";\n    },\n\n    init: function init(wScroll) {\n      this.move(bg, wScroll, 50);\n      this.move(heroContent, wScroll, 15);\n    }\n  };\n}();\n\nvar scrollHandler = function scrollHandler() {\n  var wScroll = window.pageYOffset;\n  parallax.init(wScroll);\n};\n\nif (window.innerWidth > 768) {\n  window.addEventListener("scroll", scrollHandler);\n}\n\nwindow.addEventListener("resize", function () {\n  if (window.innerWidth <= 768) {\n    window.removeEventListener("scroll", scrollHandler);\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9lNDJiIl0sIm5hbWVzIjpbInBhcmFsbGF4IiwiYmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZXJvQ29udGVudCIsIm1vdmUiLCJibG9jayIsInNjcm9sbEFtb3VudCIsInNwZWVkQ29lZiIsInN0eWxlIiwic3RyYWZlIiwidHJhbnNmb3JtIiwiaW5pdCIsIndTY3JvbGwiLCJzY3JvbGxIYW5kbGVyIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsV0FBWSxZQUFXO0FBQzNCLE1BQUlDLEtBQUtDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBVDtBQUNBLE1BQUlDLGNBQWNGLFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCOztBQUVBLFNBQU87QUFDTEUsVUFBTSxjQUFTQyxLQUFULEVBQWdCQyxZQUFoQixFQUE4QkMsU0FBOUIsRUFBeUM7QUFDN0MsVUFBSUMsUUFBUUgsTUFBTUcsS0FBbEI7O0FBRUEsVUFBSUMsU0FBUyxFQUFFSCxlQUFlQyxTQUFqQixJQUE4QixHQUEzQztBQUNBQyxZQUFNRSxTQUFOLHVCQUFvQ0QsTUFBcEM7QUFDRCxLQU5JOztBQVFMRSxRQVJLLGdCQVFBQyxPQVJBLEVBUVM7QUFDWixXQUFLUixJQUFMLENBQVVKLEVBQVYsRUFBY1ksT0FBZCxFQUF1QixFQUF2QjtBQUNBLFdBQUtSLElBQUwsQ0FBVUQsV0FBVixFQUF1QlMsT0FBdkIsRUFBZ0MsRUFBaEM7QUFDRDtBQVhJLEdBQVA7QUFhRCxDQWpCZ0IsRUFBakI7O0FBbUJBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBVztBQUMvQixNQUFJRCxVQUFVRSxPQUFPQyxXQUFyQjtBQUNBaEIsV0FBU1ksSUFBVCxDQUFjQyxPQUFkO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJRSxPQUFPRSxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQzNCRixTQUFPRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osYUFBbEM7QUFDRDs7QUFFREMsT0FBT0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0QyxNQUFJSCxPQUFPRSxVQUFQLElBQXFCLEdBQXpCLEVBQThCO0FBQzVCRixXQUFPSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsYUFBckM7QUFDRDtBQUNGLENBSkQiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYXJhbGxheCA9IChmdW5jdGlvbigpIHtcclxuICBsZXQgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwicGljdHVyZVwiKTtcclxuICBsZXQgaGVyb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX2NvbnRlbnRcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlOiBmdW5jdGlvbihibG9jaywgc2Nyb2xsQW1vdW50LCBzcGVlZENvZWYpIHtcclxuICAgICAgbGV0IHN0eWxlID0gYmxvY2suc3R5bGU7XHJcblxyXG4gICAgICBsZXQgc3RyYWZlID0gLShzY3JvbGxBbW91bnQgLyBzcGVlZENvZWYpICsgXCIlXCI7XHJcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke3N0cmFmZX0sIDApYDtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCh3U2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMubW92ZShiZywgd1Njcm9sbCwgNTApO1xyXG4gICAgICB0aGlzLm1vdmUoaGVyb0NvbnRlbnQsIHdTY3JvbGwsIDE1KTtcclxuICAgIH1cclxuICB9O1xyXG59KSgpO1xyXG5cclxuY29uc3Qgc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gIGxldCB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gIHBhcmFsbGF4LmluaXQod1Njcm9sbCk7XHJcbn07XHJcblxyXG5pZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gIH1cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3BhcmFsbGF4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///30\n')},31:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar linkNav = document.querySelectorAll(".arrow-scroll__link");\nvar speed = 1;\nfor (var i = 0; i < linkNav.length; i++) {\n  linkNav[i].addEventListener("click", function (e) {\n    e.preventDefault();\n    var currentPos = window.pageYOffset;\n    var hash = this.href.replace(/[^#]*(.*)/, "$1");\n    var scrollToEl = document.querySelector(hash);\n    var topPos = scrollToEl.getBoundingClientRect().top;\n    var start = null;\n\n    requestAnimationFrame(step);\n    function step(time) {\n      if (start === null) start = time;\n      var progress = time - start;\n      var scrollAmount = topPos < 0 ? Math.max(currentPos - progress / speed, currentPos + topPos) : Math.min(currentPos + progress / speed, currentPos + topPos);\n      window.scrollTo(0, scrollAmount);\n      if (scrollAmount != currentPos + topPos) {\n        requestAnimationFrame(step);\n      } else {\n        location.hash = hash;\n      }\n    }\n  }, false);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwtYXJyb3cuanM/Y2IwMyJdLCJuYW1lcyI6WyJsaW5rTmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BlZWQiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRQb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhhc2giLCJocmVmIiwicmVwbGFjZSIsInNjcm9sbFRvRWwiLCJxdWVyeVNlbGVjdG9yIiwidG9wUG9zIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwidGltZSIsInByb2dyZXNzIiwic2Nyb2xsQW1vdW50IiwiTWF0aCIsIm1heCIsIm1pbiIsInNjcm9sbFRvIiwibG9jYXRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVUMsU0FBU0MsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWQ7QUFDQSxJQUFJQyxRQUFRLENBQVo7QUFDQSxLQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosUUFBUUssTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3ZDSixVQUFRSSxDQUFSLEVBQVdFLGdCQUFYLENBQ0UsT0FERixFQUVFLFVBQVNDLENBQVQsRUFBWTtBQUNWQSxNQUFFQyxjQUFGO0FBQ0EsUUFBSUMsYUFBYUMsT0FBT0MsV0FBeEI7QUFDQSxRQUFJQyxPQUFPLEtBQUtDLElBQUwsQ0FBVUMsT0FBVixDQUFrQixXQUFsQixFQUErQixJQUEvQixDQUFYO0FBQ0EsUUFBSUMsYUFBYWQsU0FBU2UsYUFBVCxDQUF1QkosSUFBdkIsQ0FBakI7QUFDQSxRQUFJSyxTQUFTRixXQUFXRyxxQkFBWCxHQUFtQ0MsR0FBaEQ7QUFDQSxRQUFJQyxRQUFRLElBQVo7O0FBRUFDLDBCQUFzQkMsSUFBdEI7QUFDQSxhQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDbEIsVUFBSUgsVUFBVSxJQUFkLEVBQW9CQSxRQUFRRyxJQUFSO0FBQ3BCLFVBQUlDLFdBQVdELE9BQU9ILEtBQXRCO0FBQ0EsVUFBSUssZUFDRlIsU0FBUyxDQUFULEdBQ0lTLEtBQUtDLEdBQUwsQ0FBU2xCLGFBQWFlLFdBQVdyQixLQUFqQyxFQUF3Q00sYUFBYVEsTUFBckQsQ0FESixHQUVJUyxLQUFLRSxHQUFMLENBQVNuQixhQUFhZSxXQUFXckIsS0FBakMsRUFBd0NNLGFBQWFRLE1BQXJELENBSE47QUFJQVAsYUFBT21CLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJKLFlBQW5CO0FBQ0EsVUFBSUEsZ0JBQWdCaEIsYUFBYVEsTUFBakMsRUFBeUM7QUFDdkNJLDhCQUFzQkMsSUFBdEI7QUFDRCxPQUZELE1BRU87QUFDTFEsaUJBQVNsQixJQUFULEdBQWdCQSxJQUFoQjtBQUNEO0FBQ0Y7QUFDRixHQXpCSCxFQTBCRSxLQTFCRjtBQTRCRCIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsaW5rTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hcnJvdy1zY3JvbGxfX2xpbmtcIik7XHJcbmxldCBzcGVlZCA9IDE7XHJcbmZvciAodmFyIGkgPSAwOyBpIDwgbGlua05hdi5sZW5ndGg7IGkrKykge1xyXG4gIGxpbmtOYXZbaV0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiY2xpY2tcIixcclxuICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBsZXQgY3VycmVudFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgbGV0IGhhc2ggPSB0aGlzLmhyZWYucmVwbGFjZSgvW14jXSooLiopLywgXCIkMVwiKTtcclxuICAgICAgbGV0IHNjcm9sbFRvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhhc2gpO1xyXG4gICAgICBsZXQgdG9wUG9zID0gc2Nyb2xsVG9FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgIGxldCBzdGFydCA9IG51bGw7XHJcblxyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgIGZ1bmN0aW9uIHN0ZXAodGltZSkge1xyXG4gICAgICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aW1lO1xyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWUgLSBzdGFydDtcclxuICAgICAgICBsZXQgc2Nyb2xsQW1vdW50ID1cclxuICAgICAgICAgIHRvcFBvcyA8IDBcclxuICAgICAgICAgICAgPyBNYXRoLm1heChjdXJyZW50UG9zIC0gcHJvZ3Jlc3MgLyBzcGVlZCwgY3VycmVudFBvcyArIHRvcFBvcylcclxuICAgICAgICAgICAgOiBNYXRoLm1pbihjdXJyZW50UG9zICsgcHJvZ3Jlc3MgLyBzcGVlZCwgY3VycmVudFBvcyArIHRvcFBvcyk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbEFtb3VudCk7XHJcbiAgICAgICAgaWYgKHNjcm9sbEFtb3VudCAhPSBjdXJyZW50UG9zICsgdG9wUG9zKSB7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZhbHNlXHJcbiAgKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zY3JvbGwtYXJyb3cuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n')},39:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _preloader = __webpack_require__(9);\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\n__webpack_require__(29);\n\n__webpack_require__(30);\n\n__webpack_require__(40);\n\n__webpack_require__(42);\n\n__webpack_require__(31);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener("DOMContentLoaded", function (e) {\n  (0, _preloader2.default)().loaded();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OTg4YSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2FkZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVJBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsYUFBSztBQUNqRCw2QkFBVUMsTUFBVjtBQUNELENBRkQiLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJlbG9hZCBmcm9tIFwiLi9tb2R1bGVzL3ByZWxvYWRlclwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZSA9PiB7XHJcbiAgcHJlbG9hZCgpLmxvYWRlZCgpO1xyXG59KTtcclxuXHJcbmltcG9ydCBcIi4vbW9kdWxlcy9mdWxsc2NyZWVuLW1lbnVcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL3BhcmFsbGF4XCI7XHJcbmltcG9ydCBcIi4vbW9kdWxlcy9zbGlkZXJcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL21lc3NhZ2UtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgXCIuL21vZHVsZXMvc2Nyb2xsLWFycm93XCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy93b3Jrcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///39\n')},40:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar info = {\n  template: "#slider__info",\n  props: {\n    work: Object\n  },\n  methods: {\n    callback: function callback(eventName) {\n      console.log(eventName);\n    },\n    skillsAnimate: function skillsAnimate(el, done) {\n      var sentence = el.innerText.trim();\n      var splitSpan = sentence.split("").map(function (item) {\n        return "\\n            <span class=\\"" + (item === " " ? "whitespace" : "") + "\\">" + item + "</span>\\n          ";\n      }).join("");\n      el.innerHTML = splitSpan;\n\n      var words = Array.from(el.children);\n\n      var i = 0;\n      function animate(words) {\n        var currentLetter = words[i];\n\n        var timer = setTimeout(function () {\n          animate(words);\n        }, 20);\n\n        currentLetter.classList.add("animated-flip");\n\n        i++;\n\n        if (i >= words.length) {\n          clearTimeout(timer);\n          done();\n        }\n      }\n\n      animate(words);\n    }\n  }\n};\n\nvar display = {\n  template: "#slider__display",\n  props: {\n    work: Object\n  }\n};\n\nvar buttons = {\n  template: "#slider__buttons",\n  props: {\n    works: Array,\n    currentSlide: Number\n  },\n  methods: {\n    slide: function slide(direction) {\n      this.$emit("slide", direction);\n    },\n    getSlide: function getSlide(direction) {\n      var worksArray = [].concat(_toConsumableArray(this.works));\n      switch (direction) {\n        case "prev":\n          var lastSlide = this.works[this.works.length - 1];\n          worksArray.unshift(lastSlide);\n          worksArray.pop();\n          break;\n        case "next":\n          worksArray.push(worksArray[0]);\n          worksArray.shift();\n          break;\n      }\n      return worksArray[this.currentSlide];\n    }\n  }\n};\n\nnew _vue2.default({\n  el: "#slider-component",\n  components: {\n    info: info,\n    display: display,\n    buttons: buttons\n  },\n  data: {\n    works: [],\n    currentWork: {},\n    currentSlide: 0\n  },\n  created: function created() {\n    this.works = __webpack_require__(41);\n    this.currentWork = this.works[0];\n  },\n\n  methods: {\n    handleSlide: function handleSlide(direction) {\n      this.currentSlide = direction === "next" ? ++this.currentSlide : --this.currentSlide;\n      if (this.currentSlide > this.works.length - 1) {\n        this.currentSlide = 0;\n      } else if (this.currentSlide < 0) {\n        this.currentSlide = this.works.length - 1;\n      }\n      this.currentWork = this.works[this.currentSlide];\n      console.log(this.currentSlide);\n    }\n  },\n  template: "#slider"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9zbGlkZXIuanM/MTE4YyJdLCJuYW1lcyI6WyJpbmZvIiwidGVtcGxhdGUiLCJwcm9wcyIsIndvcmsiLCJPYmplY3QiLCJtZXRob2RzIiwiY2FsbGJhY2siLCJldmVudE5hbWUiLCJjb25zb2xlIiwibG9nIiwic2tpbGxzQW5pbWF0ZSIsImVsIiwiZG9uZSIsInNlbnRlbmNlIiwiaW5uZXJUZXh0IiwidHJpbSIsInNwbGl0U3BhbiIsInNwbGl0IiwibWFwIiwiaXRlbSIsImpvaW4iLCJpbm5lckhUTUwiLCJ3b3JkcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiaSIsImFuaW1hdGUiLCJjdXJyZW50TGV0dGVyIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwiYWRkIiwibGVuZ3RoIiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheSIsImJ1dHRvbnMiLCJ3b3JrcyIsImN1cnJlbnRTbGlkZSIsIk51bWJlciIsInNsaWRlIiwiZGlyZWN0aW9uIiwiJGVtaXQiLCJnZXRTbGlkZSIsIndvcmtzQXJyYXkiLCJsYXN0U2xpZGUiLCJ1bnNoaWZ0IiwicG9wIiwicHVzaCIsInNoaWZ0IiwiY29tcG9uZW50cyIsImRhdGEiLCJjdXJyZW50V29yayIsImNyZWF0ZWQiLCJyZXF1aXJlIiwiaGFuZGxlU2xpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTztBQUNYQyxZQUFVLGVBREM7QUFFWEMsU0FBTztBQUNMQyxVQUFNQztBQURELEdBRkk7QUFLWEMsV0FBUztBQUNQQyxZQURPLG9CQUNFQyxTQURGLEVBQ2E7QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWUYsU0FBWjtBQUNELEtBSE07QUFJUEcsaUJBSk8seUJBSU9DLEVBSlAsRUFJV0MsSUFKWCxFQUlpQjtBQUN0QixVQUFNQyxXQUFXRixHQUFHRyxTQUFILENBQWFDLElBQWIsRUFBakI7QUFDQSxVQUFN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S0FBS2YsS0FBTCxDQUFXLEtBQUtDLFlBQWhCLENBQW5CO0FBQ0E5QixjQUFRQyxHQUFSLENBQVksS0FBSzZCLFlBQWpCO0FBQ0Q7QUFYTSxHQWhCSDtBQTZCTnJDLFlBQVU7QUE3QkosQ0FBUiIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5cclxuY29uc3QgaW5mbyA9IHtcclxuICB0ZW1wbGF0ZTogXCIjc2xpZGVyX19pbmZvXCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIHdvcms6IE9iamVjdFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2FsbGJhY2soZXZlbnROYW1lKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XHJcbiAgICB9LFxyXG4gICAgc2tpbGxzQW5pbWF0ZShlbCwgZG9uZSkge1xyXG4gICAgICBjb25zdCBzZW50ZW5jZSA9IGVsLmlubmVyVGV4dC50cmltKCk7XHJcbiAgICAgIGNvbnN0IHNwbGl0U3BhbiA9IHNlbnRlbmNlXHJcbiAgICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7aXRlbSA9PT0gXCIgXCIgPyBcIndoaXRlc3BhY2VcIiA6IFwiXCJ9XCI+JHtpdGVtfTwvc3Bhbj5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICAgZWwuaW5uZXJIVE1MID0gc3BsaXRTcGFuO1xyXG5cclxuICAgICAgY29uc3Qgd29yZHMgPSBBcnJheS5mcm9tKGVsLmNoaWxkcmVuKTtcclxuXHJcbiAgICAgIGxldCBpID0gMDtcclxuICAgICAgZnVuY3Rpb24gYW5pbWF0ZSh3b3Jkcykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSB3b3Jkc1tpXTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBhbmltYXRlKHdvcmRzKTtcclxuICAgICAgICB9LCAyMCk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRMZXR0ZXIuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVkLWZsaXBcIik7XHJcblxyXG4gICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgaWYgKGkgPj0gd29yZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYW5pbWF0ZSh3b3Jkcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheSA9IHtcclxuICB0ZW1wbGF0ZTogXCIjc2xpZGVyX19kaXNwbGF5XCIsXHJcbiAgcHJvcHM6IHtcclxuICAgIHdvcms6IE9iamVjdFxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGJ1dHRvbnMgPSB7XHJcbiAgdGVtcGxhdGU6IFwiI3NsaWRlcl9fYnV0dG9uc1wiLFxyXG4gIHByb3BzOiB7XHJcbiAgICB3b3JrczogQXJyYXksXHJcbiAgICBjdXJyZW50U2xpZGU6IE51bWJlclxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2xpZGUoZGlyZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJzbGlkZVwiLCBkaXJlY3Rpb24pO1xyXG4gICAgfSxcclxuICAgIGdldFNsaWRlKGRpcmVjdGlvbikge1xyXG4gICAgICBsZXQgd29ya3NBcnJheSA9IFsuLi50aGlzLndvcmtzXTtcclxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwicHJldlwiOlxyXG4gICAgICAgICAgY29uc3QgbGFzdFNsaWRlID0gdGhpcy53b3Jrc1t0aGlzLndvcmtzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgd29ya3NBcnJheS51bnNoaWZ0KGxhc3RTbGlkZSk7XHJcbiAgICAgICAgICB3b3Jrc0FycmF5LnBvcCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgICAgIHdvcmtzQXJyYXkucHVzaCh3b3Jrc0FycmF5WzBdKTtcclxuICAgICAgICAgIHdvcmtzQXJyYXkuc2hpZnQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB3b3Jrc0FycmF5W3RoaXMuY3VycmVudFNsaWRlXTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5uZXcgVnVlKHtcclxuICBlbDogXCIjc2xpZGVyLWNvbXBvbmVudFwiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIGluZm8sXHJcbiAgICBkaXNwbGF5LFxyXG4gICAgYnV0dG9uc1xyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgd29ya3M6IFtdLFxyXG4gICAgY3VycmVudFdvcms6IHt9LFxyXG4gICAgY3VycmVudFNsaWRlOiAwXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy53b3JrcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9kYXRhL3dvcmtzLmpzb25cIik7XHJcbiAgICB0aGlzLmN1cnJlbnRXb3JrID0gdGhpcy53b3Jrc1swXTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGhhbmRsZVNsaWRlKGRpcmVjdGlvbikge1xyXG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9XHJcbiAgICAgICAgZGlyZWN0aW9uID09PSBcIm5leHRcIiA/ICsrdGhpcy5jdXJyZW50U2xpZGUgOiAtLXRoaXMuY3VycmVudFNsaWRlO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50U2xpZGUgPiB0aGlzLndvcmtzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U2xpZGUgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLndvcmtzLmxlbmd0aCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jdXJyZW50V29yayA9IHRoaXMud29ya3NbdGhpcy5jdXJyZW50U2xpZGVdO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogXCIjc2xpZGVyXCJcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3NsaWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n')},41:function(module,exports){eval('module.exports = [{"id":1,"title":"1 Сайт школы онлайн образования","skills":"1 Html, Css, JavaScript","photo":"./assets/images/userfiles/work-1.png","link":"//google.com"},{"id":2,"title":"2 Сайт школы онлайн образования","skills":"2 Html, Css, JavaScript, jQuery","photo":"./assets/images/userfiles/work-2.png","link":"//yandex.ru"},{"id":3,"title":"3 Сайт школы онлайн образования","skills":"3 JavaScript, Vue","photo":"./assets/images/userfiles/work-3.png","link":"//rambler.ru"},{"id":4,"title":"4 Сайт школы онлайн образования","skills":"4 Html, Css, PHP","photo":"./assets/images/userfiles/work-4.png","link":"//vk.com"}]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93b3Jrcy5qc29uPzEyNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLHlKQUF5SixFQUFFLGdLQUFnSyxFQUFFLG1KQUFtSixFQUFFLDhJQUE4SSIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gW3tcImlkXCI6MSxcInRpdGxlXCI6XCIxINCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIixcInNraWxsc1wiOlwiMSBIdG1sLCBDc3MsIEphdmFTY3JpcHRcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvdXNlcmZpbGVzL3dvcmstMS5wbmdcIixcImxpbmtcIjpcIi8vZ29vZ2xlLmNvbVwifSx7XCJpZFwiOjIsXCJ0aXRsZVwiOlwiMiDQodCw0LnRgiDRiNC60L7Qu9GLINC+0L3Qu9Cw0LnQvSDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCIsXCJza2lsbHNcIjpcIjIgSHRtbCwgQ3NzLCBKYXZhU2NyaXB0LCBqUXVlcnlcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvdXNlcmZpbGVzL3dvcmstMi5wbmdcIixcImxpbmtcIjpcIi8veWFuZGV4LnJ1XCJ9LHtcImlkXCI6MyxcInRpdGxlXCI6XCIzINCh0LDQudGCINGI0LrQvtC70Ysg0L7QvdC70LDQudC9INC+0LHRgNCw0LfQvtCy0LDQvdC40Y9cIixcInNraWxsc1wiOlwiMyBKYXZhU2NyaXB0LCBWdWVcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvdXNlcmZpbGVzL3dvcmstMy5wbmdcIixcImxpbmtcIjpcIi8vcmFtYmxlci5ydVwifSx7XCJpZFwiOjQsXCJ0aXRsZVwiOlwiNCDQodCw0LnRgiDRiNC60L7Qu9GLINC+0L3Qu9Cw0LnQvSDQvtCx0YDQsNC30L7QstCw0L3QuNGPXCIsXCJza2lsbHNcIjpcIjQgSHRtbCwgQ3NzLCBQSFBcIixcInBob3RvXCI6XCIuL2Fzc2V0cy9pbWFnZXMvdXNlcmZpbGVzL3dvcmstNC5wbmdcIixcImxpbmtcIjpcIi8vdmsuY29tXCJ9XVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEvd29ya3MuanNvblxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n')},42:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(2);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _vue2.default({\n  el: "#message",\n  data: function data() {\n    return {\n      errorText: "Поле не может быть пустым!",\n      name: "",\n      email: "",\n      message: "",\n      validName: "true",\n      validEmail: "true"\n    };\n  },\n\n  methods: {\n    submit: function submit() {\n      var _this = this;\n\n      var regexp = /@/;\n      if (!this.name || this.name === "") {\n        this.validName = false;\n        this.errorText = "Поле не может быть пустым!";\n      } else {\n        this.validName = true;\n      }\n\n      if (this.validName) {\n        if (!this.email || this.email === "") {\n          this.validEmail = false;\n          this.errorText = "Поле не может быть пустым!";\n        } else if (!regexp.test(this.email)) {\n          this.validEmail = false;\n          this.errorText = \'Email должен содержать знак "@"!\';\n        } else {\n          this.errorText = "Поле не может быть пустым!";\n          this.validEmail = true;\n        }\n      }\n\n      var timer = setTimeout(function () {\n        _this.validName = true;\n        _this.validEmail = true;\n      }, 3000);\n    }\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZXNzYWdlLXZhbGlkYXRpb24uanM/NzFhYiJdLCJuYW1lcyI6WyJlbCIsImRhdGEiLCJlcnJvclRleHQiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwidmFsaWROYW1lIiwidmFsaWRFbWFpbCIsIm1ldGhvZHMiLCJzdWJtaXQiLCJyZWdleHAiLCJ0ZXN0IiwidGltZXIiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxrQkFBUTtBQUNOQSxNQUFJLFVBREU7QUFFTkMsTUFGTSxrQkFFQztBQUNMLFdBQU87QUFDTEMsaUJBQVcsNEJBRE47QUFFTEMsWUFBTSxFQUZEO0FBR0xDLGFBQU8sRUFIRjtBQUlMQyxlQUFTLEVBSko7QUFLTEMsaUJBQVcsTUFMTjtBQU1MQyxrQkFBWTtBQU5QLEtBQVA7QUFRRCxHQVhLOztBQVlOQyxXQUFTO0FBQ1BDLFVBRE8sb0JBQ0U7QUFBQTs7QUFDUCxVQUFNQyxTQUFTLEdBQWY7QUFDQSxVQUFJLENBQUMsS0FBS1AsSUFBTixJQUFjLEtBQUtBLElBQUwsS0FBYyxFQUFoQyxFQUFvQztBQUNsQyxhQUFLRyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsYUFBS0osU0FBTCxHQUFpQiw0QkFBakI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLQSxTQUFULEVBQW9CO0FBQ2xCLFlBQUksQ0FBQyxLQUFLRixLQUFOLElBQWUsS0FBS0EsS0FBTCxLQUFlLEVBQWxDLEVBQXNDO0FBQ3BDLGVBQUtHLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxlQUFLTCxTQUFMLEdBQWlCLDRCQUFqQjtBQUNELFNBSEQsTUFHTyxJQUFJLENBQUNRLE9BQU9DLElBQVAsQ0FBWSxLQUFLUCxLQUFqQixDQUFMLEVBQThCO0FBQ25DLGVBQUtHLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxlQUFLTCxTQUFMLEdBQWlCLGtDQUFqQjtBQUNELFNBSE0sTUFHQTtBQUNMLGVBQUtBLFNBQUwsR0FBaUIsNEJBQWpCO0FBQ0EsZUFBS0ssVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTUssUUFBUUMsV0FBVyxZQUFNO0FBQzdCLGNBQUtQLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxjQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0QsT0FIYSxFQUdYLElBSFcsQ0FBZDtBQUlEO0FBM0JNO0FBWkgsQ0FBUiIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgZWw6IFwiI21lc3NhZ2VcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3JUZXh0OiBcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwhXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICB2YWxpZE5hbWU6IFwidHJ1ZVwiLFxyXG4gICAgICB2YWxpZEVtYWlsOiBcInRydWVcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgY29uc3QgcmVnZXhwID0gL0AvO1xyXG4gICAgICBpZiAoIXRoaXMubmFtZSB8fCB0aGlzLm5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICB0aGlzLnZhbGlkTmFtZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUZXh0ID0gXCLQn9C+0LvQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/Rg9GB0YLRi9C8IVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsaWROYW1lID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMudmFsaWROYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVtYWlsIHx8IHRoaXMuZW1haWwgPT09IFwiXCIpIHtcclxuICAgICAgICAgIHRoaXMudmFsaWRFbWFpbCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwhXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICghcmVnZXhwLnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgIHRoaXMudmFsaWRFbWFpbCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSAnRW1haWwg0LTQvtC70LbQtdC9INGB0L7QtNC10YDQttCw0YLRjCDQt9C90LDQuiBcIkBcIiEnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwi0J/QvtC70LUg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCFcIjtcclxuICAgICAgICAgIHRoaXMudmFsaWRFbWFpbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudmFsaWROYW1lID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZhbGlkRW1haWwgPSB0cnVlO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZXNzYWdlLXZhbGlkYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n')},9:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = preloader;\nfunction preloader() {\n  var loader = document.querySelector(".preloader");\n  var images = document.querySelectorAll("img");\n  var wrapper = document.querySelector(".wrapper");\n  var preloaderProgress = document.querySelector(".preloader__text");\n  wrapper.style.height = "100%";\n\n  var percent = 0;\n  var step = 100 / images.length;\n\n  function percentTick(end, imgLoaded) {\n    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    if (start <= end) {\n      setTimeout(function () {\n        percent = percent < 100 ? ++percent : 100;\n        preloaderProgress.textContent = "" + percent;\n        percentTick(end, imgLoaded, start + 1);\n      }, 10);\n    }\n    if (imgLoaded === images.length && percent === 100) {\n      wrapper.style.height = "";\n      loader.classList.add("hide");\n    }\n  }\n  return {\n    loaded: function loaded() {\n      var imgLoaded = 0;\n      if (images.length === 0) {\n        wrapper.style.height = "";\n        loader.classList.add("hide");\n        return;\n      }\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          console.log(item);\n\n          var shadowImg = new Image();\n          shadowImg.onload = function (e) {\n            imgLoaded++;\n            percentTick(step, imgLoaded);\n          };\n          shadowImg.src = item.getAttribute("src");\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/N2ZjNSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid3JhcHBlciIsInByZWxvYWRlclByb2dyZXNzIiwic3R5bGUiLCJoZWlnaHQiLCJwZXJjZW50Iiwic3RlcCIsImxlbmd0aCIsInBlcmNlbnRUaWNrIiwiZW5kIiwiaW1nTG9hZGVkIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2FkZWQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInNoYWRvd0ltZyIsIkltYWdlIiwib25sb2FkIiwic3JjIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFBd0JBLFM7QUFBVCxTQUFTQSxTQUFULEdBQXFCO0FBQ2xDLE1BQU1DLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLE1BQU1DLFNBQVNGLFNBQVNHLGdCQUFULENBQTBCLEtBQTFCLENBQWY7QUFDQSxNQUFNQyxVQUFVSixTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsTUFBTUksb0JBQW9CTCxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUExQjtBQUNBRyxVQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsTUFBdkI7O0FBRUEsTUFBSUMsVUFBVSxDQUFkO0FBQ0EsTUFBTUMsT0FBTyxNQUFNUCxPQUFPUSxNQUExQjs7QUFFQSxXQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsU0FBMUIsRUFBZ0Q7QUFBQSxRQUFYQyxLQUFXLHVFQUFILENBQUc7O0FBQzlDLFFBQUlBLFNBQVNGLEdBQWIsRUFBa0I7QUFDaEJHLGlCQUFXLFlBQU07QUFDZlAsa0JBQVVBLFVBQVUsR0FBVixHQUFnQixFQUFFQSxPQUFsQixHQUE0QixHQUF0QztBQUNBSCwwQkFBa0JXLFdBQWxCLFFBQW1DUixPQUFuQztBQUNBRyxvQkFBWUMsR0FBWixFQUFpQkMsU0FBakIsRUFBNEJDLFFBQVEsQ0FBcEM7QUFDRCxPQUpELEVBSUcsRUFKSDtBQUtEO0FBQ0QsUUFBSUQsY0FBY1gsT0FBT1EsTUFBckIsSUFBK0JGLFlBQVksR0FBL0MsRUFBb0Q7QUFDbERKLGNBQVFFLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixFQUF2QjtBQUNBUixhQUFPa0IsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDRDtBQUNGO0FBQ0QsU0FBTztBQUNMQyxVQURLLG9CQUNJO0FBQ1AsVUFBSU4sWUFBWSxDQUFoQjtBQUNBLFVBQUlYLE9BQU9RLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJOLGdCQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsRUFBdkI7QUFDQVIsZUFBT2tCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0E7QUFDRDs7QUFOTTtBQUFBO0FBQUE7O0FBQUE7QUFRUCw2QkFBaUJoQixNQUFqQiw4SEFBeUI7QUFBQSxjQUFoQmtCLElBQWdCOztBQUN2QkMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7QUFFQSxjQUFNRyxZQUFZLElBQUlDLEtBQUosRUFBbEI7QUFDQUQsb0JBQVVFLE1BQVYsR0FBbUIsYUFBSztBQUN0Qlo7QUFDQUYsd0JBQVlGLElBQVosRUFBa0JJLFNBQWxCO0FBQ0QsV0FIRDtBQUlBVSxvQkFBVUcsR0FBVixHQUFnQk4sS0FBS08sWUFBTCxDQUFrQixLQUFsQixDQUFoQjtBQUNEO0FBakJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQlI7QUFuQkksR0FBUDtBQXFCRCIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlbG9hZGVyKCkge1xyXG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyXCIpO1xyXG4gIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcclxuICBjb25zdCBwcmVsb2FkZXJQcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyX190ZXh0XCIpO1xyXG4gIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcblxyXG4gIGxldCBwZXJjZW50ID0gMDtcclxuICBjb25zdCBzdGVwID0gMTAwIC8gaW1hZ2VzLmxlbmd0aDtcclxuXHJcbiAgZnVuY3Rpb24gcGVyY2VudFRpY2soZW5kLCBpbWdMb2FkZWQsIHN0YXJ0ID0gMCkge1xyXG4gICAgaWYgKHN0YXJ0IDw9IGVuZCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwZXJjZW50ID0gcGVyY2VudCA8IDEwMCA/ICsrcGVyY2VudCA6IDEwMDtcclxuICAgICAgICBwcmVsb2FkZXJQcm9ncmVzcy50ZXh0Q29udGVudCA9IGAke3BlcmNlbnR9YDtcclxuICAgICAgICBwZXJjZW50VGljayhlbmQsIGltZ0xvYWRlZCwgc3RhcnQgKyAxKTtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gICAgaWYgKGltZ0xvYWRlZCA9PT0gaW1hZ2VzLmxlbmd0aCAmJiBwZXJjZW50ID09PSAxMDApIHtcclxuICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBsb2FkZWQoKSB7XHJcbiAgICAgIGxldCBpbWdMb2FkZWQgPSAwO1xyXG4gICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcclxuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGltYWdlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICBjb25zdCBzaGFkb3dJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBzaGFkb3dJbWcub25sb2FkID0gZSA9PiB7XHJcbiAgICAgICAgICBpbWdMb2FkZWQrKztcclxuICAgICAgICAgIHBlcmNlbnRUaWNrKHN0ZXAsIGltZ0xvYWRlZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzaGFkb3dJbWcuc3JjID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3ByZWxvYWRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n')}},[39]);