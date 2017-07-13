document.addEventListener('DOMContentLoaded', function(){
  console.log("WORK");

  var li = document.querySelector('li');
  var submenu = document.querySelector('.submenu');

  li.addEventListener('mouseover', function(){
    var submenu = this.querySelector('.submenu');
    submenu.style.display = 'block';
  })

  li.addEventListener('mouseout', function(){
    var submenu = this.querySelector('.submenu');
    submenu.style.display = 'none';
  })

  var images = document.querySelectorAll('.image');


    for(var i=0; i<images.length; i++) {
      images[i].addEventListener('mouseover', function(){
        var shadow = this.querySelector('.shadow');
        shadow.style.display = 'none';
      })
    }

    for(var i=0; i<images.length; i++) {
      images[i].addEventListener('mouseout', function(){
        var shadow = this.querySelector('.shadow');
        shadow.style.display = 'block';
      })
    }

    var next = document.querySelector('#link');
    var prev = document.querySelector('.picture a');
    var lis = document.querySelectorAll('.picture li');

    var index = 0;

    lis[index].classList.add('visible');

    next.addEventListener('click', function(){
      lis[index].classList.remove('visible');
      index++;
      if(index > lis.length - 1) {
        index = 0;
      }
      lis[index].classList.add('visible');
    })

    prev.addEventListener('click', function(){
      lis[index].classList.remove('visible');
      index--;
      if(index < 0) {
        index = lis.length - 1;
      }
      lis[index].classList.add('visible');
    })

    var arrows = document.querySelectorAll('.list_arrow');

      arrows[0].addEventListener('click', function(){
        var uls = document.querySelector('.list_panel');
          uls.classList.toggle('hidden');
      })

      arrows[1].addEventListener('click', function(){
        var uls = document.querySelectorAll('.list_panel');
          uls[1].classList.toggle('hidden');
      })

      arrows[2].addEventListener('click', function(){
        var uls =  document.querySelectorAll('.list_panel');
          uls[2].classList.toggle('hidden');
      })

      var lis1 = document.querySelectorAll('.list_panel li');
      console.log(lis1[1].innerText);

      for(var i=0; i<lis1.length; i++) {
        lis1[i].addEventListener('click', function(){
          var sum = document.querySelector('.summary_panel');
            console.log(lis[i]);

        })
      }


})
