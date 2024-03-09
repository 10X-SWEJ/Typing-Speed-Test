import { useEffect, useState } from "react";

export const useInput = function () {
   const [typedWord, setTypedWord] = useState<string[]>([]);

   function handleKeydown(e: KeyboardEvent) {
      if (e.key.match(/^[A-Za-z\s,.'"]$/))
         setTypedWord((typedWord) => [...typedWord, e.key]);
   }

   useEffect(() => {
      window.addEventListener("keydown", handleKeydown);

      return () => window.removeEventListener("keydown", handleKeydown);
   }, [handleKeydown]);

   return typedWord;
};
