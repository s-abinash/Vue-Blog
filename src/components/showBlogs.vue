<template>
    <div v-theme="'wide'" id="show-blogs">
        <h2 >All Blog Articles</h2>
        <input type="text" v-model="search" placeholder="Filter">
        <div class="single-blog" v-for="blog in filteredBlogs">
            <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
            <article>{{blog.body.slice(0,100)}}</article>
            </div>
    </div>
</template>

<script>
// Imports

export default { 
    data () {
        return {
            blogs:[],
            search: ''
        }
            

    },
    methods: {
        
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs=data.body.slice(0,10);
        })
    },
    computed:{
        filteredBlogs(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            });
        }
    }
}
</script>
<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;

}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>

