import './ItemCount.css';

const ItemCount = (props) => {

    return (
        <>
            <div className="row">
                   <div className="col-4"> <button className="btn btn-outline-primary btn-sm anchoBoton" onClick={() => props.less()}>-</button> </div>
                   <div className="col-4"> <p className="text-center">{props.count}</p> </div>
                   <div className="col-4"> <button onClick={() => props.add()} className="float-right btn btn-outline-primary btn-sm anchoBoton">+</button> </div>
            </div>
        </>
    );
}


export default ItemCount;