var index =0;
function changecolor(){
    var color =["red","orange","gray","blue","yellow","green"];
    document.getElementsByTagName("body")[0].style.background = color[index++];

    if( index > color.length )
    index =0;

}

var colornumone =0;

function namecolor() {
    var colornum = ["red", "blue ", "green" , "white", "yellow" ]

    document.getElementsByTagName("h1")[0].style.color = colornum[colornumone++];
    if( colornumone > colornum.length)
    colornumone =0;
}