import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "../components/Image";
import Text from "../components/Text";
import { selectAllComp } from "../slices/componentSlice";
import { store } from  "../app/store";
import React from 'react';
import { fetchComp } from "../slices/componentSlice";


store.dispatch(fetchComp());

const Custom = () => {


    const comps = useSelector(selectAllComp);

    let content = comps.map(comp => {switch (comp.type) {
      case "img":
        return <Image 
        key={comp.id} 
        left={comp.x}
        top={comp.y}
        w={comp.w}
        h={comp.l}
        src={comp.opt} />;
      case "text":  
        return <Text 
        key={comp.id} 
        left={comp.x}
        top={comp.y}
        w={comp.w}
        h={comp.l}
        text ={comp.opt} />;
      default:
        return <></>
    } 
    })
    
  return (
    <div>
      {content}
    </div>
  )
}

export default Custom
