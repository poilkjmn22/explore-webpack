const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');

const ipconfig = require('./ip.config.js')

const os = require('os');
const {PUBLIC_PATH} = require('./webpack.base')
const _ = require('lodash');

//获取本机的IP地址
function getLocalIPv4(networkName) {
    var network = os.networkInterfaces();
	if(os.type()==="Darwin"){  //mac系统
		networkName = 'en0';
	}else{
		networkName = '本地连接';
	}
	return _.chain(network[networkName])
		.find(n => /((?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d))/.test(n.address))
		.get('address')
		.value()
}

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        publicPath: PUBLIC_PATH,
        compress: false,
        port: 8080,
        host: getLocalIPv4(ipconfig.localNetworkName),
        proxy: {
            '/api/v1': {
				target: `${ipconfig.remoteAddress}:${ipconfig.remotePort}`,
				changeOrigin: true,
			},
            '/class_in': {
				target: `${ipconfig.remoteAddress}:${ipconfig.remotePort}`,
				changeOrigin: true,
			}
        },
    }
})
