# comlink-app-v3

# Chargement des données :

## User :

```
Lors du lancement de l'application, les données de l'utilisateur sont chargées. 
Nous dispatchons une action pour transférer ces données dans le store. Si l'utilisateur possède des données dans son local storage,
nous les envoyons dans le store et redirigeons l'utilisateur vers le tableau de bord (dashboard).

Si l'utilisateur n'a pas de données dans son local storage, il est redirigé vers la page de connexion.
Via l'action de connexion, nous transférons alors les données dans le store.

```

## Mandats :

```
Deux appels API sont effectués : le premier concerne les mandats actifs, et le second, les mandats archivés.
 Nous excluons les mandats en prospection dans l'action des mandats et dispatchons une action pour envoyer uniquement les mandats en prospection 
 dans le store des mandats de prospection. Cela permet d'éviter un double appel lors de l'ouverture de l'application.

```

