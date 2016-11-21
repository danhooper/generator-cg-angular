function <%=_.camelize(name) %>() {
}

angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', {
    controller: <%=_.camelize(name) %>,
    bindings: {
    },
    templateUrl: '<%= htmlPath %>'
});
