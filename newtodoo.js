window.addEventListener("load",()=>{
    const form_el=document.querySelector("#form")
    const input_el=document.querySelector('#readtext')
    const hidden_el=document.querySelector('#seconddiv')



    form_el.addEventListener('submit',(e)=>{
        e.preventDefault()

        const warning=input_el.value
        if(!warning){
            alert("fill in the blank")
            return
        }


      

        const second_sub_div=document.createElement('div')
        second_sub_div.classList.add('seconsubdiv')

        const task_ele =document.createElement("input")
        task_ele.classList.add("readtext1")
        task_ele.value=warning
        task_ele.type="text"
        task_ele.setAttribute("readonly",'readonly')

        second_sub_div.appendChild(task_ele)
        const edit_el=document.createElement("button")
        edit_el.classList.add("edit")
        edit_el.innerText="EDIT"
        
        const delete_el=document.createElement("button")
        delete_el.classList.add('delete')
        delete_el.innerText="DELETE"

        second_sub_div.appendChild(edit_el)
        second_sub_div.appendChild(delete_el)


        hidden_el.appendChild(second_sub_div)
        edit_el.addEventListener("click",(e)=>{
            if(edit_el.innerText.toLowerCase()=="edit"){
                edit_el.innerText="save"
                task_ele.removeAttribute("readonly")
                task_ele.focus()
            }
            else{
                edit_el.innerText="EDIT"
                task_ele.setAttribute("readonly","readonly")
            }
            

        })
        delete_el.addEventListener('click' ,(e)=>{
            hidden_el.removeChild(second_sub_div)

        })



        

//    const hidden_input_el=document.createElement('input')
//    hidden_input_el.classList.add('#readtext1')
//    hidden_input_el.type="text"
//    hidden_input_el.value=warning

//    hidden_input_el.setAttribute('readonly','readonly')

//    second_sub_div.appendChild(hidden_input_el)



//    container.appendChild(hidden_input_el)
    })
})