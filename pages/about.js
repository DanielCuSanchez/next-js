import { useEffect } from "react"

const About = () => {
  useEffect(() => {
    alert('Ejecutando el effect de react')
  }, []);
  return (
    <>
      <h1>About</h1>
      <p>About page</p>
      <button>Click</button>
    </>
  )
}

export default About