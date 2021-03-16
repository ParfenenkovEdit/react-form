import ThingsListItem from "../things-list-item";

const ThingsList = ({ things, handleChangeThing, deleteThing }) => {
  if (!things.length) {
    return (
      <div className="row">
        <h2>Things list is empty</h2>
      </div>
    );
  } else {
    return (
      <div className="row">
        <h2>Things list:</h2>
        <ul>
          {things.map((thing, index) => {
            const { name, description } = thing;

            return (
              <li key={index}>
                <ThingsListItem
                  name={name}
                  description={description}
                  index={index}
                  handleChangeThing={handleChangeThing}
                  deleteThing={deleteThing}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default ThingsList;
