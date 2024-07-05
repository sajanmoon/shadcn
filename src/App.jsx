import { CarouselDemo } from "./components/demo/CarousalDemo";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className=" px-11 py-11">
        <Button variants="ghost" size="lg">
          Hello
        </Button>
        <CarouselDemo></CarouselDemo>
      </div>
    </>
  );
}

export default App;
