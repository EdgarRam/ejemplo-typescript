

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('jade', ( ) =>
            config.modules.gulp
            .src([
                `${config.foldersPath.source}/**/*.jade`,
            ])
            .pipe(config.modules.jade({
                pretty: true
            }))
            .pipe(config.modules.gulp.dest( `${config.foldersPath.built}` ))
        )
    }



} )()
