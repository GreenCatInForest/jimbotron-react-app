import { Jimbotron } from "./components/Jimbotron";

export const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <Jimbotron
        titleJimbotron="First Jumbotron"
        subTitleJimbotron="Passing props #1"
        isFav={true}
      />
      <Jimbotron
        titleJimbotron="Second Jumbotron"
        subTitleJimbotron="Passing props #2"
      />
      <Jimbotron
        titleJimbotron="Third Jumbotron"
        subTitleJimbotron="Passing props #3"
      />
    </div>
  );
};
