export default function CustominputLabel(props){
    return(
        <div className="col-8 mb-3">
          <label className="form-label" for={props.id}>{props.texto}</label>
          <input className="form-control" id={props.id} type="text" />
        </div>
    )
}