import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addPages } from "../slices/pagesSlice";
import { Link } from "react-router-dom";
import '../components/Button.css';

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
      })
      console.log(response);
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
        <input className="input--field"
          type="text"
          value={name}
          placeholder="Name"
          onChange={onNameChanged}
        />
        
        <input type="file" className='label' onChange={onFileChanged} />
        
        <button className='btn--outline' type="button" onClick={handleSubmit}>
          Create
        </button>
        <button className='btn--outline' type="button" >
          <Link to={`chestionar`}>Next</Link>
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </section>
  );
}

export default AddStartForm;
