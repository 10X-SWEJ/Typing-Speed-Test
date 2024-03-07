import { Fragment } from "react/jsx-runtime";

const InputText = ({
   size,
   className,
   text,
}: {
   size: any;
   className: any;
   text: string[];
}) => {
   const test = "The city buzzed with life as".split("");
   return (
      <div className={`${className}`}>
         {test.map((letter, index) => (
            <Fragment key={letter + index}>
               <p
                  className={`
                  ${letter === " " ? "mx-1" : ""} ${
                     size === -1
                        ? "text-sm"
                        : size === 1
                        ? "text-xl"
                        : "text-md"
                  } transition-[font-size] duration-500 text-purple-500`}
               >
                  {letter}
               </p>
            </Fragment>
         ))}
         <div
            aria-hidden={true}
            className="w-[3px] h-5 mt-1 bg-purple-500 inline-block animate-cursor"
         />
      </div>
   );
};

export default InputText;
