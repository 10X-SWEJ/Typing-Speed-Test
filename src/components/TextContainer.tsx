import { useState } from "react";
import GeneratedText from "./GeneratedText";
import InputText from "./InputText";
import { Text } from "../data/text";

export const TextContainer = function ({ userInputText }: any) {
   const [size, setSize] = useState(0);

   const className =
      "max-w-[1000px] absolute top-5 bottom-0 flex flex-wrap items-center content-start selection:bg-none";
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
            <GeneratedText className={className} text={Text} size={size} />
            <InputText
               className={className}
               generatedText={Text}
               size={size}
               userInputText={userInputText}
            />
         </div>
      </>
   );
};
