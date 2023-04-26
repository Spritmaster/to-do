let info =document.querySelector("input")
let add=document.querySelector(".edd")
let tablet=document.querySelector(".royhat")
const body=document.querySelector("body")
const allDel=document.querySelector(".All__delet")
const moon=document.querySelector(".moon").addEventListener("click",()=>{
    body.classList.toggle("dark")
})








function edd () {
    if(info.value){
        const item =document.createElement("li");item.classList="li"
        
        item.textContent=info.value
        let delInfo =document.createElement("button")
        delInfo.className="del"
        delInfo.textContent="Delete"
        item.append(delInfo)
        tablet.append(item)
        info.value =""
        console.log("salom");  
        
        delInfo.addEventListener("click" , (e)=>{
            console.log("saloo");
         item.remove()
         delInfo.remove()
         })

         item.addEventListener("click", (e)=>{
            item.classList.toggle('line')
        })
    }
   


}


console.log(localStorage);


const createAddItem =(item)=>{
if(info.value){
    create()
}
}

const create= (el)=>{
    let  item =document.createElement("li");
    let  del=document.createElement("button");
    item.classList="li"
    del.classList="del"
    item.textContent=info.value
    item.append(del)
    tablet.append(item)
    info.value=""

    del.addEventListener("click" ,()=>{
        item.remove()
        del.remove()})

    document.addEventListener("keydown" , (e) =>{
        if(e.key =="Delete"){
        item.remove()
        del.remove()
        }
    })

    allDel.addEventListener("click",()=>{
        item.remove()
        del.remove()
    })
item.addEventListener("dblclick" ,()=>{
    item.classList.toggle("line")
})
    
}


add.addEventListener("click" , createAddItem)
document.addEventListener("keyup" , (e)=>{
    if(e.key=="Enter"){
        createAddItem()
    }
})

