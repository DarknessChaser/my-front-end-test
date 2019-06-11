var config = {
    baseConfig: {
        "baseUrl": '基础url',
        // 其他基础公用配置
    }
};

config.apiConfigs = [
    {
        apiName: "接口名称",
        apiType: "请求方式",
        apiPath: "接口url含/",
        apiParams: {
            // 接口参数
        },
        backParams:[
            {
                type: 'String',
                name: 'success',
                required: true,
                value: 'success',
                min: 4,
                max: 6
            },
            {
                type: 'Boolean',
                name:'Test',
                required: true,
                value:true
            },
            {
                type: 'Number',
                name:'numberTest',
                required: true,
                numberType:'int',
                value:true
            },

        ]
    },
]

module.exports = config
