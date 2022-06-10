import React from 'react'
import  { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css"


export const Next = () => {
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
        )
        .then((res) => {
          setPost(res.data);

        });
    }, []);
  
    console.log();
}
