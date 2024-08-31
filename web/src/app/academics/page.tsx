"use client";
import { useEffect, useRef } from 'react';

const Academic = () => {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            target.style.transition = `transform 0.5s ease ${index * 0.3}s, opacity 0.5s ease ${index * 0.3}s`;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    boxesRef.current.forEach((box) => {
      if (box) observer.observe(box);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="flex flex-col gap-5 px-11 my-5">
      <h1 className="text-3xl uppercase font-semibold">Academic</h1>
      <div className="grid grid-cols-4 gap-3 justify-center">
        {['Study Materials & Books', 'Online Resources', 'Myth About CGPA', 'Importance / Awareness About CGPA / Academics'].map(
          (text, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
              className="h-[18rem] w-[20rem] shadow-lg flex justify-center text-center items-center text-2xl font-semibold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-500 cursor-pointer box"
              style={{
                opacity: 0,
                transform: 'translateY(50px)',
              }}
            >
              {text}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Academic;
