import Header from "./components/Header";
import TypeSection from "./components/TypeSection";
import { useTypeChamp } from "./hooks/useTypeChamp";

function App() {
   const {
      status,
      setStatus,
      wrongTypedCount,
      second,
      userInputText,
      wpm,
      cursor,
   } = useTypeChamp();

   function changeStatus() {
      setStatus("typing");
   }

   return (
      <main className="p-5">
         <Header second={second} />
         <TypeSection
            setStatus={setStatus}
            wrongTypedCount={wrongTypedCount}
            status={status}
            changeStatus={changeStatus}
            userInputText={userInputText}
            cursor={cursor}
            wpm={wpm}
         />
      </main>
   );
}

export default App;
