/* global gsap, GSDevTools */
() => {
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
    const o = {
      num: 0,
      color: 'yellow',
    };

    const output = document.querySelector('output');

    const renderCount = () => {
      output.value = Math.round(o.num);
      output.style.setProperty('color', o.color);
    };

    gsap.to(o, {
      num: 100,
      color: 'cyan',
      duration: 1,
      // repeat: 1,
      // yoyo: true,
      onUpdate: renderCount,
      onComplete: () => {
        // console.log('finished gsap animation')
        // gsap.set(output, { opacity: 0 })
      },
    });

    // delay
    // repeatDelay
    // gsap.to('.box:first-of-type', {
    //   rotation: 360,
    //   duration: 1,
    //   repeat: 1,
    //   repeatDelay: 1,
    // });

    // gsap.to('.box.yellow', { rotation: 360, duration: 1, delay: 1 });

    // Canvas Animation
    // const canvasElement = document.querySelector('.canvas');
    // const canvas = canvasElement.getContext('2d');
    // canvas.fillStyle = '#d0d0d0';

    // const position = { x: 0, y: 0 };

    // function draw() {
    //   canvas.clearRect(0, 0, 400, 400);
    //   canvas.fillRect(position.x, position.y, 100, 100);
    // }

    // gsap.to(position, {
    //   x: 300,
    //   y: 300,
    //   duration: 1,
    //   ease: 'back.inOut(7)',
    //   onUpdate: draw,
    // });

    // Easing
    // none
    // power(1,2,3,4,).in
    // power(1,2,3,4,).out
    // power(1,2,3,4,).in
  }

  setTimeout(() => {
    playground();
    playgroundGSAP();
  }, 500);
};

() => {
  function animate() {
    // gsap.from('.blue', { y: 100, opacity: 0, duration: 1 });
    // gsap.from('.yellow', { y: 100, opacity: 0, duration: 1, delay: 0.5 });
    // gsap.from('.green', { y: 100, opacity: 0, duration: 1, delay: 1 });

    // gsap.from('.box', { y: 100, stagger: 0.1, ease: 'power4.out' });

    // 루프문 사용
    // gsap.from('.box', {
    //   y: 100,
    //   opacity: 0,
    //   stagger: 0.1,
    //   ease: 'power1.out',
    // });
    // const boxes = document.querySelectorAll('.box');
    // for (const box of boxes) {
    //   box.addEventListener('click', () => {
    //     gsap.from('.box', { y: 100, stagger: 0.1, ease: 'power4.out' });
    //   });
    // }

    // 이벤트 위임(Event Delegation)
    document.querySelector('main').addEventListener('click', (e) => {
      if (e.target.matches('.box')) {
        gsap.to('.box', {
          y: -100,
          opacity: 0,
          scale: 1.2,
          // stagger: (index, target /* list */) => {
          //   console.log(index, target);
          //   // return index * 0.2 // 0, 0.2, 0.4
          //   // return index * 0.4 // 0, 0.4, 0.8

          //   if (target.matches('.green')) {
          //     return 1.5;
          //   } else {
          //     return index * 0.2;
          //   }
          // },
          stagger: (index, target, list) => {
            console.log(index, target);
            // return index * 0.2 // 0, 0.2, 0.4
            // return index * 0.4 // 0, 0.4, 0.8

            if (index === list.length - 1) {
              return 1;
            } else {
              return index * 0.2;
            }
          },
          ease: 'power4.out',

          // Callbacks
          onStart: () => {
            console.log('start');
          },
          onUpdate: () => {
            console.log('update');
          },
          onComplete: () => {
            console.log('complete');
          },
        });
      }
    });
  }

  setTimeout(animate, 800);
};

// GASP -TimeLine
() => {
  function animate() {
    gsap.to('.box', {
      rotation: 360,
      duration: (index) => {
        if (index === 0) {
          return 2;
        } else {
          return 0.1;
        }
      },
      stagger: 0.1,
    });
  }

  setTimeout(animate, 800);
};

