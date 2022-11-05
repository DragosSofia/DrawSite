import { useState } from "react";

function AddStartForm() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("localhost:8080/post", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          file: file
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setFile("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <h2>Add new page</h2>
      <form>
        <h2>Title of the page</h2>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />

        <button type="submit" onKeyPress={handleSubmit}>Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </section>
  );
}

export default AddStartForm;