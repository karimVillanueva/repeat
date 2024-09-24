# Contador de Caracteres

Este proyecto es una aplicación en Node.js que permite al usuario ingresar una cadena de texto y un carácter, y luego cuenta cuántas veces aparece ese carácter en la cadena. Utiliza la biblioteca `readline` para manejar la entrada de datos a través de la consola.

## Descripción

La función `countCharacter` toma una cadena y un carácter como parámetros y devuelve el número de veces que el carácter aparece en la cadena. La función `repeatCounter` se encarga de interactuar con el usuario, pidiendo una cadena y un carácter, y mostrando el resultado.

## Funcionalidad

- Solicita al usuario que ingrese una cadena.
- Solicita al usuario que ingrese un carácter.
- Cuenta cuántas veces aparece el carácter en la cadena.
- Muestra el resultado en la consola.

## Ejemplo de Uso

Para ejecutar la aplicación, simplemente llama a la función `repeatCounter`. Por ejemplo:

```bash
node index.js
```

Cuando se te pida, ingresa una cadena y un carácter, por ejemplo:

```
Input a string: hello world
Input a character: o
```

La salida será:

```
The character 'o' appears 2 times in the string.
```

Si la cadena está vacía, verás un mensaje de error:

```
The string is null
```

## Instalación

Para utilizar este proyecto, asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, sigue estos pasos:

1. Clona el repositorio:

```bash
   git clone https://github.com/tu-usuario/contador-caracteres.git
```

2. Navega al directorio del proyecto:

```bash
   cd contador-caracteres
   npm install
   npm start

```

## Test

```bash
    npm test
```

## Requisitos

- Node.js (v12 o superior)

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo `LICENSE`.

## Autor

- [Karim Villanueva](https://github.com/karimVillanueva) - Desarrollador principal.
