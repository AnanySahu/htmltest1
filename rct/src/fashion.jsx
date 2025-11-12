import './fashion.css'
function Fashion(props){
    return (
        <>
        <div id="card">
          <h2>
            Fashion Show
          </h2>
          </div>
          <div>
            <img src={props.img} alt="" />
            <h4>Title:{props.title}</h4>
            <h4>Price:{props.price}</h4>
          </div>

        </>
    )
}