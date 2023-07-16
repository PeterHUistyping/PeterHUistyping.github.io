import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
export function Blog4(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <h1 id="project_database">Database Management System Design Project (C++)</h1>
    <h1 id="cmu15445_database">CMU15-445 <em>Database</em> Project</h1>
    <p>Database Design Project (C++)<br />
        Course Link: </p>
    <p>https://15445.courses.cs.cmu.edu/fall2021/assignments.html </p>
    <p>Project Link: </p>
    <p>https://github.com/cmu-db/bustub </p>
    <h2 id="environment">Environment</h2>
    <p>Mac &amp; Linux_Ubuntu (VMware)</p>
    <h2 id="tools">Tools</h2>
    <p>CMake, Google C++ Style Guide, Unit Testing, etc </p>
    <h2 id="gradescopetestfile">Gradescope Test File</h2>
     Print out the test file to get the whole Gradescope test file!<br />
        FILE *out;<br />
        out = fopen("/autograder/bustub/test/buffer/ grading<em>buffer</em>pool<em>manager</em>instance<em>test.cpp",
            "r");
            // out = fopen("../test/buffer/buffer</em>pool<em>manager</em>instance_test.cpp", "r");<br />
        char ch;<br />
   

    <h2 id="project0">Project 0</h2>
    <p><img   width= "300vw" src="asset/photo/Assignment/4/Project0_GS.png" alt="Pr0" /> </p>
    <p>Keypoint used in C++:<br />
        Template -- template  
            Exception </p>
    <p>How to create m*n arrays [the 2nd way-inherit] </p>
    <p>Google C++ Style Guide<br />
        Naming_Class Data Members need a trailing underscore. </p>
    <pre><code>
    ** no viable conversion from   <br/>
    std::unique_ptr&lt;bustub::RowMatrix&lt;int&gt; : temp   <br/>
    const RowMatrix&lt;T&gt; * : temp.get()  <br/>
    
    Consider replacing 'unsigned long' with 'uint64' uint64_t  <br/>
    C-style casts are discouraged; use static_cast/const_cast/reinterpret_cast  <br/>
    Convert one int -&gt;int64_t  <br/>
    const uint64_t size = (static_cast&lt;uint64_t&gt;(rows_) * cols_)  
    </code></pre>
     <img   width= "300vw" src="asset/photo/Assignment/4/check-clang-tidy.png" alt="Check-clang-tidy" title="Check-clang-tidy"/><br />
        <img   width= "300vw" src="asset/photo/Assignment/4/Project0_1.png" alt="Pr0" title="Pr0"/>
     

    <h2 id="project1">Project 1</h2>
    <p><img   width= "300vw" src="asset/photo/Assignment/4/Project1_GS.png" alt="Pr1_Gradescope" title="Pr1_Gradescope"/> </p>
    <p>Reference: Database-System-Concepts-7th-Edition Ch13.5 Database Buffer </p>
    <p>LRU Replacer<br />
        Need to search in o(1), delete; Perform like a stack<br />
        Data Structure: Hash map + Linked list </p>
    <p>Buffer Pool Manager (BPM) Instance<br />
        </p>
    <p>Class Pages (including content;page<em>id</em> ;pin<em>count</em> = 0; is<em>dirty</em>)<br />
        Class BPM is friend class of Pages<br />
        Class DiskManager(Responsible for writing page from BPM to Disk) </p>
    <p>-&gt; Parallel BPM, which has its own latch / Inheritance </p>
    <p>Print out the test file to get the whole Gradescope test file!<br />
        /<em>Gradescope Test output</em>/ </p>
    <pre><code>
            FILE *out;<br/>
            out = fopen("/autograder/bustub/test/buffer/grading_..._test.cpp", "r");  <br/>
            // out = fopen("../test/buffer/..._test.cpp", "r");  <br/>
            char ch;  <br/>
            while ((ch = getc(out)) != EOF)  <br/>
                putchar (ch)<br/>
             
            fclose(out);  <br/>
            </code></pre>
     Get the path for testing on Gradescope using getcwd().<br />
        #include   direct.h ; (Windows)<br />
            #include   unistd.h ; (Linux/Mac)<br />
                int MAX<em>PATH = 10000;
                    char buffer[MAX</em>PATH];<br />
                std::cout &lt;&lt; getcwd(buffer, MAX_PATH);  
    <p>latch .lock();</p>

 
     <img   width= "300vw" src="asset/photo/Assignment/4/Project1.png" alt="Pr1" />  
    <br />

    <a href="https://github.com/PeterHUistyping/CMU15-445_Database_Management_System">See More on GitHub</a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}