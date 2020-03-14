const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Emojis = () => {
  
  const emojis = ["Un proyecto que tienes en mente será exitoso si comienzas desde ahora, escapa del miedo.","Procurando siempre lo mejor estropeamos a menudo lo que está bien.","A cada paso una oportunidad aparece frente a ti, procura ser atentó estos próximos días.","Recibirás un beneficio que será envidiado por algunos, ten cuidado con quien te vinculas.","Un ser querido te necesita más de lo que piensas, comparte tu tiempo con él o ella.", "No decaigas en plena tormenta un nuevo amanecer se asoma.","Esa persona que consideras especial oculta un secreto para no dañarte.","Cuida de tu salud es más importante que apresurar lo planeado.","Las tendencias pasan de moda pero que no sea tu actitud.","Tu carácter en ocasiones suele ser muy fuerte, ten cuidado a quien le ruges.","Llegará dinero de la manera menos inesperada.","Esa persona especial necesita de su espacio, no la sobrecargues.","Ni una pandemia es tan fuerte como tu personalidad.","No te atormentes pensando siempre en lo mismo, recuerda que la vida es una sola.","La persona que realmente te ama estuvo siempre contigo, ¿aún no lo reconoces?","Ese ser tan especial que anhelas llegará en un momento oportuno, se acompañaran el uno al otro.","Ten cuidado estos días te salvaras de algo grande.","Felicidades por la sorpresa que te llevaras en los próximos días.","Es tiempo de cambiar tus hábitos de vida, ten en cuenta que te salvaras de una enfermedad.","Se avecina un nuevo integrante a tu familia.","Eres único ignora a quienes se ciegan a ver la realidad.","Te sorprenderán, un viaje se aproxima.","Empieza con visualizar pequeños deseos para que el destino te regale grandes.","Ganastes una suscripción gratuita, Felicidades!","Ganastes un cofre, Felicidades!","Pronto celebraras un evento importante para un ser querido, deséale los mejores éxitos.","El fin de la espera a llegado, tu entusiasmo se elevará.","Te ayudarán como agradecimiento a la ayuda que has brindado.","Recuerda no aplazar nada estos próximos días, la última vez no te fue muy bien."]
  let frase = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById('retorno').innerHTML =  frase;
  copyToClipboard(frase);
}


document.getElementById('boton').addEventListener("click", Emojis);
