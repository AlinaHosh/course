export function createUrl(str,...obj){
    let strReplaceId='';
    let strReplaceList=''
    if(Object.keys(obj).includes('id')){
        strReplaceId=str.replace('{id}',obj.id)
    }
    if(Object.keys(obj).includes('list')){
        strReplaceList=strReplaceId.replace('{list}',obj.list)
    }
    return strReplaceList
}


