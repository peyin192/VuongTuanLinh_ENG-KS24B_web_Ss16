let inputString = prompt("Nhập một chuỗi bất kỳ:");
function countWords(str) {
    let words = str.trim().split(/\s+/); 
    return words.length;
}
let wordCount = inputString.trim() === "" ? 0 : countWords(inputString);
alert(`Số lượng từ trong chuỗi: ${wordCount}`);
