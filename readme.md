# Frontend

## Aplicación desarrollada en react native

Explicar de qué va
Poner fotos
Link a la presentación

# Estructura de proyecto

Comando para conseguirlo: `tree -a -I '.git|__tests__|.expo|android|ios|node_modules|web-build'`, borrar también archivos de configuración después.

```bash
├── App.js
├── index.js
└── src
    ├── assets
    │   └── logo_wide.png
    ├── components
    │   ├── Events
    │   │   ├── Events.js
    │   │   ├── Events.styled.js
    │   │   └── index.js
    │   ├── Header
    │   │   ├── Header.js
    │   │   ├── Header.styled.js
    │   │   └── index.js
    │   ├── index.js
    │   ├── MainMenu
    │   │   ├── index.js
    │   │   ├── MainMenu.js
    │   │   └── MainMenu.styled.js
    │   ├── Newsletters
    │   │   ├── index.js
    │   │   ├── Newsletters.js
    │   │   └── Newsletters.styled.js
    ├── context
    │   ├── types.js
    │   ├── UserActions.js
    │   └── UserContext.js
    ├── helpers
    │   ├── eventData.js
    │   ├── newsData.js
    │   └── Theme.js
    └── screens
        ├── Auth
        │   ├── Auth.js
        │   ├── Auth.styled.js
        │   └── index.js
        ├── index.js
        ├── Main
        │   ├── index.js
        │   ├── Main.js
        │   └── Main.styled.js
        └── Newsletter
            ├── index.js
            ├── Newsletter.js
            └── Newsletter.styled.js

```

# Para desarrolladores

### Requisitos

node, yarn (en caso de no poder usarlo, pm) y expo

### Entorno de desarrollo

- Clona el proyecto a tu ordenador: `git clone git@github.com:nuwe-cowboy/frontend.git`
- Instala los paquetes necesarios: `yarn` o `npm install` (yarn es el manejador de paquetes preferido para este proyecto)
- Ya puedes correr el proyecto: `expo web`

### Contribuir

- Crea una rama con un nombre significativo a los cambios que vayas a hacer: `git checkout -b mi-nueva-funcionalidad`
- haz push de tus cambios en esa rama: `git push -u origin mi-nueva-funcionalidad` la primera vez, `git push` a partir de la segunda
- Cuando tus cambios estén listos, crea un pull request desde [aquí](https://github.com/nuwe-cowboy/frontend/pulls)
