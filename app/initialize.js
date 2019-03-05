var app = {
  init: function() {
    app.managePostsBorders();
  },
  managePostsBorders: function() {
    // Je récupère tous les éléments .posts contenus dans .main .posts
    var $posts =  $(".main .posts .post");

    // Pour tous les éléments
    $posts.each(function(index, element) {
      //console.log(index, element);
      // je récupére l'objet courrant
      var $currentPost = $(element);
      // et l'objet suivant 
      var $nextPost = $posts.eq(index + 1);

      //console.log($currentPost.height(), $nextPost.height());
      
      // si mon élément est plus graand que l'élément suivant
      if ($currentPost.height() > $nextPost.height()) {
        // j'applique la marge à droite
        $('.post__content', $currentPost)
          .css("border-right-width", "1px");
      } else {
        // sinon je l'applique à gauche
        $('.post__content', $nextPost)
          .css("border-left-width", "1px");
      }
    });
  }
};

$(app.init);
