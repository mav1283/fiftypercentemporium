export const loadStateFromLocalStorage = ()=>{
    try{
        const serialisedState = localStorage.getItem('persistantState');
        if(serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (err){
        console.warn(err);
        return undefined;
    }
}

export const saveStateToLocalStorage = (state)=>{
    try{
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('persistantState',serialisedState);
    }catch(err){
        console.warn(err)
    }
}