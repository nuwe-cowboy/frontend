# Summer Coding League Project 
## "Muévete por los que no pueden"

## Descripción 
**Mobile App**: En "Muévete por los que no pueden", realizan eventos deportivos y por lo tanto necesitan una aplicación (tanto web como móvil) para gestionar todos estos acontecimientos.  


## Stack Tecnológico
- [React native](https://reactnative.dev/)
- [Netlify](https://netlify.app/)
- HTML
- CSS
- Node
- Api Rest


# Estructura de proyecto

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
- Node / Yarn
- Expo
- Configurar el entorno de desarrollo de [react native](https://reactnative.dev/docs/environment-setup)


### Entorno de desarrollo

- Clona el proyecto a tu ordenador: 
```
$ git clone git@github.com:nuwe-cowboy/frontend.git
```

- Instala los paquetes necesarios: yarn o npm:
``` 
$ npm install
```
- o bien 
``` 
$ yarn install
```

- Ejecutar proyecto: 
``` 
$ expo web 
```

### ¿Quieres contribuir?

- Crea una rama con un nombre significativo a los cambios que vayas a hacer: 
```
git checkout -b mi-nueva-funcionalidad
```

- Pushear los cambios de tu rama: 
``` 
git push -u origin mi-nueva-funcionalidad
```

- Cuando tus cambios estén listos, crea un pull request desde [aquí](https://github.com/nuwe-cowboy/frontend/pulls).  
  
  
Made with :heart: by Nuwe Cowboy Team
