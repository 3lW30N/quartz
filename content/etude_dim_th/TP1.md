---
title: "Étude de dimensionnement thermique : TP1"
---
- Entrer les paramètres suivants
![[Screenshot 2025-03-10 at 15.26.03.png|400]]
- Créer les deux blocs en faisant 
Clic droit sur Geometry -> Block
Choisir les dimensions correctes pour chacun des deux éléments (lesquelles ont été rentrées dans les paramètres)
- Ajouter une température sur les deux extrémités : ``T_0`` du côté du cube le plus éloigné de l'ailette et ``T_a`` du côté de l'ailette le plus éloigné du cube
- Dans study appuyer sur compute : on obtient un gradient de température
 ![[Screenshot 2025-03-10 at 15.13.03.png|400]]
- Clic droit sur study -> Parametric Sweep -> +
  Ajouter sur une même ligne ``80 90 100`` pour le paramètre ``T_0``
  Changer l'unité pour ``degC`` 
- Clic droit sur Results -> 1D Plot Group -> Clic droit sur 1D Plot Group -> Line Graph
- Clic droit sur Geometry -> Line Segment -> Changer pour coordinates dans Specify et Endpoint
  Choisir les paramètres 0 pour x, Y_x pour y et Z_c pour z dans Endpoint et x_c pour x, Y_x pour y et Z_c pour z dans Endpoint
- Mettre à jour le Study
- Retourner dans Line Graph -> Sélectionner la ligne centrale (elle est en 4 morceaux) -> Plot
- ![[Screenshot 2025-03-10 at 15.29.35.png|400]]
- Créer un autre 1D Plot Group -> Y créer un Point Graph -> Sélectionner les points des capteurs -> Mettre en degC
- Dans Coloring and Style mettre en Marker : Points et Positioning : In data points
  Dans x-Axis mettre T_0 en degC
- Compute la Study puis retourner Plot
- Clic droit sur la racine du fichier -> Add Study -> Time dependant (à droite) -> Dans Output time : range(0, 1000, 10 000)