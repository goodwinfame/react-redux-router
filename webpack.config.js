var webpack=require('webpack');
var commonsPlugin=new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports={
    entry:{index:'./app/app.js'},
    output:{
        path:'build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.jsx?$/,
                loader:'babel',
                exclude: /node_modules/,
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.(png|jpg|gif)$/,
                loader:'url-loader?limit=8192'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ],
        plugins:[
            commonsPlugin,
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,  // remove all comments
                },
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                },
            }),
        ]
    },
    resolve:{
        root:'',
        extensions:['','.js','.json','.less'],
        alias:{
            AppStore:'js/stores/AppStores.js'
        }
    }
}