function swap(arr,i,j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
     
   
    function Rearrange(arr,n)
    {
        for (let i = 0; i < n - 1; i = i + 2) {
            if (arr[i] > arr[i + 1])
                swap(arr, i, i + 1);
        }
         if ((n & 1) > 0) {
            for (let i = n - 1; i > 0; i = i - 2)
                if (arr[i] > arr[i - 1])
                    swap(arr, i, i - 1);
        }
    }
     
    // Driver Method
    let arr=[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    console.log("Before rearranging<br>");
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]+" ");
    }
     
    console.log("<br>")
    Rearrange(arr, arr.length); 
    console.log("After rearranging<br>");
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]+" ");
    }
     