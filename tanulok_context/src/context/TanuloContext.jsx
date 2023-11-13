import { useState,useEffect,createContext } from "react";
import {useNavigate} from 'react-router-dom';

const TanuloContext=createContext();

export const TanuloProvider=({children})=>{
    const navigate=useNavigate();
    const[tanulok,setTanulok]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    const torles=(id)=>{
        fetch(`http://127.0.0.1:8000/tanulok/${id}`,{
         method:'DELETE',
         headers:{'Content-type':'application/json'}
        })
        .then(res=>res.json())
        .then(res=>{alert(res);update()})
        .catch(err=>console.log(err));
     }

     const adatkuldes=async (formData)=>{
        const keres=await fetch("http://127.0.0.1:8000/tanulok",{
          method:'POST',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(formData)
        })
        const valasz=await keres.text();
        update();
        alert(valasz);
      }

      const modositas=async (id,formData)=>{
        const keres=await fetch(`http://127.0.0.1:8000/tanulok/${id}`,{
          method:'PATCH',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(formData)
        })
        const valasz=await keres.text();
        update();
        alert(valasz);
      }

      const modosit=(tanulo)=>{
        navigate("/modosittanulo",{state:{tanulo}});    
      }

    useEffect(()=>{
        fetch("http://127.0.0.1:8000/tanulok")
        .then(res=>res.json())
        .then(tanulok=>setTanulok(tanulok))
        .catch(err=>alert(err));
    },[refresh]);

    return <TanuloContext.Provider value={{tanulok,update,torles,adatkuldes,modositas,modosit}}>{children}</TanuloContext.Provider>
}

export default TanuloContext;