import { Fragment } from "react/jsx-runtime";
import { useInput } from "../hooks/useInput";

const InputText = ({
   size,
   className,
   generatedText,
}: {
   size: any;
   className: any;
   generatedText: string[];
}) => {
   const userInputText = useInput();

   return (
      <div className={`${className}`}>
         {userInputText.map((letter, index) => (
            <Fragment key={letter + index}>
               <p
                  className={`
                  ${
                     letter === generatedText[index]
                        ? "text-green-400"
                        : "text-red-500"
                  }
                  ${
                     letter === " " && generatedText[index] === " "
                        ? "mx-1"
                        : ""
                  } ${
                     size === -1
                        ? "text-md"
                        : size === 1
                        ? "text-lg"
                        : "text-2xl"
                  } transition-[font-size] duration-500`}
               >
                  {letter === " " && generatedText[index] !== " " ? (
                     generatedText[index]
                  ) : generatedText[index] === " " && letter !== " " ? (
                     <div className="w-2 h-5 bg-red-500" />
                  ) : (
                     generatedText[index]
                  )}
               </p>
            </Fragment>
         ))}
         <div
            aria-hidden={true}
            className="w-[2px] h-7 mt-1 bg-purple-500 inline-block animate-cursor"
         />
      </div>
   );
};

export default InputText;
