import Post from "../Models/Post.js";


const postservices={

addPost: async (postdata) =>{
    console.log(postdata)
    const newPost = new Post(postdata)
    try {
        const savedPost = await newPost.save()
        return savedPost
    } catch (error) {
        return error
    }

},


   getOnePost: async(postdata) => {
  
        try {
        const id = postdata
        const post = await Post.findById(id) 
        return post
        } catch (error) {
            return error
        }
  },

   listPost: async (postdata) => {
    console.log(postdata)
      const posts = await Post.find();
      return posts;
},

    updatePost : async ({ postdata, dataID}) =>{
        if (!dataID) {
          return ({message: "Data to update can not be empty!"});
        }
      
        const id = postdata;
         let  resp = await Post.findByIdAndUpdate(id, dataID, { useFindAndModify: false }) 
          
            if (!resp) {
              return ({message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`});
              
            }else return resp
      },

      
 
 deleteOnePost: async(postdata) => {
    const id = postdata;
  
   let data = await Post.findByIdAndRemove(id)
        if (!data) {
          return({
            message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
          });
        } else {
          return ({message : 'post was deleted successfully! '})
        }
  },



  deleteAllPost : async (postdata) => {
   let data = await Post.deleteMany({})
      if(data ) {
       return ({ message: `${data.deletedCount} Posts were deleted successfully!` });
      }
     else {
        return ({ message: err.message || "Some error occurred while removing all Posts." });
      }
  },

    
}
export default postservices;