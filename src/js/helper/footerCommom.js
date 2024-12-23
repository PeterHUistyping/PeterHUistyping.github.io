/* All rights reserved. 2022-2025 (c) Peter HU */

 
export default function FooterCommon(){
    var myDate = new Date(document.lastModified);
    var myNewDate = new Intl.DateTimeFormat(
        "en-GB",
        {dateStyle: 'full',timeStyle: 'long',timeZone: 'Europe/London'}
    ).format(myDate).replace(/\./g, '-');
    return (
        <>
        © Copyright 2022-2025 PeterHU. Hosted by <a href="https://pages.github.com/">GitHub Pages</a> and <a href="https://reactjs.org">React App</a>.<br/>
            Last updated: 
            {myNewDate.toString()}
        </>
    )
}
 