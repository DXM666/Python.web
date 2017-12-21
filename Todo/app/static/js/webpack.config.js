//使用jsx-loader转换index.js文件到bundle.js文件中
module.exports = {
    entry : {
        index : "./index.js"
    },
    output : {
        path : "E:\\Python Project\\Todo\\app\\static\\js\\build",
        filename : "bundle.js"
    },
    module : {
        loaders :[
            {test:/\.jsx?$/,
             exclude: /(node_modules|bower_components)/,
             loaders:['babel-loader?presets[]=es2015,presets[]=react']}
        ]

    }
}