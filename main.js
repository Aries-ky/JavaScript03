$(function () {
  searchWord = function(){
    let searchText = $(this).val(),targetText;

    $('.search-area li').each(function() {
      targetText = $(this).text();

      if (targetText.indexOf(searchText) != -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };

  $('#search-text').on('input', searchWord);
});

