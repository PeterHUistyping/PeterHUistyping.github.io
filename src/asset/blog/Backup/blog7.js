/* All rights reserved. 2022-2025 (c) Peter HU */

import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
// import Blog_Top from "../../js/helper/blog_top";
import Index_Top from "../../../js/helper/index_top";


export function Blog7(){
    return(
    <ScrollToTop> 
    <div>
        {/* <Blog_Top/> */}
        <Index_Top type="blog"/>
            <>
            <h1 id="mercuriahackathon2022">Top 2 Team in Mercuria Hackathon 2022</h1>
    <p>Using technology to accelerate the energy transition and reduce the carbon emissions of the maritime industry<br/>
    
    <img class="img_normal" src="/asset/photo/Assignment/7/Intro.png" alt="Intro" />
    <img class="img_normal" src="/asset/photo/Assignment/7/Members.JPG" alt="All_Members" /><br/>
    <a href="https://hackathon22mercuria.com">Hackathon Website</a> https://hackathon22mercuria.com<br/>

    <img class="img_normal" src="/asset/photo/Assignment/7/Team_Member.png" alt="Team" /> </p>
    <h2 id="background">Background</h2>
    <p>Around 90% of world trade is transported by sea and carbon emissions from shipping are increasing.<br/>
    In 2013, the Commission set out a strategy towards reducing GHG emissions from the shipping industry. The strategy consists of 3 consecutive steps starting with monitoring, reporting and verification of CO2 emissions from large ships using EU ports.<br/>
    Ships can use Just In Time (JIT) arrival to optimise voyage speed and arrive in port when berth / nautical services are available. Avoiding travelling unnecessarily fast and then waiting outside port can reduce fuel consumption and carbon dioxide emissions by 14% on a per voyage basis.<br/>
    <img class="img_normal" src="/asset/photo/Assignment/7/Intro_Sea.png" alt="Intro" /></p>
    <h2 id="multipleregression">Multiple Regression</h2>
    <pre><code>import statsmodels.api as sm<br/>
    model = sm.OLS(y, X)<br/>
    results = model.fit()<br/>
    print(results.summary())<br/>
    </code></pre>
    <pre><code>p = propulsion power (kw)<br/>
    dwt = tonnage<br/>
    s = speed (nautical miles per hour (kn))<br/>
    mu = propeller law power<br/>
    
    POWER REGRESSION:<br/>
        p = c0 + c1 * dwt + c1 * s**mu + epsilon<br/>
    
      dwt          9kn         10kn         11kn          12kn          13kn          14kn         15kn<br/>
    0   80  2501.621139  3218.929898  4057.334189   5122.297825   6435.770378   8201.809181  10576.21134<br/>
    1  120  3346.771076  4309.768452  5435.781216   6747.705991   8363.402951  10352.386530  12816.67503<br/>
    2  160  3906.348875  5040.115895  6367.597891   7899.780544   9771.962995  12141.963780  15175.87673<br/>
    3  320  5664.944194  7350.556614  9331.121899  11624.423520  14246.887310  17342.286220  21245.68691<br/>
                                OLS Regression Results                            <br/>
    ==============================================================================<br/>
    Dep. Variable:                      y   R-squared:                       0.952<br/>
    Model:                            OLS   Adj. R-squared:                  0.949<br/>
    Method:                 Least Squares   F-statistic:                     250.5<br/>
    Date:                Tue, 27 Dec 2022   Prob (F-statistic):           2.89e-17<br/>
    Time:                        22:07:31   Log-Likelihood:                -232.76<br/>
    No. Observations:                  28   AIC:                             471.5<br/>
    Df Residuals:                      25   BIC:                             475.5<br/>
    Df Model:                           2     <br/>                                    
    Covariance Type:            nonrobust          <br/>                               
    ==============================================================================<br/>
                     coef    std err          t      P&gt;|t|      [0.025      0.975]<br/>
    ------------------------------------------------------------------------------<br/>
    const      -2977.4794    559.346     -5.323      0.000   -4129.475   -1825.484<br/>
    x1            26.8458      2.165     12.398      0.000      22.386      31.305<br/>
    x2             1.3338      0.072     18.638      0.000       1.186       1.481<br/>
    ==============================================================================<br/>
    Omnibus:                        1.848   Durbin-Watson:                   0.801<br/>
    Prob(Omnibus):                  0.397   Jarque-Bera (JB):                0.885<br/>
    Skew:                          -0.408   Prob(JB):                        0.642<br/>
    Kurtosis:                       3.306   Cond. No.                     1.67e+04<br/>
    ==============================================================================<br/>
    
    Notes:<br/>
    [1] Standard Errors assume that the covariance matrix of the errors is correctly specified.<br/>
    [2] The condition number is large, 1.67e+04. This might indicate that there are<br/>
    strong multicollinearity or other numerical problems.<br/>
    </code></pre>
    <h2 id="searoute">SeaRoute</h2>
    <pre><code>Searoute py<br/>
    An python package for generating the shortest sea route between two points on Earth.<br/>
    If points are on land, the function will attempt to find the nearest point on the sea and calculate the route from there.<br/>
    </code></pre>

    <h2 id="challengedetails">Challenge Details</h2>
    <p><img class="img_normal" src="/asset/photo/Assignment/7/Intro_Ch.png" alt="Intro" /></p>
    <h3 id="challenge1monitoringreportingandverificationofco2emissions">Challenge 1: Monitoring, reporting and verification of CO2 emissions</h3>
    <pre><code>• Wouldn’t it be helpful if we could better track and verify shipping journeys and categorise the worst polluters?<br/>
    Step 1: AIS monitoring<br/>
    Using AIS data, track a vessel over a voyage and report on:<br/>
    - Distance travelled<br/>
    - Velocity<br/>
    - Bunkers consumed<br/>
    - GHG emissions<br/>
    Step 2: Reporting<br/>
    Each day, the vessel crew will provide a Noon Report to the Operator who is managing their voyage.<br/>
    Create a process for vessel activity report data to be uploaded to your application.<br/>
    Create a process for your application to automatically submit vessel activity reports.<br/>
    Step 3: Verification<br/>
    Compare manual reports with automated reports from Step 2.<br/>
    Create a verification method for the data manually provided with the ability to highlight incorrect reporting.<br/>
    Step 4: Analyse<br/>
    For the data provided, across all time, rank the top 100 most polluting vessels along with the GHGs they emitted.<br/>
    </code></pre>

    <p><img class="img_normal" src="/asset/photo/Assignment/7/Compare_Report.png" alt="Compare_Report" title="Compare_Report"/></p>
    <h3 id="challenge2voyagerouteoptimization">Challenge 2: Voyage route optimization</h3>
    <pre><code>• How can we help vessels to plan optimised routes that reduce fuel consumption and emissions in any scenario?<br/>
    Step 1: Simple routing<br/>
    Using a theoretical voyage between the ports provided, estimate:<br/>
    - Distance to travel<br/>
    - Time required for voyage<br/>
    - Bunkers consumed<br/>
    - GHG emissions produced<br/>
    Step 2: Advanced routing<br/>
    Building on Step 1, build an application which proposes multiple voyage routes and the estimated GHG emissions for all vessel types.<br/>
    Your proposed voyages should be significantly different from each other, and be careful not to run your ship aground!<br/>
    Output your voyage in GeoJSON.<br/>
    Step 3: Intelligent routing<br/>
    Your vessel has to arrive at its destination on a due date. How does this effect your GHG emissions?<br/>
    What other factors can your model consider, and how can you use those to reduce GHG emissions?<br/>
    Step 4: Analyse<br/>
    Using the Voyage data, generate GHG efficient voyages for 100 unique voyages.<br/>
    </code></pre>
    <p><img class="img_normal" src="/asset/photo/Assignment/7/Map.png" alt="Map" /></p>
    <h3 id="challenge3cargologisticsoptimization">Challenge 3: Cargo logistics optimization</h3>
    <pre><code>• Vessel operators and cargo exporters want to optimise their logistics planning to minimize their impact on the environment. There should be an app for that!<br/>
    Step 1: Cargo emissions<br/>
    Looking at the AIS data provided, track a cargo ship on a voyage.<br/>
    - How much cargo can this vessel carry? How much do you think is on board at the time you are observing it?<br/>
    - How many tonnes of GHG is this vessel emitting per tonne of cargo?<br/>
    Step 2: Vessel logistics<br/>
    Create an application which allows vessel owners to register their planned voyages and the cargo capacity they have available.<br/>
    The total voyage emissions should be shown, as well as emissions per tonne of cargo.<br/>
    Step 3: Cargo logistics<br/>
    Building on your application created in Step 2, allow exporters to register cargo they need to ship, including size, weight, destination, and due date.<br/>
    Step 4: Logistics optimisation<br/>
    Using the data gathered in Step 2 and 3, create matches between vessel voyages and cargo export needs.<br/>
    How much can your application reduce GHG emissions per tonne of cargo?<br/>
    You can ignore drag, or not!<br/>
    </code></pre>
    <h2 id="structure">Structure</h2>
    <pre><code>json_FilterDemo1/<br/>
    []_imo<br/>
    T:Tanker<br/>
    BC:Bolk Carriers<br/>
    Delphi-Application<br/>
    </code></pre>
    <a href="https://github.com/PeterHUistyping/Mercuria_Hackathon2022">See More on GitHub</a>
     
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}