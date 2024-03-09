import { Fragment } from "react/jsx-runtime";

const GeneratedText = ({
   size,
   className,
   text,
}: {
   size: any;
   className: any;
   text: string[];
}) => {
   return (
      <div className={className}>
         {text.map((letter, index) => (
            <Fragment key={letter + index}>
               <p
                  className={`
                  ${letter === " " ? "mx-1" : ""} ${
                     size === -1
                        ? "text-md"
                        : size === 1
                        ? "text-lg"
                        : "text-2xl"
                  } transition-[font-size] duration-500 text-gray-300`}
               >
                  {letter}
               </p>
            </Fragment>
         ))}
      </div>
   );
};

export default GeneratedText;
