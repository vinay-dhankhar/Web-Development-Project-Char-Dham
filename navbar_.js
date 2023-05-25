function scrollFunction{
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
        document.getElementById("header").style.backgroundColor = "#07376a"
    else
    document.getElementById("header").style.backgroundColor = "white"
}