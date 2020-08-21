/*!
 * Flynav v0.0.1
 * Display a flying navigation.
 * MIT License
 */
window.Flynav = (function(){
    var _init = false,
        app = {},
        $flynav = false,
        $flynavReference = false,
        helper = {},
        settings = {
            // Trigger selector fo the flynav
            flynavSelector: '.js-flynav',
            // Trigger the flynav open when the reference scroll top
            // reaches the windows scroll top.
            // If you choose cloneSource this reference will be cloned
            // into the flynav container (append)
            flynavReferenceSelector: '.js-flynav-reference',
            // Selector on which we place the flynavOpenClass
            stateToggleSelector: 'body',
            // Do you want to clone the flynav reference or cloneFindSelector
            // into the flynav container?
            cloneSource: false,
            // Clone just a part of the flynav container.
            // If you do not wish to clone the reference, you can
            // clone a subpart of the flynav here. We use the reference
            // if this is false
            flynavCloneFindSelector: false,
            // Classname we should place on the stateToggleSelector
            flynavOpenClass: 'flynav--open',
            // After how many pixels offset should the flynav open toggle
            flynavOffset: 1,
            // Shall we use the offset or fire immediately when the
            // reference comes into view
            useOffset: true,
        };

    app.active = false;

    app.init = function( options ){
        if( _init )
        {
            return;
        }
        _init = true;

        settings = $.extend( settings, options );

        $flynav = $( settings.flynavSelector );
        $flynavReference = $( settings.flynavReferenceSelector );
        if( $flynav.length == 1 && ( settings.useOffset === true || $flynavReference.length == 1 ) )
        {
            app.active = true;
            if( settings.cloneSource )
            {
                var $cloneTarget = $( settings.flynavSelector );
                if( settings.flynavCloneFindSelector !== false )
                {
                    $cloneTarget = $cloneTarget.find( settings.flynavCloneFindSelector );
                }
                if( $cloneTarget.length > 0 )
                {
                    $cloneTarget.append( $flynavReference.clone( true ) );
                }
            }
            $( window ).on( 'scroll', helper.scrollHandler );
            helper.scrollHandler();
        }
    };

    helper.scrollHandler = function( e ){
        var windowScrollPos = $( window ).scrollTop();
        var thisScrollPos = settings.flynavOffset;
        if( settings.useOffset === false ) {
            thisScrollPos = $flynavReference.offset().top;
        }
        if( settings.useOffset === true || thisScrollPos > 0 )
        {
            if( windowScrollPos >= thisScrollPos )
            {
                $( settings.stateToggleSelector ).addClass( settings.flynavOpenClass );
            }
            else
            {
                $( settings.stateToggleSelector ).removeClass( settings.flynavOpenClass );
            }
        }
    };

    return app;
})();
