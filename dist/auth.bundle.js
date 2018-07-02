webpackJsonp([4],{12:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _preloader = __webpack_require__(3);\n\nvar _preloader2 = _interopRequireDefault(_preloader);\n\n__webpack_require__(13);\n\n__webpack_require__(14);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener("DOMContentLoaded", function (e) {\n  console.log(1);\n  (0, _preloader2.default)().loaded();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz84MWYyIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJsb2FkZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFPQTs7QUFDQTs7OztBQU5BQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsYUFBSztBQUNqREMsVUFBUUMsR0FBUixDQUFZLENBQVo7QUFDQSw2QkFBWUMsTUFBWjtBQUNELENBSEQiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJlbG9hZGVyIGZyb20gXCIuL21vZHVsZXMvcHJlbG9hZGVyXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBlID0+IHtcclxuICBjb25zb2xlLmxvZygxKTtcclxuICBwcmVsb2FkZXIoKS5sb2FkZWQoKTtcclxufSk7XHJcblxyXG5pbXBvcnQgXCIuL21vZHVsZXMvd2ViZ2xcIjtcclxuaW1wb3J0IFwiLi9tb2R1bGVzL2luZGV4LWZsaXBcIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n')},13:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar container;\nvar camera, scene, renderer;\nvar uniforms;\nvar mouse = { x: 0, y: 0 };\nvar loader = new THREE.TextureLoader();\ncontainer = document.getElementById("container");\n\nif (window.innerWidth > 768) {\n  init();\n  animate();\n} else {\n  container.classList.add("index-mobile");\n}\n\nfunction init() {\n  camera = new THREE.Camera();\n  camera.position.z = 1;\n  scene = new THREE.Scene();\n  var geometry = new THREE.PlaneBufferGeometry(2, 2);\n\n  var MyTexture = loader.load("./assets/images/index/water.jpg");\n  var mapTexture = loader.load("./assets/images/index/water-maps.jpg");\n  MyTexture.minFilter = THREE.LinearFilter;\n\n  uniforms = {\n    u_time: { type: "f", value: 1.0 },\n    u_animation: { type: "f", value: 0.0 },\n    u_mouse: { type: "v2", value: new THREE.Vector2() },\n    u_resolution: { type: "v2", value: new THREE.Vector2() },\n    u_size: {\n      type: "v2",\n      value: new THREE.Vector2(MyTexture.width, MyTexture.height)\n    },\n    u_image: { value: MyTexture },\n    u_maps: { value: mapTexture }\n  };\n  var material = new THREE.ShaderMaterial({\n    uniforms: uniforms,\n    vertexShader: document.getElementById("vertexShader").textContent,\n    fragmentShader: document.getElementById("fragmentShader").textContent\n  });\n  var mesh = new THREE.Mesh(geometry, material);\n  scene.add(mesh);\n  renderer = new THREE.WebGLRenderer();\n  renderer.setPixelRatio(window.devicePixelRatio);\n\n  container.appendChild(renderer.domElement);\n  onWindowResize();\n  window.addEventListener("resize", onWindowResize, false);\n}\nfunction onWindowResize(event) {\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  uniforms.u_resolution.value.x = renderer.domElement.width;\n  uniforms.u_resolution.value.y = renderer.domElement.height;\n  uniforms.u_mouse.value.x = mouse.x;\n  uniforms.u_mouse.value.y = mouse.y;\n}\nfunction animate() {\n  requestAnimationFrame(animate);\n  render();\n}\nfunction render() {\n  uniforms.u_time.value += 1.0;\n  renderer.render(scene, camera);\n}\n\ndocument.addEventListener("mousemove", function (event) {\n  TweenLite.to(uniforms.u_mouse.value, 1, {\n    x: (event.pageX / window.innerWidth - 0.5) * 3,\n    y: (event.pageY / window.innerHeight - 0.5) * 3\n  });\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy93ZWJnbC5qcz84OWFhIl0sIm5hbWVzIjpbImNvbnRhaW5lciIsImNhbWVyYSIsInNjZW5lIiwicmVuZGVyZXIiLCJ1bmlmb3JtcyIsIm1vdXNlIiwieCIsInkiLCJsb2FkZXIiLCJUSFJFRSIsIlRleHR1cmVMb2FkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImluaXQiLCJhbmltYXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiU2NlbmUiLCJnZW9tZXRyeSIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJNeVRleHR1cmUiLCJsb2FkIiwibWFwVGV4dHVyZSIsIm1pbkZpbHRlciIsIkxpbmVhckZpbHRlciIsInVfdGltZSIsInR5cGUiLCJ2YWx1ZSIsInVfYW5pbWF0aW9uIiwidV9tb3VzZSIsIlZlY3RvcjIiLCJ1X3Jlc29sdXRpb24iLCJ1X3NpemUiLCJ3aWR0aCIsImhlaWdodCIsInVfaW1hZ2UiLCJ1X21hcHMiLCJtYXRlcmlhbCIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwidGV4dENvbnRlbnQiLCJmcmFnbWVudFNoYWRlciIsIm1lc2giLCJNZXNoIiwiV2ViR0xSZW5kZXJlciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwib25XaW5kb3dSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZXRTaXplIiwiaW5uZXJIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZW5kZXIiLCJUd2VlbkxpdGUiLCJ0byIsInBhZ2VYIiwicGFnZVkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBSjtBQUNBLElBQUlDLE1BQUosRUFBWUMsS0FBWixFQUFtQkMsUUFBbkI7QUFDQSxJQUFJQyxR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T0FBVCxDQUFpQkYsS0FBakIsQ0FBdUJ6QixDQUF2QixHQUEyQkYsTUFBTUUsQ0FBakM7QUFDRDtBQUNELFNBQVNTLE9BQVQsR0FBbUI7QUFDakIyQyx3QkFBc0IzQyxPQUF0QjtBQUNBNEM7QUFDRDtBQUNELFNBQVNBLE1BQVQsR0FBa0I7QUFDaEJ4RCxXQUFTMEIsTUFBVCxDQUFnQkUsS0FBaEIsSUFBeUIsR0FBekI7QUFDQTdCLFdBQVN5RCxNQUFULENBQWdCMUQsS0FBaEIsRUFBdUJELE1BQXZCO0FBQ0Q7O0FBRURVLFNBQVM0QyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3JESyxZQUFVQyxFQUFWLENBQWExRCxTQUFTOEIsT0FBVCxDQUFpQkYsS0FBOUIsRUFBcUMsQ0FBckMsRUFBd0M7QUFDdEMxQixPQUFHLENBQUNrRCxNQUFNTyxLQUFOLEdBQWNsRCxPQUFPQyxVQUFyQixHQUFrQyxHQUFuQyxJQUEwQyxDQURQO0FBRXRDUCxPQUFHLENBQUNpRCxNQUFNUSxLQUFOLEdBQWNuRCxPQUFPNkMsV0FBckIsR0FBbUMsR0FBcEMsSUFBMkM7QUFGUixHQUF4QztBQUlELENBTEQiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29udGFpbmVyO1xyXG52YXIgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXI7XHJcbnZhciB1bmlmb3JtcztcclxudmFyIG1vdXNlID0geyB4OiAwLCB5OiAwIH07XHJcbnZhciBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuXHJcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xyXG4gIGluaXQoKTtcclxuICBhbmltYXRlKCk7XHJcbn0gZWxzZSB7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmRleC1tb2JpbGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY2FtZXJhID0gbmV3IFRIUkVFLkNhbWVyYSgpO1xyXG4gIGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcclxuICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpO1xyXG5cclxuICB2YXIgTXlUZXh0dXJlID0gbG9hZGVyLmxvYWQoXCIuL2Fzc2V0cy9pbWFnZXMvaW5kZXgvd2F0ZXIuanBnXCIpO1xyXG4gIHZhciBtYXBUZXh0dXJlID0gbG9hZGVyLmxvYWQoXCIuL2Fzc2V0cy9pbWFnZXMvaW5kZXgvd2F0ZXItbWFwcy5qcGdcIik7XHJcbiAgTXlUZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuXHJcbiAgdW5pZm9ybXMgPSB7XHJcbiAgICB1X3RpbWU6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcclxuICAgIHVfYW5pbWF0aW9uOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMC4wIH0sXHJcbiAgICB1X21vdXNlOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcclxuICAgIHVfcmVzb2x1dGlvbjogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH0sXHJcbiAgICB1X3NpemU6IHtcclxuICAgICAgdHlwZTogXCJ2MlwiLFxyXG4gICAgICB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoTXlUZXh0dXJlLndpZHRoLCBNeVRleHR1cmUuaGVpZ2h0KVxyXG4gICAgfSxcclxuICAgIHVfaW1hZ2U6IHsgdmFsdWU6IE15VGV4dHVyZSB9LFxyXG4gICAgdV9tYXBzOiB7IHZhbHVlOiBtYXBUZXh0dXJlIH1cclxuICB9O1xyXG4gIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICB1bmlmb3JtczogdW5pZm9ybXMsXHJcbiAgICB2ZXJ0ZXhTaGFkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4U2hhZGVyXCIpLnRleHRDb250ZW50LFxyXG4gICAgZnJhZ21lbnRTaGFkZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhZ21lbnRTaGFkZXJcIikudGV4dENvbnRlbnRcclxuICB9KTtcclxuICB2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgc2NlbmUuYWRkKG1lc2gpO1xyXG4gIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gIG9uV2luZG93UmVzaXplKCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUsIGZhbHNlKTtcclxufVxyXG5mdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZShldmVudCkge1xyXG4gIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgdW5pZm9ybXMudV9yZXNvbHV0aW9uLnZhbHVlLnggPSByZW5kZXJlci5kb21FbGVtZW50LndpZHRoO1xyXG4gIHVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZS55ID0gcmVuZGVyZXIuZG9tRWxlbWVudC5oZWlnaHQ7XHJcbiAgdW5pZm9ybXMudV9tb3VzZS52YWx1ZS54ID0gbW91c2UueDtcclxuICB1bmlmb3Jtcy51X21vdXNlLnZhbHVlLnkgPSBtb3VzZS55O1xyXG59XHJcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gIHJlbmRlcigpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICB1bmlmb3Jtcy51X3RpbWUudmFsdWUgKz0gMS4wO1xyXG4gIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gIFR3ZWVuTGl0ZS50byh1bmlmb3Jtcy51X21vdXNlLnZhbHVlLCAxLCB7XHJcbiAgICB4OiAoZXZlbnQucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCAtIDAuNSkgKiAzLFxyXG4gICAgeTogKGV2ZW50LnBhZ2VZIC8gd2luZG93LmlubmVySGVpZ2h0IC0gMC41KSAqIDNcclxuICB9KTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL3dlYmdsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n')},14:function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _vue = __webpack_require__(0);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar authBtn = {\n  props: {\n    activeSide: String\n  },\n  template: "#auth-btn"\n};\n\nvar sideA = {\n  template: "#side-a"\n};\n\nvar sideB = {\n  template: "#side-b",\n  data: function data() {\n    return {\n      errorText: "Поле не может быть пустым!",\n      login: "",\n      pass: "",\n      validLogin: "true",\n      validPass: "true"\n    };\n  },\n\n  methods: {\n    submit: function submit() {\n      var _this = this;\n\n      if (!this.login || this.login === "") {\n        this.validLogin = false;\n        this.errorText = "Поле не может быть пустым!";\n      } else {\n        this.validLogin = true;\n      }\n\n      if (this.validLogin) {\n        if (!this.pass || this.pass === "") {\n          this.validPass = false;\n          this.errorText = "Поле не может быть пустым!";\n        } else {\n          this.validPass = true;\n        }\n      }\n\n      var timer = setTimeout(function () {\n        _this.validLogin = true;\n        _this.validPass = true;\n      }, 3000);\n    }\n  }\n};\n\nnew _vue2.default({\n  el: "#welcome-page-component",\n  components: {\n    sideA: sideA,\n    sideB: sideB,\n    authBtn: authBtn\n  },\n  data: {\n    activeSide: "sideA"\n  },\n  methods: {\n    handleSideChange: function handleSideChange() {\n      this.activeSide = this.activeSide === "sideA" ? "sideB" : "sideA";\n    },\n    outOfForm: function outOfForm(e) {\n      if (e.target.classList.contains("welcome-page") && this.activeSide === "sideB") {\n        this.handleSideChange();\n      }\n    }\n  },\n  template: "#welcome-page"\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9pbmRleC1mbGlwLmpzP2Y3YzgiXSwibmFtZXMiOlsiYXV0aEJ0biIsInByb3BzIiwiYWN0aXZlU2lkZSIsIlN0cmluZyIsInRlbXBsYXRlIiwic2lkZUEiLCJzaWRlQiIsImRhdGEiLCJlcnJvclRleHQiLCJsb2dpbiIsInBhc3MiLCJ2YWxpZExvZ2luIiwidmFsaWRQYXNzIiwibWV0aG9kcyIsInN1Ym1pdCIsInRpbWVyIiwic2V0VGltZW91dCIsImVsIiwiY29tcG9uZW50cyIsImhhbmRsZVNpZGVDaGFuZ2UiLCJvdXRPZkZvcm0iLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFVBQVU7QUFDZEMsU0FBTztBQUNMQyxnQkFBWUM7QUFEUCxHQURPO0FBSWRDLFlBQVU7QUFKSSxDQUFoQjs7QUFPQSxJQUFNQyxRQUFRO0FBQ1pELFlBQVU7QUFERSxDQUFkOztBQUlBLElBQU1FLFFBQVE7QUFDWkYsWUFBVSxTQURFO0FBRVpHLE1BRlksa0JBRUw7QUFDTCxXQUFPO0FBQ0xDLGlCQUFXLDRCQUROO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxZQUFNLEVBSEQ7QUFJTEMsa0JBQVksTUFKUDtBQUtMQyxpQkFBVztBQUxOLEtBQVA7QUFPRCxHQVZXOztBQVdaQyxXQUFTO0FBQ1BDLFVBRE8sb0JBQ0U7QUFBQTs7QUFDUCxVQUFJLENBQUMsS0FBS0wsS0FBTixJQUFlLEtBQUtBLEtBQUwsS0FBZSxFQUFsQyxFQUFzQztBQUNwQyxhQUFLRSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsYUFBS0gsU0FBTCxHQUFpQiw0QkFBakI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLRyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLQSxVQUFULEVBQXFCO0FBQ25CLFlBQUksQ0FBQyxLQUFLRCxJQUFOLElBQWMsS0FBS0EsSUFBTCxLQUFjLEVBQWhDLEVBQW9DO0FBQ2xDLGVBQUtFLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxlQUFLSixTQUFMLEdBQWlCLDRCQUFqQjtBQUNELFNBSEQsTUFHTztBQUNMLGVBQUtJLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGOztBQUVELFVBQU1HLFFBQVFDLFdBQVcsWUFBTTtBQUM3QixjQUFLTCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNELE9BSGEsRUFHWCxJQUhXLENBQWQ7QUFJRDtBQXRCTTtBQVhHLENBQWQ7O0FBcUNBLGtCQUFRO0FBQ05LLE1BQUkseUJBREU7QUFFTkMsY0FBWTtBQUNWYixnQkFEVTtBQUVWQyxnQkFGVTtBQUdWTjtBQUhVLEdBRk47QUFPTk8sUUFBTTtBQUNKTCxnQkFBWTtBQURSLEdBUEE7QUFVTlcsV0FBUztBQUNQTSxvQkFETyw4QkFDWTtBQUNqQixXQUFLakIsVUFBTCxHQUFrQixLQUFLQSxVQUFMLEtBQW9CLE9BQXBCLEdBQThCLE9BQTlCLEdBQXdDLE9BQTFEO0FBQ0QsS0FITTtBQUlQa0IsYUFKTyxxQkFJR0MsQ0FKSCxFQUlNO0FBQ1gsVUFDRUEsRUFBRUMsTUFBRixDQUFTQyxTQUFULENBQW1CQyxRQUFuQixDQUE0QixjQUE1QixLQUNBLEtBQUt0QixVQUFMLEtBQW9CLE9BRnRCLEVBR0U7QUFDQSxhQUFLaUIsZ0JBQUw7QUFDRDtBQUNGO0FBWE0sR0FWSDtBQXVCTmYsWUFBVTtBQXZCSixDQUFSIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcblxyXG5jb25zdCBhdXRoQnRuID0ge1xyXG4gIHByb3BzOiB7XHJcbiAgICBhY3RpdmVTaWRlOiBTdHJpbmdcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBcIiNhdXRoLWJ0blwiXHJcbn07XHJcblxyXG5jb25zdCBzaWRlQSA9IHtcclxuICB0ZW1wbGF0ZTogXCIjc2lkZS1hXCJcclxufTtcclxuXHJcbmNvbnN0IHNpZGVCID0ge1xyXG4gIHRlbXBsYXRlOiBcIiNzaWRlLWJcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3JUZXh0OiBcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwhXCIsXHJcbiAgICAgIGxvZ2luOiBcIlwiLFxyXG4gICAgICBwYXNzOiBcIlwiLFxyXG4gICAgICB2YWxpZExvZ2luOiBcInRydWVcIixcclxuICAgICAgdmFsaWRQYXNzOiBcInRydWVcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgaWYgKCF0aGlzLmxvZ2luIHx8IHRoaXMubG9naW4gPT09IFwiXCIpIHtcclxuICAgICAgICB0aGlzLnZhbGlkTG9naW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycm9yVGV4dCA9IFwi0J/QvtC70LUg0L3QtSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0YPRgdGC0YvQvCFcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZhbGlkTG9naW4gPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy52YWxpZExvZ2luKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhc3MgfHwgdGhpcy5wYXNzID09PSBcIlwiKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbGlkUGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5lcnJvclRleHQgPSBcItCf0L7Qu9C1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9GD0YHRgtGL0LwhXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudmFsaWRQYXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy52YWxpZExvZ2luID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnZhbGlkUGFzcyA9IHRydWU7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbm5ldyBWdWUoe1xyXG4gIGVsOiBcIiN3ZWxjb21lLXBhZ2UtY29tcG9uZW50XCIsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgc2lkZUEsXHJcbiAgICBzaWRlQixcclxuICAgIGF1dGhCdG5cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIGFjdGl2ZVNpZGU6IFwic2lkZUFcIlxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgaGFuZGxlU2lkZUNoYW5nZSgpIHtcclxuICAgICAgdGhpcy5hY3RpdmVTaWRlID0gdGhpcy5hY3RpdmVTaWRlID09PSBcInNpZGVBXCIgPyBcInNpZGVCXCIgOiBcInNpZGVBXCI7XHJcbiAgICB9LFxyXG4gICAgb3V0T2ZGb3JtKGUpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIndlbGNvbWUtcGFnZVwiKSAmJlxyXG4gICAgICAgIHRoaXMuYWN0aXZlU2lkZSA9PT0gXCJzaWRlQlwiXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU2lkZUNoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0ZW1wbGF0ZTogXCIjd2VsY29tZS1wYWdlXCJcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvc2NyaXB0cy9tb2R1bGVzL2luZGV4LWZsaXAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n')},3:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = preloader;\nfunction preloader() {\n  var loader = document.querySelector(".preloader");\n  var images = document.querySelectorAll("img");\n\n  return {\n    loaded: function loaded() {\n      console.log(2);\n\n      var imgLoaded = 0;\n      if (images.length === 0) {\n        loader.classList.add("hide");\n        return;\n      }\n\n      console.log(images);\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          console.log(item);\n          item.onload = function () {\n            console.log(3);\n            imgLoaded++;\n            console.log(imgLoaded);\n\n            if (imgLoaded === images.length) {\n              loader.classList.add("hide");\n            }\n          };\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/N2ZjNSJdLCJuYW1lcyI6WyJwcmVsb2FkZXIiLCJsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibG9hZGVkIiwiY29uc29sZSIsImxvZyIsImltZ0xvYWRlZCIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsIml0ZW0iLCJvbmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsUztBQUFULFNBQVNBLFNBQVQsR0FBcUI7QUFDbEMsTUFBTUMsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFmO0FBQ0EsTUFBTUMsU0FBU0YsU0FBU0csZ0JBQVQsQ0FBMEIsS0FBMUIsQ0FBZjs7QUFFQSxTQUFPO0FBQ0xDLFVBREssb0JBQ0k7QUFDUEMsY0FBUUMsR0FBUixDQUFZLENBQVo7O0FBRUEsVUFBSUMsWUFBWSxDQUFoQjtBQUNBLFVBQUlMLE9BQU9NLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkJULGVBQU9VLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0E7QUFDRDs7QUFFREwsY0FBUUMsR0FBUixDQUFZSixNQUFaOztBQVRPO0FBQUE7QUFBQTs7QUFBQTtBQVdQLDZCQUFpQkEsTUFBakIsOEhBQXlCO0FBQUEsY0FBaEJTLElBQWdCOztBQUN2Qk4sa0JBQVFDLEdBQVIsQ0FBWUssSUFBWjtBQUNBQSxlQUFLQyxNQUFMLEdBQWMsWUFBVztBQUN2QlAsb0JBQVFDLEdBQVIsQ0FBWSxDQUFaO0FBQ0FDO0FBQ0FGLG9CQUFRQyxHQUFSLENBQVlDLFNBQVo7O0FBRUEsZ0JBQUlBLGNBQWNMLE9BQU9NLE1BQXpCLEVBQWlDO0FBQy9CVCxxQkFBT1UsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDRDtBQUNGLFdBUkQ7QUFTRDtBQXRCTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdUJSO0FBeEJJLEdBQVA7QUEwQkQiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWxvYWRlcigpIHtcclxuICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWxvYWRlclwiKTtcclxuICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbG9hZGVkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygyKTtcclxuXHJcbiAgICAgIGxldCBpbWdMb2FkZWQgPSAwO1xyXG4gICAgICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGltYWdlcyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIGltYWdlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0ub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygzKTtcclxuICAgICAgICAgIGltZ0xvYWRlZCsrO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaW1nTG9hZGVkKTtcclxuXHJcbiAgICAgICAgICBpZiAoaW1nTG9hZGVkID09PSBpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n')}},[12]);