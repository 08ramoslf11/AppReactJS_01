export default function CustomTextAreaLabel(props){
    return(
        <div className={`col-${props.col} mb-3`}>
          <label className="form-label" htmlfor={props.id}>{props.texto}</label>
          <textarea className="form-control" id={props.id} rows="3" />
        </div>
    )
}