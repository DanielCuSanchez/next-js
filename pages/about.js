import { useEffect } from "react"
import Head from "next/head";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    //alert('Ejecutando el effect de react')
  }, []);
  return (
    <>
      <Head>
        <title>About page 🙃</title>
        <meta name="description" content="my first page in next js" />
      </Head>
      <h1>About</h1>
      <p>About page</p>
      <button onClick={()=> alert('Vanilla JS works!')}>Click</button>
      <Image src='/react-vs-next.jpg'  width='600' height='500' alt="example"/>
    </>
  )
}

export default About