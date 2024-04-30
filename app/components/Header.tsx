

export default function Header() {
  return (
    <div className="md:flex justify-between lg:mt-8 text-center">
    <h1>FIT CLUBE</h1>
    <nav className="space-x-2 mx-4">
    <button
        className="bg-orange-700 rounded-md border-lime-600 text-xs text-center p-2 mt-3">
        JOIN NOW
        </button>
        </nav>
    </div>
    
  );
}
