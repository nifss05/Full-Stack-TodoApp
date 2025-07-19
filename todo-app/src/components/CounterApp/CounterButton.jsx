

export default  function CounterButtton({by,inc,dec}){

    return (
        <div>
            <div>
                <button className="Button1" onClick={ ()=>inc(by) }>{by}</button>
                 <button className="Button1" onClick={ ()=>inc(by)}>-{by}</button>
                
            </div>

        </div>
    )
}