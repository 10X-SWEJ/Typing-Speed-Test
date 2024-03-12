import { useState, useEffect } from "react";
import { useTimer } from "./useTimer";
import { useInput } from "./useInput";
import { Text } from "../data/text";

export const useTypeChamp = function (wordsToType: string[] = Text) {
   const [status, setStatus] = useState<null | "typing" | "finish">(null);
   const [wrongTypedCount, setWrongTypedCount] = useState(0);
   const [correctTypedCount, setCorrectTypedCount] = useState(0);
   const [cursor, setCursor] = useState(0);
   const { second, setStartCountdown } = useTimer();
   const userInputText = useInput();
   const [wpm, setWpm] = useState(0);

   useEffect(() => {
      if (status === "typing") setStartCountdown(true);
   }, [status]);

   useEffect(() => {
      if (status === "typing") {
         setCursor((cursor) => cursor + 1);
         if (wordsToType[cursor] !== userInputText[cursor]) {
            setWrongTypedCount((wrongTyped) => wrongTyped + 1);
         } else {
            setCorrectTypedCount((correctTypedCount) => correctTypedCount + 1);
         }
      }
   }, [userInputText]);

   useEffect(() => {
      if (cursor >= wordsToType.length) {
         setStatus("finish");
         setStartCountdown(false);
         const minute = second / 60;
         setWpm(Math.ceil(correctTypedCount / minute));
      }
   }, [cursor]);

   return {
      status,
      wrongTypedCount,
      setWrongTypedCount,
      second,
      userInputText,
      setStatus,
      wpm,
      cursor,
   };
};
