export const NoResults = props => {
    return (
        <div  style={{display:"flex", justifyContent:"center"}}>
            <h1 className="text-muted" >{`No results ${props.q?'for '+ props.q:''} :(`}</h1>
        </div>
    )
}