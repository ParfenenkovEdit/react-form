import { useState } from "react";

const Form = ({ handleSubmit, handleError, error }) => {
  const [values, setValues] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    setValues((prev) => {
      const { name, value } = event.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (!values.name || !values.description) {
      handleError(true);
      return;
    }
    handleSubmit(values);
    handleError(false);
    setValues({
      name: "",
      description: "",
    });
  };

  return (
    <form className="col s8" onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter thing name"
            className={!error ? "validate" : "validate invalid"}
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Thing name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Enter thing description"
            className={
              !error ? "materialize-textarea" : "materialize-textarea invalid"
            }
            value={values.description}
            onChange={handleChange}
          />
          <label htmlFor="description">Thing description</label>
        </div>
        {error ? (
          <div className="col s12">
            <h6 className="text-accent-4">
              Name and description should be non-empty
            </h6>
          </div>
        ) : null}
      </div>
      <button className="btn waves-effect waves-light" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
