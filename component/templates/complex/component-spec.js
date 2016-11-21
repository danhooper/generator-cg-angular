describe('<%= _.camelize(name) %>', function() {

    beforeEach(module('<%= appname %>'));

    var scope;
    var compile;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    it('should ...', function() {

        /*
        To test your component, you need to create some html that would use your component,
        send that through compile() then compare the results.

        var element = compile('<<%= name %>>hi</<%= name %>>')(scope);
        expect(element.text()).toBe('hello, world');
        */

    });
});

