setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*256).toString(16);
      document.body.style.backgroundColor = "#"+randomColor;
    },1000);