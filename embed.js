(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/test-pxt-sample/",
    "workerjs": "/test-pxt-sample/worker.js",
    "monacoworkerjs": "/test-pxt-sample/monacoworker.js",
    "pxtVersion": "3.14.5",
    "pxtRelId": "",
    "pxtCdnUrl": "/test-pxt-sample/",
    "commitCdnUrl": "/test-pxt-sample/",
    "blobCdnUrl": "/test-pxt-sample/",
    "cdnUrl": "/test-pxt-sample/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "sample",
    "simUrl": "/test-pxt-sample/simulator.html",
    "partsUrl": "/test-pxt-sample/siminstructions.html",
    "runUrl": "/test-pxt-sample/run.html",
    "docsUrl": "/test-pxt-sample/docs.html",
    "isStatic": true
};

    var scripts = [
        "/test-pxt-sample/highlight.js/highlight.pack.js",
        "/test-pxt-sample/bluebird.min.js",
        "/test-pxt-sample/semantic.js",
        "/test-pxt-sample/marked/marked.min.js",
        "/test-pxt-sample/target.js",
        "/test-pxt-sample/pxtembed.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/test-pxt-sample/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
