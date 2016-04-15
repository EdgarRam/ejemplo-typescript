( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('clean', ( ) =>
            config.modules.gulp
            .src( config.foldersPath.built, {read: false})
            .pipe( config.modules.clean() )
        )


    }


} )()
