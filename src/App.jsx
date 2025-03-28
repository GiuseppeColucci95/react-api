import { useState, useEffect } from "react";

const api_for_images = "http://localhost:3000/imgs/posts/";
const api_endpoint_base = "http://localhost:3000/posts/";

function App() {

  const [posts, setPosts] = useState([]);

  //logic 
  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {

        setPosts(data);
      });
  }

  //useEffect for load the data
  useEffect(() => {
    fetchData(api_endpoint_base);
  }, []);

  //console.log(posts[0].image);
  //template
  return (
    <>
      <header className="bg-warning py-3">
        <div className="container">
          <h1>Posts list</h1>
        </div>
      </header>

      <section id="postlist" className="my-5">
        <div className="container">

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Content</th>
                </tr>
              </thead>
              <tbody>

                {
                  posts.map(post => (
                    <tr key={post.slug}>
                      <td className="w-20"><img src={api_for_images + post.image} alt={post.title + " image"} /></td>
                      <td>{post.title}</td>
                      <td className="w-50">{post.content}</td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>

        </div>


      </section>
    </>
  )
}

export default App;
