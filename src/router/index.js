import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)
const routes=[
  
    {
        path: '/',
        component: Home,
        children:[
          {
            path:'/',
            name:'index',
       component: () => import('../views/Index.vue'),
        meta: {
          auth: true
        }
      },
        {
          path:'/about',
          name:'About',
     component: () => import('../views/About.vue'),
      meta: {
        auth: true
      }
      },
         {
          path:'/product',
          name:'product',
        component: () => import('../views/product.vue'),
        meta: {
        auth: true
        }
          },

          {
            path:'/party',
            name:'party',
          component: () => import('../views/produce-dxjy.vue'),
          meta: {
          auth: true
          }
            },

            {
              path:'/innovation',
              name:'innovation',
            component: () => import('../views/produce-szcq.vue'),
            meta: {
            auth: true
            }
              },



              {
                path:'/platform',
                name:'platform',
              component: () => import('../views/produce-szpt.vue'),
              meta: {
              auth: true
              }
                },



                {
                  path:'/computer',
                  name:'computer',
                component: () => import('../views/produce-computer.vue'),
                meta: {
                auth: true
                }
                  },


                  {
                    path:'/economys',
                    name:'economys',
                  component: () => import('../views/produce-finace.vue'),
                  meta: {
                  auth: true
                  }
                    },

                      {
                        path:'/news1',
                        name:'news1',
                      component: () => import('../views/news1.vue'),
                      meta: {
                      auth: true
                      }
                        },
                        {
                          path:'/news2',
                          name:'news2',
                        component: () => import('../views/news2.vue'),
                        meta: {
                        auth: true
                        }
                          },
                          {
                            path:'/new3',
                            name:'new3',
                          component: () => import('../views/new3.vue'),
                          meta: {
                          auth: true
                          }
                            },
                            {
                              path:'/new4',
                              name:'new4',
                            component: () => import('../views/new4.vue'),
                            meta: {
                            auth: true
                            }
                              },
                              {
                                path:'/new5',
                                name:'new5',
                              component: () => import('../views/new5.vue'),
                              meta: {
                              auth: true
                              }
                                },
                                {
                                  path:'/new6',
                                  name:'new6',
                                component: () => import('../views/new6.vue'),
                                meta: {
                                auth: true
                                }
                                  },
                                  {
                                    path:'/new7',
                                    name:'new7',
                                  component: () => import('../views/new7.vue'),
                                  meta: {
                                  auth: true
                                  }
                                    },
                                   
                                     
          {
            path:'/jion',
            name:'jionUs',
          component: () => import('../views/JionUs.vue'),
          meta: {
          auth: true
          }
            },
            {
              path:'/tel',
              name:'telus',
            component: () => import('../views/TelUs.vue'),
            meta: {
            auth: true
            }
              },
              {
                path:'/cooperate',
                name:'cooperate',
              component: () => import('../views/Cooperate.vue'),
              meta: {
              auth: true
              }
                },
                {
                  path:'/success',
                  name:'success',
                component: () => import('../views/success.vue'),
                meta: {
                auth: true
                }
                  },
                {
                  path:'/new',
                  name:'new',
                  component: () => import('../views/New.vue'),
                  meta: {
                    auth: true
                    }
                  },
                  {
                    path:'/newa',
                    name:'newa',
                    component: () => import('../views/news1.vue'),
                    meta: {
                      auth: true
                      }
                    },
                    {
                      path:'/newb',
                      name:'newb',
                      component: () => import('../views/news2.vue'),
                      meta: {
                        auth: true
                        }
                      },
                  
                
                   
        ]
   },
]


const router = new VueRouter({
    mode: 'hash',
    // base: process.env.BASE_URL,
    routes
  })
  
  export default router