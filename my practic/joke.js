var index =0;

function changecolor(){
    var color =["black","red","orange","gray","blue","yellow","green"];
    document.getElementsByTagName("body")[0].style.background = color[index++];

    if( index > color.length )
    index =0;

}

var indextwo =0;

function changecolortwo(){
    var color =["black","red","orange","gray","blue","yellow","green"];
    document.getElementsByTagName("div")[1].style.background = color[indextwo++];

    if( indextwo > color.length )
    indextwo =0;

}

var indextree =0;

function nextjoke() {
    var meme =["himl", "hasas", "emamama"]
    document.getElementsByTagName("p")[0].innerHTML=  meme[indextree++];
    if(indextree > meme.length)
    indextree =0;
}



