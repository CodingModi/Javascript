const btn = document.getElementById("btn");

btn.addEventListener("mouseover",function()
{
    btn.style.background="Red";
})
btn.addEventListener("mouseout",function()
{
    btn.style.background="black";
})

document.addEventListener("contextmenu", e => e.preventDefault());



["copy", "cut", "paste"].forEach(eventName => {
document.addEventListener(eventName, e => e.preventDefault());
});