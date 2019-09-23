'use strict'

/**
 * egg-dora-systemoptionlog default config
 * @member Config#eggDoraSystemOptionLog
 * @property {String} SOME_KEY - some description
 */


exports.doraSystemOptionLog = {
    alias: 'systemOptionLog', // 插件目录，必须为英文
    pkgName: 'egg-dora-systemoptionlog', // 插件包名
    enName: 'doraSystemOptionLog', // 插件名
    name: '系统日志', // 插件名称
    description: '系统日志', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: '1.0', // 版本号
    iconName: 'icon_logs', // 主菜单图标名称
    adminUrl: 'https://cdn.html-js.cn/cms/plugins/static/admin/systemOptionLog/js/app.js',
    adminApi: [{
        url: 'systemOptionLog/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取日志列表',
        noPower: true
    }, {
        url: 'systemOptionLog/deleteLogItem',
        method: 'get',
        controllerName: 'removes',
        details: '删除单条日志',
    }, {
        url: 'systemOptionLog/deleteAllLogItem',
        method: 'get',
        controllerName: 'removeAll',
        details: '清空日志',
    }],
    fontApi: [],
    authUser: false, // 是否需要
    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.doraSystemOptionLog = {\n
        enable: true,\n
        package: 'egg-dora-systemoptionlog',\n
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    systemOptionLogRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/systemOptionLog')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}