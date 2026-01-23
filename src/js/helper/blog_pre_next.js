import { NavLink } from "react-router-dom";
import HorizontalScroll from "./horizontalScroll";
import { ShowDetailButton } from './uiBasicElements';

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

    const cards_homepage = [
    {
        img: "/asset/photo/Assignment/5/Home_Aug2025.png",
        title: "Home Aug 2025",
        id: 1,
    },
    {
        img: "/asset/photo/Assignment/5/Home_Jul2025.png",
        title: "Home Jul 2025",
        id: 2,
    },
    {
        img: "/asset/photo/Assignment/5/Home_Mar2025.png",
        title: "Home Mar 2025",
        id: 3,
    },
    {
        img: "/asset/photo/Assignment/5/Home_Mar2025-v0.png",
        title: "Home Mar 2025 - alternate",
        id: 4,
    }, 
    {
        img: "/asset/photo/Assignment/5/Home_Nov2024.png",
        title: "Home Nov 2024",
        id: 5,
    }, 
    {
        img: "/asset/photo/Assignment/5/Home_Mar2024.png",
        title: "Home Mar 2024",
        id: 6,
    },
    {
        img: "/asset/photo/Assignment/5/Home_Dec2023.png",
        title: "Home Dec 2023",
        id: 7,
    },
    {
        img: "/asset/photo/Assignment/5/Home_Nov2023.png",
        title: "Home Nov 2023",
        id: 8,
    },
    {
        img: "/asset/photo/Assignment/5/Mobile_Home_Apr2023.png",
        title: "Mobile Home Apr 2023",
        id: 9,
    },
    {
        img: "/asset/photo/Assignment/5/page.png",
        title: "Home page initial",
        id: 10,
    },
    {
        img: "/asset/photo/Assignment/5/React_js.png",
        title: "React js",
        id: 11,
    }
    ];

    const cards_blog = [
    {
        img: "/asset/photo/Assignment/5/blog3.0-v2.png",
        title: "Blog 3.0 v2",
        id: 1,
    },
    {
        img: "/asset/photo/Assignment/5/blog3.0.png",
        title: "Blog 3.0 v1",
        id: 2,
    }, 
    {
        img: "/asset/photo/Assignment/5/BlogMar23.png",
        title: "Blog 3.0 v0",
        id: 3,
    },
    {
        img: "/asset/photo/Assignment/5/blog2.0.png",
        title: "Blog 2.0",
        id: 4,
    },
    {
        img: "/asset/photo/Assignment/5/blog.png",
        title: "Blog",
        id: 5,
    },
    ];

    return(
        <>
        <br/>

        /* check if currentBlogIndex is 5 */
        {currentBlogIndex === 5 &&
            <center>
            <h4>SnapNest  | {( <ShowDetailButton 
                        rounded = {"True"} 
                        buttonText = {<>🖼️</>}  
                        mainText = {<> 
                            <br/>
                            <HorizontalScroll cards={cards_homepage} /> |
                            </> 
                } />  )}  {( <ShowDetailButton 
                        rounded = {"True"} 
                        buttonText = {<>🌆</>}
                        mainText = {<>  
                            <br/>
                            <HorizontalScroll cards={cards_blog} />
                            </>}
                />      )} 
            </h4>
            </center>
        }

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
