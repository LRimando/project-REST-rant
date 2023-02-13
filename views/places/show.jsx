const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map (c => {
            return (
                <div className="border">
                    <h2 className="rant"> {c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4> {c.content} </h4>
                    <h3> <strong>- {c.author}</strong> </h3>
                        <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
            <h4 className = "alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}
            <a href = "`/places/${data.id}/edit`" className="btn btn-warning">
                edit
            </a>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                <div className="form-group col-sm-6">
                    <ims src={data.place.pic} alt={data.place.name} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
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
