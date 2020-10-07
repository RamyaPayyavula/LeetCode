
/** 
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.
**/

/* low  --> Starting index,  high  --> Ending index */

function partition (arr, low, high)
{
    // pivot (Element to be placed at right position)
    pivot = arr[high];  
 
    i = (low - 1)  // Index of smaller element

    for (j = low; j <= high-1; j++)
    {
        // If current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            i++;    // increment index of smaller element
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    const temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
    return (i + 1)
}

function quickSort(arr, low, high)
{
    if (low < high)
    {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}

var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2);
    quickSort(arr, 0, arr.length-1);
    const median = Math.floor(arr.length/2);
  
    const result = arr.length%2 !==0 ? arr[median] : (arr[median] + arr[median - 1])/2;
    return result;
};

findMedianSortedArrays([1,2], [3, 4]);
// 0 1 2 3 4 5 

// 0 2 4 6
// 1 3 5 7

