import './App.scss'

function App() {
  return (
    <main className="container mt-5">
      <div className="row g-3">
        <div className="col-md-6">
          <button type="button" className="btn btn-primary w-100">
            Primary color is #9b59b6
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" className="btn btn-secondary w-100">
            Secondary color is #1abc9c
          </button>
        </div>
      </div>
    </main>
  )
}

export default App