// 1. Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// Đầu vào: str_input 
// Đầu ra: đảo ngược chuỗi và in ra kết quả
// Ví dụ:
// Cho: str_input = "program"; in ra: "margorp"
// Cho: str_input = "data"; in ra: "atad"
// Lưu ý: không sử dụng hàm reverse()

// function strInput (str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
   
// console.log(strInput("program"));

// 2. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự

// 4. Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

// const mindX = [
//     {
//         name : "Đăng",
//         age : 35,
//         salary : 1500,
//         position : "Manager"
//     },

//     {
//         name : "Huyền",
//         age : 25,
//         salary : 1000,
//         position : "Accountant"
//     },

//     {
//         name : "Hoa",
//         age : 27,
//         salary : 1200,
//         position : "Marketing"
//     },

// ];

// let input = prompt("Enter C/R/U/D");

// if(input === 'C') {
//     let name = prompt("Enter name");
//     let age = Number(prompt("Enter age"));
//     let salary = Number(prompt("Enter salary"));
//     let position = prompt("Enter position");

//     let newUser = {
//         name : name,
//         age : age,
//         salary : salary,
//         position : position
//     }
//     mindX.push(newUser);
//     console.table(mindX);

// } else if (input === 'R') {
//     for (const name in mindX) {
//     console.table(mindX[name]);
//     } 

// } else if (input === 'U') {
//     let index = Number(prompt("Enter index: "));
//         if (index > mindX.length || index < 0) {
//             console.log("Không tìm được vị trí của " + index);
    
//         } else {
//             mindX[index].name = prompt("Enter name");
//             mindX[index].age = Number(prompt("Enter age"));
//             mindX[index].salary = Number(prompt("Enter salary"));
//             mindX[index].position = prompt("Enter position");
        
//             console.table(mindX);
//         }

// } else if (input === 'D') {
//     let index = Number(prompt("Enter index: "));
//         if (index > mindX.length || index < 0) {
//             console.log(("Không tìm được vị trí của " + index));
      
//         } else {
//             mindX.splice(index, 1);
//             console.table(mindX);
//         };
// }               

   

// Bài 1
// let str_input = prompt("Nhập vào một chuỗi");
// let newString = "";
// for (let i = str_input.length - 1; i >= 0; i--) {
//     newString += str_input[i];

// }
// console.log(newString);

// Bài 2
// let str_input = prompt("Nhập vào").split(' ');
// let strUper = [];
// for (let i = 0; i < str_input.length; i++) {
//     strUper.push(str_input[i].charAt(0).toUpperCase() + str_input[i].substring(1))
// }
// console.log(strUper.join(' '));

// Bài 3
// Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// Ví dụ
// Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]


// let arr = [1,2,3,3,4,5,4,4,4,5,5];
// let newArr = [];
// for (let i=0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i] === -1)) {
//         newArr.push
//     }
// }

// 5. Bài 5 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// Ví dụ
// Ngày 30/4/2019 là ngày hợp lệ
// Ngày 29/2/2019 là ngày không hợp lệ
// Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// Ví dụ
// Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021

