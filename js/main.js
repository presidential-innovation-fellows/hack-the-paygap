(function($) {
  $(function() {

    /* Track when Learn More is clicked for each tool */
    $('#connect').on('click', '.ood-gallery-item a', function(event) {
      var toolName = $(this).closest('.ood-gallery-item').find('header').text().trim();
      ga('send', 'event', 'opportunity', 'click', toolName);
    });

    /* Helper to get the hostname of a URL */
    function getHostname(url) {
      var a = document.createElement('a');
      a.href = url;
      return $(a).prop('hostname');
    }

    /* Show alert when leaving a .gov domain. */
    function alertLeavingUsg(e, newHostname) {
      if (!newHostname.match(/\.gov$/)) {
        if (confirm('You are about to leave this web site for a destination ' +
                    'outside of the Federal Government. You may wish to ' +
                    'review each privacy notice since their information ' +
                    'collection practices may differ from ours. In addition, ' +
                    'our linking to these sites does not constitute an ' +
                    'endorsement of any products or services.\n\n' +
                    'Click OK if you wish to continue to the web site, ' +
                    'otherwise click Cancel to return to our site.')) {
          // consinue
        } else {
          e.preventDefault();
        }
      }
    }

    $('a').click(function(e) {
      alertLeavingUsg(e, $(this).prop('hostname'));
    });
    $('form').submit(function(e) {
      alertLeavingUsg(e, getHostname($(this).prop('action')));
    });

  });
})(jQuery);
