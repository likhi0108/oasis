function Calculate(val) {
    var v = document.getElementById('res');
    v.value += val;
    
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    //document.write(num1);
    //document.write(num2);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var c = document.getElementById('res');
    c.value = '';
 }
 function Back() {
    var b = document.getElementById('res');
    b.value = b.value.slice(0,-1);
 }