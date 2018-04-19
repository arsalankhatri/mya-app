const gulp = require('gulp');
const zip = require('gulp-zip');
 
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
var WebpackSalesforcePlugin = require('webpack-salesforce-plugin');



gulp.task('upload', () =>{

    new WebpackSalesforcePlugin({
        salesforce: {
          username: 'muhammad.arsalan@cloudcall.com', // the username to log in to Salesforce with 
          password: 'cloudcall61199', // the users password 
          token: '', // the security token, if needed. May be null or empty string if not required. Default ''. 
          loginUrl: 'https://login.salesforce.com' // the url to log in to salesforce with. Generally one of https://test.salesforce.com or https://login.salesforce.com. Default 'https://login.salesforce.com'. 
        },
        resources: [
            {
                name: 'resource1', //the name of the static resource to be created/updated in Salesforce 
                files: ['dist/**/*.bundle.js'] // the files to include in the static resource folder, may be in glob format 
            }
        ]
    })
    
}

);
 
gulp.task('zip', () =>
    gulp.src('dist/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('zip'))
);



gulp.task('build',(cb)=>{
    exec('ng build', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log('Build Success!');
        cb(err);
      });
})

gulp.task('default',(callback)=>{
runSequence('build','zip',callback);
});



