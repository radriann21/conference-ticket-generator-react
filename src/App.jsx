import { MainContainer } from "./components/MainContainer";

function App() {
  return (
    <main className="max-w-full min-h-screen bg-[url(/images/background-mobile.png)] md:bg-[url(/images/background-tablet.png)] lg:bg-[url(/images/background-desktop.png)] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <MainContainer />
    </main>
  );
}

export default App;
