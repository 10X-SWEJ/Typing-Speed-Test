import { ResultModal } from "./ResultModal";
import { TextContainer } from "./TextContainer";

export default function TypeSection({
   userInputText,
   wrongTypedCount,
   status,
   changeStatus,
   cursor,
   wpm,
}: any) {
   return (
      <section className="relative max-w-6xl m-auto p-4 rounded-[10px]  bg-slate-800 before:bg-[#938BFD] before:absolute before:-inset-0 before:flex before:-z-20 before:blur-xl before:opacity-50 min-h-[300px]">
         {status === "typing" ? (
            <TextContainer userInputText={userInputText} />
         ) : (
            <>
               <ResultModal
                  changeStatus={changeStatus}
                  wrongTypedCount={wrongTypedCount}
                  cursor={cursor}
                  wpm={wpm}
               />
            </>
         )}
      </section>
   );
}
