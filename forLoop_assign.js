	function partA() {
        for (var i = 0; i < 10000; i++){
            if ((i % 2) == 0) document.write(i + ' ');
        }
        window.setTimeout(partB,10000)
    }

    function partB() {
        for (var i = 0; i < 1000; i++){
            if ((i % 2) !== 0) document.write(i + ' ');
        }
    }

    partA();