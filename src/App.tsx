import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";
function App() {
  return (
    <>
      <Hero />
      <ImageGrid title="Lorem Ipsum sit dolor" queryString="page=2&limit=4" />
      <ImageGrid title="Sit dolor map lorem" queryString="page=1&limit=4" />
    </>
  );
}

export default App;
