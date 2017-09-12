const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/layout/index/index.vue'], resolve),
    children:[
        {
            path: '/foo',
            meta: {
                title: 'foo'
            },
            component: (resolve) => require(['./views/foo/index.vue'],resolve)
        },
        {
            path: '/bar',
            meta: {
                title: 'bar'
            },
            component: (resolve) => require(['./views/bar/index.vue'],resolve)
        },
    ]
}];
export default routers;