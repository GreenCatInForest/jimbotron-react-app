import { Jimbotron } from "./components/Jimbotron";

let jimbotronDatas = [
  {
    titleJimbotron: "First Jumbotron",
    subTitleJimbotron: "Passing props #1",
    isFav: 0,
  },

  { titleJimbotron: "Second Jumbotron", subTitleJimbotron: "Passing props #2" },

  { titleJimbotron: "Third Jumbotron", subTitleJimbotron: "Passing props #3" },
];
export const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      {jimbotronDatas.map((jimbotronData) => {
        return (
          <Jimbotron
            titleJimbotron={
              jimbotronData.isFav === 0
                ? "Hurray!"
                : jimbotronData.titleJimbotron
            }
            subTitleJimbotron={jimbotronData.subTitleJimbotron}
            key={jimbotronData.titleJimbotron}
          />
        );
      })}
    </div>
  );
};
