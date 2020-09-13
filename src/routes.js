import showBlogs from './components/showBlogs.vue';
import addBlogs from './components/addBlog.vue';
import listBlog from './components/listBlogs.vue';
import singleBlog from './components/singleBlog.vue';

export default[
    {path: '/',component: showBlogs},
    {path: '/add', component: addBlogs},
    {path: '/list', component: listBlog},
    {path: '/blog/:id',component: singleBlog}

]