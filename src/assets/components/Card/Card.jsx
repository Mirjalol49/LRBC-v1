import React from 'react';
import { ChevronsRight } from 'lucide-react';

function Card({title,intitle, text, img}) {
  return (
    <>
      <div className="w-[400px] relative mt-4 h-[500px] overflow-hidden group mx-auto dark:bg-black bg-white dark:border-0 border rounded-md dark:text-white text-black flex flex-col">
        <div className="w-full h-full">
          <img
            src={
              img
            }
            alt="shoes"
            className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
          />
        </div>
        <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#003c6a] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="md:text-2xl font-semibold">{intitle}</h1>
            <p className="sm:text-base text-sm">
              {text}
            </p>
            <button className="p-2 bg-[#ff7f4f] flex rounded-md text-white">
              Learn More<ChevronsRight />
            </button>
          </div>
        </article>
        <article className="p-4 w-full flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-[10px] bg-gradient-to-b from-[#003c6a00] via-[#003c6adc] to-[#003c6a] opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300">
  <h1 className="md:text-3xl font-semibold mb-2">{title}</h1>
</article>

      </div>
    </>
  );
}

export default Card;
