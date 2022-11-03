import { useState } from "react";

export const Form = () => {
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name || !state.email) {
      setError(true);
    } else {
      setError(false);

      console.log("se enviaron los campos completos");
      fetch("http://localhost:3001/datos", {
        method: "POST",
        body: JSON.stringify(state),
      });
    }
  };

  console.log(state);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} action="">
        <label htmlFor="name">name</label>

        <input
          onChange={handleChange}
          value={state.value}
          type="text"
          name="name"
        />

        <label htmlFor="email">email</label>
        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          value={state.value}
        />

        {error ? <p>COMPLETAR DATOS</p> : null}

        <input type="submit" value="enviar" id="" />
      </form>
    </>
  );
};
