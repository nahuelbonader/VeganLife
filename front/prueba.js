function db (num) {
    res = "";
    while (num) {
        res = num%2+res
        num = Math.floor(num/2)
    }return res
}