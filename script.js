const aplicacion = document.querySelector('.imagen')

const url = 'https://randomuser.me/api/?nat=ES'


fetch(url)
          .then(res => res.json())
          .then(data => { //sacado una parte de youtube
            
            // FOTO_CV
            var img1 = new Image(); // obtenido de mozilla developer
            img1.src = data.results[0].picture.large;
            img1.alt = 'no se pudo mostrar imagen';
            aplicacion.appendChild(img1);
            
            // PRESENTACION_CV
            document.getElementById("nombre").innerHTML = data.results[0].name.first + 
            " " + data.results[0].name.last

            // INFORMACION_PERSONAL_CV
            document.getElementById("edad").innerHTML = "Tengo: " + data.results[0].dob.age + " años."
            const d = new Date(data.results[0].dob.date)
            document.getElementById("natalicio").innerHTML = "Naci el dia: " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
            if (data.results[0].gender == "male"){
                                                  document.getElementById("genero").innerHTML = "Genero: Hombre"
                                                } else {
                                                        document.getElementById("genero").innerHTML = "Genero: Mujer"
                                                       }
            
            // CONTACTO_CV 
            document.getElementById("celular").innerHTML = "Mi numero es: " + data.results[0].cell
            document.getElementById("email").innerHTML = "Mi correo es: " + data.results[0].email
            document.getElementById("direccion").innerHTML = "Me encuentro en: " + data.results[0].location.street.number + ", " + data.results[0].location.street.name
            
          })