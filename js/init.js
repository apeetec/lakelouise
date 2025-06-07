// Navbar mobile
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        // specify options here
      });
      // Função para fechar o sidenav
          var elem = document.querySelector(".sidenav");
          var instance = M.Sidenav.getInstance(elem);
          const fechar = document.getElementById("fechar");
          if(fechar){
          fechar.addEventListener('click', function(){
            instance.close();
          })
        }

        var parallax = document.querySelectorAll('.parallax');
        var instance_parallax = M.Parallax.init(parallax, {
          // specify options here
        });
        var carousel = document.querySelectorAll(".carousel");
        var instances = M.Carousel.init(carousel,{
          fullWidth:false,
          dist:0,
          padding:30
        });
        var materialboxed = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(materialboxed, {
          // specify options here
        });
    }); 




  function moverSlides(sliderId, movimento) {
    var slider = M.Slider.getInstance(document.getElementById(sliderId));  
    // Verifica se o slider existe
    if (slider) {
      // Move os slides de acordo com o movimento especificado
      if (movimento === 'anterior') {
        slider.prev();
      } else if (movimento === 'próximo') {
        slider.next();
      }
    }
  }


  function moverCarousel(carouselId, movimento) {
    var carousel = M.Carousel.getInstance(document.getElementById(carouselId));  
    // var instance = M.Carousel.getInstance(elem);
    // Verifica se o slider existe
    if (carousel) {
      // Move os slides de acordo com o movimento especificado
      if (movimento === 'anterior') {
        carousel.prev();
      } else if (movimento === 'próximo') {
        carousel.next();
      }
    }
  }


