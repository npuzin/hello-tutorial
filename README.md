# Une application 3-tier avec AngularJS, NodeJS et ExpressJS

## Le résultat attendu

Le projet suivant illustre comment développer une application robuste, scallable et performante entièrement en Javascript. L'application se compose des 3 couches suivantes :

#### La 1ère couche : la couche de présentation des données

La première couche est la couche de **présentation des données**. Elle est installée sur le serveur "front-end", autrement dit le serveur de "façade". Cette couche est une application web static (HTML, Javascript, and CSS files) développée à l'aide d'AngularJS.

#### La 2ème couche: la couche métier

La deuxième couche est la couche **métier**. Elle est installée sur le serveur "back-end" qui n'est pas exposé sur internet. Cette couche est un service RESTful développé à l'aide de Javascript, NodeJS et ExpressJS)

#### La 3ème couche: la couche de données

La troisième couche est la couche de **données**. C'est le serveur de base de données. Dans notre exemple, nous utiliserons une base de données MySQL.

Voici le résulat attendu: 

![Image](/documentation/images/screen3.png)

![Image](/documentation/images/screen4.png)

## Diagramme d'architecture

![Image](/documentation/images/architecture.png)
