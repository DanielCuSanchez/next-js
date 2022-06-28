import { useState } from "react"
import Head from "next/head";

const Users = ({ data}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>Users page 🙃</title>
        <meta name="description" content="my first page in next js" />
      </Head>


      <button onClick={() => setShow(!show)}>Show users</button>
      {
        show && (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
              data.map(u => (
                <div style={
                  {
                    width: '300px',
                    border: '1px solid blue',
                    margin: "10px",
                    textAlign: "center"
                  }} key={u.id}>
                  <h4>
                    {u.name}
                  </h4>
                  <p>
                    {u.username}
                  </p>
                </div>
              ))
            }
          </div>
        )
      }
    </>
  )
}

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
  return {
    props: {
      data
    }
  }
}

export default Users