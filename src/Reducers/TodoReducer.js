var initialState=[{
    title:'Meeting with the boss',
    completed:true,
    id:1
   },
   {
    title:'Shopping with family',
    completed:false,
    id:2
},
{
    title:'Meeting with the boss',
    completed:false,
    id:3
}]
export const TodoReducer =(state=initialState,action)=>{
   switch(action.type){
       case 'DEL_TODO':
          return state.filter((item,index)=>action.index!==index);
           
        case 'ADD_TODO' :
            var id =state.length+1;
            var completed=false;
            return [...state,{title:action.title,completed,id}]
        case 'COMPLETE_TODO':
            for (let i=0;i<state.length;i++){
                if(state[i].id===action.id){
                    state[i].completed=!state[i].completed;
                }
            }       
            return state;
           
        default:
            return state;
   }
}