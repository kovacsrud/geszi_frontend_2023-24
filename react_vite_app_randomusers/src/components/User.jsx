

function User(props) {
  return (
    <div className="my-10 card card-side bg-base-100 shadow-xl">
    <figure><img src={props.user.picture.large} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">{props.user.name.first} {props.user.name.last}</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
  )
}

export default User