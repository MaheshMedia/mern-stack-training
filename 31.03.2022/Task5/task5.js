function nextPowerOf2(n)
{
    n -= 1
    n |= n >> 1
    n |= n >> 2
    n |= n >> 4
    n |= n >> 8
    n |= n >> 16
    n += 1
    return n
}
   
// Driver Code
n = 205;
console.log (nextPowerOf2(n));
 