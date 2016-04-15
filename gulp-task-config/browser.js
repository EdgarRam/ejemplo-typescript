( () => {



    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('browser', ( ) =>{
            config.modules.browser.init({
                server: `${config.foldersPath.built}`
            });
        } )
    }



} )()
