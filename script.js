javascript:(function() {
  let results = {
    num_results: 0,
    results: []
  };

  document.body.appendChild(document.createElement('script')).src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';

  $.expr[':'].icontains = $.expr.createPseudo(function(text) {
    text = text.toLowerCase();
    return function (el) {
      return ~$.text(el).toLowerCase().indexOf(text);
    }
  });

  $('.bio').each(function() {
    const keyword = $(this).find('strong:icontains("developer"), strong:icontains("engineer"), strong:icontains("hacker")').text();
    const bioLink = 'https://www.thatconference.com' + $(this).find('a').attr('href');
    const name = $(this).find('h3').text();
    const headshot = 'https://www.thatconference.com' + $(this).parent().find('img').attr('src');
    const nameFormat = name => {
      return name.toLowerCase().replace(/^\w|\s\w/g, letter => {
        return letter.toUpperCase();
      })
    };

    if (keyword.length > 0) {
      results.num_results = results.num_results + 1;
      results.results.push({
        name: nameFormat(name).trim(),
        bio: bioLink,
        headshot_data_uri: headshot
      });
    }
  });

  results.results.forEach((el, i) => {
    const dataUrl = headshot => {
      const blob = new Blob([headshot]);
      const url = URL.createObjectURL(blob);

      fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const fr = new FileReader();
        fr.onload = () => {
          const b64 = fr.result;
          el.headshot_data_uri = b64;
        };
        fr.readAsDataURL(blob);
      })
    };
    dataUrl(el.headshot_data_uri);
  });
  console.log("results", results);
})();