(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/test-pxt-sample/",
    "workerjs": "/test-pxt-sample/worker.js",
    "tdworkerjs": "/test-pxt-sample/tdworker.js",
    "monacoworkerjs": "/test-pxt-sample/monacoworker.js",
    "pxtVersion": "3.8.8",
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
        "/test-pxt-sample/typescript.js",
        "/test-pxt-sample/semantic.js",
        "/test-pxt-sample/marked/marked.min.js",
        "/test-pxt-sample/lzma/lzma_worker-min.js",
        "/test-pxt-sample/blockly/blockly_compressed.js",
        "/test-pxt-sample/blockly/blocks_compressed.js",
        "/test-pxt-sample/blockly/msg/js/en.js",
        "/test-pxt-sample/pxtlib.js",
        "/test-pxt-sample/pxtcompiler.js",
        "/test-pxt-sample/pxtblocks.js",
        "/test-pxt-sample/pxteditor.js",
        "/test-pxt-sample/pxtsim.js",
        "/test-pxt-sample/target.js",
        "/test-pxt-sample/pxtrunner.js"
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
