window.MathJax = {
    tex: {
        inlineMath: [['\$', '\$'], ['\\(', '\\)']]
    }
};

function solutionClicked(button) {
    if (button.innerHTML  === "See Solution")
    {
        button.innerHTML  = "Hide Solution"
    }
    else
    {
        button.innerHTML  = "See Solution"
    }
}
