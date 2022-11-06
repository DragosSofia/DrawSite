import React from 'react';
// import { Link } from 'react-router-dom';


function CardItem(props) {
  return (
    
    <>
      <li >
          <figure data-category={props.label}>
            <img
              width={props.w}
              height = {props.l}
              style = {{
                position: "absolute",
                left: props.left,
                top: props.top }}
              
              alt='Travel Image'
              src={props.src}
            />
            <img
              width={500}
              height = {500}
              style = {{position: "absolute",
              left: '250px'}}
              
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div>
            <h5>{props.text}</h5>
          </div>
        {/* </Link> */}
      </li>
    </>
  );
}

export default CardItem;
