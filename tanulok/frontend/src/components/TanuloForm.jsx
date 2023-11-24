

function TanuloForm() {
  return (
    <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 justify-items-center">
      <h1 className="text-xl font-bold text-center">Új tanuló rögzítése</h1>
      <form>
        <div>
      <input type="text" placeholder="vezetéknév" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" placeholder="keresztnév" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" placeholder="életkor" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" placeholder="születési hely" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <input type="text" placeholder="e-mail" className="input input-bordered input-info w-full max-w-xs" />
      </div>
      <div>
      <button className="btn btn-primary">Küldés</button>
      </div>
      </form>
    </div>
  )
}

export default TanuloForm