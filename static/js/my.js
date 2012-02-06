(function(){ 
    // created_at: "2009/12/17 06:48:37 -0800"
    // description: "A collection of elements for the GStreamer multimedia framework which provide access to a number of computer vision techniques from the OpenCV project"
    // fork: true
    // forks: 1
    // has_downloads: true
    // has_issues: false
    // has_wiki: true
    // homepage: ""
    // language: "C"
    // name: "gst-opencv"
    // open_issues: 0
    // owner: "phoenix24"
    // private: false
    // pushed_at: "2009/05/26 13:07:15 -0700"
    // size: 2048
    // url: "https://github.com/phoenix24/gst-opencv"
    // watchers: 1
    // __proto__: Object

    $.getJSON("http://github.com/api/v2/json/repos/show/phoenix24?callback=?", function (result) {
            console.log(result);
            var repos = result.repositories;
            var template = Hogan.compile($("#project-template").text().trim());

            console.log(template);
            console.log("project template : " + template);
            
            _.each(repos, function(repo) {
                    if (!repo["fork"]) {
                        $(template.render(repo).trim()).appendTo(".projects");
                    }
                });
        });
})();
