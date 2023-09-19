import React from 'react'

export default function SearchUser({ getUser, handleSubmit }) {
  return (
    <div className="row center-align">
      <form className="col s6 offset-s3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12 ">
            <input
              id="text"
              type="text"
              className="validate"

              onChange={(e) => getUser(e)}
            />
            <button className="btn waves-effect waves-light" type="submit" name="action">Search</button>
          </div>

        </div>
      </form>
    </div>
  )
}
