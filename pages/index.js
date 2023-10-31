import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';


export default  function Home() {

  const [x, setX] = useState("pending")
  useEffect(()=> {
    const getData = async() => {
      const resp = await fetch('/api/seq')
      const data = await resp.json();
      setX(data.msg)
    }
    getData();
  })

  return (<h1>{x}
  </h1>
  );
}
