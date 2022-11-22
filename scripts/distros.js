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
      const distrostitulo1 = document.getElementById('distrostitulo1');
      distrostitulo1.style.color = colorsparag[index];

      const distrostitulo2 = document.getElementById('distrostitulo2');
      distrostitulo2.style.color = colorsparag[index];

      const distrostitulo3 = document.getElementById('distrostitulo3');
      distrostitulo3.style.color = colorsparag[index];

      //cores paragrafos
      const distrosparag1 = document.getElementById('distrosparag1');
      distrosparag1.style.color = colorshead[index];
      
      const distrosparag2 = document.getElementById('distrosparag2');
      distrosparag2.style.color = colorshead[index];
      
      const distrosparag3 = document.getElementById('distrosparag3');
      distrosparag3.style.color = colorshead[index];

  });