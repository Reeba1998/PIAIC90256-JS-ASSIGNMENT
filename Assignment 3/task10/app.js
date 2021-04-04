var A=[20,53,8,4,91,12];
document.write(A);
document.write("<br>");
var j=0,key;

for (var i = 1; i < A.length; i++)
    { 
        key = A[i]; 
        j = i - 1; 
 
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && A[j] > key)
        { 
            A[j + 1] = A[j]; 
            j = j - 1; 
        } 
        A[j + 1] = key; 
    } 
document.write(A);
document.write("<br>");