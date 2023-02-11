const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <a href = "`/places/${data.id}/edit`" className="btn btn-warning">
                edit
            </a>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input 
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input
                    id="name"
                    name="name"
                    value={data.place.name}
                    required />
                </div>
            </div>
            </div>
                <button type="submit" className="btn-btn-danger">
                    Delete
                </button>
            </form>
            <h1>{data.place.name}</h1>
          </main>
        </Def>
    )
}

module.exports = show
