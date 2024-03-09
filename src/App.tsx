import Header from "./components/Header";
import { TextContainer } from "./components/TextContainer";

// import { ResultModal } from "./components/Modal";

function App() {
   return (
      <main className="p-5">
         <Header />
         <section className="relative max-w-6xl m-auto p-4 rounded-[10px]  bg-slate-800 before:bg-[#938BFD] before:absolute before:-inset-0 before:flex before:-z-20 before:blur-xl before:opacity-50">
            {/* <ResultModal /> */}
            <TextContainer />
         </section>
      </main>
   );
}

export default App;
