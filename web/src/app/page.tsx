"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from 'src/util/animations';

export default function Home() {
  // Animation functions
  const animateElement = (element:any) => {
    if (element) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  };

  const animateButton = (element:any) => {
    if (element) {
      console.log('Animating Button:', element); 
      element.style.opacity = 1;
      element.style.transform = 'scale(1)';
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, 
  };

  const imageRef1 = useIntersectionObserver(animateElement, options);
  const h1Ref1 = useIntersectionObserver(animateElement, options);
  const pRef1 = useIntersectionObserver(animateElement, options);
  const buttonRef1 = useIntersectionObserver(animateButton, options);
  
  const imageRef2 = useIntersectionObserver(animateElement, options);
  const h1Ref2 = useIntersectionObserver(animateElement, options);
  const pRef2 = useIntersectionObserver(animateElement, options);
  const buttonRef2 = useIntersectionObserver(animateButton, options);
  
  const imageRef3 = useIntersectionObserver(animateElement, options);
  const h1Ref3 = useIntersectionObserver(animateElement, options);
  const pRef3 = useIntersectionObserver(animateElement, options);
  const buttonRef3 = useIntersectionObserver(animateButton, options);
  
  const imageRef4 = useIntersectionObserver(animateElement, options);
  const h1Ref4 = useIntersectionObserver(animateElement, options);
  const pRef4 = useIntersectionObserver(animateElement, options);
  const buttonRef4 = useIntersectionObserver(animateButton, options);

  return (
    <>
      <section className="px-40">
        <div className="flex items-center gap-5">
          <Image
            ref={imageRef1}
            src="/academics.png"
            alt="Academics"
            width={400}
            height={100}
            style={{ opacity: 0, transform: 'translateY(100px)', transition: 'all 1s ease' }}
          />
          <div className="flex flex-col gap-5">
            <h1
              ref={h1Ref1}
              className="text-4xl font-bold uppercase tracking-wider"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Academic
            </h1>
            <p
              ref={pRef1}
              className="text-2xl"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link href="/academics">
              <button
                ref={buttonRef1}
                className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white"
                style={{ opacity: 0, transform: 'scale(0.9)', transition: 'all 1s ease' }}
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-5">
            <h1
              ref={h1Ref2}
              className="text-4xl font-bold uppercase tracking-wider"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              UpSkill
            </h1>
            <p
              ref={pRef2}
              className="text-2xl"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link href="/upskill">
              <button
                ref={buttonRef2}
                className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white"
                style={{ opacity: 0, transform: 'scale(0.9)', transition: 'all 1s ease' }}
              >
                Know More
              </button>
            </Link>
          </div>
          <Image
            ref={imageRef2}
            src="/upskill.svg"
            alt="UpSkill"
            width={400}
            height={100}
            style={{ opacity: 0, transform: 'translateY(100px)', transition: 'all 1s ease' }}
          />
        </div>
        <div className="flex items-center gap-5">
          <Image
            ref={imageRef3}
            src="/club-activities.png"
            alt="Club Activities"
            width={400}
            height={100}
            style={{ opacity: 0, transform: 'translateY(100px)', transition: 'all 1s ease' }}
          />
          <div className="flex flex-col gap-5">
            <h1
              ref={h1Ref3}
              className="text-4xl font-bold uppercase tracking-wider"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Club Activities
            </h1>
            <p
              ref={pRef3}
              className="text-2xl"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link href="/club-activities">
              <button
                ref={buttonRef3}
                className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white"
                style={{ opacity: 0, transform: 'scale(0.9)', transition: 'all 1s ease' }}
              >
                Know More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-5">
            <h1
              ref={h1Ref4}
              className="text-4xl font-bold uppercase tracking-wider"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Alumni Interaction
            </h1>
            <p
              ref={pRef4}
              className="text-2xl"
              style={{ opacity: 0, transform: 'translateX(-100px)', transition: 'all 1s ease' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <Link href="/alumni-interaction">
              <button
                ref={buttonRef4}
                className="px-3 py-2 bg-white border-2 text-xl border-blue-600 w-[10rem] hover:bg-blue-600 hover:text-white"
                style={{ opacity: 0, transform: 'scale(0.9)', transition: 'all 1s ease' }}
              >
                Know More
              </button>
            </Link>
          </div>
          <Image
            ref={imageRef4}
            src="/alumni-interaction.svg"
            alt="Alumni Interaction"
            width={400}
            height={100}
            style={{ opacity: 0, transform: 'translateY(100px)', transition: 'all 1s ease' }}
          />
        </div>
      </section>
    </>
  );
}
