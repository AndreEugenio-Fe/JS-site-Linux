document.querySelector(".sidebar .toggle-btn").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("active");
  });

  const btn = document.getElementById('btn');
  let index = 0;
  const colorshead = ['green', 'white','rgb(112, 220, 247)', 'salmon', 'gray', 'rgb(244, 247, 112)'];
  const colorsparag = ['gray', 'rgb(112, 220, 247)', 'salmon', 'rgb(244, 247, 112)', 'green','white'];
  btn.addEventListener('click', function onClick() {
    index = index >= colorsparag.length - 1 ? 0 : index + 1;
    //head cores
      const ambientetitulo1 = document.getElementById('ambientetitulo1');
      ambientetitulo1.style.color = colorsparag[index];

      const ambientetitulo2 = document.getElementById('ambientetitulo2');
      ambientetitulo2.style.color = colorsparag[index];

      const ambientetitulo3 = document.getElementById('ambientetitulo3');
      ambientetitulo3.style.color = colorsparag[index];

      const ambientetitulo4 = document.getElementById('ambientetitulo4');
      ambientetitulo4.style.color = colorsparag[index];

      const ambientetitulo5 = document.getElementById('ambientetitulo5');
      ambientetitulo5.style.color = colorsparag[index];

      const ambientetitulo6 = document.getElementById('ambientetitulo6');
      ambientetitulo6.style.color = colorsparag[index];

      const ambientetitulo7 = document.getElementById('ambientetitulo7');
      ambientetitulo7.style.color = colorsparag[index];

      const ambientetitulo8 = document.getElementById('ambientetitulo8');
      ambientetitulo8.style.color = colorsparag[index];
   
      //cores paragrafos
      const ambienteparag1 = document.getElementById('ambienteparag1');
      ambienteparag1.style.color = colorshead[index];
      
      const ambienteparag2 = document.getElementById('ambienteparag2');
      ambienteparag2.style.color = colorshead[index];
      
      const ambienteparag3 = document.getElementById('ambienteparag3');
      ambienteparag3.style.color = colorshead[index];

      const ambienteparag4 = document.getElementById('ambienteparag4');
      ambienteparag4.style.color = colorshead[index];

      const ambienteparag5 = document.getElementById('ambienteparag5');
      ambienteparag5.style.color = colorshead[index];

      const ambienteparag6 = document.getElementById('ambienteparag6');
      ambienteparag6.style.color = colorshead[index];

      const ambienteparag7 = document.getElementById('ambienteparag7');
      ambienteparag7.style.color = colorshead[index];

      const ambienteparag8 = document.getElementById('ambienteparag8');
      ambienteparag8.style.color = colorshead[index];
  });