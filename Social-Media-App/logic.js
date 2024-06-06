const form =document.getElementById('form')
const input =document.getElementById('input')
const msg =document.getElementById('msg')
let posts =document.getElementById('posts')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log("button clicked");
    formValidate();
})

let formValidate = ()=>{
    if(input.value === ""){
    msg.innerHTML="Post cannot Be Blank"
    }
    else{
     msg.innerHTML=""
     accepData();
    }
}

let data ={}
let accepData = ()=>{
   data["text"]= input.value
   console.log(data);
   createPost();
}

let createPost=()=>{
    posts.innerHTML+=
    `
    <div><p>${data.text}</p>
                    <span id="options">
                        <i  onclick="editPost(this)" class="ri-edit-box-line"></i>
                        <i  onclick="deletePost(this)" class="ri-chat-delete-line"></i>
                    </span></div>
    `
    input.value=""
}
let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e)=>{
input.value =e.parentElement.previousElementSibling.innerHTML;
e.parentElement.parentElement.remove();
}
