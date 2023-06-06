$(document).ready(function() {
    $(‘#menuDeroulant’).click(function() {
      // Récupérer l’identifiant de l’élément de menu sélectionné
      Var selectedOption = $(this).val(‘id’) ;
  
      // Effectuer les actions correspondantes en fonction de l’élément sélectionné
      Switch (selectedOption) {
        Case ‘Liste des catégories de services disponibles’ :
          // Afficher les informations de la page d’accueil
          Break ;
        Case ‘Services populaires ou en vedette’ :
          // Afficher les informations de la page Services populaires ou en vedette
          Break ;
        Case ‘service1’ :
          // Afficher les informations du Service 1
          Break ;
        Case ‘service2’ :
          // Afficher les informations du Service 2
          Break ;
        Case ‘contact’ :
          // Afficher les informations de la page Contact
          Break ;
        Default :
          // Gérer le cas par défaut
      }
    }) ;
  }) ;
  
  // Sélectionner tous les éléments du sous-menu
  Const submenuItems = document.querySelectorAll(‘.submenu > li’) ;
  
  // Parcourir chaque élément du sous-menu
  submenuItems.forEach(item => {
    // Écouter l’événement clic sur chaque élément
    Item.addEventListener(‘click’, () => {
      // Trouver le contenu correspondant à l’élément cliqué
      Const content = item.querySelector(‘.submenu-content’) ;
  
      // Vérifier si le contenu est déjà visible
      If (content.style.display === ‘block’) {
        // Masquer le contenu s’il est déjà visible
        Content.style.display = ‘none’ ;
      } else {
        // Afficher le contenu s’il est masqué
        Content.style.display = ‘block’ ;
      }
    }) ;
  }) ;
      
     
  Function toggleContent(contentId) {
    Var content = document.getElementById(« content » + contentId) ;
    If (content.style.display === « none ») {
      Content.style.display = « block » ;
    } else {
      Content.style.display = « none » ;
    }
 
    if (selectedTask) {
      var subtasks = subtasksByTask[selectedTask] ;
  
      subtasks.forEach(function(subtask) {
        var label = document.createElement(« label ») ;
        var checkbox = document.createElement(« input ») ;
        checkbox.type = « checkbox » ;
        label.appendChild(checkbox) ;
        label.appendChild(document.createTextNode(subtask)) ;
        subtasksContainer.appendChild(label) ;
        subtasksContainer.appendChild(document.createElement(« br »)) ;
      }) ;
    }
  }
     function toggleContent(event, id) {
       event.preventDefault();
       var contenu = document.getElementById(id);
       var contenuActif = document.getElementsByClassName('contenu active')[0];
  
       if (contenuActif) {
         contenuActif.classList.remove('active');
         contenuActif.style.display = 'none';
       }
  
       contenu.classList.add('active');
       contenu.style.display = 'block';
     }
      Function showFullText(element) {
        Element.classList.add(‘full-text’) ;
        Element.nextElementSibling.style.display = ‘none’ ;
      }