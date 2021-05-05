import { useState, useEffect } from "react";
import data from "./data";
import Nav from "./components/Nav";
import GithubInfo from "./components/GithubInfo";
import Header from "./components/Header";

function App() {
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(data[0].component);

  useEffect(() => {
    setPage(data[index].component);
  }, [index]);

  return (
    <main>
      <div className="card">
        <Header />
        <GithubInfo />
        <Nav index={index} setIndex={setIndex} />
        <div className="main-content">{page}</div>
      </div>
    </main>
  );
}

export default App;
