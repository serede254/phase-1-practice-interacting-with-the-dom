document.addEventListener("DOMContentLoaded",()=>
{
    let counter = document.getElementById("counter")
    let count =0;

    let timer = setInterval(()=> {
        counter.innerText = count;
        count++;
    }, 1000);

    document.getElementById("minus").addEventListener("click",()=>{
         count--;
         counter.innerText =count;
    })

    document.getElementById("plus").addEventListener("click",()=>{
        count++;
        counter.innerText = count
    })

    let likes = {};
    document.getElementById("heart").addEventListener("click", function() {
        if (!likes[count]) {
            likes[count] = 1;
        } else {
            likes[count]++;
        }
        let likesList = document.querySelector(".likes");
        likesList.innerHTML = "";
        for (let number in likes) {
            let list = document.createElement("li");
            list.innerText = `${number} has been liked ${likes[number]} times`;
            likesList.appendChild(list);
        }
    });
    let pause = false
    let pauseButton =document.getElementById("pause")
    let disabledButtons = document.querySelectorAll("button:not(#pause)");


    pauseButton.addEventListener("click", function() {
        if (!pause) {
            clearInterval(timer);
            disabledButtons.forEach((button)=> {
                button.disabled = true;
            });
            this.innerText = "resume";
            pause = true;
        } else {
            timer = setInterval(()=> {
                counter.innerText = count;
                count++;
            }, 1000);
            disabledButtons.forEach((button)=> {
                button.disabled = false;
            });
            this.innerText = "pause";
            pause = false;
        }
    });
    document.getElementById("comment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        let commentInput = document.getElementById("comment-input");
        commentInput.value = "";
        let commentList = document.getElementById("list");
        let comments = commentInput.value;
        let newComment = document.createElement("p");
        newComment.innerText = comments;
        commentList.appendChild(newComment);
        
    });


})