// GASP -TimeLine
() => {
  function animate() {
    // const tween = gsap.to('.box:first-of-type', {})
    // console.log(tween)

    // const tl = gsap.timeline();

    // 트윈을 타임라인에 추가
    // tl.to('.green', { x: 100, duration: 2 });

    // 트윈 사이에 간격이나 지연 추가
    // tl.to('.blue', { x: 600, duration: 2 });
    // tl.to('.yellow', { x: 600, duration: 1, delay: 1 });
    // tl.to('.green', { x: 600, duration: 1 });

    // 위치 매개변수
    // 정확한 타이밍으로 멋진 시퀀스를 구축할 수 있다!
    // tl.to('.blue', { x: 50, duration: 2 }, 1); // 타임라인에서 정확히 1초 지점에서 시작 (절대적)
    // tl.to('.yellow', { x: 50, duration: 1 }, '<'); // 이전 애니메이션의 시작 부분에 삽입
    // tl.to('.green', { x: 50, duration: 1 }, '+=1'); // 타임라인 끝에서 1초 후에 삽입 (간격)
    // tl.to('.pink', { x: 100 }, '-=1'); // 타임라인 끝에서 1초 전 (보통 이전에 삽입된 애니메이션/겹침)

    // tl
    //   .from('.blue', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' },3)
    //   .from('.yellow', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }, '+=2')
    //   .from('.green', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' })
    //   .from('.pink', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' })
    //   .from('.purple', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' });

    // 타임라인 기본값
    // const tl = gsap.timeline({ defaults: { duration: 1 } })

    // GSAP의 타임라인 인스턴스 생성
    // const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
    // tl.from('.blue', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }) // 0s
    //   .from('.purple', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }, '<')
    //   .from('.yellow', { y: -200, opacity: 0, duration: 0.4, ease: 'back.out' }, '-=0.3')
    //   .from('.pink', { y: -200, opacity: 0, duration: 0.4, ease: 'back.out' }, '<')
    //   .from('.green', { y: 200, opacity: 0, duration: 0.4, ease: 'back.out' }, 0 + 0.3);

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      defaults: { opacity: 0, duration: 1, ease: 'back.inOut(4)' },
    });

    tl.from('.blue', { y: 200 }) // 0s
      .from('.purple', { y: 200 }, '<')
      .from('.yellow', { y: -200 }, '-=0.3')
      .from('.pink', { y: -200 }, '<')
      .from('.green', { y: 200 }, 0 + 0.3);

    // Single: Tween Animation
    // gsap.from(['.blue', '.pink', '.red'], { y: 200 })
  }

  // 0.5초 지난 후에 animate 함수 실행
  setTimeout(animate, 500);
};

// GSAP - Callbacks & Controls
() => {
  function animate() {
    const tl = gsap
      .timeline({
        // repeat: -1,
        repeat: 1,
        repeatDelay: 1,
        // yoyo: true,
        defaults: { opacity: 0, duration: 1, ease: 'back.inOut(4)' },

        // 타임라인 콜백 설정
        onStart: () => {
          console.log('start');
        },
        onUpdate: () => {
          console.log('updating...');
        },
        onRepeat: () => {
          console.log('repeat');
        },
        onComplete: () => {
          console.log('completed');
        },
        onReverseComplete: () => {
          console.log('reverse completed');
          document.querySelector('[data-control="timeScale-0.5"]').click();
          console.log('0.5배속 재생 시작!');
        },
      })
      .from('.blue', { y: 200 }) // 0s
      .from('.purple', { y: 200 }, '<')
      .from('.yellow', { y: -200 }, '-=0.3')
      .from('.pink', { y: -200 }, '<')
      .from('.green', { y: 200 }, 0 + 0.3);

    // 타임라인 인스턴스 제어
    // pause()
    tl.pause();

    // 이벤트 위임
    // 타임라인 컨트롤 (재생, 일시정지, 재개, 역재생, 재시작, 2배속, 0.5배속)
    document.querySelector('header').addEventListener('click', (e) => {
      const button = e.target.closest('button');

      if (button.matches('[data-control="play"]')) {
        tl.play();
      }
      if (button.matches('[data-control="pause"]')) {
        tl.pause();
      }
      if (button.matches('[data-control="resume"]')) {
        tl.resume();
      }
      if (button.matches('[data-control="reverse"]')) {
        tl.reverse();
      }
      if (button.matches('[data-control="restart"]')) {
        tl.restart();
      }
      if (button.matches('[data-control="timeScale-2"]')) {
        tl.timeScale(2).play();
      }
      if (button.matches('[data-control="timeScale-0.5"]')) {
        tl.timeScale(0.5).play();
      }
    });
  }

  // setTimeout(animate, 200);

  function tweenAnimate() {
    const greenTween = gsap.to('.green', {
      scale: 1.3,
      rotation: 270,
      skewX: 30,
      duration: 1.5,
      ease: 'back.inOut(2)',
      repeat: 1,
      yoyo: true,
      repeatDelay: 1,
      onStart: () => {
        console.log('start tween');
      },
      onRepeat: () => {
        console.log('2배속');
        greenTween.timeScale(2).play();
      },
      onComplete: () => {
        console.log('complete tween');
      },
    });

    greenTween.pause();

    document.querySelector('.purple').addEventListener('click', () => {
      greenTween.timeScale(0.4).play();
    });
  }

  setTimeout(() => {
    animate();
    // tweenAnimate()
  }, 200);
};

// GSAP - Animatin Debugging (with GSDevTools)
(() => {
  // GSAP Plugin - GSDevTools
  // 플러그인 등록(register plugin)
  gsap.registerPlugin(GSDevTools);

  // 타임라인 애니메이션 생성
  const tl = gsap
    .timeline({
      id: '박스 로테이션 타임라인 애니메이션',
      // repeat: 2,
      // yoyo: true,
      defaults: { x: -200, duration: 0.3, opacity: 0, rotation: 270 },
    })
    .from('.blue', {})
    .from('.yellow', {})
    .from('.green', {})
    .from('.pink', {})
    .from('.purple', {}, 0.84);

  // GSDevTools 인스턴스 생성
  GSDevTools.create({
    animation: tl,
    persist: false,
    paused: false,
    timeScale: 2,
    loop: true,
    // visibility: 'auto'
  });
})();
