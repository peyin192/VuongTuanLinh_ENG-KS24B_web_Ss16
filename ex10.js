// Nhập chuỗi từ bàn phím
let inputString = prompt("Nhập một chuỗi bất kỳ:");

// Hàm đếm số lượng từ trong chuỗi
function countWords(str) {
    // Loại bỏ khoảng trắng ở đầu & cuối, sau đó tách từ bằng dấu cách
    let words = str.trim().split(/\s+/); 
    return words.length;
}

// Kiểm tra nếu chuỗi rỗng sau khi xóa khoảng trắng thì số từ là 0
let wordCount = inputString.trim() === "" ? 0 : countWords(inputString);

// Hiển thị kết quả
alert(`Số lượng từ trong chuỗi: ${wordCount}`);
