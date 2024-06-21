import { useEffect, useState } from "react";

export const useInput = function () {
  const [typedWord, setTypedWord] = useState<string[]>([]);

  function handleKeydown(e: KeyboardEvent) {
    // /^[A-Za-z\s,.'"]$/
    if (
      (e.key !== "Shift" && e.key.match(/^[a-zA-Z0-9"'\-,:'."]+$/)) ||
      e.key === " "
    )
      setTypedWord((typedWord) => [...typedWord, e.key]);
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  return typedWord;
};
