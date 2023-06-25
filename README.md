# Music app
![localhost_5173_ (6)](https://github.com/vimal-oneway/musicApp/assets/90978643/b4344e92-4cbd-4486-bf8a-3fbfec3c91bf)

I posted screenshots in screenshots dir [open screenshots](https://github.com/vimal-oneway/musicApp/tree/main/screenshots)

## Features
 * Playlists
    * Create ``multiple`` playlist
    * ``Delete`` playlist
    * add and remove ``songs`` in a playlist
 * Favourites
    * add song to favourite
    * remove song form favourite
 * You can `play music`, This app can redirect you to ``shazam`` website to play musics

## How to run this in my local computer?
### Client
1 install all packages
````
npm i 
````

if you don't install typescript, it can be install by following command
````
npm i typescript
````

2 run the web app in development by following comman 
````
npm run dev
````
3 For `build` the web app 
````
npm run build
````
___

###  Server

```
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:21.1.1 start-dev
```
for references:- 
[keycloak with docker](https://www.keycloak.org/getting-started/getting-started-docker)


## Cerdits
* Rest API Provider:- [Shazam-music-api](https://rapidapi.com/apidojo/api/shazam/)
* Auth With Keycloak:- [Keycloak](https://www.keycloak.org/)
