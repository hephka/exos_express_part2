# Exercices express _ Partie 2


1
Créer une programme app.js qui utilise express. Cette application devra tourner sur votre ip locale et le port 7777. Avec votre navigateur en se connectant sur en http à votre ip locale sur le port 7777 on devra récupérer le message 'Exercices express partie 2' Pour cela il faudra créer une route qui manage le path /

2
Ajouter une route /get_current_time qui retournera à l'utilisateur la date du serveur sur lequel s'exécute app.js

3
Ajouter une route /how_pass_data qui retourne à l'utilisateur un message qui lui explique comment on passe des données d'un handler/middleware à un autre sur express

4
L'ordre dans lequel nous appliquons nos middleware est très important. Ils seront exécutés dans l'ordre de nos app.use.
Des middlewares peuvent aussi être executés après un app.get. Ajouter un middleware, /sendMessage qui s'appliquera à toute les routes et qui se chargera d'envoyer le message de réponse à l'utilisateur. Il y aura des modifications à appliquer aux routes que vous avez écrites précédement, afin qu'elles puissent gérer ce middleware.

5
Ajouter un middleware wrappWithHtml qui s'appliquera à toutes les routes, et qui transformera nos messages texte en messages au format HTML.
Vous pouvez utiliser pour cela ce template:

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Exercices express 2</title>
  </head>

  <body>
    <p>LE TEXTE A RETOURNER DEVRA SE TROUVER ICI</p>
  </body>
</html>
6
Ajouter une route avec express.Router qui se chargera de gérer une calculatrice. Ce routeur devra se trouver dans un fichier calc.js On pourra accéder au fonctionnalité de notre calculatrice sur la route /calc depuis notre navigateur. Les opérations de calcul sont accessible de cette manière:

http://192.168.0.11:7777/calc/add/1/10 devra retourner 11
http://192.168.0.11:7777/calc//div/10/5 devra retourner 15
http://192.168.0.11:7777/calc//mul/15/2 devra retourner 30
http://192.168.0.11:7777/calc//sub/10/9 devra retourner 1
Vous pouvez vous inspirer des corrections précédentes pour les fonctions de calculs