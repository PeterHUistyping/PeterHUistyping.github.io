import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'; 


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


function RoundButton(props){
    const show = props.show || false;
    const setShow = props.setShow || (() => {});
    const buttonText = props.buttonText || "Details";
    // const showExpandStatusText = props.showExpandStatusText || false;
    return(
        <button onClick={() => {setShow(! show)}} 
    
        style={{
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '3px 6px',
            border: '#83789E',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'background 0.3s'
        }} 
        onMouseOver={(e) => e.target.style.backgroundColor = '#6E6182'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#4A90E2'}
        >{buttonText}</button>
    )
}


export function ShowDetailButton(props){
    // usage: <ShowDetailButton rounded = {"False"} title = {<>HI!</>}  mainText = {<>Hi</>} />
    // usage: <ShowDetailButton rounded = {"True"} title = {<>HI!</>}  buttonText = {<>Hi</>} />

    const [show, setShow] = React.useState(false);
    const rounded = props.rounded === "True" || false;
    
    if (rounded){
        return(
        <>
            <RoundButton show={show} setShow={setShow} buttonText={props.buttonText}/> {props.title} <br/>
            {/* &nbsp;  */}
            {
                show && <> {props.mainText} </>
            } 
        </>)
    }
    else{
        return(
        <>
            <DetailButton show={show} setShow={setShow} buttonText={props.buttonText} /> {props.title} <br/>
            {/* &nbsp;  */}
            {
                show && <> {props.mainText} </>
            } 
        </>)
    }
    
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


export function FetchJourneyMainText(props){
    return  (  
        <ReactMarkdown 
            remarkPlugins={[remarkMath, remarkGfm]} 
            rehypePlugins={[rehypeKatex, rehypeRaw]} 
            children={props.Journey}
            components={{
            img:({node,...props})=><img style={{maxWidth:'80%', maxHeight:'60vh'}}{...props}/>,
            p: ({ node, ...props }) => <p style={{ margin: 0 }} {...props} />,
            }}
        />)
}


export function DisplayHTMLContent(props){
    return  (  
        <>
        <span dangerouslySetInnerHTML={{ __html: props.htmlContent }}></span>
        </>
    )
}


export function LargeExpandablePanel(props){
    /*
        Usage:
        
        const resource_json = [{
        "JourneyCategory": "Test Category",
        "Title": "Test Title", "ShortTitle": "Test Short Title",
        "Journey": "Hi! ...",
        }]

        <LargeExpandablePanel resource={resource_json} />
    */
    return(
        <>
         {props.resource.map((item, index) => (
            item.Journey && (
        <div>
          <StoryDescriptionButton
            title={
              <>
                <b><DisplayHTMLContent htmlContent={item.JourneyCategory} />
                </b> <i>{item.ShortTitle  && <DisplayHTMLContent htmlContent={item.ShortTitle} />}{ !item.ShortTitle && <DisplayHTMLContent htmlContent={item.Title} />}</i>.
              </>
            }
            mainText={<FetchJourneyMainText Journey={item.Journey} />}
          />
            <br />
        </div>
        )
        ))}
        </>
    )
}
