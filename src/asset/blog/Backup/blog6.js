/* All rights reserved. 2022-2025 (c) Peter HU */

import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
export function Blog6(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>

            <h1 id="lzssunderstandingandimproving">Gold Medal in UK Tech Arena 2022</h1>

 
<h2 id="lzssunderstandingandimproving">LZSS Understanding and Improving</h2>
<p>Contest Website: https://huawei-techarena-uk.bemyapp.com/2022</p>
<p>Original Rules: https://github.com/UKTechArena</p>
<p>Original Team Project: https://github.com/UKTechArena/crazy-thursday</p>
See More on GitHub <a href="https://github.com/PeterHUistyping/UKTechArena-3DGraphics_Compression_Algorithm-Metaverse">Project</a>
| <a href="https://github.com/PeterHUistyping/LZSS_with_Concurrent_Demo">Demo</a><br/>
<a href="asset/doc/Crazy_Thursday.pdf">Presentation Slides PDF</a> 

<h2 id="score">Score</h2>
<pre><code>Average compression ratio: 0.83859 percent<br/>
Average decompression time: 24.6667 milliseconds<br/>
Average image quality metric 100 decibels<br/>

Weighted compression score (35%): 29.3506<br/>
Weighted time score (25%): 24.3833<br/>
Weighted quality score (20%): 20<br/>

Total score (80%): 73.7339<br/>
</code></pre>
<img class="img_normal" src="asset/photo/Assignment/6/2.JPG" alt="Gold Medal in Huawei Tech Arena 2022"/>  
  <img class="img_normal" src="asset/photo/Assignment/6/3.JPG" alt="Team Members"/><br/>

<h2 id="lzsscompressionalgorithmexplainedbyademo">LZSS Compression Algorithm (Explained by a Demo)</h2>
<pre><code>First byte of the Literal run: flag L4-L0, which flag indicates which level is used now.<br/>
    000                           // level 1<br/>
    *(ubyte*)OUTPUT_ |= (1 &lt;&lt; 7); // level 2<br/>
    *(ubyte*)OUTPUT_ |= (1 &lt;&lt; 6); // level 3<br/>
    *(ubyte*)OUTPUT_ |= (1 &lt;&lt; 5); // level 4<br/>

    *(ubyte*)OUTPUT_ |= (1 &lt;&lt; 5); // level 5<br/>
    *(ubyte*)OUTPUT_ |= (1 &lt;&lt; 7); <br/>
Reuse:  <br/>
</code></pre>
<pre><code>***Level 1: Supported Windows Size 8192 2^13 (0-8191)<br/>
    Windows Size 0-8191<br/>
Original Match-&gt; Encoded Len<br/>
  1-2 Bytes   -&gt; 1 Bytes (Literal Run)<br/>
  3-8 Bytes   -&gt; 2 Bytes (Short Match)<br/>
  9-264 Bytes -&gt; 3 Bytes (Long Match)<br/>
| Instruction type |  Decode[0]  |  Decode[1] |   Decode[2]  |   Decode[3]  |<br/>
|------------------|-------------|------------|--------------|--------------|<br/>
| Literal run      | 000 L4-L0   |            |              |              |<br/>
| Short match        | M2-M0 W12-W8|    W7-W0   |              |              |<br/>
| Long match       | 111   W12-W8|    M7-M0   |     W7-W0    |              |<br/>

    Demo <br/>
Original:<br/>
        ------------<br/>
        I am Sam \n<br/>
        Sam I am \n<br/>
        That<br/>
        ------------<br/>
Encoded:<br/>
--------------------------------------------------------------------------<br/>
        28 I am Sam \n <br/>
           20 03                00 20          40 0C                  04 \nThat<br/>
--------------------------------------------------------------------------<br/>
         |short match|        |literal run|         |short match|         |literal run|<br/>
High 3bits  Match length 001+2           1            Match length 010+2=4          5<br/>
                Offset 3           Copy space(20)         Offset 12             Copy \nThat<br/>
          Sam                 [space]             I am                    \nThat<br/>


That Sam-I-am!<br/>
That Sam-I-am!<br/>
I do not like<br/>
that Sam-I-am!<br/>
Do you like green eggs and ham?<br/>
I do not like them, Sam-I-am.<br/>
I do not like green eggs and ham.<br/>
</code></pre>
<pre><code>***** Level 2: Extended Windows &amp; Infinite Match Length<br/>
    Supported Windows Size 65535 + 8191  (0-65535 + 8191 )<br/>
    Windows Size 0-8190 (8191 as flag)<br/>
Original Data-&gt; Encoded Len<br/>
  1-2 Bytes   -&gt; 1 Bytes (Literal Run)<br/>
  3-8 Bytes   -&gt; 2 Bytes (Short Match)<br/>
  9+ Bytes -&gt; 3 Bytes (Long Match)<br/>

* distance &gt;= MAX_L2_DISTANCE 8191 ( 13 bits of 1 for the high )<br/>
  5-8 Bytes   -&gt; 4 Bytes (Extended Windows Size: Short Match)<br/>
    Windows Size 8191 - (65535 + 8191 - 1)    (shouldn' be all 1, to avoid unable to detect end!)<br/>
  9-264 Bytes -&gt; 4+ Bytes (Extended Windows Size: Long Match)<br/>
            Depends on Match length<br/>

| Instruction type |  Decode[0]  |  Decode[1] |   Decode[2]  |   Decode[3]  |   Decode[4]  |<br/>
|------------------|-------------|------------|--------------|--------------|--------------|<br/>
| Literal run      | 000 L4-L0   |            |              |              |<br/>
| Short match        | M2-M0 W12-W8|   W7-W0    |              |              |<br/>
| Long match       | 111   W12-W8|  M7-M0...  |     W7-W0    |              |<br/>
| Extended Windows*| ----------------------------------------------------------------------|<br/>
| Short match      | M2-M0 11111 |  1111 1111 |    W15-W8    |     W7-W0    |<br/>
| Long match       | 111   11111 |  M7-M0...  |   1111 1111  |    W15-W8    |     W7-W0    |<br/>
 ...Depends on Match length <br/>
</code></pre>
<pre><code>******* Level 3: Extra Windows Size<br/>
    Supported Windows Size 65535 + 8191 - 1 (0-65535 + 8191 - 1)<br/>
Windows Size 0-8190<br/>
    Original Data-&gt; Encoded Len<br/>
  1-2 Bytes   -&gt; 1 Bytes (Literal Run)<br/>
  3-8 Bytes   -&gt; 2 Bytes (Short Match)<br/>
  9+ Bytes -&gt; 3 Bytes (Long Match)<br/>

* distance &gt;= MAX_L2_DISTANCE 8191 ( 13 bits of 1 for the high )<br/>
  5-8 Bytes   -&gt; 4 Bytes (Extended Windows Size: Short Match)<br/>
    Windows Size 8191 - (65535 + 8191 - 2)    (shouldn' be all 1, to avoid unable to detect end!)<br/>
  9-264 Bytes -&gt; 4+ Bytes (Extended Windows Size: Long Match)<br/>
            Depends on Match length<br/>

* distance &gt;= MAX_L3_DISTANCE 8191 ( 13 bits of 1 for the high )<br/>
  5-8 Bytes   -&gt; 4 Bytes (Extended Windows Size: Short Match)<br/>
    Windows Size (65535 + 8191 - 1) - (65535 + 65535 + 8191 - 2)    (shouldn' be all 1, to avoid unable to detect end!)<br/>
  9-264 Bytes -&gt; 4+ Bytes (Extended Windows Size: Long Match)<br/>
            Depends on Match length<br/>

| Instruction type |  Decode[0]  |  Decode[1] |   Decode[2]  | Decode[3] | Decode[4] | Decode[5] | Decode[6] |<br/>
|------------------|-------------|------------|--------------|-----------|-----------|-----------|-----------|<br/>
| Literal run      | 000   L4-L0 |            |              |           |           |           |           |<br/>
| Short match        | M2-M0 W12-W8|   W7-W0    |              |           |           |           |           |<br/>
| Long match       | 111   W12-W8|  M7-M0...  |     W7-W0    |           |           |           |           |<br/>
| Extended Windows*| ----------------------------------------------------------------------------------------|<br/>
| Short match      | M2-M0 11111 | 1111 1111  |    W15-W8    |   W7-W0   |           |           |           |<br/>
| Long match       | 111   11111 |  M7-M0...  |  1111 1111   |  W15-W8   |   W7-W0   |              |           |<br/>
| Extended Windows2| ----------------------------------------------------------------------------------------|<br/>
| Extra Short match| M2-M0 11111 | 1111 1111  |  1111 1111   | 1111 1111 |  W15-W8   |   W7-W0   |           | <br/>
| Extra Long match | 111   11111 |  M7-M0...  |  1111 1111   | 1111 1111 | 1111 1111 |   W15-W8     |   W7-W0   |<br/>
 ...Depends on Match length <br/>
</code></pre>
<pre><code>** level4: Ultra Windows Size<br/>
    Larger Windows Size<br/>
</code></pre>
<pre><code>** level5: Direct Match<br/>
| Instruction type |  Decode[0]  |  Decode[1] |   Decode[2]  | Decode[3] | Decode[4] | Decode[5] | Decode[6] |<br/>
|------------------|-------------|------------|--------------|-----------|-----------|-----------|-----------|<br/>
| Literal run      | 000   L4-L0 |            |              |           |           |           |           |<br/>
| Short match        | M2-M0 W12-W8|   W7-W0    |              |           |           |           |           |<br/>

| Long match       | 111   W12-W8|  M7-M0...  |     W7-W0    |           |           |           |           |<br/>
| Direct match     | 110   W12-W8|  D15-D8    |     D7-D0    |  W7-W0    |           |           |            <br/>
| Long match       | 111   W12-W8|  1111 1111 |     W7-W0    |           |           |           |           |<br/>
| Extended Windows*| ----------------------------------------------------------------------------------------|<br/>
| Short match      | M2-M0 11111 | 1111 1111  |    W15-W8    |   W7-W0   |           |           |           |<br/>
| Long match       | 111   11111 |  M7-M0...  |  1111 1111   |  W15-W8   |   W7-W0   |              |           |<br/>
| Extended Windows2| ----------------------------------------------------------------------------------------|<br/>
| Extra Short match| M2-M0 11111 | 1111 1111  |  1111 1111   | 1111 1111 |  W15-W8   |   W7-W0   |           | <br/>
| Extra Long match | 111   11111 |  M7-M0...  |  1111 1111   | 1111 1111 | 1111 1111 |   W15-W8     |   W7-W0   |<br/>

 ...Depends on Match length <br/>

                Original Data   -&gt;      Encoded Len<br/>
| Literal run | 1-2 Bytes      -&gt;         1 Bytes (Literal Run)<br/>
| 000   L4-L0 |            |              |           |           |           |           |<br/>


| Short match |    3-7 Bytes  -&gt;   2 Bytes (Short Match)  [001-101 +6]<br/>
| M2-M0 W12-W8|   W7-W0    |              |           |           |           |           |<br/>
------------------------------------------------- -1*125977 (110) -------------------------------------------------<br/>
| Long match 1| 8-262 Bytes     -&gt;  3 Bytes / 1 Bytes for Match_Len    [00-FE +255]<br/>
| 111   W12-W8|  M7-M0...  |     W7-W0    |           |           |           |           |<br/>
match_len&gt;260 30 0000<br/>
match_len&gt;260+256. 146146<br/>
match_len&gt;260+256+256 8181<br/>
    Max 61042 (238)<br/>
match_len&gt;65797 0<br/>
| Direct match| 263-65797 Bytes -&gt; 4 Bytes  / 2 Bytes for Match_Len    [262+2^16-1]    +2^16-1<br/>
| 110   W12-W8|  D15-D8    |     D7-D0    |  W7-W0    |           |           |            <br/>
-----------------------------------len&gt;260+256---- +i*146146 -[i:1-238]---------------------------------------------<br/>
| Long match 2| 65798+ Bytes     -&gt;  4+ Bytes  / 2+ Bytes for Match_Len      <br/>
| 111   W12-W8|  1111 1111 |   M15-M8...   |  M7-M0... ｜   W7-W0  |           |            |              |<br/>
</code></pre>
<pre><code>*** Level6: Direct Long Match   For 34MB   <br/>
-----------------------------------len&gt;260+256---- +i*146146 -[i:1-238]---------------------------------------------<br/>
| Long match 2| 65798+ Bytes     -&gt;  4+ Bytes  / 2-5 Bytes for Match_Len<br/>
Explain in detail: First three rows: 256*3-1      <br/>
                     Stop when not 1111 1111           <br/> 
| 111   W12-W8|  1111 1111 |   M15-M8...   |  M7-M0...     ｜ W7-W0   |            |           |               |<br/>
| 111   W12-W8|  1111 1111 |   M23-M16..   |  M15-M8...    | M7-M0... ｜  W7-W0    |           |               | <br/>
| 111   W12-W8|  1111 1111 |   M31-M24..   |  M23-M16.. | M15-M8...|  M7-M0... ｜  W7-W0    |               |   <br/>
| 111   W12-W8|  1111 1111 |   0000 0000   |  D31-D24   |  D23-D16 |  D15-D8    |  D7-D0    |     W7-W0    |<br/>
</code></pre>
<pre><code>*** Level6: Direct Long Match   For 34MB   <br/>
-----------------------------------len&gt;260+256---- +i*146146 -[i:1-238]---------------------------------------------<br/>
| Long match 2| 65798+ Bytes     -&gt;  4+ Bytes  / 2-5 Bytes for Match_Len<br/>
Explain in detail: First three rows: 256*3-1      <br/>
                     Stop when not 1111 1111            <br/>
| 111   W12-W8|  1111 1111 |   M15-M8...   |  M7-M0...     ｜ W7-W0   |            |           |               |<br/>
| 111   W12-W8|  1111 1111 |   M23-M16..   |  M15-M8...    | M7-M0... ｜  W7-W0    |           |               | <br/>
| 111   W12-W8|  1111 1111 |   0000 0000   |  D23-D16 |  D15-D8    |  D7-D0    |     W7-W0    |<br/>
</code></pre>
<h2 id="update">Update</h2>
<p>Compress / Decompress<br/>
Using namespace std;<br/>
Record time spent:</p>
<pre><code>chrono::time_point&lt;std::chrono::system_clock&gt; begin_time=   <br/>  
                        std::chrono::system_clock::now();<br/>
    //sleep(10);<br/>
    auto end_time = std::chrono::system_clock::now();<br/>
    chrono::duration&lt;double, std::milli&gt; duration_mili = end_time - begin_time;<br/>

    printf("PrintDuration : duration_mili duration = %ld ms", (long)duration_mili.count());<br/>
</code></pre>
<p>Updated Concurrent implementation
    Unit Reading of I/O
    Multinputle Threads of Decompression</p>
<h3 id="optimization">Optimization</h3>
<p>Ongoing TESTING here</p>
<h3 id="whathavebeendone">WHAT Have Been Done</h3>
<p>Implemented from LZSS, using Object Oriented Programming.</p>
<p>Branch prediction [[likely]]</p>
# define LEVEL1_MAX 65536 
<pre><code>IN
int Compress_LZ(const void* INPUT, int length, void* OUTPUT) <br/>
if length &lt; LEVEL1_MAX <br/>
return Compress_level1(INPUT, length, OUTPUT);<br/>
return Compress_level2(INPUT, length, OUTPUT);

</code></pre>
<p>Two Interfaces:
    LZSS<em>Comp</em>once();
    LZSS<em>Compression(Compress</em>Twice); 
        Defined in  LZSS<em>helper.h: bool Compress</em>Twice;</p>
<p>Changed the I/O (tested) and removed anything unrelated to the algorithm</p>
<p>Deleted duplicate v, vn, vt</p>
<p>Treating every input in compression as ubyte (uint8_t)</p>



See More on GitHub <a href="https://github.com/PeterHUistyping/UKTechArena-3DGraphics_Compression_Algorithm-Metaverse">Project</a>
| <a href="https://github.com/PeterHUistyping/LZSS_with_Concurrent_Demo">Demo</a><br/>
<a href="asset/doc/Crazy_Thursday.pdf">Presentation Slides PDF</a> 
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}