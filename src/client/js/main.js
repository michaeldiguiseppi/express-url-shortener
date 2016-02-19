// add scripts


$(document).on('ready', function() {
        var url;
        $('form').on('submit', function(e) {
            e.preventDefault();
          url = $("#url").val();
          $.post("http://localhost:5000/shorten",{url: url}, function(data){
            console.log('data', data);
            console.log(data.longUrl);
            $('#result').html('<a href="'+data.longUrl+'">'+data.longUrl+'</a>'+' shortens to '+'<a href="'+data.shortUrl+'">'+data.shortUrl+'</a>');
          });
          $('#url').val('');
        });
      });