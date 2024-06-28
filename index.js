const inputEl = document.getElementById("input-El");
const btn = document.getElementById("btn");
const del=document.getElementById("del-btn");
const tabBtn=document.getElementById("tab-btn");
let myLeads = [];
const ulEl = document.getElementById("ul-el");


btn.addEventListener("click", function () {

    myLeads.push(inputEl.value);
    inputEl.value=" ";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    let leadsFromLocastorage=JSON.parse(localStorage.getItem("myLeads"));
    if(leadsFromLocastorage){
        myLeads=leadsFromLocastorage
        render(myLeads)
    }
    console.log(leadsFromLocastorage)


})

const tabs=[{
    url:"Hello"
}]
tabBtn.addEventListener("click",function(){
   
    tabBtn.addEventListener("click", function(){    
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            render(myLeads)
        })
    
        
    })
    
})
function render(myLeads) {
    let list = " "
    for (let i = 0; i < myLeads.length; i++) {
        list += `<li><a target='_blank' href='${myLeads[i]} + '> ${myLeads[i]}   </a></li>`
           
    }
   
    ulEl.innerHTML = list;

}

del.addEventListener("click",function(){
    localStorage.clear();
    ulEl.innerHTML=" ";

})