import Timer from "./Timer";
import logo from "../src/assets/logo.png";
export default function () {
   return (
      <header className="flex flex-col justify-center items-center">
         <nav className="self-start inline-flex items-center">
            <img
               src={logo}
               alt="logo"
               className="w-60 h-auto"
               title="TypeChamp logo"
            />
         </nav>
         <Timer />
      </header>
   );
}
