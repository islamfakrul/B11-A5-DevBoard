const colors = ["#F8EDE3", "#D6E5FA", "#FFE5E5", "#FFFFFF", "#E4F1FF", "#E9FAC8"];

let colorIndex = 0;

document.getElementById("theme_btn").addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex = colorIndex + 1;

    if (colorIndex === colors.length) {
        colorIndex = 0;
    }
});