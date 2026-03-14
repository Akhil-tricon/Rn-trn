import {create} from 'zustand';

type UserState={
    name:string,
    isLoggedIn:boolean,
    login:(newName:string)=>void,
    logout:()=>void
}

const useUserStore=create<UserState>((set)=>({
    name:'Guest',
    isLoggedIn:false,
    login:(newName:string)=>set({
        name:newName,
        isLoggedIn:true
    }),
    logout:()=>set({
        name:'Guest',
        isLoggedIn:false
    })
}))
export default useUserStore;