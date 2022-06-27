# Site Web BreizhCamp

Ce site Web est généré avec [Hugo](https://gohugo.io/), _A Fast and Modern Static Website Engine_. La rapidité de génération est une des raisons du choix de cet excellent outil. Ce site est généré en quelques dizaines de millisecondes!

La majorité des contenus est écrit en Markdown ou sous forme de fichiers structurés YAML. Il est facile d'y contribuer directement depuis l'interface de GitHub.

Amis du BreizhCamp, n'hésitez pas à proposer des PR si vous voulez améliorer ce site!

## Développement

A la racine se trouve un wrapper pour lancer Hugo, qui se chargera de télécharger le binaire Hugo s'il n'est pas disponible. Pour lancer localement le site:

    ./hugow -w serve

puis accéder à http://localhost:1313. Hugo activera le rechargement automatique des pages modifiées. Etant donné la vitesse de génération, les modifications effectuées dans les sources sont visibles en quasi-temps réel dans le navigateur Web.

### Passage à une nouvelle édition du breizhcamp

1.  Edition précédente :
    1.  Passer la méthode de récupération du programme et des speakers en `static`
    1.  (Mettre à jour le fichier des talks et des speakers)
    1.  (Archivez l'ancien site : inutile car il y a un repo git de déploiement par édition `www-<year>`)
1.  Faire un tag de la version (ex : `www-2017`)
1.  Créer le repo git de déploiement de la nouvelle édition (ex : `www-2019`)
    1.  Créer le repo sur GitHub [breizhcamp/www-AAAA](https://github.com/breizhcamp)
    1.  Créer la branche `gh-pages`
    1.  Créer le fichier `CNAME` contenant ceci :
        ```
        2019.breizhcamp.org
        
        ```
    1.  Commiter ce fichier sur la branche `gh-pages`
    1.  Pousser cette branche sur GitHub
    1.  Activer _GitHub Pages_ sur la branche `gh-pages`
1.  Fichier `config.toml`, mettre à jour :
    -   `title`
    -   `[params]`
        -   `social_logo`
    -   `[params.breizhcamp]`
    -   `[[params.menu]]` avec `name = "Billetterie"`
        -    `url`
    -   `[params.features]`
        -    `subtitle`
1.  Fichier `build.sh`, mettre à jour :
    -   `REPO` dans le case `-p|--prod`
1.  Passer les pages _programme_ et _speakers_ en draft
1.  Passer la méthode de récupération du programme et des speakers en `cfp_api`
1.  Modifier le contenu du carousel `data/carousel`
1.  Mettre à jour les pages du site, sponsors...
1.  Bascule DNS
    1.  sur le repo git de déploiement de l'édition précédente modifier le fichier `CNAME` pour mettre `<year>.breizhcamp.org`
    1.  sur le repo git de déploiement de la nouvelle édition modifier le fichier `CNAME` pour mettre ceci :
        ```
        www.breizhcamp.org
        
        ```

### Mise à jours des données

#### Liste des speakers

1.  Dans le fichier `bin/getSpeakers.groovy`, remplacer `__TODO_TOKEN__` par votre token d'authentification.
    **NE FAITES PAS UN COMMIT DE CE FICHIER AVEC VOTRE TOCKEN DEDANS !**
1.  Lancer le script `bin/update-json-speakers.sh`
1.  Faire un commit du fichier `data/speakers.json`

Le fichier `static/json/speakers_others.json` est réservé aux speakers "hors-CFP" (Keynotes...)


#### Liste des talks du programme

Si vous utilisez la méthode de récupération `static` pour récupérer les talks du programme,
il faut mettre à jour le fichier `static/json/talks.json` :

1.  Lancer le script `bin/update-json-talks.sh`
1.  Faire un commit du fichier `static/json/talks.json`

Le fichier `static/json/talks_others.json` est réservé aux talks "hors-CFP" (Meet'n Greet, Keynotes...)


### Actions classiques

#### Ouverture/Fermeture du CFP

1. Fichier `config.toml` : Ajouter/décommenter/commenter l'item de menu (bandeau) avec icône ouvert/fermé et l'URL du CFP
    ```toml
    [[params.menu]]
        name = "CFP"
        url  = "https://sessionize.com/breizhcamp-2022/"
        target = "_blank"
        image= "/img/cfp-icon-64.png"
        label= '<span class="label label-success">Ouvert</span>'
    #    label= '<i class="note fa fa-times-circle text-muted" title="Clos"></i>'
        weight = 1
    ```
2. Fichier `content/conference/cfp.md`, mettre à jour l'URL du CFP


#### Ouverture/Fermeture de la billeterie

1. Fichier `config.toml` : Ajouter/décommenter/commenter l'item de menu (bandeau) avec icône ouvert/fermé et l'URL du CFP
    ```toml
    [[params.menu]]
        name = "Billets"
        url  = "https://docs.google.com/forms/d/e/1FAIpQLSc3CbFbwKtGOCX7tbU4pXPg6LOOEB9xbp5LCpgfVlNiqFy8hg/viewform"
        target = "_blank"
        label= '<i class="note fa fa-check-circle text-success" title="Billetterie avec tirage au sort : inscriptions ouvertes"></i>'
        #    label= '<i class="note fa fa-times-circle text-muted" title="Billetterie avec tirage au sort : inscriptions closes"></i>'
        weight = 1
    ```
2. Fichier `content/faq/_index.md`, mettre à jour l'URL et les dates d'ouvertures du tirage au sort billeterie
    ```markdown
    # Comment acheter un billet ?
    
    ...
    Si vous êtes intéressé pour venir au BreizhCamp cette année, inscrivez-vous au tirage au sort via
    [ce formulaire](https://docs.google.com/forms/d/e/1FAIpQLSc3CbFbwKtGOCX7tbU4pXPg6LOOEB9xbp5LCpgfVlNiqFy8hg/viewform)
    avant le **31 mai minuit**.
    ```


## Configuration

### Récupération des talks pour le programme

Fichier `config.toml`, section `params.breizhcamp`, paramètre `programme_get_talks_method` :
-   `"cfp_api"` : récupération via l'API du CFP
-   `"static"` : récupération via le fichier `static/json/talks.json` (pensez à mettre à jour ce fichier !)

### Récupération des speakers

Fichier `config.toml`, section `params.breizhcamp`, paramètre `programme_get_speakers_method` :
-   `"cfp_api"` : récupération via l'API du CFP
-   `"static"` : récupération via le fichier `static/json/speakers.json` (pensez à mettre à jour ce fichier !)


## Organisation des branches

Ce dépot possède 2 branches, `staging` et `production`. La branche `production` doit être alimentée par des merges depuis la branche `staging`.

## Déploiement

L'instance [Jenkins du BreizhCamp]( https://breizhcamp.ci.cloudbees.com) permet de déployer automatiquement les branches principales de ce dépôt:

* la branche `staging` est déployée sur http://www-staging.breizhcamp.org
* la branche `production` est déployée sur http://www.breizhcamp.org

Les pages HTML générées sont servies par GitHub Pages et sont stockées dans:

* [breizhcamp/www-staging](https://github.com/breizhcamp/www-staging) pour la branche `staging`
* [breizhcamp/www-\<year\>](https://github.com/breizhcamp) pour la branche `production`.
  (`<year>` est l'année de l'édition. Ex : [breizhcamp/www-2018](https://github.com/breizhcamp/www-2018))

Les scripts de déploiement utilisé par l'intégration continue Jenkins sont dans le répertoire `bin`.

# Dévelopment Web et Hugo

Quelques liens pour les non professionels du CSS et de Hugo

* http://cssreference.io/
