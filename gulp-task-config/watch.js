

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('watch', ( ) => {


            config.modules.gulp.watch( `${config.foldersPath.source}/**/*.ts`, ['typescript'] )

            config.modules.gulp.watch( `${config.foldersPath.source}/**/*.jade`, ['jade'] )

            config.modules.gulp.watch( `${config.foldersPath.built}/**/*`).on('change', config.modules.browser.reload);

        })
    }



} )()
