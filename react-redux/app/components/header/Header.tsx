import NavBar from "../navbar/NavBar";

export default function Header() {
  return (
    <header className="w-full bg-blue-900 py-3 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight">
          <span className="mr-2 text-yellow-300">RTK</span>
        </div>
        <NavBar />
      </div>
    </header>
  );
}
