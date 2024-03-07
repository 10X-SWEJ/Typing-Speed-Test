import logo from "../src/assets/logo.png";
import { TextContainer } from "./components/TextContainer";
// import { ResultModal } from "./components/Modal";

function App() {
   return (
      <main className="p-5">
         <header className="flex flex-col justify-center items-center">
            <nav className="self-start inline-flex items-center">
               <img
                  src={logo}
                  alt="logo"
                  className="w-60 h-auto"
                  title="TypeChamp logo"
               />
            </nav>
            <section className="p-10">
               <dl className="flex gap-3">
                  <dd>Time - </dd>
                  <dt>00 : 10</dt>
               </dl>
            </section>
         </header>
         <section className="relative max-w-6xl m-auto p-4 rounded-[10px]  bg-slate-800 before:bg-[#938BFD] before:absolute before:-inset-0 before:flex before:-z-20 before:blur-xl before:opacity-50">
            {/* <ResultModal /> */}
            <TextContainer />
         </section>
         <section></section>
      </main>
   );
}

export default App;
