import { useState, useEffect } from "react";

const api_for_images = "http://localhost:3000/imgs/posts/";
const api_endpoint_base = "http://localhost:3000/posts/";


export default function Main() {

  //use state variables
  const [posts, setPosts] = useState([]);

  //logic 
  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        setPosts(data);
      });
  }

  function fetchDelete(url, post) {
    fetch(url, { method: 'DELETE' })
      .then(res => {
        console.log(res);
        fetchData(api_endpoint_base);
      })
  }

  function handleDelete(post) {
    console.log("You clicked delete!", post.slug);

    fetchDelete(api_endpoint_base + post.slug);
  }

  //useEffect for load the data
  useEffect(() => {
    fetchData(api_endpoint_base);
  }, []);

  //return
  return (
    <>
      <section id="postlist" className="my-5">
        <div className="container">

          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>

                {
                  posts.map(post => (
                    <tr key={post.slug}>
                      <td className="w-40"><img className="border rounded-4 border-1 border-dark" src={api_for_images + post.image} alt={post.title + " image"} /></td>
                      <td className="w-55">
                        <h4>{post.title}</h4>
                        <p className="fs-8">{post.content}</p>
                      </td>
                      <td className="w-5 text-center">
                        <button className="btn btn-danger" onClick={() => handleDelete(post)}><i className=" fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>

        </div>
      </section >
    </>
  )
}