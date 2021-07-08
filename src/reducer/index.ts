export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

type $state = {
    isOpen: boolean;
    loading: boolean;
  };
  
  export const initialState: $state = {
    isOpen: false,
    loading: false,
  };

 export const reducer =(
    state: $state = initialState,
    { type, payload }: any
  ): $state=> {
      console.log(type);
    switch (type) {
        
        case OPEN_DRAWER:
        return {
            ...state,
            isOpen:true,
          };
        case CLOSE_DRAWER:
        return {
            ...state,
            ...payload,
            isOpen:false,
        }
        default:
            return {
                ...state
            }
  }
}
