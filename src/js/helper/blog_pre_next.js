import { NavLink } from "react-router-dom";

const navLinkStyle = {
    backgroundColor: '#6c63ff', // Purple background
    color: 'white', // White text
    textDecoration: 'none', // Remove underline
    padding: '10px 15px', // Add some padding
    borderRadius: '30px', // Rounded corners
    fontSize: '16px', // Font size
    fontWeight: 'bold', // Bold text
    display: 'inline-block',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
};


const navLinkSTARTEND = {
    backgroundColor: 'gray', // Purple background
    color: 'white', // White text
    textDecoration: 'none', // Remove underline
    padding: '10px 15px', // Add some padding
    borderRadius: '30px', // Rounded corners
    fontSize: '16px', // Font size
    fontWeight: 'bold', // Bold text
    display: 'inline-block',
    transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
};


export default function PreNextBlog(props){

    var currentBlogIndex = parseInt(props.currentID);
    var startBlogID = 1;
    // update me for the last blog ID
    var endBlogID = 11;  
    return(
        <>
        <br/>
        <div style={{
        display:'flex', 
        justifyContent:'space-between', 
        marginTop:20,
        marginLeft: '2vw',
        marginRight: '2vw'
        }}>
            {currentBlogIndex > 1 && (
                <NavLink to={`/blog${currentBlogIndex - 1}`}  style={navLinkStyle}>... previous</NavLink>
            )}
            {/* {`/Blog_Sorting`} */}
            
            {currentBlogIndex <= startBlogID && <NavLink to={`/blog${endBlogID}`} style={navLinkSTARTEND}>Beginning ...</NavLink>}
            
            {currentBlogIndex < endBlogID && (
                <NavLink to={`/blog${currentBlogIndex + 1}`}  style={navLinkStyle}>NEXT ...</NavLink>
            )}

            {currentBlogIndex >= endBlogID && <NavLink to={`/blog${startBlogID}`} style={navLinkSTARTEND}>End.</NavLink>}
        </div>
        </>
    )
}
