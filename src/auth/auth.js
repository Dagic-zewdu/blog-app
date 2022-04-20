import httpCommon from '../httpCommon'


export const signIn=async (author,setUser)=>{
  try{
let writer=await httpCommon.get(`/authors/${author.id}`)
   if(writer.status===200){
     sessionStorage.setItem("id",writer.data.id)
     return  setUser(writer.data)     
    } 
  }
  catch(err){
 let res=await httpCommon.post('/authors',{...author,date:Date.now()})
   let {data}=res
   sessionStorage.setItem("id",data.id)
   setUser(data)

  }
}

export const getAuthor=async (ID)=>{
   let id=ID?ID:sessionStorage.getItem("id") 
   if(id){
 let res=await httpCommon.get(`/authors/${id}`)
     return res.data;
   }
   else{
     return false
   }     
}
