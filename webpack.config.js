module.exports = {  
    devtool: 'inline-source-map', 
    entry: './src/index.js',  
    output: {    
        path: __dirname+'/dist',      
        filename: 'bundle.js'  
    },  devServer: {    
        contentBase: './dist',  
    },  module: {    
        rules: [    {      
            test: /\.(js|jsx)$/,      
            exclude: /node_modules/,      
            use: ['babel-loader']    
        }    ]  
    },
};
