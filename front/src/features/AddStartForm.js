import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addPages } from "../slices/pagesSlice";
import { Link } from "react-router-dom";



function AddStartForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const onNameChanged = (e) => setName(e.target.value);
  const onFileChanged = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (event) => {
    //event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      let response = await axios({
        method: "post",
        url: "http://localhost:8080/post",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
<<<<<<< HEAD
      console.log(response);
=======
      console.log(response)
>>>>>>> da57f09d2b68b2d0b014d1dcc2d33230e32059d4
    } catch (error) {
      console.log(error);
    }
    // try {
    //   dispatch(addPages({title: name, file: file})).unwrap()

    //   setName('')
    //   setFile('')
    // } catch (err) {
    //   console.error('Failed to save the file', err)
    // } finally {
    //   console.log('hello world')
    // }
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
          onChange={onNameChanged}
        />

        <input type="file" onChange={onFileChanged} />

        <button type="button" onClick={handleSubmit}>
          Create
        </button>
        <button type="button">
          <Link to={`chestionar`}>Next</Link>
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </section>
  );
}

export default AddStartForm;
