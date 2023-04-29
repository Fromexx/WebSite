function openModalWindow()
{
    let modal = document.getElementById("modalWindowId");
    let span = document.getElementsByClassName("modal-close")[0];


    modal.style.display = "block";

    span.onclick = function()
    {
        modal.style.display = "none";
    }

    window.onclick = function(event)
    {
        if(event.target.className == "modalWindow")
        {
            modal.style.display = "none";
        }
    }
}