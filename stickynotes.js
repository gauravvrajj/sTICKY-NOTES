var container2=document.getElementsByClassName
("container2")[0];
var container3=document.getElementsByClassName
("container3")[0];
var checkic=document.getElementById("check_icon");
var xic=document.getElementById("x_icon");
var i=0;

xic.addEventListener("click",function(){
    typeNote();
})

checkic.addEventListener("click",function(){
    createNote();
    
})

function typeNote(){
  if(container3.style.display=="none"){
    container3.style.display="block";
  }

  else{
      container3.style.display="none";
  }
}



function createNote(){
    var noteText=document.getElementById("note_text").value;
    var node0=document.createElement("div");
    var node1=document.createElement("h1");

    node1.innerHTML=noteText;
    node1.setAttribute("style","width:250px;height:250px;font-size:26px;padding:25px;margin-top:10px;margin-right:10px;overflow:hidden;box-Shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
    
    
    
    node1.style.background=color();
    node0.appendChild(node1);

    container2.insertAdjacentElement("afterbegin",node0);

    node0.addEventListener("mouseenter",function(){
        node0.style.transform="scale(1.1)";
    })

    node0.addEventListener("mouseleave",function(){
        node0.style.transform="scale(1)";
    })

    node0.addEventListener("dblclick",function(){
        node0.remove();
    })

    document.getElementById("node_text").value='';
}



function color(){
    var random_color=["#c2ff3d","#ff3de8","#6699ff","#cc99ff","#04e022","#bc83e6","#ebb328","#99ffcc","#99f0ff","#ff6666","#99ff66","#ffccff"];
  if(i>random_color.length-1){
      i=0;
  }
  return random_color[i++];
}