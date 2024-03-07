import { useState } from "react";
import GeneratedText from "./GeneratedText";
import InputText from "./InputText";

export const TextContainer = function () {
   const [size, setSize] = useState(0);
   const text =
      "The city buzzed with life as people hurried along the crowded streets, their footsteps echoing against the towering buildings that reached towards the sky. Cars honked impatiently, weaving in and out of traffic, while the aroma of street food wafted through the air, tempting passersby with its savory scent. Amidst the hustle and bustle, a lone musician sat on a street corner, fingers dancing across the strings of a guitar, his soulful melody providing a moment of tranquility amidst the chaos of the urban landscape".split(
         ""
      );
   const className =
      "max-w-[1000px] absolute top-0 bottom-0 flex flex-wrap justify-center selection:bg-none";
   return (
      <>
         <div className="ml-5 pb-3 flex gap-4">
            <button
               title="small"
               className="w-4 h-4 bg-red-500 rounded-full"
               onClick={() => setSize(-1)}
            />
            <button
               title="normal"
               className="w-4 h-4 bg-yellow-500 rounded-full"
               onClick={() => setSize(0)}
            />
            <button
               title="large"
               className="w-4 h-4 bg-green-500 rounded-full"
               onClick={() => setSize(1)}
            />
         </div>
         <div className="relative bg-slate-900 p-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 rounded-[inherit] min-h-[300px]">
            <GeneratedText className={className} text={text} size={size} />
            <InputText className={className} text={text} size={size} />
         </div>
      </>
   );
};
