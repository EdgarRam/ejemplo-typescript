( ( ) => {

    const config = {};

    config.modules = {
        browser: require('browser-sync').create(),
        clean: require('gulp-clean'),
        fs: require('fs'),
        gulp: require('gulp'),
        jade: require('gulp-jade'),
        path:require('path'),
        sync: require( 'gulp-sync' )(require('gulp')),
        typescript: require('gulp-typescript'),
        watch: require( 'gulp-watch' )
    };

    config.foldersPath = {
        built: './built',
        dist: './dist',
        rootPath: config.modules.path.join( __dirname, '../' ),
        source: './src',
        tasks: '../gulp-task-config'
    };

    config.fn ={
        readFolder: ( folder ) => {
            var PATH = config.modules.path.join( __dirname, folder )
            var FILES = config.modules.fs.readdirSync(PATH)

            FILES.forEach((file) => {
                if( `${file}`.search(".js") > -1 ){
                    require(`${config.foldersPath.tasks}/${file}`)(config)
                }
            });
        }
    }


    module.exports = config;

})();
