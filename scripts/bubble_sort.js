function Bubble() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "#a1887f");

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "#8d6e63");
                div_update(divs[j + 1], div_sizes[j + 1], "#8d6e63");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "#8d6e63");
                div_update(divs[j + 1], div_sizes[j + 1], "#8d6e63");
            }
            div_update(divs[j], div_sizes[j], "#d7ccc8");
        }
        div_update(divs[j], div_sizes[j], "#5d4037");
    }
    div_update(divs[0], div_sizes[0], "#5d4037");

    enable_buttons();
}
