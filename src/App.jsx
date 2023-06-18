import './App.css'

export default function App() {
  // return 2 horizontal columns, with green and red background
  // columns shall fill the whole page
  // columns shall have a width of 50% of the page
  // columns shall have a height of 100% of the page
  // columns shall have 0 margin, padding, border
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-col w-1/2 h-full bg-green-500"></div>
      <div className="flex flex-col w-1/2 h-full bg-red-500"></div>
    </div>
  )
}