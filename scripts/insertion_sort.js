function Insertion() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "#8d6e63");

        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "#d7ccc8");
            div_update(divs[i + 1], div_sizes[i + 1], "#d7ccc8");

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "#d7ccc8");
            div_update(divs[i + 1], div_sizes[i + 1], "#d7ccc8");

            div_update(divs[i], div_sizes[i], "#8d6e63");
            if (i == (j - 1)) {
                div_update(divs[i + 1], div_sizes[i + 1], "#8d6e63");
            } else {
                div_update(divs[i + 1], div_sizes[i + 1], "#8d6e63");
            }
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(divs[t], div_sizes[t], "#5d4037");
        }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "#5d4037");

    enable_buttons();
}
