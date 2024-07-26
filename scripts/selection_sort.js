function Selection_sort() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        div_update(divs[i], div_sizes[i], "#a1887f"); // Color for the current position in the outer loop

        index_min = i;

        for (var j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "#8d6e63"); // Color for comparison

            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min != i) {
                    div_update(divs[index_min], div_sizes[index_min], "#a1887f"); // Restore color of previous minimum
                }
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "#8d6e63"); // Highlight new minimum
            } else {
                div_update(divs[j], div_sizes[j], "#d7ccc8"); // Color for non-minimum elements
            }
        }

        if (index_min != i) {
            // Swap the elements
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "#8d6e63"); // Highlight during swap
            div_update(divs[i], div_sizes[i], "#8d6e63"); // Highlight during swap
            div_update(divs[index_min], div_sizes[index_min], "#a1887f"); // Restore color of swapped element
        }
        div_update(divs[i], div_sizes[i], "#5d4037"); // Color for final sorted position
    }
    div_update(divs[i], div_sizes[i], "#5d4037"); // Color for final sorted position

    enable_buttons();
}
