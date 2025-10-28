import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'

const App = () => {

  let [showContent, setShowContent] = useState(false)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if (this.progress() >= .9) {
            setShowContent(true);
            this.kill();
          }
        }
      })
  })

  useGSAP(() => {
    if (!showContent) return;

    gsap.to('.main', {
      scale: 1,
      rotate: 0,
      duration: 2,
      ease: "Expo.inOut",
      delay: '-.5'
    })

    gsap.to('.sky', {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: "Expo.inOut",
      delay: '-.5'
    })

    gsap.to('.bg', {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      ease: "Expo.inOut",
      delay: '-.8'
    })

    gsap.to('.character', {
      scale: .8,
      x: "-50%",
      bottom: "-60%",
      rotate: 0,
      duration: 2,
      ease: "Expo.inOut",
      delay: '-1'
    })

    let main = document.querySelector('.main');

    main?.addEventListener("mousemove", function (e) {
      let xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.4
      });
    })
  }, [showContent])

  return (
    <>
      {!showContent && (
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="./bg.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {showContent && (
        <div className="main w-full rotate-[-20deg] scale-[1.5]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full px-10 py-8">
              <div className="logo flex gap-5">
                <div className="lines flex flex-col gap-2">
                  <div className="line h-1 w-12 bg-white"></div>
                  <div className="line h-1 w-6 bg-white"></div>
                  <div className="line h-1 w-2 bg-white"></div>
                </div>
                <h3 className="text-3xl text-white -mt-3">Rockstar</h3>
              </div>
            </div>
            <div className="imagediv relative w-full h-screen overflow-hidden">
              <img className="absolute sky top-0 left-0 w-full h-full object-cover rotate-[-20deg] scale-[1.8]" src="./sky.png" alt="" />
              <img className="absolute bg top-0 left-0 w-full h-full object-cover rotate-[-10deg] scale-[2]" src="./bg.png" alt="" />
              <div className="text absolute flex flex-col gap-3 text-white leading-none top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-[8rem] -ml-20">grand</h1>
                <h1 className="text-[8rem] ml-20">theft</h1>
                <h1 className="text-[8rem] -ml-20">auto</h1>
              </div>
              <img className="absolute character left-1/2 -bottom-[600%] -translate-x-1/2 scale-[5] rotate-[-100deg]" src="./girlbg.png" alt="" />
            </div>
            <div className="btmbar absolute bottom-0 left-0 z-10 text-white w-full px-10 py-15 bg-gradient-to-t from-black to-transparent">
              <div className="flex items-center gap-2">
                <i className="text-3xl ri-arrow-down-line"></i>
                <h3 className="text-l font-[Arial]">Scroll Down</h3>
              </div>
              <img className="absolute h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./ps5.png" alt="" />

            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="box flex text-white w-full h-[80%]">
              <div className="left relative w-1/2 h-full">
                <img className="absolute scale-[0.8] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src="./image.png" alt="" />
              </div>
              <div className="right w-[50%]">
                <h1 className="text-7xl">Still Running,</h1>
                <h1 className="text-7xl">Not Hunting</h1>
                <p className="w-[80%] text-sm mt-8 font-[Arial]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse distinctio quibusdam aspernatur rerum tenetur rem eveniet provident, suscipit alias saepe laudantium vel?</p>
                <p className="w-[80%] text-sm mt-3 font-[Arial]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint optio dolore provident illum, dolorem deleniti eaque repellat tempore, vero doloribus ullam. Modi nostrum eaque laudantium temporibus inventore et dolore omnis nobis. Praesentium, temporibus ut.</p>
                <p className="w-[80%] text-sm mt-8 font-[Arial]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nisi eligendi optio natus repudiandae velit cum magni ad laudantium ex sequi unde rem voluptatem dignissimos, vitae suscipit. Nobis assumenda deleniti quam perspiciatis? Asperiores omnis a iusto quod pariatur! Iusto, eum! Vel, modi.</p>
                <button className="bg-yellow-500 cursor-pointer active:opacity-90 hover:scale-99 text-black mt-8 px-5 py-4 text-3xl rounded">Download Now</button>
              </div>
            </div>
          </div>

        </div>
      )}
    </>
  )
}

export default App