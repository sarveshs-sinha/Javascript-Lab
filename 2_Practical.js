//Inline JS: 

<html>
<head>
<title>Inline JS</title>
</head>

<body>
<button onclick = "alert('Welcome JS')">
click </button>

</body>
</html>

//Internal JS:

<!DOCTYPE html>
<html>
<head>
<title>Internal JS</title>
</head>

<body>
<script>
console.log("this is in Internal JS");
alert("Internal JS working");
</script>

</body>
</html>

//External JS: (Html + Js)

<!DOCTYPE html>
<html>
<head>
<title>External JS</title>
</head>

<body>
<script src = "script.js"></script>

</body>
</html>

console.log("This is External JS");
alert("External JS Working");

// single line comment

/* Multi-line
comment
*/

let x = 50;
console.log(x);