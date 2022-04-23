export const Strategy = (props) => {
  return (
    <div id='strategy' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Investment Strategy</h2>
          <p>
            We like to do a LOT of things here. Below is a cumprehensive list.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='strategy-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
