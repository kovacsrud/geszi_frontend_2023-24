
function Tanulo({ tanulo }) {
  return (
    <div className="card my-5 w-96 bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{tanulo.vezeteknev} {tanulo.keresztnev}</h2>
        <p>Kor: {tanulo.kor}</p>
        <p>Születési hely: {tanulo.szuletesi_hely}</p>
        <p>E-mail-cím:{tanulo.email}</p>
        <div className="card-actions justify-end">
          <button className="btn">Részletek</button>
        </div>
      </div>
    </div>
  )
}

export default Tanulo