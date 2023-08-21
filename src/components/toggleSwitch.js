import "../css/toggleSwitch.css";

const ToggleSwitch = ({ label, funcName }) => {

  const handleChild = (funcName) => {
    // Here, you have the function from the child.
    console.log(funcName);
  };

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} onClick={handleChild}/>
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
