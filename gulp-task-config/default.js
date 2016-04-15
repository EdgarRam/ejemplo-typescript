

( () => {


    module.exports = ( config ) => {
        'use strict'


        config.modules.gulp.task('default', config.modules.sync.sync(
            [
                // Sync
                'clean',
                'jade',
                'typescript',
                'watch',
                'browser'
            ]
        ) )
    }



} )()
