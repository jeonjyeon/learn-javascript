{
  // Web Animations API
  function playground() {
    const boxElements = document.querySelectorAll('.box');

    const keyframes = [{ translate: '0 0' }, { translate: '80vw 0' }];

    const options = {
      duration: 1000,
      fill: 'forwards',
    };

    boxElements.forEach((element) => {
      const animation = element.animate(keyframes, options);
      animation.pause();
      // animation.play()
    });
  }

  /* global gsap */

  // GSAP API
  // gsap.to(target, varObject)
  // gsap.to(selector, varObject)
  // gsap.to(htmlElement, varObject)
  // gsap.to([htmlElement1, ...], varObject)
  // gsap.to(svgElement, varObject)
  // gsap.to(jsObject, varObject)
  function playgroundGSAP() {
    // Tween Animation

    // to(target, vars)
    // gsap.to('.box', { x: '80vw' })
    // gsap.to(['.box', '.term'], { x: 400 })
    // gsap.to('.box', {
    //   xPercent: 100,
    //   yPercent: 100,
    //   duration: 3,
    //   rotation: 360,
    //   transformOrigin: 'center bottom',
    // })

    // from(target, vars)
    // gsap.from('.box', {
    //   opacity: 0,
    //   xPercent: 50,
    //   y: -200,
    //   rotation: 360,
    //   scale: 4,
    //   repeat: -1,
    //   delay: 1,
    //   repeatDelay: 1,
    //   yoyo: true,
    // })

    // fromTo(target, vars1, vars2)
    // gsap.fromTo('.box', { x: 400, y: -400 }, { x: 10, y: 50 })

    // set(target, vars)
    // gsap.set('.box', { x: 400, y: -200 })

    // targets

    // gsap.to('.box', { x: 200 })
    // gsap.to(document.querySelector('.box'), { x: 200 })
    // gsap.to(document.querySelectorAll('.box'), { x: 200 })
    // gsap.to(Array.from(document.querySelectorAll('.box')), { x: 200 })

    // vars
    // SVG 요소
    // gsap.to('.svgBox', {
    //   attr: {
    //     rx: 40,
    //     fill: 'red'
    //   }
    // })

    // JavaScript 객체
    // const o = {
    //   num: 0,
    //   color: 'yellow'
    // }

    // const output = document.querySelector('output')

    // const renderCount = () => {
    //   output.value = Math.round(o.num)
    // }

    // gsap.to(o, {
    //   num: 100,
    //   color: 'orange',
    //   duration: 1,
    //   repeat: 1,
    //   yoyo: true,
    //   onUpdate: renderCount,
    //   onComplete: () => {
    //     // console.log('finished gsap animation')
    //     gsap.set(output, { opacity: 0 })
    //   }
    // })

    // delay
    // repeatDelay
    gsap.to('.box:first-of-type', {
      rotation: 360,
      duration: 1,
      repeat: 1,
      repeatDelay: 1,
    });

    gsap.to('.box.yellow', { rotation: 360, duration: 1, delay: 1 });
  }

  setTimeout(() => {
    playground();
    playgroundGSAP();
  }, 500);
}
