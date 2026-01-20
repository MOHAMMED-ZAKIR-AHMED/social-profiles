const GitHub = document.getElementById('GitHub')
const Frontend = document.getElementById("Frontend")
const LinkedIn = document.getElementById("LinkedIn")
const Twitter = document.getElementById("Twitter")
const Instagram = document.getElementById("Instagram")

GitHub.addEventListener('click',()=>{
    window.open("https://github.com")
})
Frontend.addEventListener('click',()=>{
    window.open("https://frontendmentor.io")
})
LinkedIn.addEventListener('click',()=>{
    window.open("https://in.linkedin.com")
})
Twitter.addEventListener('click',()=>{
    window.open("https://twitter.com")
})
Instagram.addEventListener('click',()=>{
    const check= window.confirm("Are You Sure You Want to Waste Your Time Here .....")
    if(check == true){
    window.open("https://instagram.com")
    }
    else{
        alert("Sorry We Are Unable To Permit You")
    }
})



