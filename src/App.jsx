import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import AppRoutes from './AppRoutes';
function App() {
  return (
    <div className="bg-zinc-700">
      <Navbar />

      <div className="flex flex-row space-x-0">
        <Sidebar  />
        <div className="w-full md:w-10/12">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
