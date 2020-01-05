export const DelAction=(index)=>{
    return{
        type:'DEL_TODO',
        index
        
    }
};
export const AddAction=(title)=>{
    return{
        type:'ADD_TODO',
        title
        
    }
}
export const CompleteAction=(id)=>{
    return{
        type:'COMPLETE_TODO',
        id
        
    }
}