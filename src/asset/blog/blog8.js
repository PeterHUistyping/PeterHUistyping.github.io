import ScrollToTop from "../../js/helper/ScrollToTop";
import Blog_Footer from "../../js/helper/blog_footer";
import Blog_Top from "../../js/helper/blog_top";
export function Blog8(){
    return(
    <ScrollToTop> 
    <div>
        <Blog_Top/>
            <>
            <h1 id="machinelearningandrealworlddata">Machine Learning and Real World data</h1>
    <p><a href="https://www.cl.cam.ac.uk/teaching/2122/MLRD/">Course Website</a> https://www.cl.cam.ac.uk/teaching/2122/MLRD/<br/>
    PyCharm</p>
    <h2 id="dependency">Dependency</h2>
    <p>NLTK-Natural Language Toolkit</p>
    <h2 id="sentimentlexicondatabase">Sentiment Lexicon Database</h2>
    <p>Given a list of tokens from a tokenized review and a lexicon containing both sentiment and magnitude of a word, determine whether the sentiment of each review in the test set is positive or negative based on whether there are more positive or negative words.<br/>
    Classification: label Lexicons into postive and negative.<br/>
    Evaluation: Based on reviews on IMDb. <br/>
    Improve the classifier using thresholds for decision bounds.</p>
    <pre><code>Your accuracy: 0.6355555555555555<br/>
    Your improved accuracy: 0.6888888888888889<br/>
    </code></pre>
    <h2 id="naivebayesclassifier">Naive Bayes Classifier</h2>
    <p>Parameter estimation<br/>
    How to deal with a word in a review was not present in the training dataset?<br/> 
    Ignore its contribution or using add-one (Laplace) Smoothing </p>
    <pre><code>Your accuracy using simple classifier: 0.63<br/>
    Your accuracy using unsmoothed probabilities: 0.49<br/>
    Your accuracy using smoothed probabilities: 0.795<br/>
    </code></pre>
    <h2 id="zipfslawandheapslaw">Zipf’s Law and Heaps’ Law</h2>
    <p>Zipf’s law says that there is a reverse exponential relationship between the frequency of a word (fw) in a large natural language text, and its relative frequency rank (rw; the ranking of its frequency in comparison with other words’ frequencies) <br/>
    <img class="img_normal" src="/asset/photo/Assignment/8/Estimation of log-log.png" alt="Zipf" title="Zipf" /><br/>
    Heaps’ law relates the number of distinct words in a text to the overall number of words in the text.<br/>
    <img class="img_normal" src="/asset/photo/Assignment/8/Numbers of Words.png" alt="Heaps" title="Heaps"/></p>
    <h2 id="statisticalsignificancetesting">Statistical Significance Testing</h2>
    <p>Modify the simple classifier to include the information about the magnitude of a sentiment.<br/>
    A word with a strong intensity should be weighted <em>four</em> times as high for the evaluator.<br/>
    Implement the two-sided sign test algorithm to determine if one classifier is significantly better or worse than     another. The sign for a result should be determined by which classifier is more correct and the ceiling of the least common sign total should be used to calculate the probability.</p>
    <pre><code>The p-value of the two-sided sign test for classifier_a "classifier simple" and classifier_b "classifier magnitude": 0.6722499772048186 <br/>
    The p-value of the two-sided sign test for classifier_a "classifier magnitude" and classifier_b "naive bayes classifier": 0.07683763213126037<br/>
    </code></pre>

    <frameset cols="90%,0.5%">
        <frame src=" https://peterhuistyping.github.io/Machine_Learning-Real_World_Data"></frame>
    </frameset> 

    <br></br>
    <a href="https://github.com/PeterHUistyping/Machine_Learning-Real_World_Data">See More on GitHub</a>
            </>
    
        <Blog_Footer />
    </div> 
    </ScrollToTop>
    )
}