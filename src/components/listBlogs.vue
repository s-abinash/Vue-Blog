<template>
    <div v-theme="'wide'" id="show-blogs">
        <h2 >List Blogs</h2>
        <input type="text" v-model="search" placeholder="Filter">
        <div class="single-blog" v-for="blog in filteredBlogs">
            <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
            
            </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';
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
        this.$http.get('https://vue-blog-bd83c.firebaseio.com/posts.json').then(function(data){
            return data.json();
      
        }).then(function(data){
            var blogArray=[];
            for(let key in data)
            {
                //console.log(key+":"+data[key]);
                data[key].id=key;
                blogArray.push(data[key])
            }
            this.blogs=blogArray;
        })
    },
    computed:{
        
    }, 
    //Local Registered Filters
    filters:{
        'slice':function(value){
            return value.slice(0,100)+'...';
        }
    },
    mixins: [searchMixin]
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

