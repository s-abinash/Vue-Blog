<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content" rows="5" required></textarea>
            <div id="checkboxes">
                <input type="checkbox" value="ninjas" v-model="blog.categories" />
                <label>Ninjas</label>
                <input type="checkbox" value="wizards" v-model="blog.categories" /> 
                <label>Wizards</label>
                <input type="checkbox" value="mario" v-model="blog.categories"/>
                <label>Mario</label>
                <input type="checkbox" value="witch" v-model="blog.categories"/>
                <label>Witch</label>
                
            </div>
            <label>Author</label>
            <select v-model="blog.author" required>
                <option v-for="auth in authors">{{auth}}</option></option>
            </select>
            <br>
            <div>
            <button v-on:click.prevent="post" type="submit">Add Blog</button></div>
            
        </form>
        <div v-if="submitted" id="scmsg">
            <h3>Blog added succesfully</h3>
        </div>
        <div id="preview" v-show="!submitted">
            <h3>Blog Preview</h3>
            <p><i>Blog title: </i>{{ blog.title }}</p>
            <p><i>Blog content: </i></p>
            <p style="white-space: pre">{{ blog.content }}</p>
            <p><i>Categories:</i></p>
            <ul><li v-for="cat in blog.categories">{{cat}}</li></ul>
            <p><i>Author:</i>{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories:[],
                author: ''
            },
            authors:['Harry','Hermoine','Ron','Neville'],
            submitted: false,
        }

    },
    methods: {
        post(){
            this.$http.post('https://jsonplaceholder.typicode.com/posts',
            {title:this.blog.title,
            body: this.blog.content,
            userid: this.blog.author}).then(
                function(data){this.submitted=true;console.log(data);}
            );
        }
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    
    flex-wrap: wrap;
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    width: 500px;
    word-wrap: break-word;

}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
select{
    display: block;
    width: 500px;
    height: 30px;
}
button{
    display: inline-block;
    background-color: #00d600;
    width: 500px;
    height: 30px;
}
#scmsg{
    background-color: #00f100;
    color: white;
    width: 500px;
    height: 30px;
    display: inline-block;
    padding: 0px 20px 40px 20px;
    text-align: center;

}
</style>
