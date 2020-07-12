var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length ;i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}

var c9_img = document.querySelector("img");


c9_img.addEventListener("click", function(){
    this.setAttribute ("src", "https://thumbs.gfycat.com/AntiqueDisguisedCrab-size_restricted.gif");
});
