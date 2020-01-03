export const AddReducer =(state= [],action)=>{
   switch(action.type){
       case 'ADD_USER':
           
           return [...state, {name:action.payload}];
        default:
            return state;
   }
}