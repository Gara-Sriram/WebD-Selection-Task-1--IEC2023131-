const total = document.querySelector(".Q-container")
const questionsList = [];
fetch("https://test-data-gules.vercel.app/data.json").then((data)=>{
    return data.json()
}).then((Data)=>{
    Data.data.forEach((item)=>{
        const topic = document.createElement("div");
        topic.classList.add("category");
        const topicBox = document.createElement("div");
        topicBox.classList.add("topicBox-D")

    const topicContent = document.createElement("h2");
    topicContent.classList.add("categoryText")
    topicContent.textContent = item.title;
    topicBox.appendChild(topicContent);
    questionsList.push(topicBox);
    topic.appendChild(topicBox)
    const questionsContainer = document.createElement("div");
   
    questionsContainer.classList.add("subcategoryContainer")
    item.ques.forEach((item1)=>{
        const allQuestions = document.createElement("div");
        allQuestions.classList.add("subcategory");
        const yt= document.createElement("img");
       const ytLink = document.createElement("a");
       const SpanBoth = document.createElement("span");
       SpanBoth.classList.add("span-D");
        
       ytLink.setAttribute("href",item1.yt_link);
       yt.classList.add("yt-img");
       yt.setAttribute("src","./public/yt2.png");
       ytLink.appendChild(yt);
       
        const questionBox = document.createElement("div");
        const question = document.createElement("a");
        const tick = document.createElement('input');
        tick.setAttribute("type","checkbox");
        SpanBoth.appendChild(tick);
        tick.classList.add('greenBox');
        question.classList.add("subcategoryText");
        
        
       
        question.textContent = item1.title;
       
        question.setAttribute("href",item1.p1_link)
        SpanBoth.appendChild(question);
        questionBox.appendChild(SpanBoth)
        questionBox.appendChild(ytLink);
        questionBox.classList.add("questionBox-D");
        allQuestions.appendChild(questionBox);
        questionsContainer.appendChild(allQuestions);
        questionsContainer.classList.add('active')
        tick.addEventListener('click',function(event){
            
            questionBox.classList.toggle("completed")
        })
    })
    topic.appendChild(questionsContainer);
    total.appendChild(topic)
    topicBox.addEventListener('click',()=>{
        questionsContainer.classList.toggle('active')
    })
    });
  
}).catch(error => console.error('Error fetching data:', error)); 

if(localStorage.getItem("darkmode")==="true"){
    document.querySelector(".mode").src='./public/sun_555306.png';
    document.querySelector(".menu").src="./public/menuWhiteIcon-removebg-preview.png"
    document.querySelector(".user").src="./public/whiteUser.png"
    document.body.classList.add("darkmode")
    document.querySelector(".s-logo").src="./public/icons8-search-30.png"

}
else{
    document.querySelector(".mode").src='./public/night-mode.png';
    document.body.classList.remove("darkmode")
    document.querySelector(".s-logo").src="./public/search_icon.png"

}

document.querySelector(".mode").addEventListener('click',function(event){
    if(event.target.classList.contains("darkmode")){
        event.target.src='/public/night-mode.png';
        document.querySelector(".menu").src="./public/icons8-menu-50.png"
    document.querySelector(".user").src="./public/user.png"
       
        event.target.classList.remove('darkmode')
        document.body.classList.remove("darkmode")
        localStorage.setItem("darkmode","false")
        document.querySelector(".s-logo").src="./public/search_icon.png"
    }
    else{
        event.target.src='./public/sun_555306.png';
        event.target.classList.add("darkmode");
        localStorage.setItem("darkmode","true");
        document.querySelector(".menu").src="./public/menuWhiteIcon-removebg-preview.png"
    document.querySelector(".user").src="./public/whiteUser.png"
    document.body.classList.add("darkmode")
    document.querySelector(".s-logo").src="./public/icons8-search-30.png"
    }

})

document.querySelector(".s-btn").addEventListener('click',function(){
    const InputValue = document.querySelector(".s-input").value.toLowerCase();
    document.querySelectorAll(".topicBox-D").forEach((element5)=>{
        element5.classList.add("hide");
    })
    questionsList.forEach((item3)=>{
        const EachValue = item3.querySelector(".categoryText").textContent.toLowerCase();
        if(EachValue.includes(InputValue)){
            item3.classList.remove("hide");
        }
        
    })
})


