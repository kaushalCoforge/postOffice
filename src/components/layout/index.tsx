import React, { useReducer, useEffect, useState } from 'react';
import AppHeader from './AppHeader';
import Routers from '../../routes/index';
import {reducer,initialState} from '../../reducer/index'



export default function Landing() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer,initialState);
  console.log(state)
  useEffect(()=>{
    console.log("dffsdfsdff")
  },[state.isOpen])
  return (
    <>
    <AppHeader/>
    <Routers/>
    {/* <Routers/> */}
    </>
  );
}
