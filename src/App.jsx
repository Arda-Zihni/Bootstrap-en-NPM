const cardText =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae commodi tempora voluptates eos maxime inventore suscipit ipsum reiciendis, quidem quia at accusantium aliquid nihil placeat doloremque cupiditate esse ab odio?'

function Card() {
  return (
    <article className="card h-100">
      <h2 className="card-header h5 mb-0">Lorem ipsum dolor sit amet</h2>
      <div className="card-body">
        <p className="card-text mb-0">{cardText}</p>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="container mt-5">
      <div className="row g-3">
        <div className="col-md-6">
          <Card />
        </div>
        <div className="col-md-6">
          <Card />
        </div>
      </div>
    </main>
  )
}

export default App