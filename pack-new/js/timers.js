// $(function() {
//     const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//     let countDown = new Date('Nov 30, 2019 00:00:00').getTime(),
//         x = setInterval(function () {
//                 let now = new Date().getTime(),
//                 distance = countDown - now;
//                     $('#days').text(Math.floor(distance / (day))),
//                     $('#hours').text(Math.floor((distance % (day)) / (hour))),
//                     $('#minutes').text(Math.floor((distance % (hour)) / (minute))),
//                     $('#seconds').text(Math.floor((distance % (minute)) / second));
//         }, second);
// });