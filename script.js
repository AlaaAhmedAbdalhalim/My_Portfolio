/* const header=document.querySelector(".nav-container");
const content=document.querySelector(".content");
const contentoptions={
    rootMargin:" -200px 0px 0px 0px"
};
const a= new IntersectionObserver
(function(
    enteries
    ,a
){
enteries.forEach(entry => {
    if(!entry.isIntersecting){
        header.classList.add("nav-scrolled");
    }
    else
    {
        header.classList.remove("nav-scrolled");
    }
})
},
contentoptions);
a.observe(content); */
myfunction()
{
    var txt;
    if(confirm("Press a button?!"))
    {
        txt="Your Message is sent";
    }
    else
    {
        txt="Your Message was not sent";
    }
    document.getElementById("demo").innerText=txt;
}