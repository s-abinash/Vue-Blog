<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p><b>Author: </b>{{blog.author}}</p>
        <p><b>Categories:</b></p>
        <ul>
            <li v-for="cat in blog.categories">{{cat}}</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://vue-blog-bd83c.firebaseio.com/posts/'+this.id+'.json').then(function(data){
            console.log(data);
            return data.json();
            
        }).then(function(data){
            this.blog=data;
        })
    }   
}

</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>