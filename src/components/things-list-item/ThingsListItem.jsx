import { useState } from "react";
import ThingButton from "../thing-button";

const ThingsListItem = ({
  name,
  description,
  index,
  handleChangeThing,
  deleteThing,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleIsDisabledChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <div className="row">
        <div className="col s6">
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleChangeThing.bind(this, index, "name")}
            disabled={isDisabled}
          />
          <label htmlFor="description">Description:</label>
          <input
            value={description}
            name="description"
            onChange={handleChangeThing.bind(this, index, "description")}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="section row">
        <ThingButton
          action={handleIsDisabledChange}
          className="btn waves-effect col s2"
        />
        <ThingButton
          action={deleteThing.bind(this, index)}
          className="btn waves-effect red accent-4 col s2"
        />
      </div>
    </>
  );
};

export default ThingsListItem;
