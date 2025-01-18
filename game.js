let boxes =document.querySelectorAll(".box");
let resetBt = document.querySelector("#reset-bt")



let turn0= true;
let total_touch = 0
let winpatterns= [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function checkWinner(){
    console.log(boxes)
    for(let pat of winpatterns){
        let [a,b,c] = pat;
        console.log(boxes[a].accessKey)
        if(boxes[a].innerText != "" && boxes[a].innerText==boxes[b].innerText&& boxes[a].innerText == boxes[c].innerText ){
            alert("congratulations"+ boxes[b].innerText+ " is winner")
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if (turn0) {
        box.innerText = "o"
        turn0 = false;
        total_touch++;
        }else{
            box.innerText ="x"
            turn0 = true;
            total_touch++;
        }
        box.disabled = true;
        
        checkWinner();
        
    });
    
});


resetBt.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
            
        });
        
    

});