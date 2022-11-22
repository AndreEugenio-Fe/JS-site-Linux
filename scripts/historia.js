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
      const historiatitulo1 = document.getElementById('historiatitulo1');
      historiatitulo1.style.color = colorsparag[index];

      const historiatitulo2 = document.getElementById('historiatitulo2');
      historiatitulo2.style.color = colorsparag[index];

      const historiatitulo3 = document.getElementById('historiatitulo3');
      historiatitulo3.style.color = colorsparag[index];

      const historiatitulo4 = document.getElementById('historiatitulo4');
      historiatitulo4.style.color = colorsparag[index];

      const historiatitulo5 = document.getElementById('historiatitulo5');
      historiatitulo5.style.color = colorsparag[index];
   
      //cores paragrafos
      const historiaparag1 = document.getElementById('historiaparag1');
      historiaparag1.style.color = colorshead[index];
      
      const historiaparag2 = document.getElementById('historiaparag2');
      historiaparag2.style.color = colorshead[index];
      
      const historiaparag3 = document.getElementById('historiaparag3');
      historiaparag3.style.color = colorshead[index];

      const historiaparag4 = document.getElementById('historiaparag4');
      historiaparag4.style.color = colorshead[index];

      const historiaparag5 = document.getElementById('historiaparag5');
      historiaparag5.style.color = colorshead[index];
  });