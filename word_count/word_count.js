/**
 * Created by Ann Marie on 8/11/2014.
 */

wordString = document.getElementById("words");
wordCount = document.getElementById("wordCounted");




var frag = "Hi, how are you?";
function wordCount(frag){
    if(typeof frag !== "string")  {
        return 0;
    }
    else{

        var wordCount = frag.trim().split(/\s+/).length;
        console.log(wordCount);
        return 1;
    }
}

wordCount(frag);

