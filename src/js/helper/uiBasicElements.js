import React from 'react';


function DetailButton(props){
    const show = props.show || false;
    const setShow = props.setShow || (() => {});
    const buttonText = props.buttonText || "Details";
    const showExpandStatusText = props.showExpandStatusText || false;
    return(
    <button 
        style={{
            backgroundColor: show ? "#D3D3D3": "white",
            // borderTopLeftRadius: "12px",
            // borderTopRightRadius: "12px",
            borderRadius: "8px",
        }}  
        onClick={() => {setShow(! show)}}
        // on mouse over change border width to 2px
        onMouseOver={(e) => e.currentTarget.style.border = "3px solid #A9A9A9"}
        onMouseOut={(e) => e.currentTarget.style.border = ""}
        >
        {!showExpandStatusText ? (show ? "Close" : "Expand") : null} {buttonText} {show ? <>△</>:<>▼</>}
    </button> )
}


export function ShowDetailButton(props){
    // usage: <ShowDetailButton title = {<>HI!</>}  mainText = {<>Hi</>} />
    const [show, setShow] = React.useState(false);
    return(
    <>
    <DetailButton show={show} setShow={setShow} /> {props.title} <br/>
    {/* &nbsp;  */}
    {
        show && <> {props.mainText} </>
    } 
    </>
     
    )
}


function StorySummaryButton(props){
    const show = props.show || false;
    const handleOnClick = props.handleOnClick || (() => {});
    return(
    <button  
        style={{backgroundColor: show ? "#f1f8e9": "white",
            border: "1px solid #4CAF50",
            width: "80%",
            marginLeft: "10%",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            marginTop: "0",     
            marginBottom: "0", 
            padding: "20px",   
            boxSizing: "border-box",
        }} onClick={handleOnClick}
        // on mouse over change border width to 2px
        onMouseOver={(e) => e.currentTarget.style.border = "2px solid #4CAF50"}
        onMouseOut={(e) => e.currentTarget.style.border = "1px solid #4CAF50"}
        >   
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <span>{props.title}</span>
            <span style={{ marginLeft: 'auto' }}>
            <div style={{ color: "gray" }}>
                {show ? "Close" : "Expand"} Details {show ? <>△</> : <>▼</>}
            </div>
            </span>
        </div>
    </button>
    )
}


function FetchButton(props){
    const isJourney = (props.type === "Journey");

    if (isJourney){
        return (
            <>
                <DetailButton show={props.show} setShow={props.handleOnClick} buttonText={props.type} showExpandStatusText={isJourney} />
            </>
        )
    }else{
        return (
            <>
                <StorySummaryButton  title={props.title} show={props.show}  handleOnClick={props.handleOnClick}/> 
            </>
        )
    }
}


export function StoryDescriptionButton(props){
    // usage: <StoryDescriptionButton 
    //         title = {<>HI!</>}  mainText = {<>Hi</>} />
    const [show , setShow] = React.useState(false);
  
    const handleOnClick = () => {
          setShow(! show);
    }

    return(
        <>
        <FetchButton title={props.title} show={show} handleOnClick={handleOnClick} type={props.type || "default"} />
        {show && 
        <>
        <br/>
        <div style={{
            width: props.type === "Journey" ? "96%" : "74%",
            margin: "auto",
            borderLeft: "1px dashed #4CAF50", 
            borderRight: "1px dashed #4CAF50",
            borderBottom: "1px dashed #4CAF50",
            borderRadius: "15px",
            padding: "10px",
            backgroundColor: "#f1f8e944"
            }}>
            {props.mainText}
            {/* add horizontal dashed green line */}
            {/* <div style={{borderBottom: "1px dashed #4CAF50", width: "100%", marginTop: "10px"}}></div> */}
        </div>
        </>
        }
    </>
    )
}