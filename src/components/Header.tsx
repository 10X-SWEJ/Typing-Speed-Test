import Timer from "./Timer";
import logo from "../assets/logo.png";

export default function Header({ second }: any) {
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
         <Timer second={second} status={status} />
      </header>
   );
}
