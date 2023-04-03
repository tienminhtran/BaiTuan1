// <!-- <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>STOP WATCH</title>
// </head>

// <body>
//     <p id="demo">

//     </p>
//     <p id="demo1">

//     </p>
//     <script>
//         var demo = document.getElementById('demo');
//         var demo1 = document.getElementById('demo1');
//         var demo2 = document.getElementById('demo2');
//         var i = 0;
//         var j = 0;
//         var t = 0;

//         function s() {
//             var time = new Date();
//             demo.innerText = i;

//             console.log(i++);
//             if (i == 5) {
//                 function p() {
//                     var time = new Date();
//                     demo1.innerText = j;
//                     i = 0;
//                     console.log(j++);
//                 }
//                 setInterval(p, 1000);

//                 if (j == 5) {
//                     function h() {
//                         var time = new Date();
//                         demo2.innerText = t;
//                         j = 0;
//                         console.log(t++);
//                     }
//                     setInterval(h, 1000);
//                 }
//             }


//         }
//         setInterval(s, 1000);
//     </script>
// </body>

// </html> -->

var hour = document.getElementById('gio');
var minute = document.getElementById('phut');
var second = document.getElementById('giay');
var msecond = document.getElementById('giays');
var start = document.getElementById('batdau');
var stop = document.getElementById('tamdung');
var reset = document.getElementById('lammoi');

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

start.addEventListener('click', function() {
    timer = true;
    stopwatch();
});

stop.addEventListener('click', function() {
    timer = false;
});


reset.addEventListener('click', function() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
    msecond.textContent = "00";
});

function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }

        if (min == 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        hour.textContent = hrString;
        minute.textContent = minString;
        second.textContent = secString;
        msecond.textContent = countString;
        setTimeout(stopwatch, 9);
    }
}