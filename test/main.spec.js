const gulp = require('../gulpfile.js');
const chai = require('chai');
const fs = require('fs');

const expect = chai.expect;

describe('gulp project', function () {
    this.timeout(6500);
    describe('gulp module', () => {
        it('is defined and returns an object', () => {
            expect(gulp).to.exist;
            expect(gulp.tasks).to.be.a('object');
        });
        it('has a build:js task', () => {
            expect(gulp.tasks['build:js']).to.be.a('object');
            expect(gulp.tasks['build:js'].name).to.equal('build:js');
        });
        it('has a build:css task', () => {
            expect(gulp.tasks['build:css']).to.be.a('object');
            expect(gulp.tasks['build:css'].name).to.equal('build:css');
        });
        it('has a copy task', () => {
            expect(gulp.tasks['copy']).to.be.a('object');
            expect(gulp.tasks['copy'].name).to.equal('copy');
        });
        it('has a serve task', () => {
            expect(gulp.tasks['serve']).to.be.a('object');
            expect(gulp.tasks['serve'].name).to.equal('serve');
        });
        it('has a watch task', () => {
            expect(gulp.tasks['watch']).to.be.a('object');
            expect(gulp.tasks['watch'].name).to.equal('watch');
        });
        it('has a default', () => {
            expect(gulp.tasks['default']).to.be.a('object');
            expect(gulp.tasks['default'].name).to.equal('default');
        });
    });

    describe('dist folder', () => {
        before(function(done) {
            setTimeout(function() {
                gulp.start('build:css', 'build:js', 'copy');
                done();
            }, 4000);
        });
        it('has css files', (done) => {
            fs.stat('dist/styles.css', (err, stats) => {
                if(err) console.dir(err);
                expect(stats, 'expected file: dist/styles.css, file not found').to.be.a('object');
                done();
            })
        });
        it('has js files', (done) => {
            fs.stat('dist/bundle.min.js', (err, stats) => {
                if(err) console.dir(err);
                expect(stats, 'expected file: dist/bundle.min.js, file not found').to.be.a('object');
                done();
            })
        });
    });
});
