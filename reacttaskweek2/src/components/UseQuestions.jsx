import React, {useEffect,useState} from "react"
import problems from './data/problems.json'

const UseQuestions =(url)=>{
const[data, setdata]=useState([]);
const[isPending, setisPending]=useState(true);
const[error, seterror]=useState(null);

useEffect(()=>{
    fetch(url)
      .then(res=>{
        if(!res.ok){
            throw Error('could not fetch the questions')
        }
        return res.json();
      })
      .then(data=>{
        setdata(data);
        setisPending(false);
        seterror(null);
      })
      .catch(err=>{
        setisPending(false);
        seterror(err.message);
      })
},[url]);
return {data,isPending,error}


}

export default UseQuestions;