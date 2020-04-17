Sample Project on Nuxt.js / Firebase Authentication
====

[Firebase Authentication](https://firebase.google.com/docs/auth?hl=ja)でメール/パスワードでの認証</br>
Nuxt.js / Typescript / docker の[ベースプロジェクト](https://github.com/numasa/nuxt_typescript_on_docker)を利用

## Description
- programming language TypeScript
- the package manager Yarn
- UI framework Vuetify.js
- Nuxt.js modules Axios, Progressive Web App (PWA) Support, Dotenv
- rendering mode Single Page App

## Requirement
- docker
- docker-compose

## Prepare
予めFirebaseのプロジェクトを作成して、[Firebaseをプロジェクトに追加](https://firebase.google.com/docs/web/setup?hl=ja)してください。</br>
Dotenv用に[Install](#Install)「1. git clone」後に「nuxt_firebase_auth/project/src」に下記の形式で「.env」ファイルを配置してください。
```
FB_API_KEY="XXXXX"
FB_AUTH_DOMAIN="XXXXX"
FB_DATABASE_URL="XXXXX"
FB_PROJECTID="XXXXX"
FB_STORAGE_BUCKET="XXXXX"
FB_MESSAGING_SENDER_ID="XXXXX"
FB_APP_ID="XXXXX"
```

## Install
1. git clone
```bash
$ git clone https://github.com/numasa/nuxt_firebase_auth.git
$ cd nuxt_firebase_auth
```

2. make .env file
```bash
$ touch project/src/.env
```
Write your firebase config to .env (ref.[Prepare](#Prepare))

3. build & yarn install
```bash
$ docker-compose run vue yarn install
```

4. service run on localhost
```bash
$ docker-compose run --service-ports vue yarn run dev
```

5. access localhost:3000 by browser
- [http://localhost:3000/](http://localhost:3000/)

## Deploy
deploy to your Firebase Project's Hosting service.
1. exec docker
```bash
$ docker-compose run -p 9005:9005 vue ash
```

2. generate
```ash
# yarn run generate
```

3. add firebase-tools
```ash
# yarn global add firebase-tools
```

4. firebase login
```ash
# firebase login
✔  Success! Logged in as XXX
```

5. firebase init
```ash
# firebase init
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and deploy Firebase Hosting sites
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: {your Firebase project}
? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? N
? File dist/index.html already exists. Overwrite? (y/N) N
✔  Firebase initialization complete!  
```

6. firebase deploy
```ash
# firebase deploy
✔  Deploy complete!
```

7. access DEMO site by browser
- https://nuxtfirebaseauth.web.app/
  - Email: test@example.com
  - Pass: testtest
