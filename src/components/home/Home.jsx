import React from 'react'
import Homepage from './Homepage'

import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';


export default function Home() {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const mm = gsap.matchMedia();

    gsap.to('.rev-div', {
      y: -30,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    }),
    
    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo('.dash', 
        { 
          rotationX: 50, // Start fully reclined
          transformOrigin: "bottom", // Set the transform origin to the bottom
          transformStyle: "preserve-3d", // Ensure 3D transformations
        },
        {
          rotationX: 0, // End standing upright
          scrollTrigger: {
            trigger: '.dash',
            // pin: true,
            start: 'top bottom', // When the top of the div hits the bottom of the viewport
            end: '=+100px', // When the bottom of the div leaves the top of the viewport
            scrub: 1, // Smooth scrubbing on scroll with a slight delay
            markers: false // Enable this for debugging (shows the scroll positions)
          },
          ease: 'power1.inOut', // Smoother, more linear transition
        }
      );
    });
    

    gsap.from('.bg-text-1', {
      y: 100,
      opacity: 0,
      duration: .7,
    })

    gsap.from('.bg-text-2', {
      y: 100,
      opacity: 0,
      duration: 1,
    })

    gsap.from('.button-div', {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: .2,
    })

    // what we do div
    gsap.from('.bg-text-3', {
      y: 100,
      opacity: 0,
      duration: .9,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-3'
      }
    })

    gsap.from('.bg-text-4', {
      y: 100,
      opacity: 0,
      duration: .9,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-3'
      }
    })

    const cardDivs = gsap.utils.toArray(".card-div");
    mm.add("(min-width: 1024px)", () => {
      cardDivs.forEach((card, index) => {
        gsap.from(card, {
          rotateY: 90,
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            // start: "top bottom-=100",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2 // This creates the staggered effect
        });
      });
    })
    
    
    // For image animation {over 150 clients}
    mm.add("(min-width: 1024px)", () => {
      gsap.from('.pic-1', {
        x: -100,
        ease: "power2.out",
        duration: 1,
        opacity: 0,
        stagger: {
          amount: 2,
        },
        scrollTrigger: {
          trigger: '.pic-1'
        }
      })

      gsap.from('.pic-2', {
        y:-210,
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: (".back-g"),
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        }
      }),

      gsap.from('.pic-3', {
        y:350,
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: (".back-g"),
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        }
      })
    })

    gsap.from('.bg-text-5', {
      y: 100,
      opacity: 0,
      duration: .8,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-5'
      }
    })

    gsap.from('.bg-text-6', {
      y: 100,
      opacity: 0,
      duration: .8,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-6'
      }
    })
    
    gsap.from('.bg-text-7', {
      y: 100,
      opacity: 0,
      duration: .9,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-7'
      }
    })
    
    gsap.from('.bg-text-8', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: '.bg-text-8'
      }
    })

    gsap.from('.bg-text-9', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: '.bg-text-9'
      }
    })

    gsap.from('.bg-text-10', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: '.bg-text-10'
      }
    })

    gsap.from('.bg-text-11', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: '.bg-text-11'
      }
    })

    const serviceDivs = gsap.utils.toArray(".service-div");
    mm.add("(min-width: 1024px)", () => {
      serviceDivs.forEach((card, index) => {
        gsap.set(card, {
          scale: 0.8,
          opacity: 0
        });

        gsap.to(card, {
          scale: 1,
          opacity: 1,
          duration: .5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100", // Adjust this as needed
              toggleActions: "play none none none"
          },
          delay: .1,
          clearProps: "scale"
        })
      })
    })

    // Shaping futures div {start}
    mm.add("(min-width: 1024px)", () => {
      gsap.from('.pic-4', {
        y: 80,
        ease: "power2.out",
        duration: 1.5,
        
        scrollTrigger: {
          trigger: ".pic-4",
          start: "top bottom",
          end: 'top top',
          scrub: true,
        }
      })

      gsap.from('.pic-5', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: {
          amount: 2,
        },
        scrollTrigger: {
          trigger: ".pic-5"
        }
      })

      const infoDivs = gsap.utils.toArray(".info-div")
      infoDivs.forEach((card, index) => {
        gsap.from(card, {
          y: 120,
          opacity: 0,
          duration: 1,
          stagger: {
            amount: 2
          },
          scrollTrigger: {
            trigger: card,
          },
          delay: index * .2,
        
        })
      })

      gsap.from('.text-bg-15', {
        y: 100,
        opacity: 0,
        duration: .9,
        stagger: {
          amount: 2,
        },
        scrollTrigger: {
          trigger: '.text-bg-15'
        }
      })

      gsap.from('.text-bg-16', {
        y: 100,
        opacity: 0,
        duration: .9,
        stagger: {
          amount: 2,
        },
        scrollTrigger: {
          trigger: '.text-bg-16'
        }
      })

      gsap.from('.text-bg-17', {
        y: 100,
        opacity: 0,
        duration: .9,
        stagger: {
          amount: 2,
        },
        scrollTrigger: {
          trigger: '.text-bg-17'
        }
      })
    })

    gsap.from(".bg-text-12", {
      y:100,
      opacity: 0,
      duration: .5,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-12'
      }
    })

    gsap.from(".bg-text-13", {
      y:100,
      opacity: 0,
      duration: .8,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-13'
      }
    })

    gsap.from(".bg-text-14", {
      y:100,
      opacity: 0,
      duration: .8,
      stagger: {
        amount: 2,
      },
      scrollTrigger: {
        trigger: '.bg-text-14'
      }
    })

    // shaping futures div {end}


    const faqs = gsap.utils.toArray(".faq");
    mm.add("(min-width: 1024px)", () => {
      faqs.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1.5,
          stagger: {
            amount: 2
          },
          scrollTrigger: {
            trigger: card,
          },
          // delay: index,
        })
      })

      gsap.from(".pic", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        stagger: {
          amount: 2
        },
        scrollTrigger: {
          trigger: ".pic",
        },
      })

      gsap.from(".contact", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: {
          amount: 2
        },
        scrollTrigger: {
          trigger: ".contact",
        },
      })
    })
    
  })

  return (
    <>
      <Homepage />
    </>
  )
}
