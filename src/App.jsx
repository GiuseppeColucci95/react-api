

function App() {

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
                <tr>
                  <td className="w-15"><img src="vite.svg" alt="image" /></td>
                  <td>crackers alla barbabietola</td>
                  <td className="w-50">R1C3</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>


      </section>
    </>
  )
}

export default App;
