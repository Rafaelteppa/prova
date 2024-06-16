export default function Header() {
  return (
    <div className="mx-5 my-4 flex justify-between items-center">
      <div>
        <p>💪FITCLUB</p>
      </div>
    <button className="bg-orange-400 rounded-md text-xs text-center p-2">JOIN NOW</button>
    <nav className="bg-blue-400 rounded-md text-xs text-center p-2 space-x-3 mx-4">
          <a href="/admin">Login</a>
        </nav>
    </div>
  )
}
