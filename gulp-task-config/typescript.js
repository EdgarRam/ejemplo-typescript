( () => {



    module.exports = ( config ) => {
        'use strict'



        config.modules.gulp.task('typescript', ( ) =>
            config.modules.gulp
            .src( 'src/**/*.ts' )
    		.pipe( config.modules.typescript () )
    		.pipe( config.modules.gulp.dest('built') )
        )
    }



} )()
