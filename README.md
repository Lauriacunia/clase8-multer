### Carpeta Public

Partiendo del ejemplo anterior, recrear la estructura con un index.html para poder visualizarse en la ruta raíz.

En este archivo deberá haber un formulario donde podremos ingresar una mascota a partir del método POST. Dicho POST conectará al endpoint raíz del router pets
Configurar el router pets para que pueda recibir el json por parte del formulario (recordar express.json() y express.urlencoded({extended:true}))
Verificar con POSTMAN que la información llegue al servidor y se guarde correctamente.

### Express & Multer

Basado en el formulario para ingresar una mascota al sistema:

Configurar el formulario para añadir un campo input type=”file” name “file” para que la mascota a agregar pueda tener una “imagen representativa”.
El nombre del archivo guardado se formará con el nombre original anteponiéndole un timestamp (Date.now()) seguido con un guión. Ej: 1610894554093-clase1.zip.
Corroborar que la imagen se guarde correctamente. Guardar la ruta del archivo guardado en un campo “thumbnail”.
