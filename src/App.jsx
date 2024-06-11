import { useCallback, useEffect, useRef, useState } from "react";
import Title from "./components/Title";
import TitleComponent from "./components/TitleComponent";

const data = [
  {
    title: "Title",
    icon: "icon 1",
  },
  {
    title: "Title",
    icon: "icon 1",
  },
];

function App() {
  const [name, setName] = useState(false);
  const refEl = useRef(null);
  function handleChangeTitle() {
    setName(!name);
  }
  useEffect(() => {
    console.log(refEl.current.getBoundingClientRect());
  });

  const handleScroll = useCallback((sdf) => {
    console.log(sdf);
  }, []);

  useEffect(() => {
    handleScroll("sdf");
  }, [handleScroll]);
  return (
    <div className="container">
      <h1>{name}</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.icon}</p>
          </div>
        );
      })}
      <h3>ANOHTER TITLE UPDATED</h3>
      <button ref={refEl} className="btn" onClick={handleChangeTitle}>
        On change title
      </button>
      <Title
        name={name}
        status={"canceled"}
        onChildChange={(str, obj) => {
          setName(!name);
        }}
      />
      <TitleComponent />
    </div>
  );
}

export default App;
