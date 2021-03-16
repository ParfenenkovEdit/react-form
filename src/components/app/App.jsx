import Form from "../form";
import ThingsList from "../things-list";
import { useState } from "react";

function App() {
  const [things, setThings] = useState([]);
  const [error, setError] = useState(false);

  const handleError = (value) => {
    setError(value);
  };

  const handleSubmit = (item) => {
    setThings((prev) => [...prev, item]);
  };

  const handleChangeThing = (index, key, event) => {
    const { value } = event.target;
    setThings((prev) => {
      const newArr = [...prev];
      newArr[index] = {
        ...newArr[index],
        [key]: value,
      };
      return newArr;
    });
  };

  const deleteThing = (index) => {
    setThings((prev) => {
      const newArr = [...prev];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  return (
    <div className="container">
      <h1>Things</h1>
      <Form
        handleSubmit={handleSubmit}
        handleError={handleError}
        error={error}
      />
      <ThingsList
        things={things}
        handleChangeThing={handleChangeThing}
        deleteThing={deleteThing}
      />
    </div>
  );
}

export default App;
