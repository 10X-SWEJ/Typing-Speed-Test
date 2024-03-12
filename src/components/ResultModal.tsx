import Check from "./svg/check";
import ErrorCount from "./svg/error";
import TypeAgain from "./svg/type";
import WordCount from "./svg/words";

export const ResultModal = function ({
   changeStatus,
   wrongTypedCount,
   wpm,
   cursor,
}: any) {
   return (
      <div className="absolute top-0 bottom-0 left-0 w-full h-full rounded-[inherit] flex flex-col items-center justify-center min-h-60">
         <div className="relative flex flex-col justify-start items-start gap-9 min-w-[250px]">
            <dl className="flex items-center justify-between w-full">
               <dd className="flex text-2xl gap-2 text-green-500">
                  <Check className="w-9 h-9 fill-green-500" /> WPM
               </dd>
               <dt className="text-xl text-green-500">{wpm}</dt>
            </dl>
            <dl className="flex items-center justify-between w-full">
               <dd className="flex text-2xl gap-2 text-red-500">
                  <ErrorCount className="w-9 h-9 fill-red-500" /> Error
               </dd>
               <dt className="text-xl text-red-500"> {wrongTypedCount}</dt>
            </dl>
            <dl className="flex items-center justify-between w-full">
               <dd className="flex text-2xl gap-2 text-blue-500">
                  <WordCount className="w-9 h-9 fill-blue-500" /> Total Words
               </dd>
               <dt className="text-xl text-blue-500"> {cursor}</dt>
            </dl>
            <button
               onClick={changeStatus}
               className="p-1 text-black self-center flex items-center gap-1"
            >
               <TypeAgain className="w-5 h-5 fill-gray-400" />
               <span className="text-white">Start Typing</span>
            </button>
         </div>
      </div>
   );
};
