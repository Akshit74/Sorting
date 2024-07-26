function Quick() {
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(start, end) {
    var pivotIndex = start;
    var pivotValue = div_sizes[end]; 
    div_update(divs[end], div_sizes[end], "#a1887f"); 


    var i = start - 1; 

    for (var j = start; j < end; j++) {
        div_update(divs[j], div_sizes[j], "#8d6e63"); 

        if (div_sizes[j] < pivotValue) {
            i++;


            if (i !== j) {
                div_update(divs[i], div_sizes[i], "#d7ccc8"); 
                div_update(divs[j], div_sizes[j], "#d7ccc8"); 


                var temp = div_sizes[i];
                div_sizes[i] = div_sizes[j];
                div_sizes[j] = temp;

                div_update(divs[i], div_sizes[i], "#8d6e63");
                div_update(divs[j], div_sizes[j], "#8d6e63");
            }
        }
    }


    div_update(divs[end], div_sizes[end], "#d7ccc8"); 
    div_update(divs[i + 1], div_sizes[i + 1], "#d7ccc8"); 

    var temp = div_sizes[end];
    div_sizes[end] = div_sizes[i + 1];
    div_sizes[i + 1] = temp;

    div_update(divs[end], div_sizes[end], "#5d4037"); 
    div_update(divs[i + 1], div_sizes[i + 1], "#5d4037"); 


    for (var t = start; t <= i + 1; t++) {
        div_update(divs[t], div_sizes[t], "#5d4037");
    }

    return i + 1;
}

function quick_sort(start, end) {
    if (start < end) {
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
}
