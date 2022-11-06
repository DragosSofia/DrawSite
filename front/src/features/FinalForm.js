import { selectAllComp, updateComp } from "../slices/componentSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Link } from 'react-router-dom';

function FinalForm () {
  const dispatch = useDispatch()
  const comps = useSelector(selectAllComp);

  console.log(comps);

  const HandleNext = e => {
    
  }

  const onChange = (e, id) => {
    const opt = e.target.value
    dispatch(updateComp({id, opt }))
  }

  const form = comps.map((c) => {
    const id = c.id
    let text, input
    if( c.type === 'text'){
      text = <h2>Add text for {id}</h2>
      input = <input type="text" key={id}  onChange={event => onChange(event, id)} />
    }
    if( c.type === 'img'){
      text = <h2>Add image for {id}</h2>
      input = <input type="file" key={id}  onChange={event => onChange(event, id)} />
    }
    return(<>{text}{input}</>)
  })

  return(
    <>
    <h1>Add the additional information to complete the site.</h1>
  <form>
    {form}
  </form>
  <h2><button  onClick={HandleNext}>
    <Link to={`custom`}>Next</Link> 
  </button></h2>
  </>
  )
}

export default FinalForm